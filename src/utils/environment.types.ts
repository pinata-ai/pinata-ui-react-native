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

type EnvironmentProp = { environment?: Environment };

export type PropsWithEnvironment<T = undefined> = T extends undefined
  ? EnvironmentProp
  : EnvironmentProp & T;
