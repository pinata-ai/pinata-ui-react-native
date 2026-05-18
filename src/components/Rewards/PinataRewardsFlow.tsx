import {
  EMBEDED_COMPONENTS_ENVIRONMENTS_MAP,
  ENVIRONMENTS,
  type PropsWithEnvironment,
} from '../../utils/environment.types';
import BasePinataWebView from '../BasePinataWebView';

const injectedJavaScript = `(function() {
  function reportHeight2() {
    console.log('reportHeight2 height');
    const rootElement = document.getElementById('root');
    console.log({
      rootElement,
      clientHeight: rootElement ? rootElement.clientHeight : null,
      scrollHeight: rootElement ? rootElement.scrollHeight : null,
      offsetHeight: rootElement ? rootElement.offsetHeight : null,
      windowInnerHeight: window.innerHeight,
      documentElementClientHeight: document.documentElement.clientHeight,
      documentElementScrollHeight: document.documentElement.scrollHeight,
      documentElementOffsetHeight: document.documentElement.offsetHeight,
      bodyClientHeight: document.body.clientHeight,
      bodyScrollHeight: document.body.scrollHeight,
      bodyOffsetHeight: document.body.offsetHeight,
    });
  }
    
  // Report height on load
  window.addEventListener('load', reportHeight2);
  // Report height on resize
  window.addEventListener('resize', reportHeight2);
})();`;

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
      injectedJavaScript={injectedJavaScript}
    />
  );
};
