import { useState } from "react"
import ConsultDeviceText from "../../components/ConsultDeviceText"
import { createhQueryUseCase } from "../../../core/use-case/search-query.use-case";
import { CounterDevices } from "../../components/CounterDevices";
import { CreateDevice } from "../../modal/CreateDevice";
import Navbar from "../../components/Navbar";

const devices = [
  {id:'dron', name:'Dron'},
  {id:'plane', name:'Plane'},
  {id:'ship', name:'Ship'},
]



interface Message {
  text:string;
}

export const HomePage = () => {

  const [isLoading, setIsloading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  
  const handleCreateDevice = async(text:string, selectedOption:string, id:string) => {
    setIsloading(true);
    const newQuery = `${text} - ${selectedOption}`
    setMessages((prev) => [...prev, {text:newQuery}]);

    const data = await createhQueryUseCase(text, selectedOption, id)
    if(!data.ok) return;

    setIsloading(false);
  }
  
  return (
    <div>
      <Navbar isOpen={openModal}  />
      {
        !isLoading && <ConsultDeviceText placeholder="Search your device"  options={devices} />
      }
      
      {
        modalIsOpen && <CreateDevice  closeModal={closeModal} onSendQuery={handleCreateDevice} options={devices} />
      }
      <CounterDevices />
    </div>
  )
}


