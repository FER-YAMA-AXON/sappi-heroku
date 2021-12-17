<template>
  <v-layout row wrap>
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="290" persistent>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
             v-bind="attrs"
              v-on="on"
            style="width:120px"
           color="warning"
            dark
            @click="dialog = false"
          >
            Enviar
          </v-btn>
          </template>
          <v-card>
            <v-toolbar color="white" dark>
              <v-card-title class="tittle"> Agendar Cita </v-card-title>
            </v-toolbar>
            <v-container>
              <form method="post">
                <div class="card-beneficio">
                  <v-row>
                    <v-col cols="4">
                      <img src="~/assets/img/logo-qr.jpg" alt="Icono" />
                    </v-col>
                    <v-col cols="8">
                      <div>
                        <p class="tittle-product">Titulo del producto</p>
                        <p class="description">
                          Descripción de tu producto o servicio is simply dummy
                          text
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <div class="center">
                  Detalles de la cita
                </div>
                <div class="forminput">
                  <v-row>
                    <v-col class="label" cols="3">Fecha </v-col>
                    <v-col class="padding-text" cols="9">
                     <p>martes 9 noviembre 2021</p>
                    </v-col>
                  </v-row>
                    <v-row>
                    <v-col class="label-2" cols="3">Hora </v-col>
                    <v-col class="padding-text-2" cols="9">
                     <p>09:20:00 AM</p>
                    </v-col>
                  </v-row>
                      <v-row>
                    <v-col class="label-2" cols="5">Total a pagar</v-col>
                    <v-col class="padding-text-2 price" cols="7">
                     <p>500 MXN</p>
                    </v-col>
                  </v-row>
                </div>
              </form>
            </v-container>
                    <v-card-actions>
          <v-spacer></v-spacer>
          <v-row>
            <v-col cols="6">
          <v-btn

            outlined
            color="warning"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
            </v-col >
           <v-col cols="6"  style="padding-top:23px">
        <!--  <v-btn
            style="width:120px"
           color="warning"
            dark
            @click="dialog = false"
          >
            Confirmar
          </v-btn>--->
          <DatosTarjetaDialog/>
            </v-col>
          </v-row>

        </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import DatosTarjetaDialog from '~/components/DatosTarjetaDialog.vue'
export default {
  components:{DatosTarjetaDialog},
  layout: "navigation",
  data() {
    return {
      error: null,
      dialog: false,
      select1: null,
      select2: null,
      select3: null,
      comentario: "",
      checkbox: false,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    };
  },
};
</script>
<style scoped>
.icons {
  width: 40px !important;
  height: 40px !important;
}
.tittle {
  color: rgb(245, 159, 0);
  font-weight: bolder;
  font-size: 18px;
  padding-left: 0px;
}
.item-title {
  color: black !important;
  font-size: 16px !important;
  text-transform: none !important;
}

.label {
  padding: 20px 0px 0px 10px;
  color:gray;
}
.label-2 {
  padding: 1px 0px 0px 10px;
  color:gray;
}
.padding-text {
padding: 20px 0px 0px 1px;
 color:black;
}
.padding-text-2{
padding: 1px 0px 0px 1px;
color:black;
}
.price{
    color: rgb(121, 196, 9);
  font-weight: bolder;
}
.no-padding{
padding-bottom: 0px;
padding-top: 0px;
}
.color-warning /deep/ label{
  color: rgb(245, 159, 0);
}
.tittle-product{
  color: black !important;
  font-size: 17px;
  margin-bottom: 0px;
}
.description {
  color: grey;
  font-size: 12px;
}
.center{
  text-align: center;
}

</style>
