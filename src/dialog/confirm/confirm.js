import Confirm from './confirm.vue'
import Vue from 'vue'
// 导入模板
// 类似模板文件，vue extend 返回一个function 通过new 进行是实例化，el 绑定绑定位置
// 生成 构造函数
const ConfirmConstructor = Vue.extend(Confirm)
const instance = new ConfirmConstructor({
  el: document.createElement('div')
})
const el = instance.$el
ConfirmConstructor.prototype.closeConfirm = function (stay, callback) {
  typeof callback === 'function' && callback()

  if (stay) {
    return
  }

  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}
const confirm = (options = {}) => {
  instance.content = options.content
  instance.buttonDesc = options.buttonDesc
  instance.callback = options.callback
  instance.isDel = options.isDel || false
  document.body.appendChild(el)
}
export default confirm
