import { Query } from './gqlTypes/graphql.ts';

export type IMakeEnum = <T extends ReadonlyArray<string>>(
  ...args: T
) => { [key in T[number]]: key };

export type IMakeUrlFor = <T extends object>(
  rawRoutes: T
) => (name: keyof T, routeParams?, query?) => string;

export type IGqlResponse<T extends keyof Query> = {
  [key in T]: Query[T];
};
