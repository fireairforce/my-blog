const path = require('path')

const route = (config) => path.resolve(__dirname,config)

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
    utils: route('/src/utils'),
    components: route('/src/components'),
    layouts: route('/src/layouts'),
    style: route('/src/style')
  }
}
