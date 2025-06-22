import tripJson from "../../../data/trips.json";
import { ScheduledTrip } from "../types/TripsTypes";

const tripArray: ScheduledTrip[] = tripJson as ScheduledTrip[];

export const getTrips = async (): Promise<ScheduledTrip[]> => {
    try {
        return tripArray;
    } catch (error) {
        console.error("Error al cargar los recorridos: ", error);
        return [];
    }
}

export default getTrips;