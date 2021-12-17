<template>
  <v-container>
    <div class="text-center">
      <img
        src="~/assets/img/logo_final_sappi.png"
        class="logo"
        alt="Logo Sappi"
      />
    </div>
    <v-row>
      <v-col>
        <div class="titulolabel orangetext"><h2>REGISTRATE</h2></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="wrapcontainer">
          <v-form v-model="valid" @submit.prevent="registrarUser">
            <div class="forminput">
              <v-text-field
                color="warning"
                type="text"
                class="input"
                name="name"
                :rules="[required('nombre'), minName('nombre', 6)]"
                v-model="name"
                label="Nombre(s)"
              ></v-text-field>
            </div>
            <div class="forminput">
              <v-text-field
                color="warning"
                type="email"
                v-model="email"
                name="email"
                :rules="[required('gmail'), emailFormat()]"
                label="Correo electrónico"
                class="input"
              ></v-text-field>
            </div>
            <div class="forminput">
              <v-text-field
                color="warning"
                type="number"
                v-model="cellphone"
                :rules="[required('numero'), minLength('numero', 6)]"
                name="cellphone"
                label="Número celular"
                class="input"
              ></v-text-field>
            </div>
            <div class="forminput">
              <v-text-field
                color="warning"
                v-model="password"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show2 ? 'text' : 'password'"
                name="password"
                :rules="[required('password'), minLength('password', 6)]"
                label="Escribe tu contraseña"
                hint="Mayor a 6 caracteres"
                class="input"
                @click:append="show2 = !show2"
              ></v-text-field>
            </div>
            <div>
              <v-row>
                <v-col cols="6">
                      <v-select
                        class="padding-select"
                        v-model="selectestado"
                        :items="itemsestado"
                        item-text="value"
                        item-value="id"
                        label="Selecciona estado"
                        color="warning"
                        required
                        :rules="[requiredselect('estado')]"
                      >
                      </v-select>
                </v-col>
                <v-col cols="6">
                             <v-select
                        class="padding-select"
                        v-model="selectciudad"
                        :items="itemsciudad"
                        item-text="value"
                        item-value="id"
                        label="selecciona ciudad"
                        color="warning"
                      >
                        <!--  required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"--->
                      </v-select>
                </v-col>
              </v-row>
            </div>
            <v-alert
              outlined
              type="warning"
              dismissible
              border="left"
              v-if="error"
              v-model="alert"
            >
              {{ error_msg }}, intente nuevamente.
            </v-alert>
            <br />
            <div class="my-2">
              <v-btn
                block
                type="submit"
                :class="{ 'disable-events': !valid }"
                color="warning"
                dark
                >REGISTRATE</v-btn
              >
            </div>
          </v-form>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="p">
          ¿YA TIENES CUENTA? <span><a href="login">INGRESAR</a></span>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Notification from "~/components/Notification";
import validation from "~/utils/validation";
import axios from "axios";

export default {
  components: {
    Notification,
  },

  data() {
    return {
      name: "juan perez rodriguez",
      email: "juanP@gmail.com",
      cellphone: "",
      password: "12345678",
      selectestado:null,
      selectciudad: null,
      error: false,
      error_msg: "",
      alert: true,
      valid: false,
      ...validation,
      show2: false,
       itemsestado: [
      { id: 1, value: "Yucatan" },
      { id: 2, value: "Campeche" },
      { id: 3, value: "Chiapas" },
      { id: 4, value: "Cancún" }
    ],
      itemsciudad: [
      { id: 1, value: "Mérida" },
      { id: 2, value: "homun" },
      { id: 3, value: "ixim" },
      { id: 4, value: "scarcegas" }
    ],
    };
  },
  methods: {
    registrarUser() {

    let formData = new FormData();
      formData.append("correo", this.email);
      formData.append("pass", this.password);
      formData.append("nombre", this.name);
      formData.append("telefono", this.cellphone);
      formData.append("estado", this.selectestado);
      formData.append("ciudad", this.selectciudad);
      axios
        .post("https://sappi.ws/admin/ajax/Usuarios.php?op=LoginApp", formData)
        .then((res) => {
          if (res.data.success == true) {
            this.error = true;
            this.alert = true;
            this.error_msg = res.data.mensaje;
          } else {
            console.log("data error", res);
            console.log("data JSON", this.email);
            console.log("data JSON", this.password);
            console.log("data JSON", this.name);
            console.log("data JSON", this.cellphone);
            this.error = true;
            this.alert = true;
            this.error_msg = res.data.mensaje;
          }
        });
    },
  },
};
</script>

<style scoped>
.hr {
  width: 100%;
  height: 20px;
  border-bottom: 1px solid black;
  text-align: center;
}
.middle {
  font-size: 12px;
  background-color: #ffffff;
  padding: 0 10px;
}
.orangetext {
  color: orange;
  font-weight: bold;
}
.sizeicon {
  width: 20px;
  height: 18px;
  padding-right: 2px;
}
.p {
  text-align: center;
  color: orange;
}
.bold {
  font-weight: bolder;
  padding-left: 20px;
}
.disable-events {
  pointer-events: none;
}
</style>

