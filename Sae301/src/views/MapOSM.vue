<template>
    <div class="grid grid-cols-2 my-7 mx-10">
      <div class="my-auto">
        <h1 class="max-w-sm mb-2">Trouvez la Lunette Parfaite Près de Chez Vous</h1>
        <p class="max-w-xl mb-5">
          Explorez notre collection de lunettes soigneusement sélectionnées chez nos boutiques locales. Découvrez une gamme unique de styles et de designs à deux pas de chez vous. Trouvez la paire parfaite pour refléter votre style et répondre à vos besoins visuels. Faites l'expérience de l'excellence de la lunetterie à portée de main.
        </p>
        <div class="grid grid-rows-3 gap-5">
          <button
            class="w-[75vh]"
            :class="{ 'bg-[#B2BAC8]': activeButton === 1, 'bg-[#E5E9F1]': activeButton !== 1 }"
            @click="gotoMarker(1)"
          >
            <div class="w-[75vh] h-10 grid grid-cols-6">
              <div class="col-span-2 inline-flex items-center ml-2">
                <img src="../../public/icons/store.svg" alt="magasin" />
                <p>Boutique 1</p>
              </div>
              <div class="col-span-4 inline-flex items-center">
                <p><strong>Adresse :</strong> 14 Rue Jean-Baptiste Lulli, 25200 Montbéliard</p>
              </div>
            </div>
          </button>
          <button
            class="w-[75vh]"
            :class="{ 'bg-[#B2BAC8]': activeButton === 2, 'bg-[#E5E9F1]': activeButton !== 2 }"
            @click="gotoMarker(2)"
          >
            <div class="w-[75vh] h-10 grid grid-cols-6">
              <div class="col-span-2 inline-flex items-center ml-2">
                <img src="../../public/icons/store.svg" alt="magasin" />
                <p>Boutique 2</p>
              </div>
              <div class="col-span-4 inline-flex items-center">
                <p><strong>Adresse :</strong> 25 Rue de la République, 90000 Belfort</p>
              </div>
            </div>
          </button>
          <button
            class="w-[75vh]"
            :class="{ 'bg-[#B2BAC8]': activeButton === 3, 'bg-[#E5E9F1]': activeButton !== 3 }"
            @click="gotoMarker(3)"
          >
            <div class="h-10 grid grid-cols-6">
              <div class="col-span-2 inline-flex items-center ml-2">
                <img src="../../public/icons/store.svg" alt="magasin" />
                <p>Boutique 3</p>
              </div>
              <div class="col-span-4 inline-flex items-center">
                <p><strong>Adresse :</strong> 1 Rue de la Gare, 70000 Vesoul</p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div class="my-10">
        <div id="map"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import * as Leaflet from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  
  let tileLayer = Leaflet.tileLayer
  let map = ref()
  let myIcon = Leaflet.icon({
    iconUrl: '/leaflet/marker-icon.png',
    shadowUrl: '/leaflet/marker-shadow.png',
    iconSize: [25, 41],
    shadowSize: [25, 41],
    iconAnchor: [-10, -10],
    shadowAnchor: [-10, -10],
    popupAnchor: [22, 10]
  })
  
  const markers = [
    {
      name: 'Boutique 1',
      address: '14 Rue Jean-Baptiste Lulli, 25200 Montbéliard',
      coords: [47.495328, 6.8044455]
    },
    {
      name: 'Boutique 2',
      address: '25 Rue de la République, 90000 Belfort',
      coords: [47.6372952, 6.8628752]
    },
    {
      name: 'Boutique 3',
      address: '1 Rue de la Gare, 70000 Vesoul',
      coords: [47.621809, 6.155842]
    }
  ]
  
  let activeButton = ref(1)
  
  onMounted(async () => {
    tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
  
    map = Leaflet.map('map', {
      zoomControl: true,
      layers: [tileLayer],
      maxZoom: 18,
      minZoom: 6
    }).setView([47.495328, 6.8044455], 17)
  
    markers.forEach((marker, index) => {
      let newMarker = Leaflet.marker(marker.coords, { icon: myIcon }).addTo(map)
      newMarker.bindPopup(marker.name)
    })
  })
  
  const gotoMarker = (markerIndex) => {
    map.setView(markers[markerIndex - 1].coords, 17)
    activeButton.value = markerIndex
  }
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    height: 50vh;
  }
  </style>
  