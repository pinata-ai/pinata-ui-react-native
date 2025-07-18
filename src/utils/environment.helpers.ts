import { ENVIRONMENTS, type Environment } from './environment.types';

const REPLACEABLE_PART = 'VERSION';
const BASE_URL = `https://static.pinata.ai/static/ui/pinata-ui.${REPLACEABLE_PART}.js`;

export const getEnvironmentUrl = (environment: Environment): string => {
  const uiVersion = '1.3.0'; // TODO: update this with 'latest', once we have figured out how we are versioning
  const sandboxUrl = `${BASE_URL}`.replace(
    REPLACEABLE_PART,
    `${uiVersion}-sandbox`
  );

  if (!environment) {
    return sandboxUrl;
  }

  if (environment === ENVIRONMENTS.PRODUCTION) {
    return BASE_URL.replace(REPLACEABLE_PART, uiVersion);
  }

  return sandboxUrl;
};
