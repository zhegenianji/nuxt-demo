import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1dfba92f = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _ab813fb8 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _c4362678 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _dcf8c778 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _302ffce8 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _122ccf72 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _784ddf91 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1dfba92f,
    name: "layout",
    children: [{
      path: "",
      component: _ab813fb8,
      name: "home"
    }, {
      path: "/login",
      component: _c4362678,
      name: "login"
    }, {
      path: "/register",
      component: _c4362678,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _dcf8c778,
      name: "profile"
    }, {
      path: "/settings",
      component: _302ffce8,
      name: "settings"
    }, {
      path: "/editor",
      component: _122ccf72,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _784ddf91,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
