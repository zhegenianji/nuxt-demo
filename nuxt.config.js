export default {
  router: {
    // 默认激活类名
    linkActiveClass: 'active',
    extendRoutes (routes, resolve) {
      // 清楚nuxt自己生成的路由信息
      routes.splice(0)
      routes.push(...[
        {
          name: 'layout',
          path: '/',
          component: resolve(__dirname, 'pages/layout'),
          children: [
            {
              name: 'home',
              path: '',
              component: resolve(__dirname, 'pages/home'),
            },
            {
              name: 'login',
              path: '/login',
              component: resolve(__dirname, 'pages/login'),
            },
            {
              name: 'register',
              path: '/register',
              component: resolve(__dirname, 'pages/login'),
            },
            {
              name: 'profile',
              path: '/profile/:username',
              component: resolve(__dirname, 'pages/profile'),
            },
            {
              name: 'settings',
              path: '/settings',
              component: resolve(__dirname, 'pages/settings'),
            },
            {
              name: 'editor',
              path: '/editor',
              component: resolve(__dirname, 'pages/editor'),
            },
            {
              name: 'article',
              path: '/article/:slug',
              component: resolve(__dirname, 'pages/article'),
            },
          ]
        }
      ])
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js',

  ]
}