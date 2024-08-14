let map, marker;

function initMap() {
    const defaultLocation = { lat: 0, lng: 0 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: defaultLocation,
    });

    marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
    });

    const selectElement = document.getElementById("country-select");
    selectElement.addEventListener("change", onCountryChange);

    getPosition("Egypt");
}

function getPosition(countryName) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://nominatim.openstreetmap.org/search?format=json&q=${countryName}`);
    request.send();

    request.addEventListener("load", function () {
        const data = JSON.parse(request.responseText);
        if (data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            updateMap(lat, lon, countryName);
        } else {
            console.error(`No results found for ${countryName}`);
        }
    });

    request.addEventListener("error", function () {
        console.error("An error occurred while fetching the location data.");
    });
}

function updateMap(lat, lng, countryName) {
    const position = { lat, lng };
    map.setCenter(position);
    map.setZoom(5);
    marker.setPosition(position);
    marker.setTitle(countryName);
}

function onCountryChange() {
    const country = this.value;
    if (country) {
        getPosition(country);
    }
}

window.initMap = initMap;