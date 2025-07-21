import {
  ENVIRONMENT_SUFFIX,
  ENVIRONMENTS,
  type Environment,
} from './environment.types';

const REPLACEABLE_PART = 'VERSION';
const BASE_URL = `https://static.pinata.ai/static/ui/pinata-ui.${REPLACEABLE_PART}.js`;
const UI_VERSION = '1.3.0';
const DEFAULT_ENVIRONMENT = ENVIRONMENTS.SANDBOX;

export const getEnvironmentUrl = (environment?: Environment): string => {
  const env = environment ?? DEFAULT_ENVIRONMENT;
  const suffix =
    ENVIRONMENT_SUFFIX[env] ?? ENVIRONMENT_SUFFIX[DEFAULT_ENVIRONMENT];

  return BASE_URL.replace(REPLACEABLE_PART, `${UI_VERSION}${suffix}`);
};
