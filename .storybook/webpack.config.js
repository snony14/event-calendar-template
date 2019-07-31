const path = require("path")

module.exports = ({config}) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        plugins: ["babel-plugin-styled-components"],
        presets: [['react-app', { flow: false, typescript: true }]]
      }
    })
    config.resolve.alias = {
        storybook: path.resolve(__dirname, '../src', 'storybook'),
        theme: path.resolve(__dirname, '../src', 'theme'),
        store: path.resolve(__dirname, '../src', 'store'),
        components: path.resolve(__dirname, '../src', 'components'),
        config: path.resolve(__dirname, '../src', 'config'),
        utils: path.resolve(__dirname, '../src', 'utils'),
      }
      return config;
    };