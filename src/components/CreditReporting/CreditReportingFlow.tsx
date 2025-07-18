import type { PropsWithEnvironment } from '../../utils/environment.types';
import BasePinataWebView from '../BasePinataWebView';

export const CreditReportingFlow = ({
  token,
  environment = undefined,
}: PropsWithEnvironment<{ token: string }>) => {
  return (
    <BasePinataWebView
      getHtml={() => `
                <pinata-cr-flow usertoken="${token}"></pinata-cr-flow>
            `}
      environment={environment}
    />
  );
};
