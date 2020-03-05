import { renderVue, Vue } from 'hypernova-vue';
import LysModule from '../src/components/LysModule.vue';

renderVue('LysModule', Vue.extend(LysModule))();
