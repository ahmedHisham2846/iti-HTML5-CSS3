function initMap(x, y) {
  const myLatLng = { lat: x, lng: y };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;

function changeMapLocation(country) {
  var coords = country.options[country.selectedIndex].value.split(";");
  var latitude = coords[0].trim();
  var longtude = coords[1].trim();
  console.log(latitude); 
  console.log(longtude); 
  initMap(parseFloat(latitude), parseFloat(139.839478));
}
