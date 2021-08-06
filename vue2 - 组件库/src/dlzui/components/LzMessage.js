import Vue from 'vue';
import LzMessage from "./LzMessage.vue";

const messageQueue = [];
let timer = null;
let resetTime = 0;

const oMessageWrapper = window.document.createElement('div')
oMessageWrapper.classList.add('lz-message-set')
document.body.appendChild(oMessageWrapper)

function createMessage({time = 1000, content = '', type='NORMAL'}) {

  const index = messageQueue.length;

  // 创建 LzMessage 实例并挂载
  const vm = new Vue({
    render(h) {
      return h(LzMessage, {
        props: {
          time, type, content, index
        }
      })
    }
  }).$mount();

  // 将 LzMessage 消息实例放入队列
  messageQueue.push(vm)

  // 清空消息队列
  const timeDelay = time + 500
  if(Date.now() + timeDelay > resetTime) {
    window.clearTimeout(timer);
    resetTime = Date.now() + timeDelay
    timer = window.setTimeout(() => {
      messageQueue.length = 0;
      resetTime = 0;
      // 这里减300是考虑到交互体验
    }, timeDelay - 300);
  }

  oMessageWrapper.appendChild(vm.$el)

  const comp = vm.$children[0];

  comp.remove = () => {
    oMessageWrapper.removeChild(vm.$el);
    vm.$destroy();
  }

  return comp
}

function register(){
  Vue.prototype.$message = createMessage
}

export default {
  createMessage,
  register
}

