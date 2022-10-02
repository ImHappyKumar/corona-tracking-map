function updateMap() {
    console.log("Updating map with realtime data");
    fetch("data/data.json")                                // Static Data from "data.json" file, We can also use API for live data
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data);
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude]).addTo(map);
            });
        })
}

// Function Call
updateMap();

// Refresh - Repeatidely calling function after 60000ms = 1 min
let interval = 60000;
setInterval( updateMap, interval); 