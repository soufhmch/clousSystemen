var map = L.map('map').setView([51.17495546411295, 4.132914596854038],13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.17495546411295, 4.132914596854038]).addTo(map);

