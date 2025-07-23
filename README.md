
## Piñata UI React Native SDK

This project is a React Native SDK designed to simplify the integration of Piñata UI components into mobile applications. It provides a lightweight wrapper around Piñata's embeddable web components (built with Lit), rendering them via WebView for compatibility with React Native.


## Quick links

[📘 Storybook (Component Showcase)](https://www.pinata.ai/ui-api/storybook/)

[📚 API Reference (Redoc)](https://www.pinata.ai/partners/api/v1/redoc/)

[🧪 Example App](https://github.com/pinata-ai/pinata-ui-example-app)


## Installation
First, install the SDK and its WebView dependency:

```bash
  npm install pinata-ui-react-native react-native-webview@13.13.5
```
or with yarn:

```bash 
 yarn add pinata-ui-react-native react-native-webview@13.13.5
```

> **Note:** This package requires react-native-webview version 13.13.5 to render the Piñata UI components correctly.

## Usage/Examples

```javascript
import { PinataPointsFlow } from 'pinata-ui-react-native';

<PinataPointsFlow token="YOUR_USER_TOKEN" />
```


### Environment Configuration Example

You can pass an `environment` property to the components to specify which Piñata environment to use. The possible values for the `environment` variable are:

- **`production`**: Use the production environment for live applications.
- **`sandbox`**: Use the staging environment for testing purposes.
- **`dev`**: Use the development environment for development.

#### Example Usage:

```javascript
import { PinataRewardsFlow } from 'pinata-ui-react-native';

// Using the production environment by default
<PinataRewardsFlow token="YOUR_USER_TOKEN" />

// Using the production environment
<PinataRewardsFlow token="YOUR_USER_TOKEN" environment="production" />

// Using the staging environment
<PinataRewardsFlow token="YOUR_USER_TOKEN" environment="sandbox" />

// Using the development environment
<PinataRewardsFlow token="YOUR_USER_TOKEN" environment="dev" />
```

Make sure to set the `environment` property based on your application's deployment stage to ensure proper functionality.
