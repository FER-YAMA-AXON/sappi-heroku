<template>
  <v-layout row wrap class="grey lighten-5 ">
    <div class="center">
      <h3>id product {{ $route.params.product }}</h3>
    </div>
    <div class="sliderinicio">
      <img src="~/assets/img/banner-qr.png" alt="Banner inicio" />
    </div>
    <v-row style="padding-top: 40px">
      <v-col>
        <v-card class="completo">
          <div class="tittle">Titulo del producto</div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="grey lighten-5 information">
      <v-col>
        <h4>Información</h4>
        <p>
          Lorem ipsum dolorem sit asimet s simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
        </p>
        <h4>Precio</h4>
        <p class="price">$999.00MXN</p>
      </v-col>
    </v-row>
    <v-responsive width="100%"></v-responsive>
      <v-container class="grey lighten-5">
        <v-row no-gutters class="icons-section">
          <v-col class="icons-center" cols="4">
            <img
              class="icons"
              src="~/assets/img/icon-telefono.png"
              alt="Icono"
            />

          </v-col>
          <v-col class="icons-center" cols="4">
          <div class="icon-dialog"> <SucursalDialog /></div>
          </v-col>
          <v-col class="icons-center" cols="4">
            <div class="icon-dialog"><CitaDialog/></div>

          </v-col>
          <v-responsive width="100%"></v-responsive>
        </v-row>
        <v-row no-gutters class="icons-text">
          <v-col class="icons-center" cols="4"> Llamar </v-col>
          <v-col class="icons-center" cols="4"> Sucursal </v-col>
          <v-col class="icons-center" cols="4"> Cita </v-col>
          <v-responsive width="100%"></v-responsive>
        </v-row>
      </v-container>

      <v-row class="maps">
        <v-col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43525.97308809638!2d-89.59568794341622!3d20.970875835779765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5671315295f24b%3A0xaa4bc3f6f20165c2!2sParque%20de%20la%20Alem%C3%A1n!5e0!3m2!1ses-419!2smx!4v1639008031799!5m2!1ses-419!2smx"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </v-col>
      </v-row>

  </v-layout>
</template>


<script>
import SucursalDialog from "~/components/SucursalDialog.vue";
import CitaDialog from "~/components/CitaDialog.vue";
export default {
  layout: "navigation",
  components: {
   SucursalDialog,
   CitaDialog
  },
};
</script>

<style scoped>
.center {
  text-align: center;
  display: flex;
  justify-content: center;
}
.tittle {
  padding: 15px 0px 15px 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 18px;
}
.information {
  padding-left: 20px !important;
  padding-right: 20px !important;
}
.price{
  padding-top: 0px;
  margin: 0px;
}
.icons-section {
  margin: 0;
  padding: 0;
}
.icon-dialog{
  padding-top:12px
}
.icons-center {
  text-align: center;
  display: flex;
  justify-content: center;
}
.icons {
  width: 40px !important;
  height: 40px !important;
}
.maps {
  margin: 0;
  padding: 0;
}

</style>

