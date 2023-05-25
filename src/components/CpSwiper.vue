<template>
  <section id="swiper" class="py-5">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="producto in productos" :key="producto.id">
          <div class="division">
            <p class="title">{{producto.name}}</p>
            <p>{{producto.descripcion}}</p>
          </div>
          <div class="division">
            <img :src="producto.imagen" alt="" width="100%">
          </div>
        </div>
      </div>
      <div class="d-flex flex-row">
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"><i class="bi bi-arrow-left"></i></div>
        <div class="swiper-button-next"><i class="bi bi-arrow-right"></i></div>
      </div>
    </div>
  </section>
</template>

<script>
import SwiperCore, { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import productosJSON from '../assets/productos.json'

import 'swiper/css'

SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  name: 'CpSwiper',
  data () {
    return {
      productos: productosJSON
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      })
      swiper.init()
      swiper.autoplay.start()
    })
  }
}
</script>
