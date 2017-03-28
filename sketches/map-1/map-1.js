// basic way to display a google map with marker(s)

function initMap() {
  var eastLakeview = {lat: 41.935779, lng: -87.642284};
  var  boulder = {lat: 40.033689, lng: -105.268069}
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {lat: 41.252363, lng: -95.997988}
  });
  var marker = new google.maps.Marker({
    position: eastLakeview,
    map: map
  });
  var marker2 = new google.maps.Marker({
    position: boulder,
    map: map
  });
}
