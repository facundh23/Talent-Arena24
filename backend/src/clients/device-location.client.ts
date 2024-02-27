import axios, { AxiosResponse } from 'axios';

export interface DeviceLocationRequest {
  device: {
    networkAccessIdentifier: string;
  };
  maxAge: number;
}

export interface DeviceLocationResponse {
  lastLocationTime: string;
  area: LocationArea;
  civicAddress: CivicAddress;
}

export interface CivicAddress {
  country: string;
  A1: string;
  A2: string;
}

export interface LocationArea {
  areaType: string;
  center: Coordinates;
  radius: number;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export class DeviceLocationClient {
  public static async getDeviceLocation(
    deviceId: string
  ): Promise<DeviceLocationResponse> {
    const response = await axios.post<
      DeviceLocationResponse,
      AxiosResponse<DeviceLocationResponse>,
      DeviceLocationRequest
    >(
      'https://location-retrieval.p-eu.rapidapi.com/retrieve',
      {
        device: {
          networkAccessIdentifier: deviceId,
        },
        maxAge: 60,
      },
      {
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.API_KEY,
          'X-RapidAPI-Host': 'location-retrieval.nokia.rapidapi.com',
        },
      }
    );
    return response.data;
  }
}
