<template>
  <div class="columns">
		<div class="column">
      <StoreViewComponent/>
		</div>
    <div class="column">
      <StoreViewComponent/>
    </div>
  </div>
</template>

<script>
import StoreViewComponent from './StoreViewComponent.vue';
import { mapActions } from 'vuex';

export default {
  name:'StoreView',
  components: { StoreViewComponent },
  props: {
    token: {
      type: String,
      required: true
    },
    customer: {
      type: String,
      required: true
    }
  },
  beforeMount() {
    console.log('beforeMount() teststore')
    this.loadAccount({ customerNumber: this.customer, token: this.token })
      .then(() => console.log('then de load'));
  },
  methods: {
    ...mapActions(['loadAccount']),
  },
}
</script>