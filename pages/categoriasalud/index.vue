<template>
  <v-layout row wrap >
  <v-container class="carrusel">
         <v-carousel
  :show-arrows="false"
  cycle
    height="200"
    hide-delimiter-background
    show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
     </v-container>
      <v-container class="grey lighten-5">
      <v-row no-gutters>

          <v-col class=" padding">
            <v-card
              class="pa-2 text-center "
              outlined
              tile

            >
             <img src="~/assets/img/icono-salud2.png" alt="Icono" /><br>

              <v-btn text @click="onloadempresa1" >Pediatra</v-btn>
            </v-card>
          </v-col>
          <v-col class="padding" >

          </v-col>
          <v-responsive
            width="100%"
          ></v-responsive>

      </v-row>
    </v-container>

  </v-layout>
</template>

<script>
import axios from "axios";
import bannerAnuncio from "~/assets/img/banner-inicio.png";
let banner1 = "https://sappi.ws/admin/imagenes/empresas/150921013128_logo principal.jpg";
let banner2 = "https://sappi.ws/admin/imagenes/empresas/140921192522_sappi.png";
let banner3 = "https://sappi.ws/admin/imagenes/empresas/150921163240_logo baby.png";

export default {

   layout: 'navigation',

   data(){
    return {
      empresa1: "empresa ejemplo",
      items: [
        {
          src: banner1,
        },
        {
          src: banner2,
        },
        {
          src: banner3,
        },
        {
          src: bannerAnuncio,
        },
      ],
    };
   },
  created(){
    console.log("===========EJECUTA MOUNTED=================");
     this.bannerAnuncios();
     console.log("===========DESPUES ANUNCIO=================");
  },
   methods:{
     onloadempresa1(){
       this.$router.push('/categoriasalud/' + this.empresa1);
     },
     bannerAnuncios(){
      axios
          .get('https://sappi.ws/admin/services/getSlider.php?estado=2')
                .then(response =>{
                  banner1 = response.data.slider[0].empImg;
                   banner2 = response.data.slider[1].empImg;
                  banner3 = response.data.slider[2].empImg;
                  console.log(banner1);
                   console.log(banner2);
                    console.log(banner3);
                })
                .catch(e => console.log(e))
    }
   }
}

</script>

<style scoped>
.carrusel{
  padding: 0;
  padding-bottom: 10px;}
.padding{
  padding: 15px 10px 10px 10px !important;
}
.grey{
  background-color: blue !important;
}
</style>


