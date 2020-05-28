<template>
  <div class="perfil">
    <div class="AppBar">
        <AppBar/>
    </div>
    <div class="body">
      <InfoPerfil/>
      <div class="contenido">
          <LineasFotos/>
      </div>
      <v-card class="flex" color="purple darken-1">
        <v-card-text>
          <span>&copy;2020  FlashGram</span>
        </v-card-text>
      </v-card>
    </div>  
  </div> 
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/AppBar';
import InfoPerfil from '@/components/InfoPerfil';
import LineasFotos from '@/components/LineasFotos'

export default {
  name: 'App',

  components: {
    AppBar,
    InfoPerfil,
    LineasFotos
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">
    .contenido{
        max-width: 900px;
        margin: 0 auto 30px;
        border-style: solid;
        border-width:thin;
        border-bottom:1px;
        border-left: none;
        border-right: none;
        display: flex;  
        position: relative;
        align-items: center;  
        text-align:left;    
    }
</style>