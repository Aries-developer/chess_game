import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import axios from 'axios'
import store from './store/index'
Vue.prototype.axios= axios
//vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
//验证插件
import VeeValidate from 'vee-validate';
//全局组件
import Navbar from './components/mode1/Navbar.vue'
import Tabbar from './components/mode1/Tabbar.vue'
Vue.component('Navbar',Navbar)
Vue.component('Tabbar',Tabbar)


Vue.use(VeeValidate);
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
