import { renderVue, Vue } from 'hypernova-vue';
import Module from '../src/components/Module.vue';

renderVue('Points', Vue.extend(Module))();
