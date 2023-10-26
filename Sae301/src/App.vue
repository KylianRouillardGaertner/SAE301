<script setup>
// Import éléments de vue
import { ref, onMounted,provide } from 'vue';
// Import éléments de routage
import Home from '@/views/HomeView.vue'
import Headerpage from '@/components/Header.vue'
import Footerpage from '@/components/Footer.vue'
import { useRouter } from 'vue-router';
import PocketBase from 'pocketbase'
const router = useRouter()


  // Objet pocketBase
  // const pb = new PocketBase("http://127.0.0.1:8090");
  const pb = new PocketBase("https://sae301.kyliangaertner.space");


  // Element de connexion
  let user = ref('')
  let psw = ref('')

    // User connecté
  let currentUser = ref(null)
  let avatar = ref(null)

  // user connecté ? au départ faux
  let isConnected = ref(false)

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
      // "http://127.0.0.1:8090/api/files/" 
      "https://sae301.kyliangaertner.space/api/files/"  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"                   // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
    console.log("connecté : ",authData)
    refresh()    
  }catch(error){
//    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({name:"HomeView"})
}

const refreshTrigger = ref(0);

const incrementRefreshTrigger = () => {
  refreshTrigger.value++;
  // Émettre l'événement ici si nécessaire
  // this.$emit('refresh-header');
};
provide('refreshTrigger', refreshTrigger);
</script>

<template>
  <header>
    <Headerpage :refreshTrigger="refreshTrigger" />
  </header>
  <div>
    <RouterView @refresh-header="incrementRefreshTrigger" />
  </div>
  <footer>
    <Footerpage/>
  </footer>
</template>
