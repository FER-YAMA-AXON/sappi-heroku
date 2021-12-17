<template>
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
</template>

<script>
import bannerAnuncio from "~/assets/img/banner-inicio.png";

var banner1 = "";
var banner2 = "";
var banner3 = "";
import axios from "axios";
export default {
    layout: 'navigation',
  middleware: "auth",
  data() {
    return {

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
   created: function () {
      console.log("==============EJECUTA MOUNTED===============");
       this.bannerAnuncios();
    },
  methods:{
    bannerAnuncios(){
      axios
          .get('https://sappi.ws/admin/services/getSlider.php?estado=2')
                .then(response =>{
                  banner1 = response.data.slider[0].empImg;
                   banner2 = response.data.slider[1].empImg;
                  banner3 = response.data.slider[2].empImg;
                    console.log("===variables======");
                    console.log(banner1);
                   console.log(banner2);
                    console.log(banner3);
                })
                .catch(e => console.log(e))
    }

  }
};
</script>

<style scoped>
.carrusel{
  padding: 0;
  padding-bottom: 10px;}
</style>
