import { Tracking, TrackingBase } from '../interfaces/tracking';
import { TrackingModel } from '../models/tracking.model';

export class TrackingHandler {
  public static async createTracking({
    id,
    endPointLatitude,
    endPointLongitud,
    retrievalStatus,
    deviceId,
  }: TrackingBase): Promise<Tracking> {
    const result = await TrackingModel.create({ id, endPointLatitude, endPointLongitud, retrievalStatus, deviceId });
    return result.toJSON();
  }
}