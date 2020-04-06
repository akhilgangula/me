import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VueCarousel from 'vue-carousel';
import '@/assets/css/bulma.css'
Vue.config.productionTip = false
Vue.use(VueCarousel);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
