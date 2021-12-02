


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("locate").value = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    document.getElementById("locate").value = "https://maps.google.com/?q=<"+position.coords.latitude+">,<"+position.coords.longitude+">";
  }