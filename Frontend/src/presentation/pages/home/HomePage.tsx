import { useEffect, useState } from 'react';
import ConsultDeviceText from '../../components/ConsultDeviceText';
import CounterDevices from '../../components/CounterDevices';
import Map from '../../components/Map';
import { Device } from '../../../interfaces/device';
import { getAllDevices } from '../../../core/use-case/get-all-devices';
import { DeviceCount } from '../../../interfaces/device-count';
import { countDevices } from '../../../core/use-case/count-devices';
import { DEVICE_TYPES } from '../../../constants/device-types';

export const HomePage = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [devicesCount, setDevicesCount] = useState<DeviceCount>({
    offlineDevices: 0,
    onlineDevices: 0,
  });

  useEffect(() => {
    getAllDevices().then(setDevices);
    countDevices().then(setDevicesCount);
  }, []);

  // const handlePost = async (
  //   text: string,
  //   selectedOption: string,
  //   id: string
  // ) => {
  //   setIsloading(true);
  //   const newQuery = `${text} - ${selectedOption}`;
  //   setMessages((prev) => [...prev, { text: newQuery }]);

  //   const data = await searchQueryUseCase(text, selectedOption, id);
  //   if (!data.ok) return;

  //   setIsloading(false);
  // };

  const handleSearch = async (name: string, type: string) => {
    const devices = await getAllDevices({ name, type });
    setDevices(devices);
  };

  return (
    <div>
      <ConsultDeviceText
        placeholder="Create your device"
        options={DEVICE_TYPES}
        handleSearch={handleSearch}
      />
      <Map devices={devices}></Map>
      <CounterDevices
        offlineDevices={devicesCount.offlineDevices}
        onlineDevices={devicesCount.onlineDevices}
      />
    </div>
  );
};
