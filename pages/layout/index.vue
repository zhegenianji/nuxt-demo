<template>
  <div class='index'>
    <!-- 头部 开始 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link
          class="navbar-brand"
          to="/"
        >conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page"  exact: 精确匹配路由 -->
            <nuxt-link
              class="nav-link "
              to="/"
              exact
            >Home</nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                to="/article/5"
              >
                <i class="ion-compose"></i>&nbsp;New Article
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                to="/settings"
              >
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link "
                to="/profile/12"
              >
                <img
                  class="user-pic"
                  :src="user.image"
                >
                {{user.username}}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                to="/login"
              >Sign in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="nav-link"
                to="/register"
              >Sign up</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- 头部 结束 -->
    <nuxt-child />
    <!-- 底部 开始 -->
    <footer>
      <div class="container">
        <a
          href="/"
          class="logo-font"
        >conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
          under MIT.
        </span>
      </div>
    </footer>
    <!-- 底部 结束 -->

  </div>
</template>

<script >
import { mapState } from 'vuex'
export default {
  name: 'hmePage',
  computed:{
    ...mapState(['user'])
  }
}
</script>

<style lang='scss' scoped>
</style>