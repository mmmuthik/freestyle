<template>
<button :class="classList" @click="handleClick">
 <slot />
</button>
</template>

<script>

export default ({
  name: 'LzButton',
  props: {
    // 按钮类型
    type: {
      type: String,
    },
    // 需要点击触发的函数
    command: {
      type: Function,
    },
    // 是否禁用
    disable: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      classList: {
        'lz-button': 'true',
        'primary': this.type === 'primary',
        'lz-disable': this.disable === true
      },
    }
  },
  methods: {
    handleClick() {
      if(typeof this.command === "function") {
        this.command();
      }
    }
  },
  created() {
  }
});
</script>
<style lang="scss" scoped>
@import '../style/button';
@import '../style/lz-css-helper';
button.lz-button {
  box-sizing: border-box;
  user-select: none;
  display: inline-block;
  border-radius: 4px;
  margin-bottom: 0;
  min-width: 74px;
  height: 32px;
  padding: .5em 1em;
  font-family: inherit;
  font-size: 12px;
  color: $text;
  cursor: pointer;
  border: $button-normal-border;
  background-color: $button-normal-background;
  margin-left: 10px;
  margin-right: 10px;
  outline: none;

  &:hover {
    color: $button-normal-hover-text;
    border: $button-normal-hover-border;
    background-color: $button-normal-hover-background;
  }

  &:active {
    color: $button-normal-hover-text;
    background-color: $button-normal-active-background;
  }

  /* 主要按钮 / primary*/
  &.primary {
    color: $button-primary-text;
    background-color: $button-primary-background;
    border: $button-primary-border;
    &:hover {
      border: $button-primary-hover-border;
      background-color: $button-primary-hover-background;
    }
    &:active {
      background-color: $button-primary-active-background;
    }
  }

  /* 禁用样式 */
  &.disable {
    opacity: .5;
    cursor:not-allowed;
    pointer-events:none;
  }
}
</style>
