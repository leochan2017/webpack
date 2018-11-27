{{#if_eq build "standalone"}}
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}

{{#vueresource}}
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = '/'
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Pragma', 'no-cache')
  request.headers.set('Cache-Control', 'no-cache')
  // 自动给接口请求加loading示例
  // let loading = ''
  // let tLoading = setTimeout(_ => {
  //   loading = ElementUI.Loading.service({ fullscreen: true })
  // }, 800)
  next(response => {
    // 自动给接口请求加loading示例
    // clearTimeout(tLoading)
    // if (typeof loading === 'object') loading.close()
    return response
  })
})
{{/vueresource}}

{{#elementui}}
import ElementUI from 'element-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'element-ui/lib/theme-chalk/index.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ElementUI){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/elementui}}

{{#vuex}}  // vuex为true的时候就会写入这些
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from  './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
