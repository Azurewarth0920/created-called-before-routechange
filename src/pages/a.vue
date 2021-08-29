<template>
  <div>
    <h2>page a</h2>
    <router-link to="/b">to b</router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  layout: 'a',
  created() {
    console.log('page a')
  },
})
</script>
