import { useState } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
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
  containerStyles,
  environment = ENVIRONMENTS.PRODUCTION,
}: PropsWithEnvironment<BasePinataWebViewProps>) => {
  const [webViewHeight, setWebViewHeight] = useState(0);
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
        }
      </style>
    </head>
     <body>
       <div style="width: 100%; display: flex; flex-direction: column;">
        ${getHtml()}
       </div>
       <script>
        (function() {
          function reportHeight() {
            var h = document.documentElement.scrollHeight;
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

    if (parsed.type === 'contentHeight' && typeof parsed.height === 'number') {
      setWebViewHeight(parsed.height);
    }

    onMessage?.(event);
  };

  return (
    <View style={[{ height: webViewHeight }, containerStyles]}>
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
        scrollEnabled={false}
        onMessage={handleMessage}
        onError={onError}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default BasePinataWebView;
