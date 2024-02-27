import axios from 'axios';

export class DeviceStatusClass {
  public static async createSubscription(id: string): Promise<void> {
    const options = {
      method: 'POST',
      url: 'https://device-status.p-eu.rapidapi.com/event-subscriptions',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'd4805fc215msh17feb8ff7dc457ep123ce1jsnd43c154d66b5',
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
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
