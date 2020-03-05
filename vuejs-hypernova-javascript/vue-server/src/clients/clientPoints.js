import { renderVue, Vue } from 'hypernova-vue'
import Points from '../components/Points.vue'

renderVue('Points', Vue.extend(Points))()
