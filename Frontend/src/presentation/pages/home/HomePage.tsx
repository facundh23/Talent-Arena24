import { useEffect, useState } from 'react';
import ConsultDeviceText from '../../components/ConsultDeviceText';
import { CounterDevices } from '../../components/CounterDevices';
import Map from '../../components/Map';
import { Device } from '../../../interfaces/device';
import { getAllDevices } from '../../../core/use-case/get-all-devices';

const deviceTypes = [
  { id: 'dron', name: 'Dron' },
  { id: 'plane', name: 'Plane' },
  { id: 'ship', name: 'Ship' },
];



export const HomePage = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    getAllDevices().then(setDevices);
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
        options={deviceTypes}
        handleSearch={handleSearch}
      />
      <CounterDevices />
      <Map devices={devices}></Map>
    </div>
  );
};
