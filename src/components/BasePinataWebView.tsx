import { StyleSheet, type ViewStyle } from 'react-native';
import WebView, { type WebViewMessageEvent } from 'react-native-webview';
import { type WebViewErrorEvent } from 'react-native-webview/lib/WebViewTypes';

interface BasePinataWebViewProps {
  getHtml: () => string;
  style?: ViewStyle;
  onMessage?: (event: WebViewMessageEvent) => void;
  onError?: (event: WebViewErrorEvent) => void;
}

export const BasePinataWebView = ({
  getHtml,
  style,
  onMessage,
  onError,
}: BasePinataWebViewProps) => {
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
      <link  rel="preconnect" href="https://static.pinata.ai/static/ui/pinata-ui.1.3.0-sandbox.js" />
      <script type="module" src="https://static.pinata.ai/static/ui/pinata-ui.1.3.0-sandbox.js"></script>
    </head>
     <body>
       ${getHtml()}
    </html>
    `;
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
      onMessage={onMessage}
      onError={onError}
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default BasePinataWebView;
