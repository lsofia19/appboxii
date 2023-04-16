<template>
<div class="mt-15">
    <v-container >
      <v-row class="text-center">
        <h2 style="color:#1F306E; font-size:40"><span style="color:#f5487f;">Configurar</span> Mi Alcancia</h2>
      </v-row>
      <v-row class="text-center">
        <h2 style="color:#1F306E; font-size:40">{{this.fecha}}</h2>
      </v-row>
      </v-container>
         <v-container class="text-center">

<v-row aling="center"  justify="center"><v-col cols="12" sm="10" md="6" lg="4">
     <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-text-field type="number" v-model="id" label="ID Alcancia" placeholder="" filled rounded></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-text-field v-model="proyecto" label="Mi proyecto" placeholder="Ej: Viaje a Cancun" filled rounded></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-text-field type="number" v-model="meta" label="Mi meta" placeholder="Ej: 1.000.000" filled rounded></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-text-field  filled rounded><input @change="calcular()" type="date" v-model="fechameta" label="Mi meta se cumplira"></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-checkbox v-model="reset" label="Volver el contador a 0"></v-checkbox>
        </v-col>
        <v-btn @click="configurar()" rounded block color="#1F306E" dark height="10vh">Aceptar</v-btn>
      </v-row>
    </v-container>
  <v-dialog v-model="dialog" max-width="290"><v-card><br><v-card-text>{{this.alerttext}}</v-card-text><v-card-actions><v-spacer></v-spacer><v-btn color="green darken-1" text @click="dialog = false">Ok</v-btn></v-card-actions></v-card></v-dialog>
  </v-form>

<div class="text-center">
  </div><br>
    <div class="text-center">
      <a @click="volver()" style="text-decoration:none !important; color:#f5487f">Volver</a>  
    </div>                
    </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'crearcuenta',
    components: {
    },
    mounted(){

        this.leer()
    },
    data: function(){
      return{
        id:"",
        proyecto:"",
        meta:"",
        email:'',
        dialog:0,
        alerttext:'',
        reset:false,
        fecha:'',
        fechameta:'',
      }
    },
    methods:{
      volver()
      {
        this.$router.push('/Home');
      },
      leer(){
        this.id=localStorage.id
        this.err=false
            axios.get("https://boxii.camigaitan.com/conector/api.php?funcion=4&id="+this.id)
            .then(data=>{
                let informacion=data.data.split(',')
                this.meta=informacion[1],
                this.proyecto=informacion[0]
           })
            .catch(error=>{
              this.alerttext = "Error al registrar el usuario"
              this.dialog=true
            }
              )
        },
      configurar(){
        this.email=localStorage.email
        this.err=false
        if (this.id.length!=0 && this.proyecto.length!=0 && this.meta.length!=0)
        {
            axios.get("https://boxii.camigaitan.com/conector/api.php?funcion=3&id="+this.id+"&proyecto="+this.proyecto+"&meta="+this.meta+"&email="+this.email+"&reset="+this.reset)
            .then(data=>{
              console.log(data)
              this.dialog=false,
              this.volver()
            })
            .catch(error=>{
              this.alerttext = "Error al registrar el usuario"
              this.dialog=true
            }
              )
        }
        else
        {
          this.alerttext="campo vacio";
          this.dialog=true;
        }
        },
        calcular()
        {
          const hoy = new Date()
          const ano = hoy.getFullYear()
          const mes = hoy.getMonth() + 1
          const dia = hoy.getDate()
          this.fecha = `${ano}-${mes}-${dia}`
          var date1_ms = Date.parse(this.fecha)
          var date2_ms = Date.parse(this.fechameta)
          var difference_ms = Math.abs(date1_ms - date2_ms)
          var dias=Math.round(difference_ms/86400000)
          alert(parseInt(this.meta)/parseInt(dias))
        }
        }
  }
</script>