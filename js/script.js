// Initialise Google Map with marker at Leeds City Centre

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 53.802156, lng: -1.548946 },
        zoom: 10
    });

    let markerLeedsCentre = new google.maps.Marker({
        position: { lat: 53.802156, lng: -1.548946 },
        map: map
    });

    addMarkerToMap(map);
}

//define places of interest including name and coordinates

let placesOfInterest = [
    ["Harewood House", 53.8999, -1.5115, false],
    ["Stockeld Park", 53.940942, -1.431498],
    ["Valley Gardens", 53.9933, -1.5478, false],
]

//function to add markers to map, iterating through the placesOfInterest variable

function addMarkerToMap(map) {

    for (var i = 0; i < placesOfInterest.length; i++) {

        var place = placesOfInterest[i];
        var marker = new google.maps.Marker({
            position:{lat: place[1], lng: place[2] },
            map: map,
            title: place[0],
        });
    }
}

//_.wd=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];_.y.console&&_.y.console.error&&_.y.console.error.apply(_.y.console,_.Da(b))};xd=function(a){this.message=a;this.name="InvalidValueError";this.stack=Error().stack};_.yd=function(a,b){var c="";if(null!=b){if(!(b instanceof xd))return b;c=": "+b.message}return new xd(a+c)};_.zd=function(a){if(!(a instanceof xd))throw a;_.wd(a.name+": "+a.message)};