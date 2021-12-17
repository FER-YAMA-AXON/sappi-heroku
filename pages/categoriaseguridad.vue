<template>
  <v-layout row wrap>
      <Carrusel/>
      <v-container class="grey lighten-5">
      <v-row no-gutters>

          <v-col class="padding-categoria" >
            <v-card
              class="pa-2 text-center"
              outlined
              tile
            >
             <img src="~/assets/img/icono-reglamento.png" alt="Icono" /><br>
              <v-btn text>Reglamento</v-btn>
            </v-card>
          </v-col>
          <v-col class="padding-categoria"  >
            <v-card
              class="pa-2 text-center"
              outlined
              tile
            >
            <img src="~/assets/img/icono-seguros.png" alt="Icono" /><br>
              <v-btn text>Seguros</v-btn>
            </v-card>
          </v-col>
          <v-responsive

            width="100%"
          ></v-responsive>

      </v-row>
    </v-container>

  </v-layout>
</template>

<script>
import Carrusel from '~/components/CarruselAds.vue';
export default {
  components: { Carrusel },
   layout: 'navigation',
   mounted(){
     this.auth_storage();
   },
   methods:{

      auth_storage() {
      if(localStorage.getItem('nombre') || localStorage.getItem('email') ){
      }else{
      this.$router.push('/login');
    }
    }
   }

}
</script>

