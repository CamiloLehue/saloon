import rawData from "../../../data/combinado.json";
import { SensorReading, TripData } from "../types/Trips";

const tripDataArray: TripData[] = rawData as TripData[];

export const getAllSensorReadings = async (): Promise<SensorReading[]> => {
    try {
        const allReadings = tripDataArray.flatMap(tripData => tripData.data);
        return allReadings;
    } catch (error) {
        console.error("Error loading sensor readings:", error);
        return [];
    }
};

export const getGroupedTrips = async (): Promise<SensorReading[][]> => {
    try {
        return tripDataArray.map(tripData => tripData.data);
    } catch (error) {
        console.error("Error loading grouped trips:", error);
        return [];
    }
};

export const getCompleteTripData = async (): Promise<TripData[]> => {
    return tripDataArray;
};