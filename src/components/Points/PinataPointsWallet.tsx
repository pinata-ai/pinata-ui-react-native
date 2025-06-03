import BasePinataWebView from '../BasePinataWebView';

interface PinataPointsWalletProps {
  token: string;
  onClick?: () => void;
}

export const PinataPointsWallet = ({
  token,
  onClick,
}: PinataPointsWalletProps) => {
  return (
    <BasePinataWebView
      onClick={onClick}
      name="pinata-points-wallet"
      getHtml={() => `
                <pinata-points-wallet usertoken="${token}" style="font-size:clamp(0.8rem, 0.625rem + 0.875vw, 2.2rem);"></pinata-points-wallet>
            `}
    />
  );
};
