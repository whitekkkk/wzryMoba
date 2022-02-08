<template>
     <m-card :icon="icon" :title="title">
      <div class="card-body pt-3">
        <div class="nav jc-between">
          <!-- i为从0开始的索引值 -->
          <div class="nav-item" :class="{active: active === i}"
          v-for="(category, i) in categories" :key="i"
          @click="$refs.list.$swiper.slideTo(i)">
            <div class="nav-link">{{category.name}}</div>
          </div>

        </div>
        <!-- 新闻资讯具体内容用swiper  -->
        <div class="pt-3">
          <!-- active = $refs.list.$swiper.realIndex把当前swiper的真实索引值给active -->
          <swiper ref="list" :options="{autoHeight: true}"
          @transitionStart="() => active = $refs.list.$swiper.realIndex">
            <swiper-slide v-for="(category, i) in categories" :key="i">
              <slot name="items" :category="category"></slot>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </m-card>
</template>

<script>
export default {
    props:{
        title: {type: String, required: true},
        icon: {type: String, required: true},
        categories: {type: Array, required: true }
    },
    data(){
      return{
        active: 0
      }
    }
}
</script>

<style>

</style>