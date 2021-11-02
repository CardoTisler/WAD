// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var $ = require('jquery')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// new Vue({
//   el: '#posts',
//   data () {
//     return {
//       data: null
//     }
//   },
//   async mounted () {
//     return $.ajax({
//       type: 'GET',
//       crossDomain: true,
//       async: true,
//       url: 'https://api.npoint.io/b5c08d0e15c1c01572f1',
//       success: function (response) {
//         return response
//       },
//       error: function (xhr) {
//         console.error('getPostsJson error: ' + xhr.responseText)
//         return null
//       }
//     })
//   }
// })
