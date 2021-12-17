<template>
  <v-layout row wrap>
  <v-container>
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
          <template v-slot:activator="{ on, attrs }">
          <v-btn
          class="item-title"
          text
          v-bind="attrs"
          v-on="on"
        >
         Sugerencias
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h6">
          Envianos tu sugerencia
        </v-card-title>
        <v-container>
           <form method="post" @submit>
                <div class="forminput">
              <v-text-field
                outlined
                class="input"
                name="Escribe"
                v-model="Escribe"
                label="Escribe..."
                color="warning"
              ></v-text-field>
            </div>
           </form>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="orange darken-1"
            text
            @click="dialog = false"
          >
            exit
          </v-btn>
          <v-btn
           color="warning"
            dark
            @click="dialog = false"
          >
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {

   layout: 'navigation',
   data(){
     return{
         Escribe: "",
      error: null,
       dialog: false
     }
   }
}
</script>
<style scoped>
.item-title{
  background-color: transparent !important;
   color: black !important;
  font-size: 15px !important;
  padding-right: 85px !important;
  font-weight:lighter;
  font-family: Arial, sans-serif;
  text-transform: none !important;
}
</style>
