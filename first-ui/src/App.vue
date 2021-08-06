<template>
  <div id="app">
    <LzButton>普通按钮</LzButton>
    <LzButton type="primary" class="zhangsan" :command="click">主要按钮</LzButton>
    <LzButton :disable="true">普通按钮</LzButton>
    <LzButton type="primary" :disable="true">主要按钮</LzButton>
    <hr>
    <lz-input label="账号信息：" v-model="value" placeholder="请输入文本" maxlength="5" :suffix="suffix" :error="isError"
              type="number"></lz-input>
    <lz-input label="个人信息：" v-model="value" :suffix="suffix" placeholder="请输入文本"></lz-input>
    <hr>
    <lz-dialog title="Hello" :visible.sync="isShowDialog">
      <h1>123123</h1>
    </lz-dialog>
    {{ isShowDialog }}
    <lz-select></lz-select>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      value: '',
      suffix: '一些文字',
      isError: false,
      isShowDialog: false
    }
  },
  components: {
  },
  methods: {
    click() {
      this.isShowDialog = !this.isShowDialog;
    }
  }
}
</script>

<style lang="scss">
</style>
