<template>

  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{ articleInfo.title }}</h1>

        <article-meta :article="articleInfo" />

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12" v-html="articleInfo.body">
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <article-meta :article="articleInfo" />
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

          <article-comments :article="articleInfo" />

        </div>

      </div>

    </div>

  </div>

</template>

<script >
import { getArticleInfo } from '@/api/articles'
import MarkDown from 'markdown-it'
import articleMeta from './components/article-meta.vue'
import articleComments from './components/article-comments.vue'
export default {
  name: 'hmePage',
  components: {
    articleMeta,
    articleComments
  },
  async asyncData ({ params }) {
    const { data } = await getArticleInfo(params.slug)
    const md = new MarkDown()

    data.article.body = md.render(data.article.body)
    return {
      articleInfo: data.article
    }
  },
  head () {
    return {
      title: this.articleInfo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.articleInfo.description
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
</style>