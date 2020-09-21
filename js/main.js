// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 40.913981, lng: 29.299893 };
  // Centered map on location
  const map = new google.maps.Map(
    document.querySelector(".hotel-map-location"),
    {
      zoom: 14,
      center: loc,
    }
  );
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
