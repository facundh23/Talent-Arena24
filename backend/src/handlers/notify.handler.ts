import { EventSubscription } from '../interfaces/event';
import { Device, DeviceHandler } from './device.handler';

export class NotifyHandler {
  public static async handlerDeviceStatusNotification({
    event,
  }: EventSubscription): Promise<Device> {
    const { eventDetail } = event;
    return await DeviceHandler.updateDeviceStatus(
      eventDetail.device.networkAccessIdentifier,
      eventDetail.deviceStatus
    );
  }
}
