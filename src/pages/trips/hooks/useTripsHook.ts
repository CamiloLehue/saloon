import { useEffect, useState } from "react";
import { getTrips } from "../services/trip";
import { ScheduledTrip } from "../types/TripsTypes";

let cachedTrips: ScheduledTrip[] | null = null;

export const useTrips = () => {
  const [Trips, setTrips] = useState<ScheduledTrip[]>(cachedTrips ?? []);
  const [loading, setLoading] = useState(!cachedTrips);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (cachedTrips) return;

    const fetchTrips = async () => {
      try {
        setLoading(true);
        const data: ScheduledTrip[] = await getTrips();
        cachedTrips = data;
        setTrips(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error al cargar viajes'));
        console.error("Error fetching viajes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return { Trips, loading, error };
};