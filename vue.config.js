const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// const webpack = require('webpack')
// module.exports = {
//   chainWebpack: config => {
//     config.plugin('define').tap(definitions => {
//       definitions[0] = Object.assign(definitions[0], {
//         $: 'jquery',
//         jquery: 'jquery',
//         'window.jquery': 'jquery',
//         jQuery: 'jquery',
//         _: 'lodash'
//       })
//       return definitions
//     })
//   }
// }
