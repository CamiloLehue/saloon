export interface SensorReading {
  messageId: string;
  assetStatus: {
    assetName: string;
    assetType: string;
    messageStamp: string;
    messageReceivedStamp: string;
    deviceSN: string;
    productType: string;
    batteryVoltage: number;
    batteryStatus: string;
    deviceFirmware: string;
    messageType: string;
    eventHasCurrentGPS: string;
    speed?: number;
    account: string;
    installedChangeDate: string;
  };
  positionStatus: {
    city?: string;
    state: string;
    street: string;
    zipCode?: string;
    country: string;
    latitude: number;
    longitude: number;
    direction: string;
    dwellTimeOutside?: number;
    geofenceStatus: string;
    address: string;
    directionDegree: number;
  };
  reeferStatus?: {
    commPlatform: string;
    ambientTemp: number;
    messageMode: string;
  };
  genericSensors?: {
    voltageSensorData: {
      category: string;
      sensors: Sensor[];
    };
    temperatureSensorData: {
      category: string;
      sensors: Sensor[];
    };
  };
  pretripStatus?: {
    pretripResults: {
      testCode: string;
    }[];
  };
  impactStatus?: {
    moving: string;
  };
}

interface Sensor {
  sensorLabel: string;
  sensorDataElement: string;
  sensorValue: string;
}

export interface TripData {
  data: SensorReading[];
  measurementUnits?: {
    dateFormat: string;
    pressureUOM: string;
    temperatureUOM: string;
    distanceUOM: string;
    fuelUOM: string;
    weightUOM: string;
    timeDuration: string;
  };
  code?: number;
  message?: string;
  exception?: boolean;
}