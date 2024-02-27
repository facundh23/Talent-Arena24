export interface DeviceType {
  id: string;
  name: string;
}

export class DeviceTypeHandler {
  public static async getAllDeviceTypes(): Promise<DeviceType[]> {
    const DEVICE_TYPES: DeviceType[] = [
      {
        id: 'plane',
        name: 'Plane',
      },
      {
        id: 'submarine',
        name: 'Submarine',
      },
      {
        id: 'drone',
        name: 'Drone',
      },
    ];
    return Promise.resolve(DEVICE_TYPES);
  }
}
