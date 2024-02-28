import { Tracking } from '../../interfaces/tracking';

export const getAllTrackings = async (): Promise<Tracking[]> => {
  try {
    const resp = await fetch(`http://localhost:3000/tracking`, {
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
