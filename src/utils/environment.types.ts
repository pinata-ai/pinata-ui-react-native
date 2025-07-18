export const ENVIRONMENTS = {
  PRODUCTION: 'production',
  SANDBOX: 'sandbox',
  DEV: 'dev',
} as const;

export const ENVIRONMENT_SUFFIX = {
  [ENVIRONMENTS.PRODUCTION]: '',
  [ENVIRONMENTS.SANDBOX]: '-sandbox',
  [ENVIRONMENTS.DEV]: '-alpha-dev',
} as const;

export type Environment = (typeof ENVIRONMENTS)[keyof typeof ENVIRONMENTS];

export type PropsWithEnvironment<T = undefined> = T extends undefined
  ? { environment?: Environment }
  : { environment?: Environment } & T;
