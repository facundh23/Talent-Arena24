import { DeviceLocationClient } from '../clients/device-location.client';
import { DeviceStatusClient } from '../clients/device-status.client';
import { DeviceStatus } from '../enums/device-status';
import { DeviceModel } from '../models/device.model';

export interface DeviceFilter {
  name: string;
  type: string;
}
export interface DeviceBase {
  id: string;
  type: string;
  name: string;
}

export interface Device extends DeviceBase {}

export class DeviceHandler {
  public static async createDevice({
    id,
    name,
    type,
  }: DeviceBase): Promise<Device> {
    await DeviceStatusClient.createSubscription(id);
    const { area } = await DeviceLocationClient.getDeviceLocation(id);
    const { latitude, longitude } = area.center;
    const result = await DeviceModel.create({
      id,
      name,
      type,
      latitude,
      longitude,
    });
    return result;
  }

  public static async getAllDevices({
    name,
    type,
  }: DeviceFilter): Promise<Device[]> {
    const options: Record<string, any> = { where: {} };
    if (name) {
      options.where.name = name;
    }

    if (type) {
      options.where.type = type;
    }
    return await DeviceModel.findAll(options);
  }

  public static async updateDeviceStatus(
    id: string,
    newStatus: DeviceStatus
  ): Promise<Device> {
    const deviceFound = await DeviceModel.findOne({ where: { id } });
    deviceFound.status = newStatus;
    await deviceFound.save();
    return deviceFound;
  }

  public static async countOnlineDevices(): Promise<number> {
    const onlineDevices = await DeviceModel.count({
      where: { status: DeviceStatus.REACHABLE}
    })
    return onlineDevices;
  }

  public static async countOfflineDevices():Promise<number>{
    const offlineDevices = await DeviceModel.count({
      where: {status: DeviceStatus.UNREACHABLE}
    })
    return offlineDevices;
  }
}
