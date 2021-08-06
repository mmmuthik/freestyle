<template>
<section :class="itemClass">
  <span v-if="label" :style="labelStyle" class="label" v-text="label"></span>
  <section class="lz-input-cover">
    <input :class="inputClass" type="text" :value="inputValue" @input="handleInput" v-bind="$attrs">
    <span v-if="suffix" class="lz-suffix" v-text="suffix"></span>
  </section>
</section>
</template>

<script>
export default {
  name: "LzInput",
  inheritAttrs: false,
  props: {
    // 输入框的值
    value: {
      type: String,
      default: ''
    },
    // 表单名称
    label: {
      type: String,
      default: ''
    },
    // 输入框后缀
    suffix: {
      type: String,
      default: ''
    },
    // 输入框后缀
    type: {
      type: String,
      default: 'text',
      validator(type) {
        return ['text', 'number'].includes(type)
      }
    },
    error: {
      type: Boolean,
      default: false
    },
    // label 宽度
    labelWidth: {
      type: String,
      default: ''
    },
    // 宽度
    width: {
      type: String,
      default: ''
    },
    // 禁用
    disable: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    }
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  computed: {
    // lz-input-cover 的 class 列表
    itemClass() {
      return {
        'lz-input-item': true,
        'suffix': !!this.suffix,
        'error': this.error
      }
    },
    // lz-input 的 class 列表
    inputClass() {
      return {
        'lz-input': true,
        'lz-disable': this.disable
      }
    },
    // label 的 style 列表
    labelStyle() {
      return {
        'width': this.labelWidth ? this.labelWidth : 'auto'
      }
    }
  },
  methods: {
    handleInput(ev) {
      if(this.type === 'number') {
        const val = ev.target.value.replace(/[^\d]/g,'');
        // 这里要修改 ev.target.value 的值
        this.inputValue = ev.target.value = val;
        this.$emit('input', this.inputValue);
      } else if(this.type === 'text') {
        this.inputValue = ev.target.value;
        this.$emit('input', this.inputValue);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../style/input';
@import '../style/lz-css-helper';
.lz-input-item {
  box-sizing: border-box;
  font-size: 14px;
  margin-top: 10px;
  height: 32px;
  line-height: 32px;
  display: flex;
  .lz-input-cover {
    display: flex;
    flex: 1;
  }
  .lz-label {
    box-sizing: border-box;
    padding-right: 5px;
    user-select: none;
    white-space: nowrap;
  }
  .lz-input {
    box-sizing: border-box;
    outline: none;
    height: 32px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #d7d7d7;
    padding: 0 10px;
    font-size: 14px;
    min-width: 50px;
    flex: 1;
    &:hover {
      border-color: #aaaaaa;
    }
    &:focus {
      border-color: #42AAC5;
    }
  }
}
.lz-input-item.suffix {
  position: relative;
  .lz-input {
    border-right-width: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-right: 0;
    &:hover + .lz-suffix {
      border-color: #aaaaaa;
    }
    &:focus + .lz-suffix {
      border-color: #42AAC5;
    }
  }
  .lz-suffix {
    border: 1px solid #D7D7D7;
    border-left-width: 0;
  }
  .lz-suffix {
    box-sizing: border-box;
    line-height: 32px;
    user-select: none;
    color: #666666;
    padding: 0 10px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
.lz-input-item.error {
  .lz-input, .lz-suffix {
    border-style: dashed;
    border-color: #EF0000!important;
  }
}
</style>
