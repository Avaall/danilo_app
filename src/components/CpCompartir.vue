<template>
  <div>
    <a
      class="link_compartir mx-2"
      target="_black"
      :href="compartir"
      v-for="(compartir, posicionCompartir) of informacionCompartir[0]" :key="posicionCompartir"
    >
      <i :class="informacionCompartir[1][posicionCompartir]"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CpCompartir',
  data () {
    return {
      informacionCompartir: [
        [
          'https://es-la.facebook.com/',
          'https://twitter.com/?lang=es',
          'https://www.instagram.com/'
        ],
        [
          'bi bi-facebook',
          'bi bi-twitter',
          'bi bi-instagram'
        ]
      ]
    }
  }
}
</script>
