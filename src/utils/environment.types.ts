export const ENVIRONMENTS = {
  PRODUCTION: 'production',
  SANDBOX: 'sandbox',
} as const;

export type Environment = (typeof ENVIRONMENTS)[keyof typeof ENVIRONMENTS];

type EnvironmentProp = { environment?: Environment };

export type PropsWithEnvironment<T = undefined> = T extends undefined
  ? EnvironmentProp
  : EnvironmentProp & T;
