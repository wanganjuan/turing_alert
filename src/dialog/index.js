import Confirm from './confirm/confirm.js'
export default {
  install (Vue, options) {
    Vue.prototype.$tconfirm = Confirm
  }
}
