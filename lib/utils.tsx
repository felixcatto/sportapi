import { format, formatDuration, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import request, { Variables } from 'graphql-request';
import { isEmpty } from 'lodash-es';
import { compile } from 'path-to-regexp';
import useSWR from 'swr';
import { IMakeEnum, IMakeUrlFor } from './types.js';

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
};

export const getUrl = makeUrlFor(routes);

export const sportUrl = 'https://beta.sosportom.ru/graphql';

export const fmtISO = (isoDate, formatStr) => format(parseISO(isoDate), formatStr, { locale: ru });
export const fmt = (date, formatStr) => format(date, formatStr, { locale: ru });
export const fmtDuration = (duration, format?) =>
  formatDuration(duration, { locale: ru, zero: true, format });

export const gqlRequest = <TVariables extends Variables = any>(query, variables?: TVariables) =>
  request(sportUrl, query, variables);

const fetcher: any = ({ query, variables }) => request(sportUrl, query, variables);

export const useGql = <TResponse = any, TVariables = any>(query, variables?: TVariables) =>
  useSWR<TResponse>({ query, variables }, fetcher);
