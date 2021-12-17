<template>
  <v-layout row wrap>
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="290" persistent>
          <template v-slot:activator="{ on, attrs }">
            <img
              v-bind="attrs"
              v-on="on"
              class="icons"
              src="~/assets/img/citas.png"
              alt="Icono"
            />
          </template>
          <v-card>
            <v-toolbar color="white" dark>
              <v-card-title class="tittle"> Agendar Cita </v-card-title>
            </v-toolbar>
            <v-container>
              <form method="post" @submit.prevent="enviar">
                <div class="forminput">
                  <v-row>
                    <v-col class="label" cols="3"> Sucursal </v-col>
                    <v-col class="padding-select" cols="9">
                      <v-select
                        v-model="select1"
                        :items="items"
                        label="Seleccionar"
                        color="warning"
                      >

                        <!--:error-messages="selectErrors"
                            required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"--->
                      </v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="label-2" cols="3">Fecha </v-col>
                    <v-col class="padding-select" cols="9">
                      <v-select
                        class="padding-select"
                        v-model="select2"
                        :items="items"
                        label="Fecha"
                        color="warning"
                      >
                        <!--  required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"--->
                      </v-select>
                    </v-col>
                  </v-row>
                    <v-row>
                    <v-col class="label-2" cols="3">Hora </v-col>
                    <v-col class="padding-select" cols="9">
                      <v-select
                        class="padding-select"
                        v-model="select3"
                        name="select3"
                        :items="items"
                        label="Hora"
                        color="warning"
                      >
                        <!--  required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"--->
                      </v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="no-padding">
               <v-text-field
                hide-details
                outlined
                name="comentario"
                v-model="comentario"
                color="warning"
                label="comentario..."
              ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="no-padding">
              <v-checkbox
              class="no-padding color-warning"
      v-model="checkbox"
      label="Pagar ahora"
      color="warning"
    >
    <!--
       :error-messages="checkboxErrors"
         required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"--->
    </v-checkbox>
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
          <v-col cols="6" style="padding-top:23px">
           <!---  <v-btn
            type="submit"
             v-bind="attrs"
              v-on="on"
            style="width:120px"
           color="warning"
            dark
            @click="dialog = false"
          >
            Enviar
          </v-btn>-->
            <ConfirmacionDialog/>
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
import ConfirmacionDialog from '~/components/ConfirmacionDialog.vue'
export default {
  components:{ConfirmacionDialog},
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
   methods: {
    enviar() {
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
  padding: 30px 0px 0px 10px;
}
.label-2 {
  padding: 30px 0px 0px 10px;
}
.padding-select {
  padding: 6px;
}
.no-padding{
padding-bottom: 0px;
padding-top: 0px;
}
.color-warning /deep/ label{
  color: rgb(245, 159, 0);
}

</style>
