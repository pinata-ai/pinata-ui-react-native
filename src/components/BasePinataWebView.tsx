import { StyleSheet, type ViewStyle } from 'react-native';
import WebView, { type WebViewMessageEvent } from 'react-native-webview';
import { type WebViewErrorEvent } from 'react-native-webview/lib/WebViewTypes';
import { getEnvironmentUrl } from '../utils/environment.helpers';
import {
  ENVIRONMENTS,
  type PropsWithEnvironment,
} from '../utils/environment.types';

interface BasePinataWebViewProps {
  getHtml: () => string;
  style?: ViewStyle;
  onMessage?: (event: WebViewMessageEvent) => void;
  onError?: (event: WebViewErrorEvent) => void;
  onClick?: () => void;
  name?: string;
  containerStyle?: ViewStyle;
}

export const BasePinataWebView = ({
  getHtml,
  style,
  onMessage,
  onError,
  onClick,
  name,
  environment = ENVIRONMENTS.PRODUCTION,
  containerStyle,
}: PropsWithEnvironment<BasePinataWebViewProps>) => {
  const environmentUrl = getEnvironmentUrl(environment);
  const baseHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link  rel="preconnect" href="${environmentUrl}" />
        <script type="module" src="${environmentUrl}"></script>
        <style>
          body, html, #webviewRoot {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
          }
        </style>
    </head>
     <body>
       <div id="webviewRoot">
        ${getHtml()}
       </div>
       <script>
        (function() {
          function reportHeight() {
            var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'contentHeight', height: h }));
          }

          document.addEventListener('DOMContentLoaded', function() {
            var target = document.querySelector(${JSON.stringify(name)});
            if (target) {
              target.addEventListener('click', function() {
                window.ReactNativeWebView.postMessage(
                  JSON.stringify({ type: 'genericClick' }),
                );
              });
            }

            reportHeight();
          });

          var ro = new ResizeObserver(reportHeight);
          ro.observe(document.body);

          setTimeout(reportHeight, 300);
          setTimeout(reportHeight, 1000);
        })();
      </script>
    </html>
    `;

  const handleMessage = (event: WebViewMessageEvent) => {
    let parsed: { type?: string; height?: number } = {};
    try {
      parsed = JSON.parse(event.nativeEvent.data);
    } catch {}

    if (parsed.type === 'genericClick') {
      onClick?.();
    }

    onMessage?.(event);
  };

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: baseHtml }}
      style={[styles.webview, style]}
      containerStyle={[styles.container, containerStyle]}
      javaScriptEnabled
      domStorageEnabled
      allowFileAccess
      allowFileAccessFromFileURLs
      allowUniversalAccessFromFileURLs
      mixedContentMode="always"
      scrollEnabled={false}
      onMessage={handleMessage}
      onError={onError}
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default BasePinataWebView;
