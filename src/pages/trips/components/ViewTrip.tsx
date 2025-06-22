import { useNavigate, useParams } from "react-router";
import Button from "../../../components/ui/Button";
import { GrClose, GrDirections, GrFormNextLink, GrFormPreviousLink, GrGrommet, GrPhone } from "react-icons/gr";
import { MapView } from "../../maps";
import ProgressTrip from "./ProgressTrip";
import { useTrips } from "../hooks/useTripsHook";
import Loading from "../../../components/ui/Loading";
import clsx from "clsx";
import { useRoutes } from "../../routes/hooks/useRoutes";
import TraceabilityTrips from "../../traceability/components/TraceabilityTrips";
import StatisticsSpeed from "../../statistics/components/StatisticsSpeed";
function ViewTrip() {
    const navigate = useNavigate();
    const id = useParams().id;
    const { Trips, loading } = useTrips();
    if (loading) return <Loading />;
    const trip = Trips.find((trip) => trip.trip_id === id);
    const origen_lat = trip?.origin.coordinates.latitude;
    const origen_lng = trip?.origin.coordinates.longitude;
    const destino_lat = trip?.destination.coordinates.latitude;
    const destino_lng = trip?.destination.coordinates.longitude;
    const origen: [number | undefined, number | undefined] = [origen_lat, origen_lng];
    const destino: [number | undefined, number | undefined] = [destino_lat, destino_lng];
    const city_origen = trip?.origin.name;
    const city_destino = trip?.destination.name;
    const id_trip = trip?.trip_id;
    const route_id = trip?.route_id;
    const progress_completed = trip?.progress_completed;
    const trip_status = trip?.current_status;
    // const driver_one = trip?.assigned_driver.name
    // const driver_two = trip?.assigned_driver.name
    const patente = trip?.assigned_driver.vehicle;
    // const positionVehicle = (id_trip === "scheduled-001") ? [-43.075089, -73.635604] : [origen_lat, origen_lng];

    const positionDemo = (id_trip: string | undefined) => {
        if (id_trip === 'scheduled-001') {
            return [-42.022611, -73.834074];
        } else if (id_trip === 'scheduled-002') {
            return [-42.185624, -73.715867];
        } else if (id_trip === 'scheduled-003') {
            return [-41.268094, -73.007761];
        } else if (id_trip === 'scheduled-004') {
            return [-40.79525, -73.191563];
        } else if (id_trip === 'scheduled-005') {
            return [-41.588358, -73.231891];
        } else if (id_trip === 'scheduled-006') {
            return [-41.903987, -73.792225];
        } else if (id_trip === 'scheduled-007') {
            return [-42.377569, -73.651766];
        } else if (id_trip === 'scheduled-008') {
            return [-41.175448, -72.556401];
        }
        else {
            return [origen_lat, origen_lng];
        }
    }

    return (
        <div className="relative bg-bgp h-full w-full flex flex-col justify-start items-start">
            <div className="grid grid-cols-12   w-full h-full">
                <div className="col-span-5 px-5 flex flex-col items-start justify-start gap-2 bg-w ">
                    <div className="w-full p-2 pb-10">
                        <div className="bg-bg py-1 w-full col-span-8 flex justify-start items-center gap-5 border-b border-bgsecondary/20 pb-3 ">
                            <div className="relative">
                                {
                                    <GrFormPreviousLink onClick={() => { navigate(-1) }} className="text-primary cursor-pointer" />
                                }
                            </div>
                            <div className="flex text-nowrap justify-start items-center gap-3 bg-bgsecondary/30 px-2 ps-4 pe-4 rounded-full py-1">
                                <GrGrommet className="text-primary animate-pulse" />
                                <h3>Recorrido #{id_trip} </h3>
                                <div className="text-white font-semibold flex justify-center items-center gap-2 bg-bgp  rounded-full px-4 py-1 text-xs">
                                    <GrDirections className="text-white" />
                                    {route_id}
                                </div>
                            </div>
                            <div className="flex justify-end items-center  text-nowrap">

                                {
                                    trip_status === "agendado" ? (
                                        <Button rounded="full" className="text-gray bg-danger/20 flex justify-center items-center gap-1 px-4 hover:bg-danger">
                                            <GrClose size={12} />

                                            <p>Cancelar Viaje</p>
                                        </Button>
                                    ) :
                                        <Button onClick={() => { alert("Viaje ya en progeso") }} rounded="full" className="text-gray bg-danger/20 flex justify-center items-center gap-1 px-4 cursor-no-drop">
                                            <GrClose size={12} />
                                            <p>Cancelar Viaje</p>
                                        </Button>
                                }

                                <Button rounded="full" className="text-gray flex justify-center items-center gap-1 px-4 hover:bg-bgt">
                                    <GrPhone size={12} />
                                    <p>Llamar</p>
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full px-5 py-2">
                            <div className="flex justify-start items-center gap-2">
                                <h3 className="text-white/70">{city_origen} </h3>
                                <GrFormNextLink className="text-primary" />
                                <h3 className="text-white">{city_destino} </h3>
                            </div>
                            <WidgetV progress_completed={progress_completed} trip_status={trip_status} />
                        </div>
                        <RutaTracking id_trip={id_trip} progress_completed={progress_completed} />
                    </div>
                    {
                        trip_status === "desconectado" && (
                            <div className="bg-danger/10 border border-danger/70 rounded w-full  mt-10 flex flex-col p-3">
                                <h5 className="text-white font-semibold">Notificaciones</h5>
                                <ol className="px-2 py-2 flex flex-col gap-3">
                                    <li className="text-xs flex flex-col bg-danger/10 rounded-lg p-2">
                                        <p className="font-bold text-white/60 ">12:30 hrs</p>
                                        <p>Dispositivo se ha desconectado del servidor, de forma no autorizada.</p>
                                    </li>
                                    <li className="text-xs flex flex-col  rounded-lg p-2">
                                        <p className="font-bold text-white/60">11:30 hrs</p>
                                        <p>Dispositivo se ha desconectado del servidor, de forma no autorizada.</p>
                                    </li>
                                </ol>
                            </div>
                        )
                    }
                    {
                        trip?.trip_id === "scheduled-002" && (
                            <div className="bg-danger/10 border border-danger/70 rounded w-full  mt-10 flex flex-col p-3">
                                <h5 className="text-white font-semibold">Notificaciones</h5>
                                <ol className="px-2 py-2 flex flex-col gap-3">
                                    <li className="text-xs flex flex-col bg-danger/10 rounded-lg p-2">
                                        <p className="font-bold text-white/60 ">12:30 hrs</p>
                                        <p>El vehículo de ha desviado de la ruta programada.</p>
                                    </li>

                                </ol>
                            </div>
                        )
                    }
                    <StatisticsSpeed />

                    {/* <div className="p-2 w-full h-full mt-20">
                        <div className="w-full h-full rounded-2xl flex flex-col gap-5 p-2">
                            <h3>Información <span className="block text-xs text-secondary">del recorrido</span></h3>
                            <div className="grid grid-cols-2 gap-2 w-full text-nowrap">
                                <div className="grid grid-cols-2 border border-bgsecondary/20 rounded-xl p-2 gap-x-5 gap-y-2">
                                    <p className="text-gray">Estado del viaje</p>
                                    <p className="text-primary">En camino</p>
                                    <p className="text-gray">Conductor 1</p>
                                    <p>{driver_one}</p>
                                    <p className="text-gray">Conductor 2</p>
                                    <p>{driver_two}</p>
                                    <p className="text-gray">Fecha de registro</p>
                                    <p>24/06/2025</p>
                                    <p className="text-gray">Fecha de Salida</p>
                                    <p>24/06/2025</p>
                                    <p className="text-gray">Fecha de Llegada</p>
                                    <p>24/06/2025</p>
                                </div>
                                <div className="grid grid-cols-2 border border-bgsecondary/20 rounded-xl p-2 gap-x-5 gap-y-2">
                                    <p className="text-gray">Origen</p>
                                    <p>Castro</p>
                                    <p className="text-gray">Destino</p>
                                    <p>Puerto Montt</p>
                                    <p className="text-gray">Hora salida</p>
                                    <p>11:30:00</p>
                                    <p className="text-gray">Hora llegada</p>
                                    <p>15:30:00</p>
                                    <p className="text-gray">Empresa</p>
                                    <p>Yadran</p>
                                    <p className="text-gray">Transporte</p>
                                    <p>Transportes Cristian</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-span-3 bg-gradient-to-bl from-bgsecondary to-bgsecondary/20   w-full h-full ">
                    <TraceabilityTrips id={id_trip!} patente={patente!} />
                </div>
                <div className="relative col-span-4 h-full overflow-hidden">
                    <MapView vehicleLastPosition={positionDemo(id_trip) as [number, number]}
                        trip_id={id_trip} tripOrigin={positionDemo(id_trip) as [number, number]}
                        tripDestination={destino as [number, number]}
                        origenDestinyAsigned={[origen as [number, number], destino as [number, number]]}
                        height="800px"
                        options
                    />
                </div>
            </div>
        </div >
    )
}

const RutaTracking = ({ progress_completed, id_trip }: { progress_completed: number | undefined, id_trip: string | undefined }) => {
    return (
        <div className="relative flex flex-col place-items-center w-full  py-2 mt-10  ">
            <TripFast progress_completed={progress_completed} id_trip={id_trip} />
        </div>
    )
}

const TripFast = ({ progress_completed, id_trip }: { progress_completed: number | undefined, id_trip: string | undefined }) => {
    const { routes } = useRoutes();
    const { Trips } = useTrips();
    const trip = Trips.find((trip) => trip.trip_id === id_trip);
    const trip_route_id = trip?.route_id;
    const route = routes.find((route) => route.id === trip_route_id);
    const city_origen = route?.origin.name;
    const city_destino = route?.destination.name
    const estado = trip?.current_status;
    const numeroViaje = trip?.trip_id;
    const patenteVehiculo = "XXXX-00";
    const patenteRampa = "XXXX-00";
    const horaSalida = trip?.planned_end_time;
    const horaLlegada = trip?.planned_end_time;
    const zonePoints = [
        {
            id: 1,
            name: city_origen!,
            hours: "11:30:00",
            lat: -33.448889,
            lng: -70.669265,
            estado: true,
            progress: 0,
            nextPoint: 25,
        },
        {
            id: 2,
            name: "Ancud",
            hours: "13:30:00",
            lat: -33.453944,
            lng: -70.672517,
            estado: true,
            progress: 50,
            nextPoint: 50,
        },
        {
            id: 3,
            name: city_destino!,
            hours: "15:30:00",
            lat: -33.453944,
            lng: -70.672517,
            estado: true,
            progress: 100,
            nextPoint: 100,
        },

    ]

    return (
        <ProgressTrip
            origen={city_origen!}
            destino={city_destino!}
            numeroViaje={numeroViaje!}
            patenteVehiculo={patenteVehiculo}
            patenteRampa={patenteRampa}
            horaSalida={horaSalida!}
            horaLlegada={horaLlegada!}
            estado={estado}
            zonePoints={zonePoints}
            progress_completed={progress_completed}
        />
    )
}
const WidgetV = ({ progress_completed, trip_status }: { progress_completed: number | undefined, trip_status: string | undefined }) => {



    const colorType = (progress_completed: number) => (
        clsx({
            "#ff0000": progress_completed >= 0 && progress_completed < 10,
            "#ff9900": progress_completed >= 10 && progress_completed < 25,
            "#ccff00": progress_completed >= 25 && progress_completed < 50,
            "#00ffc4": progress_completed >= 50 && progress_completed < 75,
            "#00dcff": progress_completed >= 75 && progress_completed <= 100,
        })
    )

    return (
        <button className="group relative">
            <div
                className="absolute -inset-1 rounded-xl bg-gradient-to-r from-secondary via-secondary to-primary opacity-10 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl"
            ></div>

            <div
                className="relative flex items-center gap-2 rounded-xl  p-1 pr-4"
            >
                <div className="flex items-center gap-3 rounded-lg  px-3 py-2">
                    <div className="relative">
                        <div
                            className="absolute -inset-1 rounded-lg bg-bgt blur-sm transition-all duration-300 group-hover:bg-primary/30 group-hover:blur-md"
                        ></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <span className="text-lg font-bold text-white">{progress_completed}%</span>

                        </div>
                        <span className="text-[10px] font-medium text-slate-400">{trip_status}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex gap-3">
                        <div className="flex flex-col items-center gap-1">
                            <div className="h-8 w-1.5 rounded-full  p-[2px]">
                                <div
                                    className="h-4 w-full rounded-full bg-primary transition-all duration-300 group-hover:h-6"
                                ></div>
                            </div>
                            <span className="text-[10px] font-medium text-slate-400">Combustible</span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <div className="h-8 w-1.5 rounded-full p-[2px]">
                                <div
                                    className="h-6 w-full rounded-full bg-secondary transition-all duration-300 group-hover:h-7"
                                ></div>
                            </div>
                            <span className="text-[10px] font-medium text-slate-400">Refrigerante</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <div
                            className="h-2 w-2 rounded-full shadow-lg shadow-primary/50"
                            style={{
                                backgroundColor: `${colorType(progress_completed!)}`,
                            }}
                        ></div>
                        <span className="text-xs font-semibold text-slate-300 uppercase">{trip_status}</span>
                    </div>
                </div>

                <div
                    className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-bgsecondary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></div>
            </div>
        </button>
    )
}



export default ViewTrip