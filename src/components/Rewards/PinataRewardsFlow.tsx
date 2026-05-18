import {
  EMBEDED_COMPONENTS_ENVIRONMENTS_MAP,
  ENVIRONMENTS,
  type PropsWithEnvironment,
} from '../../utils/environment.types';
import BasePinataWebView from '../BasePinataWebView';

export const PinataRewardsFlow = ({
  token,
  environment = undefined,
  style,
}: PropsWithEnvironment<{ token: string }>) => {
  return (
    <BasePinataWebView
      getHtml={() =>
        `<div style="width: 100%; height: 100%; display: flex; flex-direction: column;">
          <pinata-reward-flow usertoken="${token}" environment="${EMBEDED_COMPONENTS_ENVIRONMENTS_MAP[environment ?? ENVIRONMENTS.SANDBOX]}"/>
        </div>`
      }
      environment={environment}
      style={style}
    />
  );
};
