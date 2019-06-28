const baseUrl = '/bingefro/fast_admin/gateway/op='

function globalHeaders() {
  if (process.env.NODE_ENV === 'development') {
    return { Authorization: "Basic " + window.btoa('peerkin:fandago300381!') }
  } else {
    return null
  }
}

export default {
  getUrl(op) {
    return baseUrl + op
  },
  globalHeaders: globalHeaders()
}