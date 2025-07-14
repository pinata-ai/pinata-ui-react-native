import BasePinataWebView from '../BasePinataWebView';

export const CoreCreditReportingFlow = ({ token }: { token: string }) => {
  return (
    <BasePinataWebView
      getHtml={() => `
                <core-credit-reporting usertoken="${token}"></core-credit-reporting>
            `}
    />
  );
};
