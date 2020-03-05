<template>
  <button class="button is-primary" v-on:click="addClick()">Primary</button>
</template>

<script>
export default {
  name: 'loyButton',
  methods: {
    addClick() {
      console.log('click advantages in child')
    }
  }
}
</script>