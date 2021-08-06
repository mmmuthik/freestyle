<template>
<section class="lz-message" :style="messageStyle" :class="{fadeOut: timeFlag}" v-if="messageFlag">
  <span class="lz-message-icon"></span>
  <p class="lz-message-text" v-text="content"></p>
  <span class="lz-message-close"></span>
</section>
</template>

<script>
export default ({
  name: 'LzMessage',
  props: {
    time: {
      type: Number,
      default: 1000
    },
    content: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'NORMAL'
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      messageFlag: true,
      timer: null,
      timeFlag: false
    }
  },
  computed: {
    messageStyle() {
      return {
        top: 100 + this.index * 50 + 'px'
      }
    }
  },
  methods: {

    // 消息
    messageFadeOut() {
      // 准备添加样式
      this.timeFlag = true
      // fadeOut 动画之后直接销毁
      setTimeout(() => {
        this.messageFlag = false;
        window.clearTimeout(this.timer);
        this.remove();
      }, 500)
    }

  },
  created() {
    // 消息停留时间处理
    this.timer = setTimeout(() => {
      this.messageFadeOut()
    }, this.time)
  },
  beforeDestroy() {
    window.clearTimeout(this.timer);
    this.timer = null;
    console.log('before destroy')
  }
})
</script>

<style lang="scss" scoped>
.lz-message {
  width: 580px;
  position: fixed;
  left: 50%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 40px;
  box-sizing: border-box;
  background-color: #F6FFED;
  border: 1px solid #B7EB8F;
  font-size: 14px;
  color: #52C41A;
  user-select: none;
  transform: translate(-50%, 0);
  animation: MessageFadeIn 300ms forwards;
  .lz-message-text {
    flex: 1;
  }
  .lz-message-icon,
  .lz-message-close {
    height: 15px;
    width: 15px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .lz-message-icon {
    margin-right: 7px;
    background-image: url("../assets/message-icon-sucess.svg");
  }
  .lz-message-close {
    cursor: pointer;
    background-image: url("../assets/message-icon-close.svg");
  }
}
.fadeOut {
  animation: MessageFadeOut 500ms forwards;
}
@keyframes MessageFadeIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -10px);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
@keyframes MessageFadeOut {
  0% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -100px);
  }
}
</style>
