import { format, parseISO } from 'date-fns';
import { isEmpty, isFunction } from 'lodash-es';
import { compile } from 'path-to-regexp';
import React from 'react';
import Context from './context.js';
import {
    IContext,
    IMakeEnum,
    IMakeUrlFor,
    IUseMergeState
} from './types.js';

export { Context };

export const makeEnum: IMakeEnum = (...args) =>
  args.reduce((acc, key) => ({ ...acc, [key]: key }), {} as any);


export const qs = {
  stringify: (obj: object = {}) => {
    if (isEmpty(obj)) return '';
    return Object.keys(obj)
      .sort()
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
      .join('&');
  },
};

export const makeUrlFor: IMakeUrlFor = rawRoutes => {
  const routes = Object.keys(rawRoutes).reduce(
    (acc, name) => ({ ...acc, [name]: compile(rawRoutes[name]) }),
    {} as any
  );

  return (name, routeParams = {}, query = {}) => {
    const toPath = routes[name];
    return isEmpty(query) ? toPath(routeParams) : `${toPath(routeParams)}?${qs.stringify(query)}`;
  };
};

export const routes = {
  home: '/',
  events: '/events',
};

export const sportUrl = 'https://beta.sosportom.ru/graphql';
export const apiRoutes = {
  searchRepos: '/search/repositories',
  repo: '/repos/:owner/:repo',
  repoLanguages: '/repos/:owner/:repo/languages',
};

export const getUrl = makeUrlFor(routes);

const getApiUrlBase = makeUrlFor(apiRoutes);

export const getApiUrl = (name: keyof typeof apiRoutes, routeParams?, query?) =>
  `${sportUrl}${getApiUrlBase(name, routeParams, query)}`;

export const useContext = () => React.useContext<IContext>(Context);

export const useMergeState: IUseMergeState = initialState => {
  const [state, setState] = React.useState(initialState);

  const setImmerState = React.useCallback(fnOrObject => {
    if (isFunction(fnOrObject)) {
      const fn = fnOrObject;
      setState(curState => {
        const newState = fn(curState);
        return { ...curState, ...newState };
      });
    } else {
      const newState = fnOrObject;
      setState(curState => ({ ...curState, ...newState }));
    }
  }, []);

  return [state, setImmerState];
};

export const fmtISO = (isoDate, formatStr) => format(parseISO(isoDate), formatStr);

export const formatNumber = (num, digits) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

  const item = lookup
    .slice()
    .reverse()
    .find(item => num >= item.value);

  return item ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol : '0';
};

export const roundNumber = (num, digits) => Number(num.toFixed(digits));
