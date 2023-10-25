<script setup>
import Modele from '../../public/configurateur/Lunettes.vue'
</script>
<script>
export default {
  data() {
    return {
      activePart: 0,
      coche1: true,
      coche2: true,
      coche3: true,
      coche4: true,
      coche5: true,
    }
  },
  methods: {
    part1() {
      this.activePart = 0;
    },
    part2() {
      this.activePart = 1;
    },
    part3() {
      this.activePart = 2;
    },
    toggleCoche1() {
        this.coche1 = !this.coche1;
    },
    toggleCoche2() {
        this.coche2 = !this.coche2;
    },
    toggleCoche3() {
        this.coche3 = !this.coche3;
    },
    toggleCoche4() {
        this.coche4 = !this.coche4;
    },
    toggleCoche5() {
        this.coche5 = !this.coche5;
    },
  }
}
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
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche5"><img v-show="coche5" src="../../public/icons/Check.svg" alt=""></button>
                            </div>
                            <div class="mx-2">
                                Métal :
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche5"><img v-show="coche5 === false" src="../../public/icons/Check.svg" alt=""></button>
                            </div>
                        </div>
                </div>
                <div class="grid grid-rows-2 mx-auto" v-show="activePart === 2">
                        <h2 class="my-auto text-center">Matériaux Verres :</h2>
                        <div class="inline-flex mx-auto">
                            <div class="mr-2">
                                Organique :
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche4"><img v-show="coche4 === false" src="../../public/icons/Check.svg" alt=""></button>
                            </div>
                            <div class="mx-2">
                                Minéraux :
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche4"><img v-show="coche4" src="../../public/icons/Check.svg" alt=""></button>
                            </div>
                        </div>
                </div>
                <div class="text-center" v-show="activePart === 1">
                    <h2>Verres :</h2>
                    <div class="grid grid-rows-2 gap-5 mt-5">
                        <div class="inline-flex items-center mx-auto">
                            <button><div class="bg-yellow-300 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#E0D83E', verre2.style.fill='#E0D83E'"></div></button>
                            <button><div class="bg-blue-950 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#201460', verre2.style.fill='#201460'"></div></button>
                            <button><div class="bg-green-800 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#234F13', verre2.style.fill='#234F13'"></div></button>
                            <button><div class="bg-gray-900 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#2D2D2D', verre2.style.fill='#2D2D2D'"></div></button>
                        </div>
                        <div class="inline-flex items-center mx-auto">
                            <button><div class="bg-red-800 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#5F0905', verre2.style.fill='#5F0905'"></div></button>
                            <button><div class="bg-purple-900 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#3E0F5B', verre2.style.fill='#3E0F5B'"></div></button>
                            <button><div class="bg-orange-700 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#73440D', verre2.style.fill='#73440D'"></div></button>
                            <button><div class="bg-gray-200 w-10 h-10 rounded-3xl mx-2" onclick="verre1.style.fill='#E2E2E1', verre2.style.fill='#E2E2E1'"></div></button>
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
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche3"><img v-show="coche3 === false" src="../../public/icons/Check.svg" alt=""></button>
                                Oui
                            </div>
                            <div class="mx-2">
                                <button class="w-5 h-5 bg-gray-400 border-2 rounded-md border-secondary" @click="toggleCoche3"><img v-show="coche3" src="../../public/icons/Check.svg" alt=""></button>
                                Non
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center" v-show="activePart === 0">
                    <h2>Branches :</h2>
                    <div class="grid grid-rows-2 gap-5 mt-5">
                        <div class="inline-flex items-center mx-auto">
                            <button class="rounded-3xl"><div class="bg-yellow-300 w-10 h-10 rounded-3xl mx-2 " onclick="branche1.style.fill='#E0D83E', branche2.style.fill='#E0D83E'" ></div></button>
                            <button><div class="bg-blue-300 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#4CBFD7', branche2.style.fill='#4CBFD7'"></div></button>
                            <button><div class="bg-green-400 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#73BF4C', branche2.style.fill='#73BF4C'"></div></button>
                            <button><div class="bg-gray-900 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#2D2D2D', branche2.style.fill='#2D2D2D'"></div></button>
                        </div>
                        <div class="inline-flex items-center mx-auto">
                            <button><div class="bg-red-500 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#B4231C', branche2.style.fill='#B4231C'"></div></button>
                            <button><div class="bg-purple-500 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#804B93', branche2.style.fill='#804B93'"></div></button>
                            <button><div class="bg-orange-400 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#DA8725', branche2.style.fill='#DA8725'"></div></button>
                            <button><div class="bg-gray-200 w-10 h-10 rounded-3xl mx-2" onclick="branche1.style.fill='#E2E2E1', branche2.style.fill='#E2E2E1'"></div></button>
                        </div>
                    </div>
                </div>
                <div class="text-center" v-show="activePart === 0">
                    <h2>Cadre :</h2>
                    <div class="grid grid-rows-2 gap-5 mt-5">
                        <div class="inline-flex items-center mx-auto">
                            <button><div class="bg-yellow-300 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#E0D83E'"></div></button>
                            <button><div class="bg-blue-950 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#201460'"></div></button>
                            <button><div class="bg-green-800 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#234F13'"></div></button>
                            <button><div class="bg-gray-900 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#2D2D2D'"></div></button>
                        </div>
                        <div class="inline-flex items-center mx-auto">
                            <button><div class="bg-red-800 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#5F0905'"></div></button>
                            <button><div class="bg-purple-900 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#3E0F5B'"></div></button>
                            <button><div class="bg-orange-700 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#73440D'"></div></button>
                            <button><div class="bg-gray-200 w-10 h-10 rounded-3xl mx-2" onclick="cadre.style.fill='#E2E2E1'"></div></button>
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
                <button class="bg-btn text-white text-center w-30 h-10 py-1.5 px-3 mx-auto inline-flex items-center">Voir mon panier <img class="ml-2" src="../../public/icons/Vector2.svg" alt="flèche"></button>
            </div>
        </div>
    </div>
</template>