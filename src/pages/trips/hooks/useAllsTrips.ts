import { useEffect, useState } from "react";
import { getCompleteTripData } from "../services/tripService";
import { TripData } from "../types/Trips";

let cachedTrips: TripData[] | null = null;

export const useAllTrips = () => {
  const [allTrips, setTrips] = useState<TripData[]>(cachedTrips ?? []);
  const [loading, setLoading] = useState(!cachedTrips);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (cachedTrips) return;

    const fetchTrips = async () => {
      try {
        setLoading(true);
        const data: TripData[] = await getCompleteTripData();
        cachedTrips = data;
        setTrips(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error al cargar viajes'));
        console.error("Error fetching trips:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return { allTrips, loading, error };
};