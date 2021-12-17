<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
    <div class="drawerlogo" style=" padding-left:20px;">
      <img src="~/assets/img/logo_final_sappi.png" class="logopequeño" alt="Logo Sappi" />
          <div class="drawer-nombre">{{nombre}}</div>
          <div class="drawer-email">{{email}}</div>
    </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
         <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-comment-question-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <SugerenciaDialog/>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :key="index" @click="logout">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Cerrar Sesion</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="warning"
    >
      <v-app-bar-nav-icon style="color:white" @click.stop="drawer = !drawer" />
      <v-btn
      style="color:white"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!--BUSCADOR HERE--->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <p class="sin-padding">S.A.P.P.I <span> &copy; {{ new Date().getFullYear() }}</span></p>
    </v-footer>
  </v-app>
</template>
<style scoped>
.logopequeño{
    width: 120px;
 height:139px;

}
</style>

<script>
import SugerenciaDialog from '~/components/SugerenciaDialog.vue'
import { mapGetters } from 'vuex';
export default {

  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      nombre: "",
      email: "",
      index: "",
      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '/'
        },
        {
          icon: 'mdi-account-outline',
          title: 'Acerca de nosotros',
          to: '/acerca'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
 computed: {
   // ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
    mounted(){
      this.auth_storage();
  },

  methods: {
    logout(){
      localStorage.removeItem('nombre');
      localStorage.removeItem('email');
      this.$router.push('/login');
    },
    auth_storage() {
         if(localStorage.getItem('nombre') || localStorage.getItem('email') ){
      this.nombre = localStorage.getItem('nombre');
       this.email = localStorage.getItem('email');
      }else{
      this.$router.push('/login');
    }
    }
  },
   components: {SugerenciaDialog}
}
</script>

<style>
.sin-padding{
  padding: 0px 0px 0px 0px;
}
.drawerlogo{
  background-color:#FF9800;
}
.drawer-nombre{
  color: white;
  font-weight: bold;
  font-size: 18px;
}
.drawer-email{
  color: white;
  padding-bottom: 10px;
}

.padding-categoria{
  padding: 15px 10px 10px 10px !important;
}
</style>



