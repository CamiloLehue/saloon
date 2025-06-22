
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";

interface ProgressTripProps {
    origen: string;
    destino: string;
    numeroViaje: string;
    patenteVehiculo: string;
    patenteRampa: string;
    horaSalida: string;
    horaLlegada: string;
    estado?: string;
    zonePoints?: { id: number, name: string, hours: string, estado: boolean, progress: number, lat: number, lng: number }[];
    progress_completed?: number;
}

function ProgressTrip({ estado , zonePoints, progress_completed }: ProgressTripProps) {
    const [progress, setProgress] = useState(progress_completed || 0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((progress < 100) ? progress + 1 : 100);
        }, 30000);

        return () => clearInterval(interval);
    }, [progress]);

    // const progress = 25;
    // const nextProgress = 50;

    // const navigate = useNavigate();
    return (
        <div className="relative flex flex-col place-items-center w-full"
        >
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
                    const pointSuccessColor = (point.progress > progress) ? "bg-white" : "bg-primary";
                    const pointSuccessSize = (point.progress > progress)
                        ? "h-3 w-3 -bottom-1 rounded-full"
                        : "h-2 w-2 -bottom-0.5 rounded shadow shadow-bgp/30";
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
                                className="absolute w-20 ms-7 top-5 flex flex-col justify-center items-center "
                                style={{
                                    left: `${(pointPosition - 13)}%`,
                                }}
                            >
                                <h5 className="text-nowrap text-white/60">{name}</h5>
                                <small className="text-xs text-white/80">{hours}</small>
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
            <small className="text-bgp text-nowrap text-xs capitalize">{estado}</small>
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

export default ProgressTrip