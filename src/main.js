import Vue from 'vue'
import App from './App.vue'
import '../src/components/phone.css'
import '../src/components/phone1.css'
import '../src/components/style.css'
import '../src/components/tablet.css'


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
