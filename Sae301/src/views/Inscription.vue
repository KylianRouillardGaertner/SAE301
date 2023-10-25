<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log('Email submitted:', this.email);
      console.log('Password submitted:', this.password);
      console.log('First name submitted:', this.firstName);
      console.log('Last name submitted:', this.lastName);
    },
    goBack() {
      window.history.back();
    }
  }
}
</script>
<script setup>
// Import éléments de vue
import { ref, onMounted } from 'vue';
// Import éléments de routage
import { useRouter } from 'vue-router';
const router = useRouter()

 // Import pocketbase
 import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");

  
  // user connecté ? au départ faux
  let isConnected = ref(false)

  // Element de connexion
  let user = ref('')
  let psw = ref('')

  // User connecté
  let currentUser = ref(null)
  let avatar = ref(null)

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

const connect = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
//    console.log("connecté : ",authData)
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
</script>
<template>
    <div class="bg-primary grid grid-cols-3 pt-12 pb-24">
        <div class="bg-white col-start-2 w-full grid grid-rows-4 pb-10 ">
            <div>
                <button @click="goBack"><img class="m-4 mb-0 max-w-[50%]" src="../../public/icons/Left.svg" alt="back"></button>
                <div class="text-center mb-4">
                    <h1>
                        Bienvenue !
                    </h1>
                    <p class="text-sm mr-2">
                        Inscrivez-vous pour recevoir des offres exclusives !
                    </p>
                </div>
            </div>
            <div class="row-span-2 my-auto">
                <div class="inline-flex">
                    <div class="mx-14 my-4">
                        <p class="text-xs mb-1">Prenom</p>
                        <form @submit.prevent="submitForm">
                            <input class="bg-primary w-[170px] text-xs pl-2 pr-5 py-3" type="text" v-model="firstName" required placeholder="Jean">
                        </form>
                    </div>
                        <div class="mr-14 my-4">
                        <p class="text-xs mb-1">Nom</p>
                        <form @submit.prevent="submitForm">
                            <input class="bg-primary w-[170px] text-xs pl-2 pr-5 py-3" type="text" v-model="lastName" required placeholder="Dupont">
                        </form>
                    </div>
                </div>
                <div class="mx-14">
                    <p class="text-xs mb-1">Adresse Email</p>
                    <form @submit.prevent="submitForm">
                        <input class="bg-primary w-full text-xs px-2 py-3" type="email" v-model="email" required placeholder="Xyz@email.com">
                    </form>
                </div>
                <div class="mx-14 my-4">
                    <p class="text-xs mb-1">Mot de passe</p>
                    <form @submit.prevent="submitForm">
                        <input class="bg-primary w-full text-xs px-2 py-3" type="password" v-model="password" required placeholder="Mdp123">
                    </form>
                </div>
                <form @submit.prevent="submitForm" class="mx-14 text-white text-center my-6">
                    <button class="bg-btn w-full px-2 py-2  " type="submit">S’inscrire</button>
                </form>
            </div>
            <div>
                <div class="mx-14 mb-4 text-center border-t-2 border-b-2 border-primary">
                    <p class="text-xs my-2">Ou inscrivez-vous avec :</p>
                    <button class="bg-white text-btn w-full px-2 py-1 mt-2 mb-3 border-2 border-btn" @click="signInWithGoogle">
                        <img class="inline-block mr-2" src="../../public/icons/Google.svg" alt="Google logo">
                        Google
                        <img class="inline-block mr-2" src="../../public/icons/right.svg" alt="Google logo">
                    </button>
                </div>
                <div class="ml-[220px]">
                    <RouterLink class="underline text-xs" to="/connexion">Déjà Inscrit ?</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>