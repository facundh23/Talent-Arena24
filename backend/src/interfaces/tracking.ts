export interface TrackingBase {
    id: number;
    endPointLatitude: string;
    endPointLongitud: string;
    retrievalStatus: boolean;
    deviceId: string;
   
  }
  
  export interface Tracking extends TrackingBase {}