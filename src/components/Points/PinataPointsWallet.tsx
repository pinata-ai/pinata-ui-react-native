import type { PropsWithEnvironment } from '../../utils/environment.types';
import BasePinataWebView from '../BasePinataWebView';

interface PinataPointsWalletProps {
  token: string;
  onClick?: () => void;
  text?: string;
}

export const PinataPointsWallet = ({
  token,
  onClick,
  text,
  environment = undefined,
}: PropsWithEnvironment<PinataPointsWalletProps>) => {
  return (
    <BasePinataWebView
      onClick={onClick}
      name="pinata-points-wallet"
      getHtml={() => `
                <pinata-points-wallet usertoken="${token}" customCTAText='${text || 'See rewards'}'></pinata-points-wallet>
            `}
      environment={environment}
    />
  );
};
