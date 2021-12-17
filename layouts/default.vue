<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
   <p class="sin-padding"> S.A.P.P.I <span>&copy; {{ new Date().getFullYear() }}</span></p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      fixed: false,
    }
  }
}
</script>

<style scoped>
.sin-padding{
  padding: 0px 0px 0px 0px;
  text-align: center;
}
</style>
