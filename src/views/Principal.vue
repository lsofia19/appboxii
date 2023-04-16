<template>
<div style="background-color:#1F306E">
        <v-app-bar class="shrink py-0" color="#1F306E" fixed elevation="0" dark height="40%">
          <v-spacer></v-spacer>
          <v-btn
          color="#1F306E"
          @click="configuracion()"
  elevation="0"
>          <v-icon>mdi-cog</v-icon>
</v-btn>
        </v-app-bar>
  <v-container class="text-center">
    <v-row aling="center" class="mt-10" justify="center"><v-col cols="12" sm="10" md="6" lg="4">
      <h3 style="color:#1F306E; font-size:40"><span style="color:white;">Hola {{this.usuario}} </span></h3><br>
      <h4 style="color:#1F306E; font-size:40"><span style="color:#f5487f;">Tu ahorro </span></h4><br><br>
      <h1 style="color:white; font-size:40"><span style="color:white;">${{String(Intl.NumberFormat('es-MX',{ maximumSignificantDigits: 10 }).format(parseFloat(String(this.ahorro)).toFixed(0)))}}</span></h1><br><br>
    </v-col>
    </v-row>
<v-card
    class="mx-auto"
    max-width="400"
    color="#1F3060"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5">
        <v-icon
        color="#f5487f"
        size="50"
      >
        mdi-target
      </v-icon>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-text
    color="#26c6da"
    >
      <v-row align="center">
        <v-col
          class="text-h2"
          cols="12"
        >
        <h6 style="color:white; font-size:10"><span style="color:white;">{{this.proyecto}}</span></h6><br><br>
        </v-col>
      </v-row>
    </v-card-text>
      <h4 style="color:#1F306E; font-size:40"><span style="color:#f5487f;">Tiene un costo de </span></h4><br><br>
      <h1 style="color:white; font-size:40"><span style="color:white;">${{String(Intl.NumberFormat('es-MX',{ maximumSignificantDigits: 10 }).format(parseFloat(String(this.meta)).toFixed(0)))}}</span></h1><br><br>


  </v-card>
  </v-container>
</div>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        meta:'',
        proyecto:'',
        usuario:localStorage.usuario,
        ahorro:0
      }
    },
    mounted () {
          this.actualizar()
        },

      methods:{
        actualizar()
        {
          let id=localStorage.id
        axios.get("https://boxii.camigaitan.com/conector/api.php?funcion=2&id="+id)
        .then(data=>{
          let informacion=data.data.split(',')
          this.ahorro=parseInt(informacion[0])*1000
          this.meta=informacion[1]
          this.proyecto=informacion[2]
          })
        .catch(error => {})
        },
        configuracion()
        {
          this.$router.push('/Configuracion');
        },
        listar()
        {
          alert('s')
        }
  }
  }
</script>
