import { GrFormNextLink } from "react-icons/gr";
import CardType from "../../../components/ui/CardType";
import { CgShapeHexagon } from "react-icons/cg";
import { useNavigate } from "react-router";
import { useTrips } from "../hooks/useTripsHook";
import Button from "../../../components/ui/Button";
import clsx from "clsx";
import Titles from "../../../components/ui/SubMenu";
import { useWindowHeight } from "../../../hooks/customs/useWindowHeight";

function Trips() {
    const navigate = useNavigate();
    const hWindows = useWindowHeight(130);
    const { Trips, loading } = useTrips();
    if (loading) return <p>Cargando...</p>;
    if (!Array.isArray(Trips)) {
        return <p>No se encontraron viajes disponibles</p>;
    }

    const count = Trips.length;
    const completed = Trips.filter(trip => trip.progress_completed === 100).length;
    const inProgress = Trips.filter(trip => trip.progress_completed < 100).length;
    const disconnected = Trips.filter(trip => trip.current_status === "desconectado").length;
    const paused = Trips.filter(trip => trip.current_status === "detenido").length;
    const canceled = Trips.filter(trip => trip.current_status === "cancelado").length;
    const scheduled = Trips.filter(trip => trip.current_status === "agendado").length;

    return (
        <div className="relative w-full flex flex-col justify-start items-start ">
            <Titles title="Viajes Programado" />
            <div className="relative flex flex-col justify-start items-start  w-full h-full ">
                <img src="/effects/light04.webp" draggable={false} alt="effects" className="absolute top-0 left-0 rotate-180 w-full h-full object-cover blur-3xl opacity-20" />
                <div className="grid grid-cols-3 gap-2 w-full h-full">
                    <div className="overflow-y-scroll"
                        style={{ height: `${hWindows}px` }}>
                        <div className="w-full relative flex flex-col gap-1 pb-8 ">
                            {Trips.map((trip, i) => {
                                const progress_completed = trip.progress_completed;
                                // const status_trip = trip.current_status;                    // Obtener el primer y último registro de data para cada viaje

                                // Nombres de ciudades
                                const cityOrigen = trip.origin.name || "Origen desconocido";
                                const cityDestino = trip.destination.name || "Destino desconocido";

                                const getProgressColor = (percent: number): string => {
                                    const p = Math.min(Math.max(percent, 0), 100) / 100;
                                    const r = Math.round(255 * (1 - p));
                                    const g = 255;
                                    const b = 155;
                                    return `rgb(${r}, ${g}, ${b})`;
                                };

                                return (
                                    <div
                                        key={i}
                                        onClick={() => navigate(`/viajes/ver/${trip.trip_id}`)}
                                        className="relative group overflow-hidden bg-bgp w-full hover:bg-transparent cursor-pointer  h-15 rounded-xs grid grid-cols-5 px-2 py-1"

                                    >
                                        <div className={clsx(`absolute left-0 bottom-0 h-2  blur-3xl opacity-50 `)}
                                            style={{
                                                backgroundColor: getProgressColor(progress_completed),
                                                width: `${progress_completed}%`,
                                                height: 100 + "%",
                                            }}>
                                        </div>
                                        <div className='absolute left-0 bottom-0 h-2  bg-bgsecondary'
                                            style={{
                                                width: 100 + "%",
                                            }}>
                                        </div>
                                        <div
                                            className="absolute left-0 bottom-0 h-2 rounded-sm transition-all duration-300"
                                            style={{
                                                backgroundColor: getProgressColor(progress_completed),
                                                width: `${progress_completed}%`,
                                            }}
                                        ></div>
                                        <div className="col-span-2 flex justify-start items-center gap-1">
                                            <small
                                                style={{
                                                    color: getProgressColor(progress_completed),
                                                }}>
                                                <CgShapeHexagon />
                                            </small>
                                            <div className='flex flex-col justify-center items-start'>
                                                <small className="text-xs">
                                                    {
                                                        cityOrigen
                                                    }
                                                </small>
                                                <small className="text-xs">
                                                    {
                                                        cityDestino
                                                    }
                                                </small>
                                            </div>
                                        </div>

                                        <div className="flex  col-span-2 justify-center items-center gap-1">
                                            <small className='text-'
                                                style={{
                                                    color: getProgressColor(progress_completed),
                                                }}> {progress_completed + "%"}</small>
                                        </div>

                                        <div className="flex justify-center items-center group-hover:translate-x-1 group-hover:text-secondary transition-all duration-500">
                                            <GrFormNextLink />
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                    <div className="col-span-2 rounded-s-2xl">
                        <CardType title="Resumen de Recorridos" subtitle="Programados">

                            <div className="absolute left-3 -top-15 flex gap-2">
                                <Button
                                    onClick={() => navigate("/viajes/crear")}
                                    rounded="md"
                                    className="bg-primary text-black hover:bg-bgsecondary rounded-full px-5 py-2">
                                    <p>Programar viaje</p>
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 gap-5 w-full">
                                <div className="col-span-2 h-70 rounded-2xl p-1 grid grid-cols-2 gap-2">
                                    <div className="relative w-full h-full  rounded-xl p-1 grid grid-cols-5 bg-black/70 border border-white/10 ">
                                        <h4 className="font-bold col-span-5 p-2 text-center">Resumen sincronizado</h4>
                                        <div className="flex flex-col justify-center items-center">
                                            <h1 className="font-bold">{completed}</h1>
                                            <small className="text-success">Completados</small>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <h1 className="font-bold">{inProgress}</h1>
                                            <small className="text-primary">En progreso</small>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <h1 className="font-bold">{paused}</h1>
                                            <small className="text-gray">Detenidos</small>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <h1 className="font-bold">{canceled}</h1>
                                            <small className="text-gray">Cancelados</small>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <h1 className="font-bold">{scheduled}</h1>
                                            <small className="text-gray">Agendado</small>
                                        </div>
                                        <div className="flex flex-col col-span-3  justify-center items-center">
                                            <h1 className="font-bold">{disconnected}</h1>
                                            <small className="text-danger">Sin Conexion</small>
                                        </div>
                                        <div className="flex flex-col justify-center items-center col-span-2 rounded-xl">
                                            <h1 className="font-bold">{count}</h1>
                                            <small className="text-white">Total hoy</small>
                                        </div>
                                    </div>
                                    <div className="p-5 flex justify-center items-center flex-col">
                                        <h4 className="font-bold">Programados</h4>
                                        <small className="text-xs text-gray">Viajes que están planificados para hoy o los próximos días.
                                        </small>
                                        <div className="grid grid-cols-3 gap-5 w-full mt-5">
                                            <div className="flex flex-col justify-center items-center gap-1 bg-bgp rounded-2xl p-5">
                                                <h2 className="text-4xl text-white">{count}</h2>
                                                <small className="text-xs text-white">Para Hoy</small>
                                            </div>
                                            <div className="flex flex-col justify-center items-center gap-1 bg-bgp rounded-2xl p-5">
                                                <h2 className="text-4xl text-white">22</h2>
                                                <small className="text-xs text-white">Esta semana</small>
                                            </div>
                                            <div className="flex flex-col justify-center items-center gap-1 bg-bgp rounded-2xl p-5">
                                                <h2 className="text-4xl text-white">9</h2>
                                                <small className="text-xs text-white">Próxima semana</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            <div>
                                <TravelSummaryTable />
                            </div>
                        </CardType>
                    </div>
                </div>
            </div>
        </div>
    );
}



const TravelSummaryTable: React.FC = () => {

    const travelSummaryData = [
        { label: "Total de viajes", value: 22 },
        { label: "En movimiento", value: 4 },
        { label: "Detenidos", value: 6 },
        { label: "Desconectados", value: 2 },
        { label: "Completados", value: 10 },
        { label: "Programados hoy", value: 3 },
        { label: "Viajes con alertas", value: 2 },
        { label: "Conductores activos", value: 9 },
        { label: "Duración promedio", value: "3h 42m" },
    ];
    return (
        <div className=" text-white p-2 w-full mx-auto bg-bgp/80 rounded-2xl">

            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th className="py-2 px-4 text-gray font-medium"></th>
                        <th className="py-2 px-4 text-gray font-medium text-xs">Resumen</th>
                    </tr>
                </thead>
                <tbody>
                    {travelSummaryData.map((item, index) => (
                        <tr
                            key={index}
                            className={index % 2 === 0 ? "bg-bgt " : "bg-bgp/30 "}
                        >
                            <td className="py-1 text-xs px-4">{item.label}</td>
                            <td className="py-1 text-xs px-4 font-semibold">{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center items-center pt-10">
                <Button rounded="lg" className="hover:bg-bgs px-5  ">
                    Ver más
                </Button>

            </div>
        </div>
    );
};
export default Trips;