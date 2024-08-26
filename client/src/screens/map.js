import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      // Create a map instance
      const map = L.map('map').setView([51.505, -0.09], 13); // Default center and zoom level
      mapRef.current = map;

      // Add OpenStreetMap tile layer with satellite view
      const satelliteLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }).addTo(map);

      // Add a marker for the user's location
      map.locate({ setView: true, maxZoom: 16 }); // Request location from the browser

      // Handle location found
      function onLocationFound(e) {
        const radius = e.accuracy / 2;
        L.marker(e.latlng).addTo(map).bindPopup("You are here").openPopup();
        L.circle(e.latlng, radius).addTo(map);

        // Add the location favicon as a marker
        const locationFaviconIcon = L.icon({
            iconUrl: '/placeholder.png', // Use the relative path to the image from the public directory
            iconSize: [30, 30],
            iconAnchor: [15, 30],
          });
        L.marker([51.505, -0.09], { icon: locationFaviconIcon }).addTo(map).bindPopup("You are here");

        // Reverse geocoding to get location name
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}`)
          .then(response => response.json())
          .then(data => {
            const locationName = data.display_name;
            const locationPopup = L.popup().setContent(`<p>${locationName}</p>`);
            L.marker(e.latlng).bindPopup(locationPopup).addTo(map);
          })
          .catch(error => console.error('Error fetching location name:', error));
      }
      map.on('locationfound', onLocationFound);

      // Handle location error
      function onLocationError(e) {
        alert(e.message);
      }
      map.on('locationerror', onLocationError);

      // Clean up function
      return () => {
        map.off('locationfound', onLocationFound);
        map.off('locationerror', onLocationError);
        map.remove();
      };
    }
  }, []);

  return (
    <div>
      <Navbar /> {/* Render the Navbar component */}
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

export default Map;
