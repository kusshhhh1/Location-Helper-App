function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      document.getElementById("map").src = `https://www.google.com/maps?q=${lat},${lon}&output=embed`;
    }, function(error) {
      alert("Location error: " + error.message);
    });
  } else {
    alert("Geolocation not supported.");
  }
}

function findNearbyStores() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      window.open(`https://www.google.com/maps/search/grocery+stores/@${lat},${lon},15z`, '_blank');
    });
  }
}

function showRoute() {
  let destination = prompt("Enter your destination:");
  if (destination) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lon}&destination=${encodeURIComponent(destination)}`;
      window.open(url, '_blank');
    });
  }
}