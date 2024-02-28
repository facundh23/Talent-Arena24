interface Props {
  onlineDevices: number;
  offlineDevices: number;
}

const CounterDevices = ({ onlineDevices, offlineDevices }: Props) => {
  return (
    <div className="w-100vw bg-indigo-600 md:h-32 mt-2 p-2 rounded-lg flex items-center justify-center gap-7">
      <p className="text-2xl  text-bold"> Devices </p>
      <p className="text-xl border p-3">Online: {onlineDevices}</p>
      <p className="text-xl border p-3">Offline: {offlineDevices}</p>
    </div>
  );
};

export default CounterDevices;
