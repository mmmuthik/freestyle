import Vue from 'vue'
import App from './App.vue'
// 导入DlzUI组件库
import DlzUI from './dlzui'
import LzMessage from "@/dlzui/components/LzMessage.js"


Vue.config.productionTip = false

// 使用组件库
Vue.use(DlzUI)

Vue.use(LzMessage.register)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
