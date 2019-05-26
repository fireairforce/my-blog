const path = require('path')

export default {
  disableCSSModules: true,
  ignoreMomentLocale: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: '/components/plugin/Loading',
        level: 1
      },
      title: "zoomdong's blog",
      dll: false,
      routes: {
        exclude: [/model\.(j|t)sx?$/, /service\.(j|t)sx?$/, /models\//, /components\//, /services\//, /config\.(j|t)sx?$/]
      },
    }],
  ],
  alias: {
    utils: path.resolve(__dirname, '/src/utils'),
    components: path.resolve(__dirname, '/src/components'),
    layouts:path.resolve(__dirname,'/src/layouts')
  }
}
