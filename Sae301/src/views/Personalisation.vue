<script setup>
import Modele from '../../public/configurateur/Lunettes.vue';
import { ref } from 'vue';
import PocketBase from 'pocketbase';

const pb = new PocketBase("https://sae301.kyliangaertner.space");

const activePart = ref(0);
const coche1 = ref(true);
const coche2 = ref(true);
const coche3 = ref(false);
const coche4 = ref(true);
const coche5 = ref(true);

const part1 = () => {
  activePart.value = 0;
};

const part2 = () => {
  activePart.value = 1;
};

const part3 = () => {
  activePart.value = 2;
};

const toggleCoche1 = () => {
  coche1.value = !coche1.value;
};

const toggleCoche2 = () => {
  coche2.value = !coche2.value;
};

const toggleCoche3 = () => {
  coche3.value = !coche3.value;
};

const toggleCoche4 = () => {
  coche4.value = !coche4.value;
};

const toggleCoche5 = () => {
  coche5.value = !coche5.value;
};

const colorValues = ref({
  couleur_cadre: 'nn8hcwci8ei8h4e', // Valeur par défaut pour cadre
  couleur_branches: '4x688lixgqsnat1', // Valeur par défaut pour branches
  couleur_verres: 'z1a1rjjd6ojattz', // Valeur par défaut pour verres
  materiau_verre: 't9x8w0h938xad5q',
  materiau_cadre: 'opddxvvimu5cl5r',
  // Ajoutez d'autres éléments ici avec leurs valeurs par défaut
});

const setColorValue = (element, colorId) => {
    colorValues[element] = colorId;
};

const voirMonPanier = () => {
  // Ensuite, envoyez les données à PocketBase
  console.log('Valeurs de couleur sélectionnées :', colorValues.couleur_cadre, colorValues.couleur_branches, colorValues.couleur_verres);
  pb.collection('Lunettes').create({
    couleur_cadre: colorValues.value.couleur_cadre,
    couleur_branches: colorValues.value.couleur_branches,
    couleur_verres: colorValues.value.couleur_verres,
    materiau_cadre: colorValues.value.materiau_cadre,
    materiau_verre: colorValues.value.materiau_verre,
    soleil: coche1.value,
    anti_reflet: coche2.value,
    anti_bleu: coche3.value,
    // Ajoutez d'autres champs Lunettes ici
  });
};
</script>

