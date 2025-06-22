export type ScheduledTrip = {
    trip_id: string;
    scheduled_status: "agendado" | "en progreso" | "completado";
    scheduled_for: string;
    planned_end_time: string;
    estimated_distance_km: number;
    estimated_time_minutes: number;
    assigned_driver: {
      id: number;
      name: string;
      vehicle: string;
    };
    route_id: number;
    origin: {
      name: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
    };
    destination: {
      name: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
    };
    current_status: "agendado" | "en transito" | "completado" | "cancelado"  | "detenido" | "desconectado" ;
    created_at: string;
    last_updated: string;
    progress_completed: number;
    arrival_status: "on_time" | "at_risk" | "delayed" | "unknown";
  };
  