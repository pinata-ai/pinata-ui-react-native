import type { ViewStyle } from 'react-native';

export const ENVIRONMENTS = {
  PRODUCTION: 'production',
  SANDBOX: 'sandbox',
  DEV: 'dev',
  UAT: 'uat',
} as const;

export const EMBEDED_COMPONENTS_ENVIRONMENTS = {
  PRODUCTION: '',
  SANDBOX: 'sandbox',
  DEV: 'dev',
  UAT: 'uat',
} as const;

export const EMBEDED_COMPONENTS_ENVIRONMENTS_MAP = {
  [ENVIRONMENTS.PRODUCTION]: EMBEDED_COMPONENTS_ENVIRONMENTS.PRODUCTION,
  [ENVIRONMENTS.SANDBOX]: EMBEDED_COMPONENTS_ENVIRONMENTS.SANDBOX,
  [ENVIRONMENTS.DEV]: EMBEDED_COMPONENTS_ENVIRONMENTS.DEV,
  [ENVIRONMENTS.UAT]: EMBEDED_COMPONENTS_ENVIRONMENTS.UAT,
} as const;

export const ENVIRONMENT_SUFFIX = {
  [ENVIRONMENTS.PRODUCTION]: '',
  [ENVIRONMENTS.SANDBOX]: '-sandbox',
  [ENVIRONMENTS.DEV]: '-alpha-dev',
  [ENVIRONMENTS.UAT]: '-uat',
} as const;

export type Environment = (typeof ENVIRONMENTS)[keyof typeof ENVIRONMENTS];

export type PropsWithEnvironment<T = undefined> = T extends undefined
  ? { environment?: Environment; style?: ViewStyle; containerStyle?: ViewStyle }
  : {
      environment?: Environment;
      style?: ViewStyle;
      containerStyle?: ViewStyle;
    } & T;
