<template>
  <router-view/>
  <NavBar></NavBar>
</template>

<script>
import NavBar from './components/NavBar'
export default ({
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      currentFilmsList: [],
      comingFilmsList: []
    }
  },
  mounted () {
  }
})
</script>

<style lang="scss">
#app {
  height: 100%;
  overflow: auto;
}
</style>
