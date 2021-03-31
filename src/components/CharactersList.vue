<template>
    <div class="container">
        <div class="card-body text-center ">
           <h3 class="card-title display-5 m-4 ">Seleccione a los fotografos del World Press Photo 2020</h3>
        </div>
        
       <table class="table ">
            <thead>
               <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Nacionalidad</th>
                  <th scope="col">Accion</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="character in characters" :key="character.id">
                   <th scope="row">{{ character.id }}</th>
                   <td>{{ character.Nombre  | capitalize }}</td>
                   <td>{{ character.Apellido  | capitalize }}</td>
                   <td>{{ character.Edad }}</td>
                   <td>{{ character.Nacionalidad  | capitalize }}</td>
                    <td class="d-flex justify-content-around "> 
                       <button class="btn btn-sm btn-secondary "   @click="obtenerFotografo(character.id)" data-toggle="modal" data-target="#exampleModalLabel">Editar</button> 
                       <button class="btn btn-sm btn-secondary " @click="eliminar(character.id)">Eliminar</button>  
                    </td> 
                </tr>
   
            </tbody>
            
        </table>
        <!-- Modal Agregar -->
        <button type="button" class="btn btn-sm  btn-secondary " data-toggle="modal" data-target="#exampleModalLabel">Agregar Fotografo</button>
       <div class="modal fade" id="exampleModalLabel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                   <div class="modal-header ">
                       <h5 class="modal-title " id="exampleModalLabel">Complete los campos: </h5>
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                       </button>
                    </div>
                   <div class="modal-body ">
                        <input class="d-none" type="text"  v-model="id">
                       <p class="">Ingrese Nombre</p>
                       <input class="" type="text"   v-model="nombre">
                       <p class="mt-2">Ingrese Apellido</p>
                        <input class="" type="text"   v-model="apellido">
                        <p class="mt-2">Ingrese Edad</p>
                        <input class="" type="text"   v-model="edad">
                       <p class="mt-2">Ingrese Nacionalidad</p>
                       <input class="" type="text"   v-model="nacionalidad">
                    </div>
                    <div class="modal-footer  ">
                        <button class="btn btn-sm btn-secondary " data-dismiss="modal" @click="Agregar()">Agregar Fotografo</button>
                        <button class="btn btn-sm btn-secondary "   data-dismiss="modal"  @click="editarFotografo()" >Editar</button>
                        <button class="btn btn-sm btn-danger " data-dismiss="modal" @click="resetInputs()">Cancelar</button>
                    </div>
               </div>
           </div> 
        </div>  
         

    </div>

    
</template>
<script>

import axios from 'axios';
export default {
   
    data() {
        return {
          characters: [],
         
          id:"", 
          nombre: '',
          apellido: '',
          edad: '',
          nacionalidad: '',
          
        }     
    },
   
    mounted() {
        this.getCharacters();
       
        
    },
    methods:  {
        getCharacters() {
            axios.get("https://605c011f6d85de00170d91c5.mockapi.io/character")
                .then((resp) => {
                    const data = resp.data
                    this.characters = data;
                })
            .catch(e => console.log(e))
        },
        Agregar() {
            axios.post("https://605c011f6d85de00170d91c5.mockapi.io/character", {
                Nombre: this.nombre,
                Apellido: this.apellido,
                Edad: this.edad,
                Nacionalidad: this.nacionalidad,
                        
                })
                .then((resp) => {
                    const data = resp.data
                    this.nuevoFotografo = data;
                    this.resetInputs()
                    this.getCharacters();
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        eliminar(id) {
            axios.delete("https://605c011f6d85de00170d91c5.mockapi.io/character/"+ id )
            .then(resp => {
                this.characters = resp.data.id;
                this.getCharacters();
                
            })
        },   
        resetInputs() {
            this.nombre = '';
            this.apellido = '';
            this.edad = '';
            this.nacionalidad = '';
        },
        obtenerFotografo(id){
            axios.get("https://605c011f6d85de00170d91c5.mockapi.io/character/" + id)
                .then(resp => {
                                        
                    this.id = resp.data.id; 
                    this.nombre = resp.data.Nombre; 
                    this.apellido = resp.data.Apellido;   
                    this.edad = resp.data.Edad; 
                    this.nacionalidad = resp.data.Nacionalidad;
                })
        },
        editarFotografo(){
           axios.put("https://605c011f6d85de00170d91c5.mockapi.io/character/" + this.id,{
                        Nombre: this.nombre,
                        Apellido: this.apellido,
                        Edad: this.edad,
                        Nacionalidad: this.nacionalidad,
                        
                    })
                    .then(resp => {
                        console.log(resp.data);
                        this.getCharacters();
                        this.resetInputs();
                    })
                        
        },
        
        
                   
             
       
        
    },  
       
        
    
}

</script>
<style lang="">


</style>