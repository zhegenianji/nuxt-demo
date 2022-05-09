import { request } from '@/plugins/request'
// 列表数据
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}
// 获取文章详情
export const getArticleInfo = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`,
  })
}

//用户点赞文章列表
export const getFeedArticles = () => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
  })
}

// 文章点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,

  })
}
// 取消文章点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,

  })
}
// 添加评论
export const addComments = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,

  })
}
// 获取评论列表
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`,

  })
}

