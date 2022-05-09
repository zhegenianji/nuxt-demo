<template>

  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user" class="nav-item">
                <nuxt-link 
                  class="nav-link"
                  :class="{active : tab==='your_feed'}"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed'
                    }
                  }"
                >Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                 <nuxt-link 
                  class="nav-link"
                  :class="{active : tab==='global_feed'}"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global_feed'
                    }
                  }"
                >Global Feed</nuxt-link>
              </li>
              <li v-if="tag" class="nav-item">
                <nuxt-link 
                  class="nav-link"
                  :class="{active : tab==='tag'}"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'tag',
                      tag: tag
                    }
                  }"
                >#{{tag}}</nuxt-link>
              </li>
            </ul>
          </div>

          <div v-for="article in articles" :key="article.slug" class="article-preview">
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: { username: article.author.username }
              }"><img :src="article.author.image" /></nuxt-link>
              <div class="info">
                <nuxt-link :to="{ name: 'profile', params: { username: article.author.username } }" class="author">{{
                    article.author.username
                }}</nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right" @click="onFavorite(article)" :class="{ active: article.favorited }" :disabled="article.flag">
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link :to="{ name: 'article', params: { slug: article.slug } }" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
          <nav>
            <ul class="pagination">

              <li v-for="item in totalPage" :key="item" :class="{ 'active': page === item }"
                class="page-item ng-scope ">
                <nuxt-link :to="{ name: 'home', query: { page: item, tag, } }"
                  class="page-link ng-binding" href="">{{ item }}
                </nuxt-link>

              </li>

            </ul>
          </nav>


        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link v-for="tag in tags" :key="tag" :to="{ name: 'home', query: { tag,tab:'tag' } }"
                class="tag-pill tag-default">{{ tag }}</nuxt-link>

            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script >
import { getArticles, getFeedArticles, addFavorite, deleteFavorite } from "@/api/articles"
import { getTags } from '@/api/tags'
import { mapState } from 'vuex'
export default {
  name: 'hmePage',
  async asyncData ({ query,store }) {
    const page = Number.parseInt(query.page || 1)
    const limit = 10
    const { tag } = query
    const tab = query.tab || 'global_feed'
    const loadArticles = store.state.user && tab === 'your_feed' ? getFeedArticles : getArticles
    const [articleRes, tagRes] = await Promise.all([
      loadArticles({
        limit,
        tag,
        offset: (page - 1) * limit
      }),
      getTags()
    ])
    const { articles, articlesCount } = articleRes.data
    const { tags } = tagRes.data
    articles.forEach(ele => ele.flag = false)
    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab: query.tab || 'global_feed'
    }
  },
  watchQuery: ['page', 'tag', 'tab'],
  computed: {
    ...mapState(['user']),
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods:{
    // 添加点赞
    async onFavorite(article){
      console.log(article);
      article.flag = true
      if(article.favorited){
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount -= 1
      }else{
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1

      }
      article.flag = false


    }
  }
}
</script>

<style lang='scss' scoped>
</style>