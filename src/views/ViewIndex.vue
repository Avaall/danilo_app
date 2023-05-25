<template>
  <div>
    <CpSwiper />
    <p class="title color_background text-center pt-5">PRODUCTOS</p>
    <CpProductos />
    <CpInformacion />
    <p class="title color_background text-center">CONOCENOS</p>
    <CpDireccion />
    <CpFooter />
  </div>
</template>

<script>
import CpSwiper from '../components/CpSwiper.vue'
import CpProductos from '../components/CpProductos.vue'
import CpInformacion from '../components/CpInformacion.vue'
import CpDireccion from '../components/CpDireccion.vue'
import CpFooter from '../components/CpFooter.vue'

export default {
  name: 'ViewIndexo',
  components: {
    CpSwiper,
    CpProductos,
    CpInformacion,
    CpDireccion,
    CpFooter
  }
}
</script>
