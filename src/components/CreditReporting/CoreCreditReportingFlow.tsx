import type { PropsWithEnvironment } from '../../utils/environment.types';
import BasePinataWebView from '../BasePinataWebView';

export const CoreCreditReportingFlow = ({
  token,
  environment = undefined,
  style,
}: PropsWithEnvironment<{ token: string }>) => {
  return (
    <BasePinataWebView
      getHtml={() => `
                <core-credit-reporting usertoken="${token}"></core-credit-reporting>
            `}
      environment={environment}
      style={style}
    />
  );
};
