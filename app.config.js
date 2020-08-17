import {
  name,
  fullName,
  version,
  appScheme,
  buildIdentifier,
  buildNumber,
} from './package.json';

export default {
  name: fullName,
  slug: name,
  version,
  icon: './assets/icon/web_hi_res_512.png',
  platforms: ['ios', 'android'],
  orientation: 'portrait',
  scheme: appScheme,
  ios: {
    supportsTablet: true,
    bundleIdentifier: buildIdentifier,
    buildNumber: version,
  },
  android: {
    package: buildIdentifier,
    versionCode: buildNumber,
  },
};
