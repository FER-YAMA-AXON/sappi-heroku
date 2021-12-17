<template>
  <v-layout row wrap>
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <img
              v-bind="attrs"
              v-on="on"
              class="icons"
              src="~/assets/img/pin.png"
              alt="Icono"
            />
          </template>
          <v-card>
            <v-toolbar color="white" dark>
              <v-card-title class="tittle">
                Selecciona para trazar ruta
              </v-card-title>
            </v-toolbar>

            <v-container>
              <form method="post" @submit>
                <div class="forminput">
                  <v-btn class="item-title" text> Tu empresa </v-btn>
                </div>
              </form>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  layout: "navigation",
  data() {
    return {
      Escribe: "",
      error: null,
      dialog: false,
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
}
.item-title {
  color: black !important;
  font-size: 16px !important;
  text-transform: none !important;
}
</style>
