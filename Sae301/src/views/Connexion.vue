<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log('Email submitted:', this.email);
      console.log('Password submitted:', this.password);
    },
    goBack() {
      window.history.back();
    }
  }
}
</script>
<script setup>
// Import éléments de vue
import { ref, onMounted, getCurrentInstance } from 'vue';
// Import éléments de routage
import { useRouter } from 'vue-router';
import PocketBase from 'pocketbase'
const router = useRouter()
const { context, emit } = getCurrentInstance();


const pb = new PocketBase("http://127.0.0.1:8090");
let user = ref('')
let psw = ref('')



const connect = async () => {
  try {
    const authData = await pb.collection('users').authWithPassword(user.value, psw.value);
    console.log("Connecté : ", authData);
    
    // Émettre l'événement "refresh-header" ici
    emit('refresh-header');
    router.push('/')
    
  } catch (error) {
    console.log("Erreur de connexion : ", error.message);
    alert("Erreur d'identification : mauvais login et/ou mot de passe");
    user.value = "";
    psw.value = "";
  }
}

</script>
<template>
    <div class="bg-primary grid grid-cols-3 pt-12 pb-24">
        <div class="bg-white col-start-2 w-full grid grid-rows-4 pb-10 ">
            <div>
                <button @click="goBack"><img class="m-4 mb-0 max-w-[50%]" src="../../public/icons/Left.svg" alt="back"></button>
                <div class="text-center mb-4">
                    <h1>
                        Déjà de retour ?
                    </h1>
                    <p class="text-sm mr-2">
                        Connectez-vous pour continuer
                    </p>
                </div>
            </div>
            <div class="row-span-2 my-auto">
                <div class="mx-14 my-4">
                    <p class="text-xs mb-1">Adresse Email</p>
                    <form @submit.prevent="submitForm">
                        <input class="bg-primary w-full text-xs px-2 py-3" type="text" v-model="user" required placeholder="Xyz@email.com">
                    </form>
                </div>
                <div class="mx-14 my-4">
                    <p class="text-xs mb-1">Mot de passe</p>
                    <form @submit.prevent="submitForm">
                        <input class="bg-primary w-full text-xs px-2 py-3" type="password" v-model="psw" required placeholder="Mdp123">
                    </form>
                </div>
                <form @click.prevent="connect" class="mx-14 text-white text-center my-6">
                    <button class="bg-btn w-full px-2 py-2" type="submit">Se connecter</button>
                </form>
            </div>
            <div>
                <div class="mx-14 mb-4 text-center border-t-2 border-b-2 border-primary">
                    <p class="text-xs my-2">Ou connectez-vous avec:</p>
                    <button class="bg-white text-btn w-full px-2 py-1 mt-2 mb-3 border-2 border-btn" @click="signInWithGoogle">
                        <img class="inline-block mr-2" src="../../public/icons/Google.svg" alt="Google logo">
                        Google
                        <img class="inline-block mr-2" src="../../public/icons/right.svg" alt="Google logo">
                    </button>
                </div>
                <div class="inline-flex ml-[162px]">
                    <p class="text-xs mr-1">Pas de compte ?</p>
                    <RouterLink class="underline text-xs" to="/inscription"> Inscrivez-vous !</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>