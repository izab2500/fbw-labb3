import '../../scss/pages/karta.scss';


import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Marker.prototype.options.icon = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

/**
 * Skapar en karta och lägger in i #map-elementet.
 * @type {L.Map}
 */
const map = L.map("map").setView([59.3251, 18.0711], 5);

/**
 * Lägger till kartlager på kartan.
 */
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

/**
 * Knapp för att starta sökning.
 * @type {HTMLButtonElement}
 */
const searchBtn = document.querySelector("button");

/**
 * Inputfält där användaren skriver plats.
 * @type {HTMLInputElement}
 */
const input = document.querySelector("#search");

/**
 * Sparar markör på kartan.
 * Används för att kunna ta bort gammal markör.
 * @type {L.Marker | undefined}
 */
let marker;

/**
 * Söker efter en plats.
 * Hämtar koordinater och placerar markör på kartan.
 * Om en gammal markör finns tas den bort.
 * @async
 * @returns {Promise<void>}
 */
async function searchPlace() {
    const place = input.value.trim();
    if (!place) return;

    const url = `https://nominatim.openstreetmap.org/search?format=geojson&q=${encodeURIComponent(place)}&limit=1`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (!data.features || data.features.length === 0) {
            alert("Ingen plats hittades");
            return;
        }

        /**
         * Hämtar longitud och latitud från Nominatim API.
         * @type {[number, number]}
         */
        const [lon, lat] = data.features[0].geometry.coordinates;

        if (marker) {
            map.removeLayer(marker);
        }

        marker = L.marker([lat, lon])
            .addTo(map)
            .bindPopup(place)
            .openPopup();

        map.setView([lat, lon], 13);

    } catch (err) {
        console.error(err);
    }
}

/**
 * Lyssnar på klick på sökknappen
 * och kör sökfunktionen.
 */
searchBtn.addEventListener("click", searchPlace);
