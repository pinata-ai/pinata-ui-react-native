import {
  ENVIRONMENT_SUFFIX,
  ENVIRONMENTS,
  type Environment,
} from './environment.types';

const REPLACEABLE_PART = 'VERSION';
const BASE_URL = `https://static.pinata.ai/static/ui/pinata-ui.${REPLACEABLE_PART}.js`;

export const getEnvironmentUrl = (environment: Environment): string => {
  const uiVersion = '1.3.0'; // TODO: update this with 'latest', once we have figured out how we are versioning
  const sandboxUrl = `${BASE_URL}`.replace(
    REPLACEABLE_PART,
    `${uiVersion}${ENVIRONMENT_SUFFIX[ENVIRONMENTS.SANDBOX]}`
  );

  if (!environment) {
    return sandboxUrl;
  }

  if (
    environment === ENVIRONMENTS.PRODUCTION ||
    environment === ENVIRONMENTS.DEV
  ) {
    return BASE_URL.replace(
      REPLACEABLE_PART,
      `${uiVersion}${ENVIRONMENT_SUFFIX[environment]}`
    );
  }

  return sandboxUrl;
};
