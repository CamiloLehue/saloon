import { useParams } from "react-router";
import Loading from "../../../components/ui/Loading";
import { useTrip } from "../hooks/useTrip";
import SubMenu from "../../../components/ui/SubMenu";
import { LiaAddressCardSolid, LiaArrowRightSolid, LiaBell, LiaCommentsSolid, LiaCopy, LiaJira, LiaMapSignsSolid, LiaPhoneSolid, LiaSatelliteSolid, LiaStar, LiaStarHalfAltSolid, LiaStarSolid } from "react-icons/lia";
import { useState } from "react";
import Button from "../../../components/ui/Button";

function Trip() {

    const id = useParams().id;
    const {
        // origen_lat,
        // origen_lng,
        // destino_lat,
        // destino_lng,
        // origen,
        // destino,
        // city_origen,
        // city_destino,
        id_trip,
        // route_id,
        // progress_completed,
        // trip_status,
        // patente,
        positionDemo,
        loading,
        error
    } = useTrip({ id });

    if (loading) return <Loading />;
    if (error) return <p>Error al cargar viaje: {error.message}</p>;

    const position = positionDemo(id_trip);

    console.log(position);

    return (
        <div className="relative w-full h-full flex flex-col justify-start items-start">
            <SubMenu title={`Recorrido ${' - ' + id_trip}`} subtitle={id_trip} />
            <div className="relative w-full grid grid-cols-12 gap-1 h-full">
                <TripInfo />
                <div className="relative col-span-4 flex flex-col w-full bg-bgp h-full">
                    <div className="w-full h-[66.66%] overflow-hidden  flex justify-center items-center">
                        <h5>Trazabilidad & logistica</h5>
                    </div>
                    <div className="w-full h-[33.33%] overflow-hidden  flex justify-center items-center">
                        <h5>VER</h5>
                    </div>
                </div>
                <div className="relative col-span-4 flex justify-center items-center w-full bg-bgt">
                    <h5>Mapa</h5>
                </div>
            </div>
        </div>
    )
}

