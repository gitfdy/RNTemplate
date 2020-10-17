module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
          '@utils': './src/utils',
          '@navigator': './src/navigator',
        },
      },
    ],
  ],
};
