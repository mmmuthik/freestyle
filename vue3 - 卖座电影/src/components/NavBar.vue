<template>
  <!--<ul class="nav-bar" v-if="$store.state.isTabbarShow">-->
  <ul class="nav-bar" v-if="isTabbarShow">
    <li>
      <router-link to="/film">电影</router-link>
    </li>
    <li>
      <router-link to="/cinema">影院</router-link>
    </li>
    <li>
      <router-link to="/user">我的</router-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavBar',

  // mapState的用法
  // 写法1 - 原理
  // computed: {
  //   isTabbarShow () {
  //     return this.$store.state.isTabbarShow
  //   }
  // }

  // 写法2 - 加深理解
  // mapState 的返回值是 对象， 对象中的内容参考 写法1
  // computed: mapState(['isTabbarShow'])

  // 写法3 - 项目中常用
  computed: {
    // 用 ES6 中的 展开运算符 将 mapState 的返回值展开
    ...mapState(['isTabbarShow'])
  }
}
</script>

<style lang="scss" scoped>
ul.nav-bar {
  position: fixed;
  height: 50px;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  > li {
    flex: 1;
    > a {
      display: block;
      height: 100%;
      text-align: center;
    }
  }
}
</style>
