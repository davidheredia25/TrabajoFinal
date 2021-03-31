<template>
    <nav class="navbar navbar-expand-md fixed-top navbar-light bg-white">
        <div class="container ">
          
           <img alt="logo" src="../../imagenes/HEY.png" width="60" height="30">

            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse ">
                <ul class="navbar-nav ">
                  
                    <li class="nav-item"> <router-link class="nav-link" to="/"> Home </router-link> </li>
                    <li class="nav-item"> <router-link class="nav-link" to="/fotografos"> Fotografos</router-link></li>
                    <li class="nav-item"> <router-link class="nav-link" to="/contacto"> Contacto</router-link></li>
                </ul>
            </div>
        </div>
        
    </nav>
    
</template>
<script>
    export default {
    }
</script>
<style>
    .navbar-nav{
       margin-left: 20px;
    
    }
</style>
