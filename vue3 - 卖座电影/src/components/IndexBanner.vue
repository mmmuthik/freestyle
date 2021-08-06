<template>
<section class="index-banner">
  <div class="banner-wrapper">
    <article class="index-banner-item" v-for="itm in bannerImageList" :key="itm.filmId">
      <img :src="itm.url" alt="itm.title">
    </article>
  </div>
</section>
</template>

<script>
import axios from 'axios'
// 请求头数据
import { MAIZUO_REQUEST_HEADER_BANNER } from '@/api/headers.js'

export default ({
  name: 'IndexBanner',
  data () {
    return {
      // 请求头数据
      maizuoRequestHeader: MAIZUO_REQUEST_HEADER_BANNER,

      // banner 图片列表
      bannerImageList: [],
      currentBannerIndex: 0
    }
  },
  created () {
    // 获取 banner 图片
    axios({
      method: 'get',
      url: 'https://m.maizuo.com/gateway?type=2&cityId=440300&k=8697178',
      headers: this.maizuoRequestHeader
    }).then(res => {
      // 筛选需要显示的信息
      this.bannerImageList = res.data.data.map(itm => {
        return {
          url: itm.imgUrl,
          title: itm.name,
          filmId: JSON.parse(itm.actionData).businessId
        }
      })
    })
  }
})
</script>

<style lang="scss" scoped>
.index-banner {
  overflow-x: hidden;
  .banner-wrapper {
    width: 300%;
    display: flex;
    > .index-banner-item {
      flex: 1;
    }
    img {
      max-width: 100%;
    }
  }
}
</style>
