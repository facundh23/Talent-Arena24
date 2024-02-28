import { DeviceCount } from '../../interfaces/device-count';

export const countDevices = async (): Promise<DeviceCount> => {
  try {
    const resp = await fetch(`http://localhost:3000/device/status-count`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!resp.ok) throw new Error("I couldn't make the request");
    return await resp.json();
  } catch (error) {
    return { offlineDevices: 0, onlineDevices: 0 };
  }
};
