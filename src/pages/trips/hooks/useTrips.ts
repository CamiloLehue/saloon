import { useEffect, useState } from "react";
import { getAllSensorReadings } from "../services/tripService";
import { SensorReading } from "../types/Trips";

export const useTrips = () => {
  const [trips, setTrips] = useState<SensorReading[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const data = await getAllSensorReadings();
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

  return { trips, loading, error };
};