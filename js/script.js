var map = L.map('map').setView([-25.9496182,32.597326], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-25.9496182,32.597326]).addTo(map);

var circle = L.circle([-25.9496182,32.597326], {
    color: '#ff12aa',
    fillColor: '#1245fa',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [-25.9496182,32.597326],
    [-25.95036,32.6005769],
    [-25.950636,32.605769]
]).addTo(map);