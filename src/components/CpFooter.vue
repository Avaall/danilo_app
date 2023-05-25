<template>
  <footer class="color_background">
    <ul>
      <li><strong>HORARIO</strong></li>
      <li><span>LUNES A VIERNES : 9 AM - 8 PM</span></li>
      <li><span>LUNES A VIERNES : 9 AM - 8 PM</span></li>
      <li><span>LUNES A VIERNES : 9 AM - 8 PM</span></li>
    </ul>
    <ul>
      <li><strong>CONTACTANOS</strong></li>
      <li><span>Medellín: (604) 222 2222</span></li>
      <li><span>Cali: (603) 333 3333</span></li>
      <li><span>Cucuta: (607) 444 4444</span></li>
    </ul>
    <ul>
      <li><strong>UBICANOS</strong></li>
      <li><span>Medellín: Cra 1 # 1-1</span></li>
      <li><span>Cali: Cra 2 # 2-2</span></li>
      <li><span>Cucuta: Cra 3 # 3-3</span></li>
    </ul>
    <ul>
      <li><strong>ESCRIBENOS</strong></li>
      <li><span>gamer_medellin@gamer.com</span></li>
      <li><span>gamer_cali@gamer.com</span></li>
      <li><span>gamer_cucuta@gamer.com</span></li>
    </ul>
    <ul>
      <li><strong>Redes sociales</strong></li>
      <li><span><CpCompartir /></span></li>
    </ul>
  </footer>
</template>

<script>
import CpCompartir from './CpCompartir.vue'

export default {
  name: 'CpFooter',
  components: {
    CpCompartir
  }
}
</script>
