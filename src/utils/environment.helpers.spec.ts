import { getEnvironmentUrl } from './environment.helpers';
import {
  ENVIRONMENTS,
  ENVIRONMENT_SUFFIX,
  type Environment,
} from './environment.types';

describe('getEnvironmentUrl', () => {
  const uiVersion = '1.3.0';
  const BASE_URL = `https://static.pinata.ai/static/ui/pinata-ui.${uiVersion}`;
  const extension = '.js';

  it('should return the sandbox URL when environment is undefined', () => {
    const expectedUrl = `${BASE_URL}${ENVIRONMENT_SUFFIX[ENVIRONMENTS.SANDBOX]}${extension}`;
    expect(getEnvironmentUrl(undefined as unknown as Environment)).toBe(
      expectedUrl
    );
  });

  it('should return the production URL when environment is PRODUCTION', () => {
    const expectedUrl = `${BASE_URL}${ENVIRONMENT_SUFFIX[ENVIRONMENTS.PRODUCTION]}${extension}`;
    expect(getEnvironmentUrl(ENVIRONMENTS.PRODUCTION)).toBe(expectedUrl);
  });

  it('should return the dev URL when environment is DEV', () => {
    const expectedUrl = `${BASE_URL}${ENVIRONMENT_SUFFIX[ENVIRONMENTS.DEV]}${extension}`;
    expect(getEnvironmentUrl(ENVIRONMENTS.DEV)).toBe(expectedUrl);
  });

  it('should return the sandbox URL when environment is unknown', () => {
    const expectedUrl = `${BASE_URL}${ENVIRONMENT_SUFFIX[ENVIRONMENTS.SANDBOX]}${extension}`;
    expect(getEnvironmentUrl('UNKNOWN_ENVIRONMENT' as any)).toBe(expectedUrl);
  });
});
