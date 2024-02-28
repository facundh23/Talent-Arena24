interface Props {
  onlineDevices: number;
  offlineDevices: number;
}

const CounterDevices = ({ onlineDevices, offlineDevices }: Props) => {
  return (
    <div className="w-100vw secondColor border-4 border-white md:h-32 mt-2 p-2 rounded-lg flex items-center justify-center gap-7">
      <p className="text-xl   text-bold"> Devices </p>
      <p className="text-xl boxColor border p-3">Online: {onlineDevices}</p>
      <p className="text-xl boxColor border p-3">Offline: {offlineDevices}</p>
    </div>
  );
};

export default CounterDevices;
