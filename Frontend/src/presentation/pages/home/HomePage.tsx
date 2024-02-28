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

export const HomePage = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [devicesCount, setDevicesCount] = useState<DeviceCount>({
    offlineDevices: 0,
    onlineDevices: 0,
  });

  const openModal = () => {
    setModalIsOpen(true);
    console.log('CLick');
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
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
      {!modalIsOpen ? (
        <Map devices={devices}></Map>
      ) : (
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
    </div>
  );
};
