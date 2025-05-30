import BasePinataWebView from '../BasePinataWebView';

export const CreditReportingFlow = ({ token }: { token: string }) => {
  return (
    <BasePinataWebView
      getHtml={() => `
                <pinata-cr-flow usertoken="${token}"></pinata-cr-flow>
            `}
    />
  );
};
