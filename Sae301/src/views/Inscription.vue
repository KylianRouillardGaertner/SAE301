<template>
  <div class="bg-primary grid grid-cols-3 pt-12 pb-24">
    <div class="bg-white col-start-2 w-full grid grid-rows-4 pb-10">
      <div>
        <button @click="goBack">
          <img class="m-4 mb-0 max-w-[50%]" src="../../public/icons/Left.svg" alt="back">
        </button>
        <div class="text-center">
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
            <p class="text-xs mb-1">Prénom</p>
            <form @submit.prevent="submitForm">
              <input class="bg-primary w-[170px] text-xs pl-2 pr-5 py-3" type="text" v-model="firstName" required placeholder="Jean">
            </form>
          </div>
          <div class="mr-14 my-4">
            <p class="text-xs mb-1">Nom</p>
            <form>
              <input class="bg-primary w-[170px] text-xs pl-2 pr-5 py-3" type="text" v-model="lastName" required placeholder="Dupont">
            </form>
          </div>
        </div>
        <div class="mx-14">
          <p class="text-xs mb-1">Adresse Email</p>
          <form>
            <input class="bg-primary w-full text-xs px-2 py-3" type="email" v-model="email" required placeholder="Xyz@email.com">
          </form>
        </div>
        <div class="mx-14 my-4">
          <p class="text-xs mb-1">Mot de passe</p>
          <form>
            <input class="bg-primary w-full text-xs px-2 py-3" type="password" v-model="password" required placeholder="Mdp123">
          </form>
        </div>
        <div class="mx-14 my-4">
          <p class="text-xs mb-1">Image de profil</p>
          <form @submit.prevent="submitForm">
            <input class="bg-primary w-full text-xs px-2 py-3" type="file" id="avatar-input" @change="handleAvatarChange" required>
          </form>
        </div>
        <form @click.prevent="submitForm" class="mx-14 text-white text-center my-6">
          <button class="bg-btn w-full px-2 py-2" type="submit">S’inscrire</button>
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

<script setup>
import { ref, getCurrentInstance } from 'vue';
import PocketBase from 'pocketbase';
import { useRouter } from 'vue-router';

const { context, emit } = getCurrentInstance();
const router = useRouter();

const goBack = () => {
  window.history.back();
};

// const pb = new PocketBase("http://127.0.0.1:8090");
const pb = new PocketBase("https://sae301.kyliangaertner.space");

let email = ref('');
let password = ref('');
let firstName = ref('');
let lastName = ref('');
let avatar = ref(null);

const submitForm = async () => {
  // Création de l'objet utilisateur avec les données du formulaire
  const newUser = {
    email: email.value,
    password: password.value,
    passwordConfirm: password.value,
    prenom: firstName.value,
    nom: lastName.value,
    avatar: avatar.value,
  };

  try {
    // Créez un nouvel utilisateur dans la collection 'users'
    const addUserResponse = await pb.collection('users').create(newUser);
    

    // Connexion automatique de l'utilisateur après l'inscription
    const authData = await pb.collection('users').authWithPassword(newUser.email, newUser.password);

    // Redirigez l'utilisateur ou effectuez d'autres actions nécessaires
    emit('refresh-header');
    router.push('/'); // Rediriger l'utilisateur vers la page d'accueil après l'inscription
  } catch (error) {
    // Gérez les erreurs lors de l'inscription
    console.error("Erreur lors de l'inscription :", error.message);
    alert("Erreur lors de la création du compte. Veuillez vérifier vos informations.");
  }
};

// Méthode pour gérer le changement de fichier d'avatar
const handleAvatarChange = (event) => {
    // Obtenez le fichier sélectionné par l'utilisateur
    const selectedFile = event.target.files[0];

    // Vérifiez si un fichier a été sélectionné
    if (selectedFile) {
      // Vous pouvez stocker le fichier sélectionné dans la variable avatar ici pour une utilisation ultérieure.
      avatar.value = selectedFile;
      console.log('Nouvel avatar sélectionné :', avatar.value);
    }
  };
</script>
