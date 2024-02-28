import { useEffect, useState } from 'react';
import ConsultDeviceText from '../../components/ConsultDeviceText';
import CounterDevices from '../../components/CounterDevices';
import Map from '../../components/Map';
import { Device } from '../../../interfaces/device';
import { getAllDevices } from '../../../core/use-case/get-all-devices';
import { DeviceCount } from '../../../interfaces/device-count';
import { countDevices } from '../../../core/use-case/count-devices';
import { DEVICE_TYPES } from '../../../constants/device-types';
import Navbar from '../../components/Navbar';
import { CreateDevice } from '../../modal/CreateDevice';
import { createDevice } from '../../../core/use-case/create-device';
import { Tracking } from '../../../interfaces/tracking';
import { getAllTrackings } from '../../../core/use-case/get-all-trackings';
import TrackingTable from '../../components/TrackingTable';

export const HomePage = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [trackings, setTrackings] = useState<Tracking[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [devicesCount, setDevicesCount] = useState<DeviceCount>({
    offlineDevices: 0,
    onlineDevices: 0,
  });

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    getAllTrackings().then(setTrackings);
    getAllDevices().then(setDevices);
    countDevices().then(setDevicesCount);
  }, []);

  const handleCreateDevice = async (data: Partial<Device>) => {
    await createDevice(data);
  };

  const handleSearch = async (name: string, type: string) => {
    const devices = await getAllDevices({ name, type });
    setDevices(devices);
  };

  return (
    <div>
      <Navbar isOpen={openModal} />
      <ConsultDeviceText
        placeholder="Search your device"
        options={DEVICE_TYPES}
        handleSearch={handleSearch}
      />
      <Map devices={devices}></Map>
      {!modalIsOpen ? null : (
        <CreateDevice
          closeModal={closeModal}
          options={DEVICE_TYPES}
          handleCreateDevice={handleCreateDevice}
        />
      )}
      <CounterDevices
        offlineDevices={devicesCount.offlineDevices}
        onlineDevices={devicesCount.onlineDevices}
      />
      <div className="navbarColor w-100vw bg-indigo-600 mt-2 p-2 rounded-lg flex flex-col gap-7 border-white border-4">
        <h2 style={{ fontWeight: 'bold' }}>Trackings list</h2>
        <div className="flex">
          <TrackingTable trackings={trackings}></TrackingTable>
        </div>
      </div>
    </div>
  );
};
