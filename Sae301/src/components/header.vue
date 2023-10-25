<script setup>
  // Import éléments de vue
  import { ref, onMounted, watchEffect, inject } from 'vue';
  // Import éléments de routage
  import { useRouter } from 'vue-router';
  import PocketBase from 'pocketbase'
const router = useRouter()

const pb = new PocketBase("http://127.0.0.1:8090");
let currentUser = ref(null)
let avatar = ref(null)
let isConnected = ref(false)

const refreshTrigger = inject('refreshTrigger');

// Au montage du composant
onMounted(async() => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = ()=>{
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"                   // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)
  }
}

// Watch the refreshTrigger variable
watchEffect(() => {
  // Réagir au changement de la variable refreshTrigger ici
  console.log('Refresh trigger changed:', refreshTrigger.value);  
  refresh()
});

const deconnect = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push('/')
}
</script>
<template>
    <main>
        <div class="bg-primary grid grid-cols-3 pb-1">
            <div class="m-auto">
                <RouterLink class="mx-3" to="/personalisation">Personnalisation</RouterLink>
                <button class="mx-3">Offres</button>   
                <button class="mx-3 inline-flex items-center">Collections <img class="ml-2 mt-1" src="../../public/icons/Vector.svg" alt="flèche"></button>
                <button class="mx-3">Boutique</button>
            </div>
            <div class="mx-auto pt-3">
                <RouterLink to="/"><img src="../../public/MiniLogo.svg" alt="logo corpo"></RouterLink>
            </div>
            <div v-if="isConnected" class="my-auto pr-10 text-center">
                <button class="mx-3 float-right mt-1"><img class="my-auto" src="../../public/icons/Basket.svg" alt="Panier"></button>
                <div class="border-2 border-btn ml-28 w-[280px] h-[63px]">
                  <button class="text-white text-center w-30 h-10 py-1.5 px-3 mx-3 mt-2 float-right inline-flex items-center" type="button" @click="deconnect">
                    <img class="w-[30px]" src="../../public/icons/Exit.svg" alt="Deconnect">
                  </button>
                  <img :src="avatar" class="img-fluid float-right" style="max-width:60px; border-radius: 50%;" />           
                  <div class="text-black float-right mr-3 mt-4">
                    {{ currentUser.prenom }} {{ currentUser.nom }}
                  </div>
                </div>
            </div>
            <div v-else class="my-auto pr-10">
                <RouterLink to="/connexion"><button class="bg-btn text-white text-center w-30 h-10 py-1.5 px-3 mx-3 float-right inline-flex items-center">Connexion<img class="ml-2" src="../../public/icons/Vector2.svg" alt="flèche"></button></RouterLink>
                <RouterLink to="/inscription"><button class="border-btn border-2 text-btn text-center w-30 py-1.5 px-3 mx-3 float-right">Inscription</button></RouterLink>
                <button class="mx-3 float-right"><img class="my-auto" src="../../public/icons/Basket.svg" alt="Panier"></button>
            </div>
        </div>
    </main>
</template>
<!-- <div class="ml-auto">              
    <span v-if="isConnected"> 
      <img :src="avatar" class="img-fluid mr-2" style="max-width:60px; border-radius: 50%;" />
      <button class="btn btn-light mr-2">
        {{ currentUser.name }}
      </button>              
      <button class="btn btn-dark ml-auto" type="button" @click="deconnect">
          <i class="fa fa-sign-out"></i>
        </button>
    </span>

    <form v-else class="form-inline  input-group-sm ml-auto" >
        <input class="form-control mr-2" placeholder="Login" v-model="user">
        <input class="form-control mr-2" type="password" placeholder="Password" v-model="psw">
        <button class="btn btn-dark ml-auto" 
            type="button" @click.prevent="connect">
            <i class="fa fa-power-off"></i>
        </button>
      </form>
    </div> -->