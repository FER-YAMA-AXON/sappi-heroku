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
            Confirmar
          </v-btn>
          </template>
          <v-card>
              <v-card-title class="tittle"> Datos de su tarjeta </v-card-title>
            <v-container>
              <form method="post" @submit.prevent="pagar">
                <div class="forminput">
                  <v-row>
                    <v-col>
          <v-text-field
           single-line
            label="Número de tarjeta"
            prepend-inner-icon="mdi-credit-card"
          ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="4">
          <v-text-field
           single-line
            label="Vence"
          ></v-text-field>
                    </v-col>
                    <v-col cols="4">
          <v-text-field
           single-line
            label="CVC"
          ></v-text-field>
                    </v-col>
                    <v-col  cols="4">
          <v-text-field
           single-line
            label="Código de seguridad"
          ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
              </form>
            </v-container>
                    <v-card-actions>
          <v-spacer></v-spacer>
          <v-row>
          <v-col>
            <v-btn
            type="submit"
             v-bind="attrs"
              v-on="on"
            class="pagar"
           color="info"
            dark
            @click="dialog = false"
          >
          Pagar
          </v-btn>
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

export default {

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
   methods: {
    pagar() {
      //this.$store.commit("fakelogin");
      //this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.icons {
  width: 40px !important;
  height: 40px !important;
}
.tittle {
  color: black;
  font-weight: bold;
  font-size: 18px;
  padding-left: 0px;
}
.item-title {
  color: black !important;
  font-size: 16px !important;
  text-transform: none !important;
}


.no-padding{
padding-bottom: 0px;
padding-top: 0px;
}
.color-warning /deep/ label{
  color: rgb(245, 159, 0);
}
.pagar{
  width: 250px;
}
</style>
