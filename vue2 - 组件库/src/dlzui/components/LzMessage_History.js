import Vue from 'vue'
import LzMessage from './LzMessage'
// import App from "../../App";

const messageQueue = [];

const oMessageWrapper = window.document.createElement('div')
oMessageWrapper.classList.add('lz-message-wrapper')
document.body.appendChild(oMessageWrapper)

const msgHandler = (props) => {
  messageQueue.push(new Vue({
    render: function (h) { return h(LzMessage, { props }) },
  }).$mount());

  // 插入到页面
  oMessageWrapper.appendChild(messageQueue[messageQueue.length].$el)
}
//注册
function register(){
  Vue.prototype.$LzMessage = msgHandler
}

export default {
  msgHandler,
  register
}
