import { useState } from "react"
import ConsultDeviceText from "../../components/ConsultDeviceText"
import { searchQueryUseCase } from "../../../core/use-case/search-query.use-case";
import { CounterDevices } from "../../components/CounterDevices";

const devices = [
  {id:'dron', text:'Dron'},
  {id:'plane', text:'Plane'},
  {id:'ship', text:'Ship'},
]

interface Message {
  text:string;
}

export const HomePage = () => {

  const [isLoading, setIsloading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);


  const handlePost = async(text:string, selectedOption:string, id:string) => {
    setIsloading(true);
    const newQuery = `${text} - ${selectedOption}`
    setMessages((prev) => [...prev, {text:newQuery}]);

    const data = await searchQueryUseCase(text, selectedOption, id)
    if(!data.ok) return;

    setIsloading(false);
  }
  
  return (
    <div>
      <ConsultDeviceText placeholder="Create your device" onSendQuery={handlePost} options={devices} />
      <CounterDevices />
    </div>
  )
}


