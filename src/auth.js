export default {
  requireAuth (to, from, next) {
    const idToken = localStorage.getItem('id_token')
    console.log('idToken', idToken)
    if (!idToken) {
      next({
        path: '/'
        // query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  },
  isLoggedIn () {
    const idToken = localStorage.getItem('id_token')
    return !!idToken
  }
}
