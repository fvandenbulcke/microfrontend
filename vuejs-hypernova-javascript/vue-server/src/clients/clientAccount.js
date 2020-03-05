import { renderVue, Vue } from 'hypernova-vue'
import Account from '../components/Account.vue'

renderVue('Account', Vue.extend(Account))()
