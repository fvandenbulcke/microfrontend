<template>
  <div class="k-product-list">
    <h2 class="k-product-list__header">{{title}}</h2>
    <ul>
      <li v-for="(item, idx) in items" :key="idx" class="k-product-item">
        <img :src="item.imageUrl" class="k-product-item__image">
        <h4 class="k-product-item__title">{{ item.title }}</h4>
      </li>
    </ul>
    <button id="vueButtonId" @click="addItem">Add Item</button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    addItem() {
      console.log('ProductList.vuejs:')
      console.log(document)
      this.items.push({ title: 'New Serie', imageUrl: 'https://via.placeholder.com/200' })
      const event = new CustomEvent('addProductItem', { detail: 'item' });
      document.dispatchEvent(event)
    }
  }
}
</script>
<style scoped>
  /* h2 {
    color: red
  } */
</style>
