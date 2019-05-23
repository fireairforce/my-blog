const path = require('path');
export default {
  treeShaking: true,
  disableCSSModules: true,
  ignoreMomentLocale: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent :'/components/plugins/Loading',
        level:1
      },
      title: "zoomdong's blog",
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  alias:{
    utils: path.resolve(__dirname,'/src/utils'),
    components: path.resolve(__dirname,'/src/components'),
  }
}
