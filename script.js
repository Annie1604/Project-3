
function initMap() {

  const centerPoint = { lat: 41.8781, lng: -87.6298 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: centerPoint,
    mapTypeId: "hybrid"  
  });

  const marker = new google.maps.Marker({
    position: centerPoint,
    map: map,
    title: "Chicago"
  });

  const info = new google.maps.InfoWindow({
    content: "<strong>Welcome to Chicago</strong>"
  });

  marker.addListener("click", () => {
    info.open(map, marker);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("questionBtn");

  if (btn) {
    btn.addEventListener("click", () => {
      alert("If you have questions, contact me at:\nado3@hawk.illinoistech.edu");
    });
  }
});
