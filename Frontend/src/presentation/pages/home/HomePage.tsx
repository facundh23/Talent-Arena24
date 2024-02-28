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

export const HomePage = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [devicesCount, setDevicesCount] = useState<DeviceCount>({
    offlineDevices: 0,
    onlineDevices: 0,
  });

  const openModal = () => {
    setModalIsOpen(true);
    console.log('CLick')
  };
 const closeModal = () => {
  setModalIsOpen(false);
 }


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
      <Navbar isOpen={openModal}/>
      <ConsultDeviceText
        placeholder="Create your device"
        options={DEVICE_TYPES}
        handleSearch={handleSearch}
      />
      {
        !modalIsOpen ? <Map  devices={devices} onClickAddTracking={async (device: Device) => {console.log(device)}}></Map>
        : <CreateDevice isOpen={modalIsOpen} closeModal={closeModal} options={DEVICE_TYPES}  />
      }
      <CounterDevices
        offlineDevices={devicesCount.offlineDevices}
        onlineDevices={devicesCount.onlineDevices}
        />
       
       
    </div>
  );
};
