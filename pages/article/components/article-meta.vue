<template>
  <div class='article-meta'>
     <div class="article-meta">
      <nuxt-link :to="{name: 'profile',params:{username:article.author.username}}">
        <img :src="article.author.image" /></nuxt-link>
      <div class="info">
      <nuxt-link class="author" :to="{name: 'profile',params:{username:article.author.username}}">
        <span class="date">{{article.createdAt | date('MMM DD, YYYY')}}</span>

</nuxt-link>
      </div>
      <button class="btn btn-sm btn-outline-secondary" :class="{active : article.author.following}">
        <i class="ion-plus-round"></i>
        &nbsp;
        Follow Eric Simons <span class="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-sm btn-outline-primary" :class="{active : article.author.favorited}">
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post <span class="counter">(29)</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-meta',
  props:{
    article:{
      type: Object,
      required: true
    }
  },
  data() {
    return {

    };
  },
  mounted (){

  },
  methods: {

  }
}
</script>
<style lang='scss' scoped>

</style>