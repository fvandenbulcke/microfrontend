<template>
    <div class="k-product-list">
      <h2 class="k-product-list__header">Account Infos for customer {{customer}}</h2>
      <ul v-if="account">
        <li class="k-product-item">
          <span>id : </span><span style="font-weight: bold;">{{ account.id }}</span>
        </li>
        <li class="k-product-item">
          <span>bu code : </span><span style="font-weight: bold;">{{ account.buId }}</span>
        </li>
        <li class="k-product-item">
          <span>status : </span><span style="font-weight: bold;">{{ account.status }}</span>
        </li>
      </ul>
      <button id="vueButtonId" @click="addItem">Add Item</button>
    </div>
</template>
<script>
import loyaltyService from '../services/loyaltyService';

export default {
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
  data(){
    return {
      account: {},
    }
  },
  beforeMount() {
    loyaltyService.getLoyaltyAccount({ customerNumber: this.customer, token: this.token })
      .then((response) => this.account = response);
  },
  methods: {
    addItem() {
      const event = new CustomEvent('addProductItem', { detail: 'item' });
      document.dispatchEvent(event)
    }
  }
}
</script>
