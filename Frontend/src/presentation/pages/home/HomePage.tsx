import ConsultDeviceText from "../../components/ConsultDeviceText"

const devices = [
  {id:'dron', text:'Dron'},
  {id:'plane', text:'Plane'},
  {id:'ship', text:'Ship'},
]

export const HomePage = () => {

  
  return (
    <div>
      <ConsultDeviceText placeholder="Search your device" onSendQuery={query => console.log(query)} options={devices} />
    </div>
  )
}


