// copied and adjusted from https://developers.google.com/maps/documentation/javascript/examples/directions-simple

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var boulder = {lat: 40.0149856, lng: -105.2705456};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: boulder
  });
  directionsDisplay.setMap(map);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  // document.getElementById('start').addEventListener('change', onChangeHandler);
  // document.getElementById('end').addEventListener('change', onChangeHandler);
  // document.getElementById('mode').addEventListener('change', onChangeHandler);
  document.querySelector(".btn").addEventListener('click', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route(
    {
      origin: document.getElementById('start').value,
      destination: document.getElementById('end').value,
      travelMode: document.getElementById('mode').value
    },
    function(response, status) {

      if (status === 'OK') {
        console.log(response);
        directionsDisplay.setDirections(response);
      }
      else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
}
