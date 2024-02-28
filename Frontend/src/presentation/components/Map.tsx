import { Marker, Popup } from 'react-leaflet';
import { Device } from '../../interfaces/device';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { LatLngExpression } from 'leaflet';
import DevicePopup from './DevicePopup';

interface Props {
  devices: Device[];
  onClickAddTracking: (device: Device) => Promise<void>;
}

const MapComponent = ({ devices, onClickAddTracking }: Props) => {
  const position: LatLngExpression = [41.390205, 2.154007];

  return (
    <div className="w-100vw bg-indigo-600 md:h-96 mt-2 p-2 rounded-lg flex items-center justify-center gap-7">
      <MapContainer
        className="h-full w-full"
        center={position}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {devices.map((device) => (
          <Marker
            key={device.id}
            position={[device.latitude, device.longitude]}
          >
            <Popup>
              <DevicePopup
                device={device}
                onClickAddTracking={onClickAddTracking}
              ></DevicePopup>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
