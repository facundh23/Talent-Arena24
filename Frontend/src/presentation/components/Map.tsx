import { Marker } from 'react-leaflet';
import { Device } from '../../interfaces/device';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { LatLngExpression } from 'leaflet';

interface Props {
  devices: Device[];
}

const MapComponent = ({ devices }: Props) => {
  const position: LatLngExpression = [41.390205, 2.154007];

  return (
    <>
      <MapContainer
        style={{ height: '500px' }}
        center={position}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {devices.map((device) => (
          <Marker position={[device.latitude, device.longitude]}></Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default MapComponent;
