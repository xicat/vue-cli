import VueI18n from 'vue-i18n'
import Vue from 'vue'
window.Vue = Vue // 要在vue-i18n实例化之前执行
Vue.use(VueI18n)
import cn from './cn'
import en from './en'
export default new VueI18n({
  locale: 'en',    // 语言标识
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'cn': cn,   // 中文语言包
    'en': en    // 英文语言包
  }
})
