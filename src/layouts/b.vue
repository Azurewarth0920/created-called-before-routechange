<template>
  <div>
    <h1>layout B</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  created() {
    console.log('layout b')
  },
})
</script>
