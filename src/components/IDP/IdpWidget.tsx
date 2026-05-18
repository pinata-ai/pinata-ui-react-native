import {
  EMBEDED_COMPONENTS_ENVIRONMENTS_MAP,
  ENVIRONMENTS,
  type PropsWithEnvironment,
} from '../../utils/environment.types';
import BasePinataWebView from '../BasePinataWebView';

interface PinataIdpWidgetProps {
  token: string;
}

export const PinataIdpWidget = ({
  token,
  environment = undefined,
  style,
}: PropsWithEnvironment<PinataIdpWidgetProps>) => {
  return (
    <BasePinataWebView
      name="pinata-idp-widget"
      getHtml={() => `<div style="width: 100%; min-height: 500px; display: flex; flex-direction: column;">
          <pinata-idp-widget usertoken="${token}" environment="${EMBEDED_COMPONENTS_ENVIRONMENTS_MAP[environment ?? ENVIRONMENTS.SANDBOX]}"></pinata-idp-widget>
        </div>`}
      environment={environment}
      style={style}
    />
  );
};
