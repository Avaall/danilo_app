<template>
  <div id="app">
    <CpHeader />
    <router-view/>
  </div>
</template>

<script>
import CpHeader from './components/CpHeader.vue'

export default {
  name: 'App',
  components: {
    CpHeader
  }
}
</script>