const TripInfo = () => {
    return (
        <div className="relative col-span-4 flex flex-col w-full h-full">
            <div className="absolute right-5 top-12 flex flex-col gap-2">
                <small className="text-primary flex items-center gap-1"><LiaJira size={17} />
                    Conectado
                </small>
                <small className="text-primary flex items-center gap-1"><LiaSatelliteSolid size={17} />
                    Satelital
                </small>
            </div>
            <div className="h-[66.66%] bg-bgsecondary w-full flex flex-col gap-5">
                <div className=" flex flex-col justify-center items-center w-full  border-dashed border-b border-bgsecondary/30 mb-2 ">
                    <div className="flex justify-center items-center w-[calc(100%-5rem)] mx-auto h-10 bg-black rounded-b-2xl">
                        <h5 className="text-gray flex items-center">
                            <span className="px-4 text-secondary  bg-black rounded-full py-1 flex flex-nowrap items-center gap-1"><LiaMapSignsSolid size={20} className=" " />En transito</span>  JUN 28, 2024, 14:45
                        </h5>
                    </div>
                    <div className="w-full flex justify-center items-center my-5 ">
                        <img draggable={false} src="/dashboard/truck.png" alt="vehiculopng" className="w-[40%]" />
                    </div>
                    <div className="relative flex justify-center items-center gap-2 py-2 px-5 border border-gray/50 rounded-xl">
                        <small className="absolute left-[50%] -top-[1px] -translate-1/2 text-[10px] bg-bgsecondary px-2">Identificación</small>
                        <h4>XDRR-84</h4>
                        <div>
                            <LiaCopy className="text-primary cursor-pointer hover:opacity-50" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1  py-3">
                        <small className="text-gray">Transportado por</small>
                        <div className="flex justify-center items-center bg-black px-5 rounded-full py-1">
                            <img draggable={false} src="/logo-blanco.svg" alt="vehiculopng" className="w-22" />
                        </div>
                    </div>
                </div>
                <OriginDestiny />
                <div className="px-5">
                    <div className="relative w-full flex justify-center items-center gap-2 py-5 px-5 border-2 border-gray rounded-xl">
                        <small className="absolute left-[50%] -top-[1px] -translate-1/2 text-[10px] bg-bgsecondary px-2">Métricas de transporte</small>
                        <div className="w-full flex justify-center items-center gap-2 text-nowrap">
                            <div className=" px-5 py-2 rounded-lg flex flex-col justify-center items-center">
                                <small className="text-gray">Tiempo estimado</small>
                                <h5>1 hora 5 minutos</h5>
                            </div>
                            <div className=" px-5 py-2 rounded-lg flex flex-col justify-center items-center">
                                <small className="text-gray">Kilometros</small>
                                <h5>79 km</h5>
                            </div>
                            <div className=" px-5 py-2 rounded-lg flex flex-col justify-center items-center">
                                <small className="text-gray">N.º de Paradas</small>
                                <h5>3 Autorizadas</h5>
                            </div>
                            <div className=" px-5 py-2 rounded-lg flex flex-col justify-center items-center">
                                <small className="text-gray">Rendimiento</small>
                                <h5>93%</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[33.33%] rounded-2xl rounded-tr-none  flex justify-center items-center ">
                <div className="relative rounded-2xl w-full h-full bg-bgt">
                    <div className="absolute right-0 -top-4 rounded-bl-2xl h-13 w-[50%] bg-bgsecondary px-4 flex justify-evenly items-center">
                        <h4>
                            Rendimiento del viaje
                        </h4>
                        <span className="flex items-center">
                            <LiaStarSolid className="text-warning" />
                            <LiaStarSolid className="text-warning" />
                            <LiaStarHalfAltSolid className="text-warning" />
                            <LiaStar />
                            <LiaStar />
                        </span>
                    </div>
                    <div className="absolute left-0 -top-3 rounded-t-3xl h-12 w-[50%] bg-bgt  flex items-center justify-center px-4">
                        <h3 className="font-bold text-white">Logística de Transporte</h3>
                    </div>
                    <div className="w-full flex flex-col gap-4  h-full pt-12 px-3">
                        {
                            Array.from({ length: 2 }, (_, i) => i + 1).map((_, index) => (
                                <article key={index} className=" w-full gap-2  rounded-2xl flex items-center">

                                    <div className="w-full h-full ">
                                        <div className="relative w-full flex justify-center items-center gap-2 py-3 px-3 border-2 border-gray rounded-xl">
                                            <small className="absolute left-[50%] -top-[1px] -translate-1/2  bg-bgt px-2">
                                                Conductor Principal
                                            </small>
                                            <div className="w-full flex justify-between items-center gap-2 text-nowrap">
                                                <div className="">
                                                    <img src="/drivers/driver4.jpg" alt="vehiculopng" className=" w-12 h-12 object-cover rounded-full" />
                                                </div>
                                                <div className="flex justify-center items-center flex-col">
                                                    <h5 className="font-bold">Juan Pérez</h5>
                                                    <small>Conductor</small>
                                                </div>
                                                <div className="flex justify-center items-center flex-col">
                                                    <h5 className="font-bold">TRDD</h5>
                                                    <small>Empresa</small>
                                                </div>
                                                <div className="flex justify-center items-center flex-col">
                                                    <h5 className="font-bold">22</h5>
                                                    <small>Viajes</small>
                                                </div>
                                                <div className="flex justify-center items-center flex-col">
                                                    <h5 className="font-bold">XXTS-00</h5>
                                                    <small>Unidad</small>
                                                </div>
                                                <div className="flex justify-center items-center flex-col">
                                                    <h5 className="font-bold">89%</h5>
                                                    <small>Rendimiento</small>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center bg-bgp rounded-full px-1">
                                                <Button>
                                                    <LiaPhoneSolid />
                                                </Button>
                                                <Button>
                                                    <LiaAddressCardSolid />
                                                </Button>
                                                <Button>
                                                    <LiaBell />
                                                </Button>
                                                <Button>
                                                    <LiaCommentsSolid />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                    <div className="absolute left-0 -top-3 rounded-t-3xl h-12 w-[50%] bg-bgt  flex items-center justify-center px-4">
                        <h3 className="font-bold text-white">Logística de Transporte</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

const OriginDestiny = () => {

    const [progress] = useState(50);
    const origen = "Puerto Montt";
    const destino = "Castro";
    const hora_inicio = "12:30";
    const hora_fin = "13:30";
    const prioridad = "Alta";

    return (
        <div className="relative w-full flex justify-start items-center px-5">
            <div className="h-14 w-full border-2 border-gray rounded-xl relative grid grid-cols-2">
                <div className="relative flex flex-col justify-center items-center">
                    <small className="absolute left-[50%] -top-[1px] -translate-1/2 text-[10px] bg-bgsecondary px-2 text-white/70">Origen</small>
                    <h5>{origen}</h5>
                    <small>{hora_inicio}</small>
                </div>
                <div className="absolute left-[50%]  -translate-x-1/2 top-[50%] -translate-y-1/2 h-7 w-7 flex justify-center items-center rounded-full">
                    <LiaArrowRightSolid className="text-primary" />
                </div>
                <div className="absolute left-[50%] bg-bgsecondary px-5 border border-gray -translate-x-1/2 top-[0] -translate-y-1/2 h-5  flex justify-center gap-0.5 items-baseline rounded-full">
                    <small className="font-bold inline-block">{progress}</small>
                    <span className="text-[8px]">%</span>
                </div>
                <div className="relative flex flex-col justify-center items-center">
                    <small className="absolute left-[50%] -top-[1px] -translate-1/2 text-[10px] bg-bgsecondary px-2 text-white/70">Destino</small>
                    <h5>{destino}</h5>
                    <small>{hora_fin}</small>
                </div>
            </div>
        </div>
    )
}





export default Trip


{/* <CardUi className="w-full bg-bgsecondary rounded-b-2xl h-[66.66%] overflow-hidden  flex flex-col justify-start items-start">
<div className="flex justify-center items-center w-[calc(100%-5rem)] mx-auto h-10 bg-bgt rounded-b-2xl">
    <h5 className="text-secondary"><span className="text-primary px-4 bg-black rounded-full py-1">En transito</span>  JUN 28, 2024, 14:45 </h5>
</div>
<div className=" flex flex-col justify-center items-center w-full py-2 border-dashed border-b border-bgsecondary/30 mb-2">
    <img src="/dashboard/truck.png" alt="vehiculopng" className="w-[40%]" />
    <div className="flex justify-center items-center gap-2 py-2">
        <h4>XDF3452FG31123</h4>
        <div>
            <LiaCopy className="text-primary" />
        </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-1  py-3">
        <small className="text-gray">Transportado por</small>
        <div className="flex justify-center items-center bg-black px-5 rounded-full py-1">
            <img src="/logo-blanco.svg" alt="vehiculopng" className="w-22" />
        </div>
    </div>
</div>

<div className="relative w-full grid grid-cols-2 gap-0.5 px-5">
    <div className="bg-black border border-bgt w-full h-35 rounded-lg flex flex-col justify-center items-center overflow-hidden">
        <div className=" flex flex-col justify-center items-center py-2">
            <h2>Puerto Montt</h2>
            <small>Los Lagos X, Chile</small>
        </div>
        <div className="w-full grid  grid-cols-2 gap-1 px-5 bg-bgsecondary/5 h-full p-2">
            <h4>Programado</h4>
            <h4 className="text-end">12:30 PM</h4>
            <h4>Horario Actual</h4>
            <h4 className="text-end">12:45 PM</h4>
        </div>
    </div>
    <div className="absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2  h-7 w-7 flex justify-center items-center rounded-full">
        <LiaArrowRightSolid className="text-primary" />
    </div>
    <div className="bg-black border border-bgt w-full h-35 rounded-lg flex flex-col justify-center items-center overflow-hidden">
        <div className=" flex flex-col justify-center items-center py-2">
            <h2>Quellón</h2>
            <small>Los Lagos X, Chile</small>
        </div>
        <div className="w-full  grid  grid-cols-2 gap-1 px-5 bg-bgsecondary/5 h-full p-2">
            <h4>Programado</h4>
            <h4 className="text-end ">12:30 PM</h4>
            <h4 className="text-balance">Estimada</h4>
            <h4 className="text-end">12:45 PM</h4>
        </div>
    </div>
</div>
</CardUi> */}