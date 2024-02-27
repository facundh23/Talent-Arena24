import { DeviceStatus } from '../enums/device-status';

export interface EventDetail {
  device: {
    networkAccessIdentifier: string;
  };
  deviceStatus: DeviceStatus;
}

export interface Event {
  eventType: string;
  eventTime: string;
  eventDetail: EventDetail;
}

export interface EventSubscription {
  eventSubscriptionId: string;
  event: Event;
}
