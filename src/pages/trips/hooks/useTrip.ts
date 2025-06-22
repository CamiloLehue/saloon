import { useEffect, useState, useMemo } from "react";
import { getTrips } from "../services/trip";
import { ScheduledTrip } from "../types/TripsTypes";

let cachedTrips: ScheduledTrip[] | null = null;

interface UseTripReturn {
    origen_lat?: number;
    origen_lng?: number;
    destino_lat?: number;
    destino_lng?: number;
    origen: [number?, number?];
    destino: [number?, number?];
    city_origen?: string;
    city_destino?: string;
    id_trip?: string;
    route_id?: number | undefined;
    progress_completed?: number;
    trip_status?: string;
    patente?: string;
    positionDemo: (id_trip?: string) => [number, number];
    loading: boolean;
    error: Error | null;
}

export const useTrip = ({ id }: { id: string | undefined }): UseTripReturn => {
    const [Trips, setTrips] = useState<ScheduledTrip[]>(cachedTrips ?? []);
    const [loading, setLoading] = useState(!cachedTrips);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (cachedTrips) return;

        const fetchTrips = async () => {
            try {
                setLoading(true);
                const data = await getTrips();
                cachedTrips = data;
                setTrips(data);
            } catch (err) {
                setError(err instanceof Error ? err : new Error("Error al cargar viajes"));
                console.error("Error fetching viajes:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTrips();
    }, []);

    const trip = useMemo(() => Trips.find((t) => t.trip_id === id), [Trips, id]);

    const origen_lat = trip?.origin.coordinates.latitude;
    const origen_lng = trip?.origin.coordinates.longitude;
    const destino_lat = trip?.destination.coordinates.latitude;
    const destino_lng = trip?.destination.coordinates.longitude;
    const origen: [number?, number?] = [origen_lat, origen_lng];
    const destino: [number?, number?] = [destino_lat, destino_lng];
    const city_origen = trip?.origin.name;
    const city_destino = trip?.destination.name;
    const id_trip = trip?.trip_id;
    const route_id = trip?.route_id;
    const progress_completed = trip?.progress_completed;
    const trip_status = trip?.current_status;
    const patente = trip?.assigned_driver.vehicle;

    const positionDemo = (id_trip?: string): [number, number] => {
        switch (id_trip) {
            case "scheduled-001":
                return [-42.022611, -73.834074];
            case "scheduled-002":
                return [-42.185624, -73.715867];
            case "scheduled-003":
                return [-41.268094, -73.007761];
            case "scheduled-004":
                return [-40.79525, -73.191563];
            case "scheduled-005":
                return [-41.588358, -73.231891];
            case "scheduled-006":
                return [-41.903987, -73.792225];
            case "scheduled-007":
                return [-42.377569, -73.651766];
            case "scheduled-008":
                return [-41.175448, -72.556401];
            default:
                return [origen_lat ?? 0, origen_lng ?? 0];
        }
    };

    return {
        origen_lat,
        origen_lng,
        destino_lat,
        destino_lng,
        origen,
        destino,
        city_origen,
        city_destino,
        id_trip,
        route_id,
        progress_completed,
        trip_status,
        patente,
        positionDemo,
        loading,
        error,
    };
};