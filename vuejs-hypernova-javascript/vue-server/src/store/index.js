import { Vue } from 'hypernova-vue'
import Vuex from 'vuex'
import account from './account'

Vue.use(Vuex)

module.exports = () => new Vuex.Store({
  modules: {
    account
  }
})
