import { renderVuex } from 'hypernova-vue'
import createStore from '../store'
import StoreView from '../components/StoreView.vue'

renderVuex('Store', StoreView, createStore)()
