import request from '../request'

export function getlist(query) {
    return request({
        url: '/user/list',
        method: 'get',
        param: query
    })
}