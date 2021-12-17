<template>
  <v-layout row wrap>
    <v-container>
    <div class="text-center">
      <img src="~/assets/img/logo_final_sappi.png" class="logo" alt="Logo Sappi" />
    </div>
    <div class="espacio"></div>
    <div class="tittle">
      <h4>Quienes Somos:</h4>
    </div>
        <div class="sangria">
      <p>Somos una empresa Mexicana innovadora, que encuentra en la colectividad oportunidades para dar beneficios a sus usuarios.</p>
    </div>
      <div class="sangria">
      <p>Buscamos que toda persona descubra que la unión nos da la fortaleza y de esta unión podemos procurar a nuestros anunciantes nuevas áreas de oportunidad y espacios idóneos para promocionar sus productos y servicios.</p>
    </div>
    <div class="tittle">
   <h4>Misión:</h4>
    </div>
        <div class="sangria">
      <p>Ser una empresa que trabaja continuamente para encontrar oportunidades en productos y servicios, que busca benenficios y los pongo al alcance de nuestros usuarios, generando trabajo y desarrollo para nuestros anunciantes.</p>
    </div>
        <div class="tittle">
   <h4>Visión:</h4>
    </div>
        <div class="sangria">
      <p>Ser una compañia que impulsa ideas y planes para el bien común, aspirando a contribuir a un desarrollo comunitario equitativo.</p>
    </div>
    </v-container>

  </v-layout>
</template>

<style scoped>
.espacio{
  padding: 40px 0px 0px 10px;
}
.tittle{
padding: 0px 0px 0px 20px;
font-weight: bolder;
color: black;
}
.sangria{
text-indent: 20px;
font-weight:700;
font-size: 14px;
padding: 0px 20px 0px 20px;

}

</style>

<script>
export default {
   layout: 'navigation',
}
</script>
