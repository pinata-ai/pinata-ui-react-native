import { getEnvironmentUrl } from './environment.helpers';
import { ENVIRONMENTS, type Environment } from './environment.types';

describe('getEnvironmentUrl', () => {
  const BASE_URL = 'https://static.pinata.ai/static/ui/pinata-ui.';
  const LATEST_VERSION = 'latest';
  const SANDBOX_VERSION = `${LATEST_VERSION}-sandbox`;

  describe('should return the sandbox URL when environment is falsy', () => {
    const falsyValues = [undefined, null, '', 0, false];
    falsyValues.forEach((value) => {
      it(`value is ${value}`, () => {
        const result = getEnvironmentUrl(value as Environment);
        expect(result).toBe(`${BASE_URL}${SANDBOX_VERSION}.js`);
      });
    });
  });

  it('should return the production URL when environment is PRODUCTION', () => {
    const result = getEnvironmentUrl(ENVIRONMENTS.PRODUCTION);
    expect(result).toBe(`${BASE_URL}${LATEST_VERSION}.js`);
  });

  it('should return the sandbox URL when environment is not PRODUCTION', () => {
    const result = getEnvironmentUrl(ENVIRONMENTS.SANDBOX);
    expect(result).toBe(`${BASE_URL}${SANDBOX_VERSION}.js`);
  });
});
