<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const methods = {
  resetScroll() {
    window.scrollTo(0, 0);
  }
}

</script>

<template>
    <main>
      <div class="bg-primary grid grid-cols-7 pb-8 pt-5 pl-5"> <!-- ici py-8 => pb-8 -->
        <div class="col-span-3 my-7 ml-10">
          <div>
            <h1 class="max-w-sm mb-2">Découvre Ton Style Unique avec TaVue</h1>
            <p class="max-w-xl mb-5">Bienvenue chez TaVue, l'endroit où la mode rencontre la personnalisation. Crée ta propre paire de lunettes qui reflète ta personnalité, ton style et ton unicité. Nos lunettes personnalisées sont conçues pour les âmes créatives qui recherchent bien plus qu'une simple paire de lunettes. C'est le moment de laisser libre cours à ton imagination et de faire ressortir la star en toi.</p>
          </div>
          <div class="py-1">
            <RouterLink to="/connexion" @click.prevent="methods.resetScroll()"><button class="bg-btn text-white text-center w-30 h-10 py-1.5 px-3 mr-3">Connecte toi !</button></RouterLink>
            <RouterLink to="/inscription" @click.prevent="methods.resetScroll()"><button class="border-btn border-2 text-btn text-center w-30 py-1.5 px-3 mr-3">Inscris toi !</button></RouterLink>
          </div>
        </div>
        <div class="my-auto col-span-4">
          <img class="max-w-xl mx-auto" src="../../public/Lunettes.svg" alt="test_image">
        </div>
      </div>
      <div class="grid grid-cols-2 py-10 pr-5">
        <div class="pl-5 ml-10">
          <img class="h-[230px] w-[550px] rounded-lg object-cover" src="../../public/illustration1.jpg" alt="Homme et femme à lunettes">
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-2 pr-3">
          <div>
            <h3 class="mb-1">La Personnalisation Illimitée</h3>
            <p>Donnez vie à vos rêves avec notre gamme infinie d'options de personnalisation. Créez des lunettes qui vous ressemblent.</p>
          </div>
          <div>
            <h3 class="mb-1">Qualité Premium</h3>
            <p>Chaque paire de lunettes est fabriquée avec des matériaux de haute qualité pour une durabilité et un confort exceptionnels.</p>
          </div>
          <div>
            <h3 class="mb-1">Livraison Express</h3>
            <p>Nous comprenons que l'attente peut être difficile. C'est pourquoi nous offrons une livraison express pour que vous puissiez profiter de vos lunettes plus rapidement.</p>
          </div>
          <div>
            <h3 class="mb-1">Satisfaction Garantie</h3>
            <p>Nous sommes fiers de la satisfaction de nos clients. Si vous n'êtes pas entièrement satisfait, nous trouverons une solution qui vous convient</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 py-10 pl-5">
        <div class="my-7 ml-10">
          <div>
            <h2 class="max-w-xs mb-5">L'Art de la Personnalisation</h2>
            <p class="max-w-xl mb-10">Chez TaVue, nous considérons la personnalisation des lunettes comme une forme d'art. Chaque paire est une toile vierge, prête à être transformée en une expression unique de votre style et de votre personnalité. Découvrez comment nous mettons l'art au cœur de la personnalisation de lunettes pour vous offrir une expérience exceptionnelle.</p>
          </div>
          <div class="py-1">
            <RouterLink to="/personalisation" @click.prevent="methods.resetScroll()"><button class="bg-btn text-white text-center w-30 h-10 py-1.5 px-3 mr-3">Commencez la Personnalisation</button></RouterLink>
            <button class="border-btn border-2 text-btn text-center w-30 py-1.5 px-3 mr-3">Découvrez nos Collections</button>
          </div>
        </div>
        <div class="my-auto pr-8 mr-3">
          <img class="h-[230px] w-[550px] rounded-lg object-cover float-right" src="../../public/illustration2.png" alt="Homme et femme à lunettes">
        </div>
      </div>
      <div class="grid grid-rows-3 px-[40px] py-10">
        <div class="row-span-2 text-center mx-auto my-auto">
          <h2 class="mb-5">La Révolution TaVue en Quelques Chiffres</h2>
          <p class="max-w-5xl">Chez TaVue, nous croyons en la puissance de la personnalisation et de l'expérience client. Découvre pourquoi notre approche unique révolutionne le monde des lunettes personnalisées avec des chiffres qui parlent d'eux-mêmes.</p>
        </div>
        <div class="row-span-1 grid grid-cols-3 gap-16 mt-3">
          <div class="w-full h-16 border-primary border-2 grid grid-cols-7">
            <div class="col-span-1 w-10 h-10 m-auto bg-primary">
              <img class="mx-auto my-[8px]" src="../../public/icons/smiley.svg" alt="visage content">
            </div>
            <div class="col-span-4 my-auto">
              <h4 class="font-bold text-base">80 %</h4>
              <p class="text-secondary text-xs">De clients satisfait</p>
            </div>
          </div>
          <div class="w-full h-16 border-primary border-2 grid grid-cols-7">
            <div class="col-span-1 w-10 h-10 m-auto bg-primary">
              <img class="mx-auto my-[5px]" src="../../public/icons/truck.svg" alt="visage content">
            </div>
            <div class="col-span-4 my-auto">
              <h4 class="font-bold text-base">2 Jours</h4>
              <p class="text-secondary text-xs">De livraison en moyenne</p>
            </div>
          </div>
          <div class="w-full h-16 border-primary border-2 grid grid-cols-7">
            <div class="col-span-1 w-10 h-10 m-auto bg-primary">
              <img class="mx-auto my-[4px]" src="../../public/icons/star.svg" alt="visage content">
            </div>
            <div class="col-span-4 my-auto">
              <h4 class="font-bold text-base">4,24 Étoiles</h4>
              <p class="text-secondary text-xs">En moyenne</p>
            </div>
          </div>
        </div>
      </div>
      <div class="py-3 px-10">
        <div class="my-auto pb-8">
          <h2 class="text-center">Nos Recommandations Personnalisées</h2>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <div class="grid grid-rows-2">
            <div class="bg-primary">
              <img class="mt-4" src="../../public/Mode.png" alt="modele lunette">
            </div>
            <div class="grid grid-rows-3 bg-white border-primary border-2">
              <div class="row-span-2">
                <h4 class="font-bold text-base m-3 ml-[10px]">Adoptez le Dernier Cri de la Mode</h4>
                <p class="mx-[10px]">Soyez en avance sur la mode avec cette paire de lunettes dernier cri. Laissez-vous guider par les recommandations de nos experts en style.</p>
              </div>
              <div class="row-span-1 grid grid-cols-4">
                <button class="text-btn w-30 py-1.5 ml-[10px]">Plus d'info</button>
                <img class="my-auto" src="../../public/icons/right.svg" alt="right arrow">
                <button class="text-red-600 font-bold w-30 py-1.5 col-span-2">12h restantes</button>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-2">
            <div class="bg-primary">
              <img class="mt-4" src="../../public/Geek.png" alt="modele lunette">
            </div>
            <div class="grid grid-rows-3 bg-white border-primary border-2">
              <div class="row-span-2">
                <h4 class="font-bold text-base m-3 ml-[10px]">Le Chic en Mode Anti-Lumière Bleue</h4>
                <p class="mx-[10px]">Associez la mode au bien-être avec ces lunettes élégantes et dotées d'une protection anti-lumière bleue. Un choix intelligent pour un style de vie moderne.</p>
              </div>
              <div class="row-span-1 grid grid-cols-4">
                <button class="text-btn w-30 py-1.5 ml-[10px]">Plus d'info</button>
                <img class="my-auto" src="../../public/icons/right.svg" alt="right arrow">
                <button class="text-red-600 font-bold w-30 py-1.5 col-span-2">12h restantes</button>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-2">
            <div class="bg-primary">
              <img class="mt-4" src="../../public/French.png" alt="modele lunette">
            </div>
            <div class="grid grid-rows-3 bg-white border-primary border-2">
              <div class="row-span-2">
                <h4 class="font-bold text-base m-3 ml-[10px]">L'Élégance à la Française</h4>
                <p class="mx-[10px]">Découvrez l'essence du style français avec ces lunettes. Elle ajoutera une touche française à votre look.</p>
              </div>
              <div class="row-span-1 grid grid-cols-4">
                <button class="text-btn w-30 py-1.5 ml-[10px]">Plus d'info</button>
                <img class="my-auto" src="../../public/icons/right.svg" alt="right arrow">
                <button class="text-red-600 font-bold w-30 py-1.5 col-span-2">12h restantes</button>
              </div>
            </div>
          </div>
          <div class="grid grid-rows-2">
            <div class="bg-primary">
              <img class="mt-4" src="../../public/Retro.png" alt="modele lunette">
            </div>
            <div class="grid grid-rows-3 bg-white border-primary border-2">
              <div class="row-span-2">
                <h4 class="font-bold text-base m-3 ml-[10px]">Rétro Chic : La Paire Intemporelle</h4>
                <p class="mx-[10px]">Revivez la magie des années passées avec ces lunettes au charme rétro. Une opportunité de posséder un morceau d'histoire de la mode.</p>
              </div>
              <div class="row-span-1 grid grid-cols-4">
                <button class="text-btn w-30 py-1.5 ml-[10px]">Plus d'info</button>
                <img class="my-auto" src="../../public/icons/right.svg" alt="right arrow">
                <button class="text-red-600 font-bold w-30 py-1.5 col-span-2">12h restantes</button>
              </div>
            </div>
          </div>
        </div>  
        <div class="grid grid-cols-3 py-8 pb-12">
          <button class="col-start-2 bg-btn text-white text-center w-30 h-10 py-1.5 px-3 mx-auto">Voir Plus de Produits</button>
        </div>
      </div>
      <div class="grid grid-cols-5 bg-primary py-8 px-10">
        <div class="my-7 col-span-3">
          <div>
            <h2 class="mb-2">VOTRE style VOTRE choix !</h2>
            <p>Ne laissez pas passer l'opportunité de créer des lunettes qui reflètent votre personnalité. Personnalisez maintenant.</p>
          </div>
        </div>
        <div class="my-auto col-span-2 justify-end">
          <RouterLink to="/inscription" @click.prevent="methods.resetScroll()"><button class="bg-btn text-white text-center w-30 h-10 py-1.5 px-3 mr-3 float-right">Rejoins nous !</button></RouterLink>
          <RouterLink to="/personalisation" @click.prevent="methods.resetScroll()"><button class="border-btn border-2 text-btn text-center w-30 py-1.5 px-3 mr-3 float-right">Deviens l'artiste !</button></RouterLink>
        </div>
      </div>
      <!-- <div class="bg-blue-600"></div>
      <div class="bg-red-600"></div> -->
    </main>
</template>
