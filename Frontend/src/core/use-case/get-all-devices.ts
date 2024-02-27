import { Device } from '../../interfaces/device';

export const getAllDevices = async (): Promise<Device[]> => {
  try {
    const resp = await fetch(`http://localhost:3000/device`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!resp.ok) throw new Error("I couldn't make the request");
    return await resp.json();
  } catch (error) {
    return [];
  }
};
