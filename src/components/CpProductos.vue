<template>
  <section id="productos" class="color_background">
    <div class="box" v-for="producto in productos" :key="producto.id">
      <img :src="producto.imagen" alt="">
      <p class="text-center"><strong>{{producto.name}}</strong></p>
      <p>Lorem ipsum dolor sit, amet</p>
      <p><i>Nuevo</i></p>
    </div>
  </section>
</template>

<script>
import produtosJSON from '../assets/productos.json'

export default {
  name: 'CpProducto',
  data () {
    return {
      productos: produtosJSON
    }
  }
}
</script>
