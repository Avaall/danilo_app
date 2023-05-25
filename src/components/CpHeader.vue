<template>
  <nav>
    <div id="contenedor">
      <div class="nav-divisor">
        <router-link class="router-link" to="/">Inicio</router-link>
        <router-link class="router-link" to="/servicios">Servicios</router-link>
        <router-link class="router-link" to="/productos">Productos</router-link>
      </div>
      <div class="nav-divisor">
        <img :src="this.imagenLogo" alt="" height="150px">
      </div>
      <div class="nav-divisor">
        <a href="#horario" class="router-link">Horario</a>
        <CpCompartir />
      </div>
    </div>
  </nav>
</template>

<script>
import CpCompartir from '../components/CpCompartir.vue'

export default {
  name: 'CpHeader',
  data () {
    return {
      imagenLogo: ''
    }
  },
  components: {
    CpCompartir
  },
  mounted () {
    this.imagenLogo = require('@/assets/img/logo.png')
  }
}
</script>
