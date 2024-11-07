import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';

const Map = () => {
  // Replace these values with your desired latitude and longitude
  const latitude = 7.9465;
  const longitude = -1.0232;

  return (
    <div>
      {/* Map Embed */}
      <div className="map-container w-full h-80">
        <MapContainer
          center={[latitude, longitude]}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[latitude, longitude]}>
            <Popup>Your location here!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
