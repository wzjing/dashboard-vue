const baseUrl = '/bingefro/fast_admin/gateway/op='

export default {
  getUrl(op) {
    return baseUrl + op
  },
  auth: window.btoa('peerkin:fandago300381!')
}