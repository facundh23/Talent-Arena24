import { DeviceLocationClient } from '../clients/device-location.client';
import { DeviceStatus } from '../enums/device-status';
import { DeviceModel } from '../models/device.model';

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

  public static async getAllDevices(): Promise<Device[]> {
    return await DeviceModel.findAll();
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
