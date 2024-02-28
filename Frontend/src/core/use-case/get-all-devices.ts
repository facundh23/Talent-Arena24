import { Device } from '../../interfaces/device';

interface DeviceQueryParams {
  name?: string;
  type?: string;
}

export const getAllDevices = async (
  queryParams?: DeviceQueryParams
): Promise<Device[]> => {
  try {
    const { name = '', type = '' } = { ...queryParams };
    const resp = await fetch(
      `http://localhost:3000/device?name=${name}&type=${type}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
    if (!resp.ok) throw new Error("I couldn't make the request");
    return await resp.json();
  } catch (error) {
    return [];
  }
};
