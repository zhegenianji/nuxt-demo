import { request } from '@/plugins/request'


// 列表数据
export const getTags = () => {
  return request({
    method: 'GET',
    url: '/api/tags',
  })
}
