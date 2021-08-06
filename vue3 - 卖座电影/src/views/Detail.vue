<template>
<div class="detail">
<div class="post-wrapper">
  <img :src="filmDetail.poster" alt="">
</div>
<h1 v-text="filmDetail.name"></h1>
<p v-text="filmDetail.category"></p>
</div>
</template>

<script>
import axios from 'axios'
import { SET_TAB_BAR_MUTATION } from '../const/mutations'
// 请求头数据
import { MAIZUO_REQUEST_HEADER_DETAIL } from '@/api/headers.js'

export default ({
  name: 'Detail',
  data () {
    return {
      maizuoRequestHeader: MAIZUO_REQUEST_HEADER_DETAIL,
      filmId: null,
      filmDetail: {}
    }
  },
  created () {
    this.$store.state.isTabbarShow = false
    const filmId = this.$route.params.filmId
    axios({
      method: 'get',
      url: `https://m.maizuo.com/gateway?filmId=${filmId}&k=1720104`,
      headers: this.maizuoRequestHeader
    }).then(res => {
      this.$store.commit(SET_TAB_BAR_MUTATION, false)
      const film = res.data.data.film
      this.filmDetail = {
        name: film.name,
        synopsis: film.synopsis,
        filmId: film.filmId,
        type: film.filmType.name,
        nation: film.nation,
        photos: film.photos,
        poster: film.poster,
        grade: film.grade,
        category: film.category
      }
    })
  },
  beforeUnmount () {
    this.$store.commit(SET_TAB_BAR_MUTATION, true)
  }
})
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
