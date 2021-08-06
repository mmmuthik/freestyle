/*
* 局部组件：即将上映
*/
<template>
<section class="coming-film-list">
  <article class="film-item" v-for="(itm, idx) in comingFilmsList" :key="idx" @click="showFilmDetails(itm.filmId)">
    <div class="poster">
      <img :src="itm.poster" :alt="itm.name">
    </div>
    <div class="info">
      <h3 class="name fn-ellipsis">
        <span v-text="itm.name"></span>
        <span v-text="itm.type"></span>
      </h3>
      <p class="score">观众评分：<span v-text="itm.grade"></span></p>
      <p class="actors fn-ellipsis">主演：<span v-text="itm.actors"></span></p>
      <p class="synopsis" v-text="itm.synopsis"></p>
    </div>
  </article>
</section>
</template>

<script>
import { mapState } from 'vuex'
import { GET_COMING_FILMS_LIST_ACTION } from '../const/actions'

export default {
  name: 'ComingFilm',
  data () {
    return {}
  },

  methods: {
    showFilmDetails (filmId) {
      this.$router.push({
        name: 'Detail',
        params: {
          filmId
        }
      })
    }
  },

  computed: {
    ...mapState(['comingFilmsList'])
  },

  created () {
    if (!this.comingFilmsList.length) {
      this.$store.dispatch(GET_COMING_FILMS_LIST_ACTION)
    }
  }
}
</script>

<style lang="scss" scoped>

.film-item {
  margin-top: 10px;
  height: 130px;
  padding-left: 120px;
  justify-content: space-between;
  position: relative;
  .name {
    font-size: 16px;
  }
  .poster {
    overflow: hidden;
    position: absolute;
    left: 10px; top: 0;
    width: 100px;
    height: 100%;
    img {
      width: 100px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 10px;
    .actors {
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      padding: 5px 0;
    }
    .synopsis {
      display: -webkit-box;
      box-orient: vertical;
      line-clamp: 2;
      overflow: hidden;
    }
  }
}
</style>
