<template>
<div class="mt-15">
    <v-container >
      <v-row>
        <h1 style="color:#1F306E; font-size:40;text-align:center"><span style="color:#f5487f;">Crea</span> tu cuenta</h1>
      </v-row>
      </v-container>
         <v-container class="text-center">

<v-row aling="center"  justify="center"><v-col cols="12" sm="10" md="6" lg="4">
     <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-text-field v-model="nombre" label="Nombre" placeholder="Pepito" filled rounded></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-text-field v-model="email" label="Correo electrónico" placeholder="pepito@ejemplo.com" filled rounded></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-text-field v-model="password1" label="Contraseña" placeholder="••••••••••••••" type="password" filled rounded></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <v-text-field v-model="password2" label="Repetir contraseña" placeholder="••••••••••••••" type="password" filled rounded></v-text-field>
        </v-col>        
        <v-btn @click="crear()" rounded block color="#1F306E" dark height="10vh">Crear</v-btn>
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
    },
    data: function(){
      return{
        nombre:"",
        email:"",
        password1:"",
        password2:"",
        error:false,
        errorMessages: '',
        dialog:false,
        alerttext:'',
      }
    },
    methods:{
      volver()
      {
        this.$router.push('/');
      },
      crear(){
        alert(this.id)
        this.err=false
        if (this.nombre.length!=0 && this.email.length!=0 && this.password1.length!=0 && this.password2.length!=0 )
        {
          if (this.password1==this.password2)
          {
            axios.get("https://boxii.camigaitan.com/conector/api.php?funcion=1&nombre="+this.nombre+"&email="+this.email+"&password="+this.password1)
            .then(data=>{
              console.log(data)
              this.dialog=false,
              this.alerttext = "Registrado correctamente",
              this.dialog=true,
              this.email='',
              this.password1='',
              this.password2=''
              this.volver()
            })
            .catch(error=>{
              this.alerttext = "Error al registra usuario"
              this.dialog=true
            }
              )
          }
          else
          {
          this.alerttext="las contraseñas no coinciden";
          this.dialog=true;            
          }
        }
        else
        {
          this.alerttext="campo vacio";
          this.dialog=true;
        }
        },
    },
  }
</script>