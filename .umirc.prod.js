const QiuniuPlugin = require('qiniu-webpack-plugin');

export default {
   hash:true,
   targets: {ie:10},
   browserslist: ['> 1%', 'last 2 versions', 'iOS >= 8'],
   publicPath :'http://wdlj.zoomdong.xin/blog/',
   chainWebpack: (config,{ webpack }) => {
       config.optimization.delete('splitChunks')
       config.plugin('qiniu').use(QiuniuPlugin,[require('./push.config').qiniu])
   }
}