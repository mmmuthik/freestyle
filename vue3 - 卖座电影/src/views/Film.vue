<template>
  <IndexBanner></IndexBanner>
  <div class="change-film-list">
    <router-link to="/film/current">正在热播</router-link>
    <router-link to="/film/coming">近期上映</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import IndexBanner from '@/components/IndexBanner'
export default ({
  name: 'Film',
  components: {
    IndexBanner
  },
  data () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.change-film-list {
  display: flex;
  height: 50px;
  line-height: 50px;
  text-align: center;
  a {
    flex: 1;
  }
  a.router-link-active {
    color: #f00;
  }
}
</style>
