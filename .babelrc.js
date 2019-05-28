const { NODE_ENV = 'development' } = process.env

const envServer = {
  plugins: [],
  presets: [
    [
      '@babel/preset-env',
      {
        'targets': {
          'node': '8.11.3'
        },
        'useBuiltIns': false,
      }
    ]
  ]
}

const envBrowser = {
  plugins: [],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'safari >= 7',
            'IE 8'
          ]
        },
        useBuiltIns: 'usage',
        corejs: 3,
      }
    ]
  ]
}

module.exports = function (api) {

  api.cache.using(() => NODE_ENV)

  const isWebpack = api.caller(caller => !!(caller && caller.name === 'babel-loader'))

  const envConfig = isWebpack
    ? envBrowser
    : envServer

  return {
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      ...envConfig.plugins,
    ],

    presets: [
      '@babel/preset-react',
      ...envConfig.presets,
    ],
  }
}
