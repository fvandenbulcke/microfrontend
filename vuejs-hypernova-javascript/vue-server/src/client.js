import { renderVue, Vue } from 'hypernova-vue'
import Advantages from './components/Advantages.vue'
import Account from './components/Account.vue'
import Points from './components/Points.vue'
import ProductList from './components/ProductList.vue'

renderVue('Advantages', Vue.extend(Advantages))()
renderVue('Account', Vue.extend(Account))()
renderVue('Points', Vue.extend(Points))()
renderVue('ProductList', Vue.extend(ProductList))()
