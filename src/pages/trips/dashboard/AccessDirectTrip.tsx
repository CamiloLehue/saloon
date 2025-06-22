import { useEffect, useState } from "react";
import { GrFormDown, GrFormNextLink, GrFormPin } from "react-icons/gr";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router";

interface AccessDirectTripProps {
    origen: string;
    destino: string;
    numeroViaje: string;
    patenteVehiculo: string;
    patenteRampa: string;
    horaSalida: string;
    horaLlegada: string;
    trayectoRecorrido: number;
    estado: "En Camino" | "En Rampa" | "En Viaje" | "Finalizado" | "Pendiente";
    zonePoints?: { id: number, name: string, hours: string, estado: boolean, progress: number, lat: number, lng: number }[];
}

function AccessDirectTrip({ estado = "En Camino", zonePoints }: AccessDirectTripProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((progress < 100) ? progress + 1 : 100);
        }, 2000);

        return () => clearInterval(interval);
    }, [progress]);

    // const progress = 25;
    // const nextProgress = 50;

    const navigate = useNavigate();
    return (
        <div className="relative flex flex-col place-items-center w-full min-h-80 overflow-hidden shadow 
        bgbgp rounded-2xl border-t border-secondary/50 bg-bgt"
        >
            <div className="absolute right-5 top-2 flex justify-center items-center gap-2 z-10">
                <div className="rounded-full flex justify-center gap-2 items-center py-1">
                    <Button onClick={() => { navigate("/viajes/ver/scheduled-001") }} rounded="full" className="py-1 hover:bg-bgp">
                        <GrFormNextLink size={20} />
                    </Button>
                    <Button rounded="full" className="py-1 hover:bg-bgp">
                        <GrFormDown size={20} />
                    </Button>
                </div>
                <GrFormPin className="text-2xl text-primary" />
            </div>
            <div className="absolute right-0 top-0 bg-secondary/80 h-60 w-100 rounded-full blur-3xl"></div>
            <div className="absolute right-[50%] top-0 bg-purple-400/20 h-60 w-100 rounded-full blur-3xl"></div>
            <div className="relative w-full h-[50%]  p-1">
                <div className="grid grid-cols-2 w-full h-full p-5">
                    <div className="flex justify-center items-center relative mt-3">
                        <div className="h-35 w-0.5 bg-white absolute left-[20px] top-1 "></div>
                        <div className="flex justify-start items-center gap-3 ps-0.5">
                            <div className="absolute top-1 left-4.5 w-2 h-2 bg-primary rounded-full"></div>
                            <div className="absolute left-10 top-0 flex flex-col">
                                <small className="font-bold">11:30</small>
                                <h5 className="text-xs">Salida desde terminal Castro, Chiloé</h5>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-3 ps-0.5">
                            <div className="absolute top-21 left-4.5 w-2 h-2 bg-primary rounded-full"></div>
                            <div className="absolute left-10 top-20 flex flex-col">
                                <small className="font-bold">12:45</small>
                                <h5 className="text-xs">Salida desde Ancud, Chiloé</h5>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center">
                        <img src="/dashboard/truck.png" alt="vehiculopng" className="absolute right-10 top-20 w-[40%]" />
                    </div>
                </div>
            </div>
            <div className="relative w-full h-[50%] p-0.5">
                <div className="relative w-full h-full flex flex-col justify-center items-center">
                    <div className="relative w-[calc(100%-10rem)] mx-auto">
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white">
                        </div>
                        <BarProgress progress={progress} estado={estado} />
                        <BarLine zonePoints={zonePoints} progress={progress} />
                    </div>
                </div>
            </div>
        </div>

    )
}

type BarLineProps = {
    progress: number;
    zonePoints?: { id: number, name: string, hours: string, estado: boolean, progress: number, lat: number, lng: number }[];
}

const BarLine = ({ zonePoints, progress }: BarLineProps) => {
    return (
        <>
            {
                zonePoints && zonePoints.map((point, index) => {
                    const pointPosition = point.progress;
                    const name = point.name;
                    const hours = point.hours;
                    const pointSuccessColor = (point.progress > progress) ? "bg-white" : "bg-gradient-to-tl from-primary to-secondary";
                    const pointSuccessSize = (point.progress > progress)
                        ? "h-3 w-3 -bottom-1 rounded-full"
                        : "h-2 w-5 -bottom-0.5 rounded shadow shadow-bgp/30";
                    return (
                        <div key={index} className="relative w-full top-0.5">
                            {
                                <div
                                    key={index}
                                    className={`
                                        ${pointSuccessSize} 
                                        ${pointSuccessColor} 
                                         absolute `}
                                    style={{
                                        left: `${pointPosition}%`,
                                    }}
                                ></div>
                            }
                            <div
                                className="absolute w-20 top-5 flex flex-col justify-center items-center "
                                style={{
                                    left: `${(pointPosition - 13)}%`,
                                }}
                            >
                                <h5 className="text-nowrap text-white">{name}</h5>
                                <small className="text-xs text-white">{hours}</small>
                            </div>
                        </div>
                    )
                })
            }</>
    )
}

const BarProgress = ({ progress, estado }: { progress: number, estado?: string }) => {
    return (
        <div
            className="absolute -bottom-0 left-2.5 h-0.5 bg-primary"
            style={{
                width: `${progress}%`,
            }}>
            <PointCheck />
            <PopUpStatus estado={estado} />
        </div>
    )
}

const PopUpStatus = ({ estado = "En Camino" }: { estado?: string }) => {
    return (
        <div className="absolute -top-11 -right-11.5 bg-white min-w-20 px-5 h-7 rounded-full flex justify-center items-center">
            <small className="text-bgp text-nowrap text-xs">{estado}</small>
            <div className="absolute h-2 w-2 bg-white rotate-45 -bottom-1">
            </div>
        </div>
    )
}

const PointCheck = () => {
    return (
        <>
            <div className="absolute -bottom-2.5 animate-spin -right-1 w-5 h-5 rounded-full border-2 border-dashed border-primary "
                style={{
                    animationDuration: "3s",
                    animationIterationCount: "infinite",
                    animationName: "spin",
                    animationTimingFunction: "linear",
                    transformOrigin: "center",
                }}
            >
            </div>
            <div className="absolute -bottom-1.5 right-0 w-3 h-3 rounded-full bg-white ">
            </div></>
    )
}

export default AccessDirectTrip