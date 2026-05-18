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
  containerStyles?: ViewStyle;
}

export const BasePinataWebView = ({
  getHtml,
  style,
  onMessage,
  onError,
  onClick,
  name,
  environment = ENVIRONMENTS.PRODUCTION,
}: PropsWithEnvironment<BasePinataWebViewProps>) => {
  const environmentUrl = getEnvironmentUrl(environment);
  const baseHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta
        name="viewport"
        content="width=device-width,
                 initial-scale=1,
                 maximum-scale=1,
                 user-scalable=no"
      />
      <link  rel="preconnect" href="${environmentUrl}" />
      <script type="module" src="${environmentUrl}"></script>
      <style>
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }      
      </style>
    </head>
     <body>
       ${getHtml()}
       <script>
        document.addEventListener('DOMContentLoaded', function() {
          const target = document.querySelector(${JSON.stringify(name)});
          if (target) {
            target.addEventListener('click', function() {
              window.ReactNativeWebView.postMessage(
                JSON.stringify({ type: 'genericClick' }),
              );
            });
          }
        });
      </script>
    </html>
    `;

  const handleMessage = (event: WebViewMessageEvent) => {
    let parsed: { type?: string } = {};
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
      javaScriptEnabled
      domStorageEnabled
      allowFileAccess
      allowFileAccessFromFileURLs
      allowUniversalAccessFromFileURLs
      mixedContentMode="always"
      onMessage={handleMessage}
      onError={onError}
      containerStyle={{ flex: 1 }}
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default BasePinataWebView;
