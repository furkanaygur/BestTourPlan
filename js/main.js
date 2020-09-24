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

//slider

$(document).ready(function () {
  const nexticon = '<i class="fa fa-chevron-right"></i>';
  const previcon = '<i class="fa fa-chevron-left"></i>';
  $(".about-us").owlCarousel({
    loop: true,
    center: true,
    items: 1,
    nav: true,
    navText: [previcon, nexticon],
    margin: 100,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 300,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  });

  $(".owl-content").owlCarousel({
    center: false,
    loop: true,
    items: 5,
  });
});
