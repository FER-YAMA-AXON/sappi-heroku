<template>
  <v-container>
    <div class="text-center">
     <img src="~/assets/img/logo_final_sappi.png" class="logo" alt="Logo Sappi" />
    </div>
    <v-row>
      <v-col>
        <div class="titulolabel orangetext"><h2>INGRESAR</h2></div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="wrapcontainer">
           <v-form v-model="valid" @submit.prevent="loginUser">
            <div class="formlabel">Correo electronico</div>
            <div class="forminput">
              <v-text-field
              color="warning"
                type="email"
                class="input"
                v-model="email"
                :rules="[required('email'), emailFormat()]"
                label="Escribe tu email"
                background-color="amber lighten-4"
              ></v-text-field>
            </div>
            <div class="formlabel">Contraseña:</div>
            <div class="forminput">
            <v-text-field
            color="warning"
            v-model="pass"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            label="Escribe tu contraseña"
              :rules="[required('password'), minLength('password', 6)]"
            class="input"
             background-color="amber lighten-4"
            @click:append="show2 = !show2"
          ></v-text-field>
            </div>
            <div class="formlabel">
              <v-checkbox
                v-model="mycheckbox"
                label="Recordarme"
                color="orange"
                value="orange"
                class="color-warning"
                hide-details
              ></v-checkbox>
            </div>
            <br />
           <v-alert
      outlined
      type="warning"
      dismissible
      border="left"
      v-if="error"
      v-model="alert"

    >
      {{error_msg}}, intente nuevamente.
    </v-alert>
            <div class="my-2">
            <!-- href="/"
            @click="submitForm(loginInfo)"
            -->
              <v-btn block type="submit" :class="{'disable-events':!valid}" color="warning" dark>INGRESAR</v-btn>
            </div>
          </v-form>

         <div class="hr">
  <span class="middle">
    O
  </span>
</div>
</br>
          <div><v-btn block color="primary"><img src="~/assets/img/facebook.png" class="sizeicon" alt="Logo facebook" />Con Facebook</v-btn></div>
          </br>
          <div><v-btn block><img src="~/assets/img/google.png" class="sizeicon" alt="Logo google" />Con Google</v-btn></div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="p">¿Olvidaste tu contraseña?</p>
       <p class="p">¿NO TIENES CUENTA? <span><a href="registrarUsuario">REGISTRATE</a></span></p>
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
      email: "", //tunmoo.ignacio3@gmail.com
      pass: "",  //12345678
      error: false,
      error_msg: "",
      mycheckbox: "",
      show2: false,
      alert: true,
      valid: false,
      ...validation,
    };
  },
  methods: {
    loginUser() {
      let formData = new FormData();
      formData.append("correo", this.email);
      formData.append("pass", this.pass);
      axios
        .post("https://sappi.ws/admin/ajax/Usuarios.php?op=LoginApp", formData)
        .then((res) => {
          if (res.data.success == true) {
            localStorage.setItem("nombre", res.data.data.Nombre);
            localStorage.setItem("email", res.data.data.correo);
            this.$router.push("/");
          } else {
            console.log(res.data);
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
.color-warning /deep/ label {
  color: rgb(245, 159, 0);
}
.disable-events {
  pointer-events: none;
}
</style>

