import { useEffect, useState } from 'react';
import ConsultDeviceText from '../../components/ConsultDeviceText';

import { CounterDevices } from '../../components/CounterDevices';
import Map from '../../components/Map';
import { Device } from '../../../interfaces/device';
import { getAllDevices } from '../../../core/use-case/get-all-devices';
import { createhQueryUseCase } from '../../../core/use-case/search-query.use-case';

const deviceTypes = [
  { id: 'dron', type: 'Dron' , name:'Dron'},
  { id: 'plane', type: 'Plane', name:'Plane' },
  { id: 'ship', type: 'Ship', name:'Ship' },
];

interface Message {
  text: string;
}

export const HomePage = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    getAllDevices().then(setDevices)
  }, [])


  const handlePost = async (
    text: string,
    selectedOption: string,
    id: string
  ) => {
    setIsloading(true);
    const newQuery = `${text} - ${selectedOption}`;
    setMessages((prev) => [...prev, { text: newQuery }]);

    const data = await createhQueryUseCase(text, selectedOption, id);
    if (!data.ok) return;

    setIsloading(false);
  };

  return (
    <div>
      <ConsultDeviceText
        placeholder="Create your device"
        onSendQuery={handlePost}
        options={deviceTypes}
      />
      <CounterDevices />
      <Map devices={devices}></Map>
    </div>
  );
};
