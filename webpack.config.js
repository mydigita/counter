const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@codler/react-native-keyboard-aware-scroll-view']
        }
    }, argv);
    return config;
};

// this was added additionally to fix an error for web loading, caused by native-base loader components
// source: 
// https://forums.expo.io/t/expo-start-web-failed-to-compile-after-import-native-base/40826/8