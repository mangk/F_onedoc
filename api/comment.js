import {service} from '@/utils/request'

export const createComment = (data) => {
  return service({
    url: '/api/v1/comment',
    method: 'post',
    data,
  })
}

export const getComment = (params) => {
  return service({
    url: '/api/v1/comment',
    method: 'get',
    params,
  })
}

export const listComment = (params) => {
  return service({
    url: '/api/v1/comment/list',
    method: 'get',
    params,
  })
}