<template>
    <div class="grid grid-cols-8">
        <div class="col-span-5 py-24 px-10 mt-10">
            <Modele />
        </div>
        <div class="col-span-3 bg-gray-300 grid grid-rows-6">
            <div v-show="activePart === 2">
                <button @click="part2"><img class="m-4" src="../../public/icons/Left.svg" alt="back"></button>
            </div>
            <div v-show="activePart === 1">
                <button @click="part1"><img class="m-4" src="../../public/icons/Left.svg" alt="back"></button>
            </div>
            <div class="row-start-2 row-span-4 grid grid-rows-2">
                <div class="grid grid-rows-2 mx-auto" v-show="activePart === 2">
                        <h2 class="my-auto text-center">Matériaux Monture :</h2>
                        <div class="inline-flex mx-auto">
                            <div class="mr-2 ">
                                Plastique :
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche5(); setColorValue('materiau_cadre', 'opddxvvimu5cl5r')"><img v-show="coche5" src="../../public/icons/Check.svg" alt=""></button>
                            </div>
                            <div class="mx-2">
                                Métal :
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche5(); setColorValue('materiau_cadre', 'jcz2dbx8qvv6l0l')"><img v-show="coche5 === false" src="../../public/icons/Check.svg" alt=""></button>
                            </div>
                        </div>
                </div>
                <div class="grid grid-rows-2 mx-auto" v-show="activePart === 2">
                        <h2 class="my-auto text-center">Matériaux Verres :</h2>
                        <div class="inline-flex mx-auto">
                            <div class="mr-2">
                                Organique :
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche4(); setColorValue('materiau_verre', 't9x8w0h938xad5q')"><img v-show="coche4 === false" src="../../public/icons/Check.svg" alt=""></button>
                            </div>
                            <div class="mx-2">
                                Minéraux :
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche4(); setColorValue('materiau_verre', 'jx16646pymdh6tt')"><img v-show="coche4" src="../../public/icons/Check.svg" alt=""></button>
                            </div>
                        </div>
                </div>
                <div class="text-center" v-show="activePart === 1">
                    <h2>Verres :</h2>
                    <div class="grid grid-rows-2 gap-5 mt-5">
                        <div class="inline-flex items-center mx-auto">
                            <button><div @click="setColorValue('couleur_verres', '8f5h4ln6e9pddlu')" class="bg-yellow-300 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#E0D83E', verre2.style.fill='#E0D83E'"></div></button>
                            <button><div @click="setColorValue('couleur_verres', 'g4mie1lwll2snj3')" class="bg-blue-950 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#201460', verre2.style.fill='#201460'"></div></button>
                            <button><div @click="setColorValue('couleur_verres', '4x688lixgqsnat1')" class="bg-green-800 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#234F13', verre2.style.fill='#234F13'"></div></button>
                            <button><div @click="setColorValue('couleur_verres', 'z1a1rjjd6ojattz')" class="bg-gray-900 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#2D2D2D', verre2.style.fill='#2D2D2D'"></div></button>
                        </div>
                        <div class="inline-flex items-center mx-auto">
                            <button><div @click="setColorValue('couleur_verres', 'otkpzkb5peb9hgk')" class="bg-red-800 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#5F0905', verre2.style.fill='#5F0905'"></div></button>
                            <button><div @click="setColorValue('couleur_verres', 'nn8hcwci8ei8h4e')" class="bg-purple-900 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#3E0F5B', verre2.style.fill='#3E0F5B'"></div></button>
                            <button><div @click="setColorValue('couleur_verres', '8k8x3ie7raku2w0')" class="bg-orange-700 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#73440D', verre2.style.fill='#73440D'"></div></button>
                            <button><div @click="setColorValue('couleur_verres', 'sxdonx39ox5bv11')" class="bg-gray-200 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#E2E2E1', verre2.style.fill='#E2E2E1'"></div></button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-rows-2" v-show="activePart === 1">
                    <div class="grid grid-cols-2">
                        <div class="grid grid-rows-2 mx-auto">
                            <h2 class="my-auto text-center">Solaire :</h2>
                            <div class="inline-flex">
                                <div class="mr-2">
                                    <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche1"><img v-show="coche1" src="../../public/icons/Check.svg" alt=""></button>
                                    Oui
                                </div>
                                <div class="mx-2">
                                    <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche1"><img v-show="coche1 === false" src="../../public/icons/Check.svg" alt=""></button>
                                    Non
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-2 mx-auto">
                            <h2 class="my-auto text-center">Anti-reflet :</h2>
                            <div class="inline-flex">
                                <div class="mr-2">
                                    <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche2"><img v-show="coche2" src="../../public/icons/Check.svg" alt=""></button>
                                    Oui
                                </div>
                                <div class="mx-2">
                                    <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche2"><img v-show="coche2 === false" src="../../public/icons/Check.svg" alt=""></button>
                                    Non
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-rows-2 mx-auto">
                        <h2 class="my-auto">Anti lumière bleu :</h2>
                        <div class="inline-flex mx-auto">
                            <div class="mr-2">
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche3"><img v-show="coche3" src="../../public/icons/Check.svg" alt=""></button>
                                Oui
                            </div>
                            <div class="mx-2">
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche3"><img v-show="coche3 === false" src="../../public/icons/Check.svg" alt=""></button>
                                Non
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center" v-show="activePart === 0">
                    <h2>Branches :</h2>
                    <div class="grid grid-rows-2 gap-5 mt-5">
                        <div class="inline-flex items-center mx-auto">
                            <button><div @click="setColorValue('couleur_branches', '8f5h4ln6e9pddlu')" class="bg-yellow-300 w-10 h-10 rounded-3xl mx-2 " onclick="branche1.style.fill='#E0D83E', branche2.style.fill='#E0D83E'" ></div></button>
                            <button><div @click="setColorValue('couleur_branches', 'g4mie1lwll2snj3')" class="bg-blue-300 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#4CBFD7', branche2.style.fill='#4CBFD7'"></div></button>
                            <button><div @click="setColorValue('couleur_branches', '4x688lixgqsnat1')" class="bg-green-400 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#73BF4C', branche2.style.fill='#73BF4C'"></div></button>
                            <button><div @click="setColorValue('couleur_branches', 'z1a1rjjd6ojattz')" class="bg-gray-900 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#2D2D2D', branche2.style.fill='#2D2D2D'"></div></button>
                        </div>
                        <div class="inline-flex items-center mx-auto">
                            <button><div @click="setColorValue('couleur_branches', 'otkpzkb5peb9hgk')" class="bg-red-500 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#B4231C', branche2.style.fill='#B4231C'"></div></button>
                            <button><div @click="setColorValue('couleur_branches', 'nn8hcwci8ei8h4e')" class="bg-purple-500 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#804B93', branche2.style.fill='#804B93'"></div></button>
                            <button><div @click="setColorValue('couleur_branches', '8k8x3ie7raku2w0')" class="bg-orange-400 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#DA8725', branche2.style.fill='#DA8725'"></div></button>
                            <button><div @click="setColorValue('couleur_branches', 'sxdonx39ox5bv11')" class="bg-gray-200 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#E2E2E1', branche2.style.fill='#E2E2E1'"></div></button>
                        </div>
                    </div>
                </div>
                <div class="text-center" v-show="activePart === 0">
                    <h2>Cadre :</h2>
                    <div class="grid grid-rows-2 gap-5 mt-5">
                        <div class="inline-flex items-center mx-auto">
                            <button><div @click="setColorValue('couleur_cadre', '8f5h4ln6e9pddlu')" class="bg-yellow-300 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#E0D83E'"></div></button>
                            <button><div @click="setColorValue('couleur_cadre', 'g4mie1lwll2snj3')" class="bg-blue-950 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#201460'"></div></button>
                            <button><div @click="setColorValue('couleur_cadre', '4x688lixgqsnat1')" class="bg-green-800 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#234F13'"></div></button>
                            <button><div @click="setColorValue('couleur_cadre', 'z1a1rjjd6ojattz')" class="bg-gray-900 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#2D2D2D'"></div></button>
                        </div>
                        <div class="inline-flex items-center mx-auto">
                            <button><div @click="setColorValue('couleur_cadre', 'otkpzkb5peb9hgk')"  class="bg-red-800 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#5F0905'"></div></button>
                            <button><div @click="setColorValue('couleur_cadre', 'nn8hcwci8ei8h4e')"  class="bg-purple-900 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#3E0F5B'"></div></button>
                            <button><div @click="setColorValue('couleur_cadre', '8k8x3ie7raku2w0')"  class="bg-orange-700 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#73440D'"></div></button>
                            <button><div @click="setColorValue('couleur_cadre', 'sxdonx39ox5bv11')"  class="bg-gray-200 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#E2E2E1'"></div></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center row-start-6 row-span-1" v-show="activePart === 0">
                <button class="bg-btn text-white text-center w-30 h-10 py-1.5 px-3 mx-auto inline-flex items-center" @click="part2">Suivant <img class="ml-2" src="../../public/icons/Vector2.svg" alt="flèche"></button>
            </div>
            <div class="text-center row-start-6 row-span-1" v-show="activePart === 1">
                <button class="bg-btn text-white text-center w-30 h-10 py-1.5 px-3 mx-auto inline-flex items-center" @click="part3">Suivant <img class="ml-2" src="../../public/icons/Vector2.svg" alt="flèche"></button>
            </div>
            <div class="text-center row-start-6 row-span-1" v-show="activePart === 2">
                <button class="bg-btn text-white text-center w-30 h-10 py-1.5 px-3 mx-auto inline-flex items-center" @click="voirMonPanier">Voir mon panier <img class="ml-2" src="../../public/icons/Vector2.svg" alt="flèche"></button>
            </div>
        </div>
    </div>
</template>