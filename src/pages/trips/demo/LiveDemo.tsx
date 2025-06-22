import React from "react";
import { useLastPositions } from "../../vehicles/hooks/useVehicles";
import { useVehicleState } from "../../vehicles/hooks/useVehiclesState";
import { MapView } from "../../maps";
import Titles from "../../../components/ui/SubMenu";
import Error from "../../../components/errorComponents/Error";

const LiveDemo: React.FC = () => {
  const { lastPosition, error } = useLastPositions();
  const { vehicleState, loading } = useVehicleState();
  if (error || !loading) return <Error errorType={"API DISCONNECTED"} />;
  const lat: number | null | undefined = lastPosition?.positionStatus.latitude;
  const lng: number | null | undefined = lastPosition?.positionStatus.longitude;
  const deviceId = lastPosition?.assetStatus.deviceSN;


  const evento_reciente = vehicleState?.evento_reciente;
  const llegada_geo = vehicleState?.llegada.geocerca
  const llegada_hora = vehicleState?.llegada.hora
  const llegada_ciudad = vehicleState?.llegada.direccion.city
  const llegada_calle = vehicleState?.llegada.direccion.street

  const salida_geo = vehicleState?.salida.geocerca
  const salida_hora = vehicleState?.salida.hora
  const salida_ciudad = vehicleState?.salida.direccion.city
  const salida_calle = vehicleState?.salida.direccion.street



  return (
    <div className="w-full overflow-hidden h-full">
      <Titles title="Monitoreo en tiempo real (Sensor YADRAN)" />
      <div className="grid grid-cols-2 w-full h-full overflow-hidden">
        <img src="/effects/light04.webp" draggable={false} alt="effects" className="absolute top-0 left-0 rotate-180 w-full h-full object-cover blur-md opacity-30" />
        <div className="relative">
          <ul className="space-y-2  p-1 py-3 rounded overflow-y-auto">
            <h4 className="text-stone-300 text-center py-3">SENSOR GPS YADRAN <span className="text-primary animate-pulse">({deviceId})</span></h4>
            <div className="w-full">
              <h5 className="text-stone-300 text-center py-3">Información del sensor</h5>
              <div className="flex  justify-evenly w-full gap-5">
                <div className="rounded-md py-3 px-4  flex flex-col justify-center items-center">
                  <small>
                    Evento reciente
                  </small>
                  <span className="font-bold text-primary">{evento_reciente}</span>
                </div>
                <div className="rounded-md p-1 bg-bgp/50 px-5 flex flex-col ">
                  <div className="flex flex-col p-2">
                    <small className="text-center">
                      Llegada a
                    </small>
                    <span className="font-bold text-primary">{llegada_ciudad}</span>
                    <small className="">{llegada_calle}</small>
                    <small>
                      {llegada_hora?.slice(0, 10)}
                    </small>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-bgp rounded-md">
                    <small className="text-gray">Geocerca</small>
                    <small className="text-secondary capitalize">{llegada_geo}</small>
                  </div>
                </div>
                <div className="rounded-md p-1 bg-bgp/50 px-5 flex flex-col">
                  <div className="flex flex-col p-2">
                    <small className="text-center">
                      Salida desde
                    </small>
                    <span className="font-bold text-primary">{salida_ciudad}</span>
                    <small className="">{salida_calle}</small>
                    <small>
                      {salida_hora?.slice(0, 10)}
                    </small>
                  </div>
                  <div className="flex flex-col items-center justify-center bg-bgp rounded-md">
                    <small className="text-gray">Geocerca</small>
                    <small className="text-secondary capitalize">{salida_geo}</small>
                  </div>
                </div>
              </div>
              <div>
                <TravelSummaryTable />
              </div>
            </div>
          </ul>
        </div>
        <div>
          <MapView
            tripOrigin={lat && lng ? [lat, lng] : undefined}
            vehicleLastPosition={lat && lng ? [lat, lng] : undefined}
            tripDestination={[-42.1350, -73.6400]}
            height="780px"
            options
          />
        </div>
      </div>
    </div>
  );
};


const TravelSummaryTable: React.FC = () => {
  const { lastPosition } = useLastPositions();
  // if (error) return <p>Error al obtener sensores</p>;

  const lat: number | null | undefined = lastPosition?.positionStatus.latitude;
  const lng: number | null | undefined = lastPosition?.positionStatus.longitude;
  const deviceId = lastPosition?.assetStatus.deviceSN;
  const addresss = lastPosition?.positionStatus.address;
  const geofenceStatus = lastPosition?.positionStatus.geofenceStatus;
  const tripDistance = lastPosition?.positionStatus.tripDistance;
  const city = lastPosition?.positionStatus.city;
  const state = lastPosition?.positionStatus.state;
  const street = lastPosition?.positionStatus.street;
  const dwellTimeOutside = lastPosition?.positionStatus.dwellTimeOutside;
  const priorDepartureTime = lastPosition?.positionStatus.priorDepartureTime;
  const priorDepartureLocation = lastPosition?.positionStatus.priorDepartureLocation;


  const travelSummaryData = [
    { label: "ID Sensor", value: deviceId },
    { label: "Coordenadas", value: (lat && lng) ? `${lat}, ${lng}` : "Desconocido" },
    { label: "Dirección", value: addresss },
    { label: "Distancia aproximada Geocerca (Yadran)", value: (tripDistance + " Kilometros") },
    { label: "Ciudad", value: city },
    { label: "Región", value: state },
    { label: "Calle", value: street },
    { label: "Estado geocerca", value: (geofenceStatus === "Out") ? "Fuera Geocerca" : "Dentro Geocerca" },
    { label: "Tiempo fuera de geocerca", value: dwellTimeOutside },
    { label: "Hora de salida anterior", value: priorDepartureTime },
    { label: "Ubicación de salida anterior", value: priorDepartureLocation },
  ];
  return (
    <div className=" text-white p-2 w-full mx-auto">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-4 text-gray font-medium"></th>
            <th className="py-2 px-4 text-white/60 font-medium text-xs">Resumen</th>
          </tr>
        </thead>
        <tbody>
          {travelSummaryData.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-bgp/0 " : "bg-bgp/50"}
            >
              <td className="py-3 text-xs px-4">{item.label}</td>
              <td className="py-1 text-xs px-4 font-semibold">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LiveDemo;