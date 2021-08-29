<template>
  <div>
    <h2>page b</h2>
    <router-link to="/a">to a</router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  layout: 'b',
  created() {
    console.log('page b')
  },
})
</script>
