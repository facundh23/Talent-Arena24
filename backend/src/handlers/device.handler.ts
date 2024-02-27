import { Device, DeviceBase } from '../interfaces/device';
import { DeviceModel } from '../models/device.model';

export class DeviceHandler {
  public static async createDevice({
    id,
    name,
    type,
  }: DeviceBase): Promise<Device> {
    const result = await DeviceModel.create({ id, name, type });
    return result.toJSON();
  }
}
