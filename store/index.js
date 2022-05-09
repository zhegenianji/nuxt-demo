const cookieparser = process.server ? require('cookieparser') : undefined
export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state,payload) {
    state.user = payload
  }
}

export const actions = {
  // nuxtServerInit 是一个特殊的action方法
  // 这个action 会在服务端渲染期间调用
  // 作用：初始化客户端数据，传递数据给客户端使用
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    // 如果请求头中有COOKIE
    if (req.headers.cookie) {
      // 使用 cookieparser 吧COOKIE转换成js对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  }
}