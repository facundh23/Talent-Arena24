interface TrackingData {
  deviceId: string;
  endPointLatitude: string;
  endPointLongitud: string;
}

export const createTracking = async (
  data: TrackingData
): Promise<TrackingData | null> => {
  try {
    const resp = await fetch(`http://localhost:3000/tracking`, {
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
