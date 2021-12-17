<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        content-class="my-custom-dialog"
      >
        <!--Boton de categoria-empresa-->
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on"
            ><h4>{{ $route.params.empresa }}</h4></v-btn
          >
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar color="white" dark class="tittle-dialogs">
              <v-row>
                <v-col cols="10">
                  <v-card-actions> Beneficios </v-card-actions>
                </v-col>
                <v-col cols="2">
                  <v-card-actions class="justify-end">
                    <v-btn
                      style="color: grey"
                      text
                      @click="dialog.value = false"
                      >X</v-btn
                    >
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-toolbar>
            <v-card-text>
              <a style="text-decoration: none" text @click="onloadproduct">
                <div class="card-beneficio">
                  <v-row>
                    <v-col cols="4">
                      <img src="~/assets/img/logo-qr.jpg" alt="Icono" />
                    </v-col>
                    <v-col cols="8">
                      <div>
                        <p class="tittle">Titulo del producto</p>
                        <p class="description">
                          Descripción de tu producto o servicio is simply dummy
                          text
                        </p>
                        <h3 class="price">$ 500 MXN</h3>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </a>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "navigation",

  data() {
    var ruta = '{{$route.params.empresa}}';
    return {
      product: "6",
      cad: ruta,
    };
  },
  methods: {
    onloadproduct() {
      this.$router.push(
        '/categoriasalud/'+this.cad+ '/' + this.product
      );
    },
  },
};
</script>
<style scoped>
.tittle-dialogs {
  color: rgb(245, 159, 0);
  font-weight: bolder;
  font-size: 18px;
}
.from-bottom {
  position: absolute !important;
  bottom: 0 !important;
}
>>> .my-custom-dialog {
  align-self: flex-end;
  margin: 0px !important;
}
.justify-end {
  padding-left: 50px;
  padding-top: 0%;
}
.card-beneficio {
  margin: 10px 1px 1px 1px;
}
.tittle {
  color: black !important;
  font-size: 17px;
  margin-bottom: 0px;
}
.description {
  color: grey;
}
.price {
  color: rgb(121, 196, 9);
  font-weight: bolder;
}
</style>

