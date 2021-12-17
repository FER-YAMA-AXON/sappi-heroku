<template>
  <v-layout row wrap>

    <Carrusel/>

      <v-container class="grey lighten-5">
      <v-row no-gutters class="center">
      <p> No hay categorias</p>
      </v-row>
    </v-container>

  </v-layout>
</template>


<script>
import Carrusel from '~/components/CarruselAds.vue';
export default {
  components: { Carrusel },
   layout: 'navigation',
}
</script>

<style scoped>
.center{
 text-align: center;
   display: flex;
  justify-content: center;
}
</style>

