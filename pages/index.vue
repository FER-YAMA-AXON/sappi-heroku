<template>
  <v-layout row wrap>
      <Carrusel/>
      </br>
      <v-container class="grey lighten-5">
      <v-row no-gutters>

          <v-col class="padding-categoria">
            <v-card
              class="pa-2 text-center cuadrado "
              outlined
              tile
            >
             <img src="~/assets/img/icono-productos.png" alt="Icono" /><br>
              <v-btn text href="categoriasproductos">Productos</v-btn>
              <v-divider class="mx-2 color-orange"></v-divider>
            </v-card>
          </v-col>
          <v-col class="padding-categoria" >
            <v-card
              class="pa-2 text-center cuadrado"
              outlined
              tile
            >
            <img src="~/assets/img/icono-salud.png" alt="Icono" /><br>
              <v-btn text href="/categoriasalud">Salud</v-btn>
              <v-divider class="mx-2 color-orange"></v-divider>
            </v-card>
          </v-col>
          <v-responsive
            width="100%"
          ></v-responsive>
          <v-col class="padding-categoria" >
            <v-card
              class="pa-2 text-center cuadrado"
              outlined
              tile
            >
            <img src="~/assets/img/icono-servicios.png" alt="Icono" /><br>
              <v-btn text href="categoriaservicios">Servicios</v-btn>
              <v-divider class="mx-2 color-orange-2"></v-divider>
            </v-card>
          </v-col>
          <v-col  class="padding-categoria">
            <v-card
              class="pa-2 text-center cuadrado"
              outlined
              tile
            >
            <img src="~/assets/img/icono-seguridad.png" alt="Icono" /><br>
              <v-btn text href="categoriaseguridad">Seguridad</v-btn>
                <v-divider class="mx-2 color-orange-2"></v-divider>
            </v-card>
          </v-col>

      </v-row >
            <v-row>
        <v-col class="d-flex child-flex padding-anuncio">
        <v-img  width="100%" :src="anuncios" lazy-src="anuncios2." alt="">
          <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
        </v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>
<script>
import bannerAnuncio from "~/assets/img/banner-inicio.png";
import banner from "~/assets/img/solo-compra.png";
import Carrusel from '~/components/CarruselAds.vue';
import axios from 'axios'
export default {
  components: { Carrusel},
    layout: 'navigation',
    //se comento por que no dejaba navegar correctamente
   //middleware: "auth",
  data() {
    return {
      anuncios : ""
    };
  },
  mounted(){
   if(localStorage.getItem('nombre')){
      this.getanuncios();
    }else{
      this.$router.push('/login');
    }
  },
  methods:{
    getanuncios(){
      axios
          .get('https://sappi.ws/admin/services/getInfo.php')
                .then(response =>{
                 this.anuncios = response.data.info[0].imagen;
                })
                .catch(e => console.log(e))
    },

  }
};
</script>

<style scoped>
.banner {
  position: absolute;
  bottom: 0;
  padding-bottom: 0px;

}
.carrusel{
  padding: 0;
  padding-bottom: 10px;}
.color-orange{
    border-color: rgba(255, 166, 0, 0.842) !important;
    background-color: rgba(255, 166, 0, 0.842) !important;
}
.color-orange-2{
    border-color: rgba(255, 166, 0, 0.699) !important;
    background-color: rgba(255, 166, 0, 0.699) !important;
}
.theme--light.v-divider {
    border-color: rgba(245, 0, 0, 0.12) !important;
}

.cuadrado{
     padding: 20px 1px 20px 1px !important;
}
.padding-anuncio{
  padding-bottom: 1px;
  padding-top: 100px;
}
</style>
