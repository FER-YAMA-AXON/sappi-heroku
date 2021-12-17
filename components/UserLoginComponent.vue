<template>


 <v-form v-model="valid">
            <div class="formlabel">Correo electronico</div>
            <div class="forminput">
              <v-text-field
              color="warning"
                type="email"
                class="input"
                v-model="loginInfo.email"
                :rules="[required('email')]"
                label="Escribe tu email"
                background-color="amber lighten-4"
              ></v-text-field>
            </div>
            <div class="formlabel">Contraseña:</div>
            <div class="forminput">
            <v-text-field
            color="warning"
            v-model="loginInfo.password"
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

            <div class="my-2">
            <!-- href="/"
            @click="submitForm(loginInfo)"
            -->
              <v-btn block  @click="submitForm(loginInfo)" :class="{'disable-events':!valid}" color="warning" dark>{buttonText}</v-btn>
            </div>
          </v-form>
</template>

<script>
import validation from "~/utils/validation";

export default {


  data() {
    return {
      loginInfo:{
      email: "",
      password: "",
      },
      error: null,
      mycheckbox: "",
      show2: false,
      valid: false,
      ...validation
    };
  },
  props: ["submitForm", "buttonText"]
}
</script>

<style scoped>

.p{
  text-align: center;
   color: orange;
}
.color-warning /deep/ label{
  color: rgb(245, 159, 0);
}
.disable-events {
  pointer-events: none
}
</style>


