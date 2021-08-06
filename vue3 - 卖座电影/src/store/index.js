import { createStore } from 'vuex'
import axios from 'axios'

import {
  SET_TAB_BAR_MUTATION,
  SET_CURRENT_FILMS_LIST_MUTATION,
  SET_COMING_FILMS_LIST_MUTATION
} from '@/const/mutations'

import {
  GET_CURRENT_FILMS_LIST_ACTION,
  GET_COMING_FILMS_LIST_ACTION
} from '@/const/actions'

// 请求头数据
import { MAIZUO_REQUEST_HEADER_FILM } from '@/api/headers.js'

const vuex = {

  // state 用于状态存储，实现非父子组件通信
  state: {
    isTabbarShow: true, // 控制Tabbar的显示，true-显示，false-不显示

    comingFilmsList: [], // 近期上映 电影列表
    currentFilmsList: [] // 正在热映 电影列表
  },

  // getters 用于控制state的数据访问
  getters: {
    G_comingFilmsListGetter (state) {
      // 获得前10条数据
      return state.comingFilmsList.filter((itm, idx) => idx < 10)
    }
  },

  // 操作同步数据
  mutations: {

    // 控制底部 tab bar 的显影
    [SET_TAB_BAR_MUTATION] (state, value) {
      state.isTabbarShow = value
    },

    // 操作 正在热映 的电影数据
    [SET_CURRENT_FILMS_LIST_MUTATION] (state, value) {
      state.currentFilmsList = value
    },

    // 操作 近期上映 的电影数据
    [SET_COMING_FILMS_LIST_MUTATION] (state, value) {
      state.comingFilmsList = value
    }
  },

  // 操作异步数据
  actions: {

    // 获取 正在热映 电影列表
    [GET_CURRENT_FILMS_LIST_ACTION] (store) {
      axios({
        method: 'get',
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5717520',
        headers: MAIZUO_REQUEST_HEADER_FILM
      }).then(res => {
        const currentFilmsData = res.data.data.films.map(itm => {
          let actors = ''
          itm.actors.forEach(itm => {
            actors += itm.name + ' '
          })
          return {
            name: itm.name,
            synopsis: itm.synopsis,
            filmId: itm.filmId,
            actors,
            type: itm.filmType.name,
            nation: itm.nation,
            poster: itm.poster,
            grade: itm.grade
          }
        })
        store.commit(SET_CURRENT_FILMS_LIST_MUTATION, currentFilmsData)
      })
    },

    // 获取 近期上映 电影列表
    [GET_COMING_FILMS_LIST_ACTION] (store) {
      axios({
        method: 'get',
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=2326148',
        headers: MAIZUO_REQUEST_HEADER_FILM
      }).then(res => {
        // 筛选需要显示的信息
        const comingFilmsData = res.data.data.films.map(itm => {
          return {
            name: itm.name,
            synopsis: itm.synopsis,
            filmId: itm.filmId,
            type: itm.filmType.name,
            nation: itm.nation,
            poster: itm.poster
          }
        })

        // 将数据通过 mutation 放入 state
        store.commit(SET_COMING_FILMS_LIST_MUTATION, comingFilmsData)
      })
    }

    // 获取 正在热映 电影列表
  },
  modules: {}
}

export default createStore(vuex)
