document.addEventListener("DOMContentLoaded", function() {

    const map = L.map('map', {
      zoomControl: false,
      attributionControl: false,
      dragging: false,        
      scrollWheelZoom: false, 
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      tap: false
    }).setView([44.39233709194754, 26.024434006509765], 16);
  
  const grayTiles = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
      minZoom: 0,
      maxZoom: 20,
      ext: 'png',
      attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
  
    const customIcon = L.icon({
      iconUrl: '../../svg/pin.svg', 
      iconSize: [40, 40], 
      iconAnchor: [20, 50],
      popupAnchor: [0, -50]
    });
  
  
    const marker = L.marker([44.39233709194754, 26.024434006509765], {icon: customIcon}).addTo(map);
  });