import axios from 'axios';
import { EventSubscription } from '../interfaces/event';

interface DeviceStatusResponse {
  eventSubscriptionId: string;
  subscriptionDetail: SubscriptionDetail;
  webhook: Webhook;
  startsAt: string;
}

interface Webhook {
  notificationUrl: string;
  authorizationToken: string;
}

interface SubscriptionDetail {
  device: {
    networkAccessIdentifier: string;
  };
  eventType: string;
}

export class DeviceStatusClient {
  public static async createSubscription(
    id: string
  ): Promise<DeviceStatusResponse> {
    const options = {
      method: 'POST',
      url: 'https://device-status.p-eu.rapidapi.com/event-subscriptions',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'device-status.nokia.rapidapi.com',
      },
      data: {
        subscriptionDetail: {
          device: {
            networkAccessIdentifier: id,
          },
          eventType: 'CONNECTIVITY',
        },
        maxNumberOfReports: 5,
        webhook: {
          notificationUrl: 'http://localhost:3000/notify',
          notificationAuthToken: null,
        },
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
