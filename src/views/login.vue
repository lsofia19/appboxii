<template>
<div class="mt-15">
    <v-container class="ml-4">
          <v-row fluid>
        <h1 style="color:#1F306E; font-size:40"><span style="color:#f5487f;">Ingresa</span> a tu cuenta</h1>
      </v-row>
      </v-container>
  <v-container class="text-center">
  <v-row aling="center"  justify="center"><v-col cols="12" sm="10" md="6" lg="4">
     <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field v-model="email" label="Correo electrónico" placeholder="pepito@ejemplo.com" filled rounded></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field v-model="password" label="Contraseña" placeholder="••••••••••••••" type="password" filled rounded></v-text-field>
            </v-col>
            <v-btn @click="login()" rounded block color="#1F306E" dark height="10vh">Iniciar sesión</v-btn>
          </v-row>
        </v-container>
      </v-form>
  <div class="text-center">
  </div><br>
    <div class="text-center">
      <a @click="volver()" style="text-decoration:none !important; color:#f5487f">Volver</a>  
    </div>               
    </v-col>
  </v-row>
  </v-container>
    <v-dialog v-model="dialog" max-width="290"><v-card><br><v-card-text>{{this.alerttext}}</v-card-text><v-card-actions><v-spacer></v-spacer><v-btn color="green darken-1" text @click="dialog = false">Ok</v-btn></v-card-actions></v-card></v-dialog>
  </div>
</template>
<script>
import axios from 'axios'
  export default {
    name: 'Home',
    components: {
    },
    mounted(){
    },
    data: function(){
      return{
        email:"",
        password:"",
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
      login(){
        this.err=false
        if (this.email.length!=0 && this.password.length!=0)
        {
        let json={
          "email":this.email,
          "password":this.password
        };
        axios.get("https://boxii.camigaitan.com/conector/api.php?funcion=0&email="+this.email+"&password="+this.password)
        .then(data=>{
          let informacion=data.data.split(',')
          if(data.data.length<2)
          {
          this.alerttext = "información no valida"
          this.dialog=true
          }
          else
          {
          localStorage.email=informacion[0];
          localStorage.usuario=informacion[1];
          localStorage.id=informacion[2];
          this.$router.push('/Home');
          }
        })
        .catch(error => {
          this.alerttext = "Validar información"
          this.dialog=true
        }
          )
        }
        else
        {
          this.alerttext="ingrese sus datos";
          this.dialog=true;
        }
      },
    },
  }
</script>