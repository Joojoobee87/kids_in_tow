function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.8008, lng: -1.5491},
          zoom: 8
        });
      }

let marker = new google.maps.Marker({
    position: tbc,
    map: map
})