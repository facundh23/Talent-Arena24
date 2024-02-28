import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { Device } from '../../interfaces/device';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { LatLngExpression } from 'leaflet';
import DevicePopup from './DevicePopup';
import { useState } from 'react';
import { createTracking } from '../../core/use-case/create-tracking';

interface Props {
  devices: Device[];
}

interface TrackingMarkerProps {
  device: Device;
  onCreateTracking: () => void;
}

const TrackingMarker = ({ device, onCreateTracking }: TrackingMarkerProps) => {
  const [isRequestInProgress, setIsRequestInProgress] =
    useState<boolean>(false);
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  useMapEvents({
    click: async (e) => {
      if (!isRequestInProgress) {
        setIsRequestInProgress(true);
        try {
          setPosition(e.latlng);
          if (confirm('Do you want to create a tracking at this point?')) {
            await createTracking({
              endPointLatitude: e.latlng.lat.toString(),
              endPointLongitud: e.latlng.lng.toString(),
              deviceId: device.id,
            });
            alert('The tracking has been created');
            onCreateTracking();
          }
        } finally {
          setIsRequestInProgress(false);
        }
      }
    },
  });

  return !position ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const MapComponent = ({ devices }: Props) => {
  const position: LatLngExpression = [41.390205, 2.154007];
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  const onCreateTracking = () => {
    setSelectedDevice(null);
  };

  return (
    <div className="w-100vw navbarColor md:h-96 h-72 mt-2 p-5 border-4 border-white rounded-lg flex items-center justify-center gap-7">
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
        {selectedDevice ? (
          <TrackingMarker
            device={selectedDevice}
            onCreateTracking={onCreateTracking}
          />
        ) : null}
        {devices.map((device) => (
          <Marker
            key={device.id}
            position={[device.latitude, device.longitude]}
          >
            <Popup>
              <DevicePopup
                device={device}
                onClickAddTracking={setSelectedDevice}
              ></DevicePopup>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
