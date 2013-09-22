var directionDisplay;
var directionsService = new google.maps.DirectionsService();     //Create a DirectionsService object which is required to communicate with the Google Maps API Direction Service
var map;
function initialize()
{
            directionsDisplay = new google.maps.DirectionsRenderer();        //Create a DirectionsRenderer object to render the directions results
    var center = new google.maps.LatLng(0, 0);    //Map is centered at 0,0
    var myOptions =
    {
            zoom:6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: center
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    directionsDisplay.setMap(map);
    var start = document.getElementById("Source").value;     //source
    var end = document.getElementById("Destination").value;  //destination
    var request =
    {
            origin:start,
            destination:end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING          //Current travel mode is DRIVING. You can change to BICYCLING or WALKING and see the changes.
    };
    directionsService.route(request, function(response, status)
    {
            if (status == google.maps.DirectionsStatus.OK) //Check if request is successful.
            {
            directionsDisplay.setDirections(response);         //Display the directions result
            }
    });
}
