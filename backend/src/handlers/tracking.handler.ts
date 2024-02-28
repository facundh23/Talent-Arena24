import { DeviceLocationClient } from '../clients/device-location.client';
import { Tracking, TrackingBase } from '../interfaces/tracking';
import { DeviceModel } from '../models/device.model';
import { TrackingModel } from '../models/tracking.model';

export class TrackingHandler {
  public static async getAllTrackings(): Promise<Tracking[]> {
    const trackings = await TrackingModel.findAll();
    for (const tracking of trackings) {
      tracking.retrievalStatus =
        await DeviceLocationClient.verifyTrackingLocation(tracking);
      await tracking.save();
      const device = await DeviceModel.findOne({
        where: { id: tracking.deviceId },
      });
      tracking['deviceName'] = device?.dataValues?.name ?? tracking.deviceId;
    }
    const trackingPromises = trackings.map(
      async ({
        id,
        deviceId,
        endPointLatitude,
        endPointLongitud,
        retrievalStatus,
      }) => {
        const result: Tracking = {
          id,
          deviceId,
          endPointLatitude,
          endPointLongitud,
          retrievalStatus,
        };
        const device = await DeviceModel.findOne({
          where: { id: deviceId },
        });
        result.deviceName = device?.dataValues?.name ?? deviceId;
        return result;
      }
    );
    return await Promise.all(trackingPromises);
  }

  public static async createTracking({
    id,
    endPointLatitude,
    endPointLongitud,
    retrievalStatus,
    deviceId,
  }: TrackingBase): Promise<Tracking> {
    const result = await TrackingModel.create({
      id,
      endPointLatitude,
      endPointLongitud,
      retrievalStatus,
      deviceId,
    });
    return result.toJSON();
  }
}
