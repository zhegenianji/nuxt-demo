<template>
  <div>
    <form class="card comment-form" v-on:submit.prevent>
      <div class="card-block">
        <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <div class="btn btn-sm btn-primary" @click="updateComments">
          Post Comment
        </div>
      </div>
    </form>

    <div class="card" v-for="item in comments" :key="item.id">
      <div class="card-block">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="{ name: 'profile' }" class="comment-author">
          <img :src="item.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{ name: 'profile' }" class="comment-author">{{ item.author.username }}</nuxt-link>
        <span class="date-posted">{{ item.createdAt | date('MMM YY, DD') }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import { addComments, getComments } from '@/api/articles'
export default {
  name: 'article-comments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      comments: []//评论列表
    };
  },
  mounted () {
    console.log(this.article);
    this.loadList()
  },
  methods: {
    // 获取评论列表
    async loadList () {
      const { data } = await getComments(this.article.slug)
      console.log(data);
      this.comments = data.comments
    },
    // 添加评论
    async updateComments () {
      const { data } = await addComments(this.article.slug)
      this.loadList()
    }
  }
}
</script>
<style lang='scss' scoped>
</style>