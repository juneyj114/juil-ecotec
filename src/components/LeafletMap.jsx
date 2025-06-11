// src/components/LeafletMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// 기본 마커 이미지 설정 (안 하면 안 보임)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const LeafletMap = () => (
  <MapContainer
    center={[35.363588, 128.467673]} // 경남 함안 위치
    zoom={15}
    className="w-full md:w-1/2 h-96 mb-4 md:mb-0 rounded shadow"
    scrollWheelZoom={false}
  >
    <TileLayer
      attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[35.363588, 128.467673]}>
      <Popup>주일에코텍<br />경남 함안군 대산면 대부로 398</Popup>
    </Marker>
  </MapContainer>
);

export default LeafletMap;
