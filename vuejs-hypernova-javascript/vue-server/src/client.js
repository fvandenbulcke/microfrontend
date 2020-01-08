import { renderVue, Vue } from 'hypernova-vue'
import vuetify from 'vuetify'
import ProductList from './components/ProductList.vue'

Vue.use(vuetify)
renderVue('ProductList', Vue.extend(ProductList))()
