import { Device } from '../../interfaces/device';

export const createDevice = async (
  data: Partial<Device>
): Promise<Device | null> => {
  try {
    const resp = await fetch(`http://localhost:3000/device`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!resp.ok) throw new Error("I couldn't make the request");
    return await resp.json();
  } catch (error) {
    return null;
  }
};
