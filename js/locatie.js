

let mapP = L.map('map').setView([51.270340, 4.7137111], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 14,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapP);

// plaats icon.png als marker op de map
let markerIconP1 = L.icon({
  iconUrl: './assets/images/Logo.png',
  iconSize: [120, 60], 
  iconAnchor: [60, 60],
  popupAnchor: [0, -60]
});

L.marker([51.274137, 4.717634], { icon: markerIconP1 }).addTo(mapP);