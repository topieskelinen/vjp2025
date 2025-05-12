import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: '/images/juoksevaPanda.png', 
  iconSize: [35, 35],
});

const tourStops = [
    { city: "Helsinki", date: "3. toukokuuta", lat: 60.1699, lng: 24.9384 },
    { city: "Espoo", date: "5. toukokuuta", lat: 60.2055, lng: 24.6559 },
    { city: "Turku", date: "10. toukokuuta", lat: 60.4518, lng: 22.2666 },
    { city: "Tampere", date: "12. toukokuuta", lat: 61.4978, lng: 23.7610 },
    { city: "Jyväskylä", date: "16. toukokuuta", lat: 62.2415, lng: 25.7209 },
    { city: "Kuopio", date: "18. toukokuuta", lat: 62.8924, lng: 27.6770 },
    { city: "Oulu", date: "24. toukokuuta", lat: 65.0121, lng: 25.4651 },
    { city: "Rovaniemi", date: "26. toukokuuta", lat: 66.5039, lng: 25.7294 },
];


export default function TourMap() {
  return (
    <div className="tour-map-container">
      <MapContainer 
        center={[62.0, 25.0]} 
        zoom={6} 
        scrollWheelZoom={false} 
        className="tour-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {tourStops.map((stop, idx) => (
          <Marker key={idx} position={[stop.lat, stop.lng]} icon={customIcon}>
            <Popup><strong>{stop.city}</strong><br />
            {stop.date}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}