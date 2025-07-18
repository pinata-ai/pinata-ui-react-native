import type { PropsWithEnvironment } from '../../utils/environment.types';
import BasePinataWebView from '../BasePinataWebView';

export const PinataRewardsFlow = ({
  token,
  environment,
}: PropsWithEnvironment<{ token: string }>) => {
  return (
    <BasePinataWebView
      getHtml={() =>
        `<pinata-reward-flow usertoken="${token}" style="font-size:clamp(0.8rem, 0.625rem + 0.875vw, 2.2rem);"/>`
      }
      environment={environment}
    />
  );
};
