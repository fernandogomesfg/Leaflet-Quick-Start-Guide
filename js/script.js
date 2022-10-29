var map = L.map('map').setView([-25.9496182,32.597326], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-25.9496182,32.597326]).addTo(map);

var circle = L.circle([-25.950588, 32.602551], {
    color: '#ff12aa',
    fillColor: '#1245fa',
    fillOpacity: 0.5,
    radius: 100
}).addTo(map);

var polygon = L.polygon([
    [-25.952401, 32.603645],
    [-25.951967, 32.605544],
    [-25.954938, 32.604461]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);