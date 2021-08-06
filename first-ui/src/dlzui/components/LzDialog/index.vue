<template>
<section class="lz-dialog" v-if="visible">
  <div class="lz-dialog-header">
    <h2 v-text="title"></h2>
    <span class="lz-dialog-close" @click="handleClick"></span>
  </div>
  <div class="lz-dialog-body">
    <slot></slot>
  </div>
</section>
</template>

<script>
export default {
  name: "LzDialog",
  props: {
    title: {
      type: String,
      default: ''
    },
    close: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dMask: null
    }
  },
  methods: {
    handleClick() {
      this.$emit('update:visible', false)
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.dMask.style.display = 'block';
      } else {
        this.dMask.style.display = 'none';
      }
    }
  },
  mounted() {
    this.dMask = document.createElement('div');
    this.dMask.classList.add('lz-dialog-mask');
    document.body.appendChild(this.dMask);
    this.dMask.style.display = 'none';
  },
  beforeDestroy() {
    document.body.removeChild(this.dMask);
  }
}
</script>

<style lang="scss" scoped>
.lz-dialog {
  width: 400px;
  min-height: 100px;
  position: fixed;
  left: 50%;
  top: 200px;
  transform: translateX(-50%);
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.102);
  z-index: 100;
  background-color: #fff;

  .lz-dialog-header {
    line-height: 40px;
    background-color: #EFEFEF;
    padding: 0 10px;
    user-select: none;
    position: relative;

    h2 {
      margin: 0;
      font-size: 16px;
      font-weight: 400;
    }

    .lz-dialog-close {
      display: block;
      height: 15px;
      width: 15px;
      position: absolute;
      right: 10px;
      top: 14px;
      background-image: url("./assets/dialog-close.svg");
      background-size: cover;
      cursor: pointer;
    }
  }

  .lz-dialog-body {
    padding: 10px 10px;
  }
}
</style>
<style>
.lz-dialog-mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .4);
}
</style>
