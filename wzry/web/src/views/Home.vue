
<template>
  <div>
    <!-- 幻灯片 -->
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/3b9fcda2d5c6d441c79b2c07f7846898.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/c835b52d2a83743fdc3ce87ad4cfb166.jpeg">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/3b9fcda2d5c6d441c79b2c07f7846898.jpeg">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" 
      slot="pagination"></div>
    </swiper>

    <!-- 图标导航 -->
    <div class="nav-icons bg-white mt-3 pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3 text-center" v-for="n in 12" :key="n">
        <i class="sprite sprite-news"></i>
        <div class="py-2">
          爆料站
        </div>
      </div>
      </div>

      <div class="bg-light py-2 text-center fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->

    <!-- 新闻资讯 -->
    <m-list-card icon="cc-menu-circle" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link 
        tag="div"
        :to="`/articles/${news._id}`"
        class="py-2 fs-lg d-flex" v-for="(news, i) in category.newsList" :key="i">
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2" >{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>
    <!-- 英雄列表 -->
    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link
          tag="div" 
          :to="`/heroes/${hero._id}`"
          class="p-2 text-center" style="width: 20%" v-for="(hero, i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100">
            <div>{{hero.name}}</div>
          </router-link>
        </div>

      </template>
    </m-list-card>

    <m-card icon="Video1" title="精彩视频">


    </m-card>
 
  </div>
</template>

<script>
import dayjs from 'dayjs' //导入dayjs包

export default {
    filters:{
      date(val){//格式化日期
        return dayjs(val).format('MM/DD')
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.pagination-home'
          },
          // Some Swiper option/callback...
        },
        newsCats: [], //新闻分类
        heroCats: [], //英雄分类
      }
    },

    methods: {
      async fetchNewsCats(){
        const res = await this.$http.get('news/list')
        this.newsCats = res.data
      },
      async fetchHeroCats(){
        const res = await this.$http.get('heroes/list')
        this.heroCats = res.data
      }
    },

    created(){
      this.fetchNewsCats(),
      this.fetchHeroCats()
    }
  }
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';


//首页轮播图右下角白点
.pagination-home{
  .swiper-pagination-bullet{
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($colors, 'white') ;
 
  &.swiper-pagination-bullet-active{
    background: map-get($colors, 'info') ;
    }
  }
}

//精灵图
.nav-icons{
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item{
    width:25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n){
      border-right: none;
    }
  }
}
</style>
