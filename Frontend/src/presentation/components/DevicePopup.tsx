import { DEVICE_TYPES } from '../../constants/device-types';
import { Device } from '../../interfaces/device';

interface Props {
  device: Device;
  onClickAddTracking: (device: Device) => void;
}

const DevicePopup = ({ device, onClickAddTracking }: Props) => {
  return (
    <div className="flex flex-col">
      <span>
        <b>Device name:</b> {device.name}
      </span>
      <span>
        <b>Device status:</b> {device.status}
      </span>
      <span>
        <b>Device type:</b>{' '}
        {DEVICE_TYPES.find(({ id }) => id === device.type)?.name}
      </span>
      <span className="ml-auto" onClick={() => onClickAddTracking(device)}>
        <i className="fa-plus"></i> Add tracking
      </span>
    </div>
  );
};

export default DevicePopup;
