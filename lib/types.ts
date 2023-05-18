import { Query } from './gqlTypes/graphql.ts';

export type IMakeUrlFor = <T extends object>(
  rawRoutes: T
) => (name: keyof T, routeParams?, query?) => string;

export type IGqlResponse<T extends keyof Query> = {
  [key in T]: Query[T];
};
