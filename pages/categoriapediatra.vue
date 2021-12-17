<template>
  <v-layout row wrap>
        <v-container class="white lighten-5">
      <v-row no-gutters>

          <v-col>
         <h3 class="center">Pediatría</h3>
          </v-col>
          <v-responsive

            width="100%"
          ></v-responsive>

      </v-row>
    </v-container>


      <v-container class="grey lighten-5">
      <v-row no-gutters>

          <v-col  >
            <v-card
              class="pa-2 text-center"
              outlined
              tile
            >
             <img src="~/assets/img/sappi-logo.png" alt="Icono" /><br>
              <v-btn text href="empresa">Empresa de Ejemplo</v-btn>
            </v-card>
          </v-col>
          <v-col  >
            <v-card
              class="pa-2 text-center"
              outlined
              tile
            >
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
export default {
   layout: 'navigation',
}
</script>
<style scoped>
.center{
 text-align: center;
   display: flex;
  justify-content: center;
}
</style>
