import clsx from "clsx";

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

    const progress = 20;
    const nextProgress = 45;

    return (
        <div className="relative col-span-2 flex flex-col place-items-center w-full min-h-70 py-10  rounded-3xl bg-gradient-to-br from-green-700/30 to-red-800/10">
            <div className="relative w-[calc(100%-5rem)] flex flex-col gap-3 h-35 ">
                {/* Estados ya recorrido */}
                <div className="relative flex flex-col w-full gap-8 ">
                    <div className="h-full w-0.5 bg-primary absolute left-[7px] top-1"></div>
                    {
                        zonePoints && zonePoints.map((point, index) => {
                            return (
                                <div key={index} className="relative flex justify-start items-center gap-5">
                                    <div className={`absolute top-1 left-0.5 w-3 h-3 bg-primary rounded-full`}></div>
                                    <h5 className={`absolute left-5 top-0`}><span className="text-primary">{point.hours} hrs.</span>  desde <span className="font-bold">{point.name}</span></h5>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="absolute w-70 h-30 bg-primary/30 rounded-full right-0 top-0 blur-3xl "></div>
                <img src="/dashboard/truck.png" alt="vehiculopng" className="absolute right-0 w-[17%]" />
            </div>
            <div className="relative w-[calc(100%-10rem)]">
                <div className="relative w-full">
                    <div className="absolute w-full h-0.5 bg-bgsecondary">
                    </div>
                    <div
                        className={`absolute h-0.5 bg-white`}
                        style={{
                            width: `${nextProgress}%`,
                        }}
                    >
                    </div>
                    <div
                        className={clsx(`absolute h-0.5 bg-primary`)}
                        style={{
                            width: `${progress}%`,
                        }}
                    >
                        <div className="absolute -top-14 -right-10.5 bg-primary min-w-20 px-5 h-7 rounded-full flex justify-center items-center">
                            <small className="text-bgp">{estado}</small>
                            <div className="absolute h-2 w-2 bg-primary rotate-45 -bottom-1">
                            </div>
                        </div>
                        <div className="absolute -top-2 right-0 w-5 h-5 border border-primary border-b-transparent animate-spin rounded-full">
                        </div>
                        <div className="absolute -top-1 right-1 w-3 h-3 bg-white border-b-transparent animate-spin rounded-full">
                        </div>
                    </div>
                </div>
                <div className="px-10 w-full">
                    <div className="relative flex items-center w-full">
                        {
                            zonePoints && zonePoints.map((point) => {
                                const progress = point.progress * 1;
                                console.log(progress);
                                return (
                                    <div key={point.id}
                                        className={`relative -top-1 w-3 h-3 bg-white rounded-full`}
                                        style={{
                                            left: `${progress}%`,
                                        }}
                                    >
                                        <div className={clsx(`absolute top-5 text-center`)}>
                                            <h5 className="text-nowrap text-gray">{point.name}</h5>
                                            <small className="text-gray">{point.hours}</small>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div className="absolute -top-1 left-[30%] w-3 h-3 bg-primary rounded-full">
                    <div className="absolute -left-8 top-5 text-center ">
                        <h5 className="text-nowrap text-white">Pargua, Chile</h5>
                        <small className="text-primary animate-pulse">16:30:00 </small>
                    </div>
                </div>
                <div className="absolute -top-1 left-[65%] rounded-full">
                    <div className="absolute -left-8 top-5  text-center">
                        <h5 className="text-nowrap text-white">Ancud, Chile</h5>
                        <small className="text-white">a las 17:30 </small>
                    </div>
                    <div
                        className="absolute -right-[6px] -top-[6px] animate-ping w-5 h-5 rounded-full border border-primary"
                        style={{
                            animation: "ping 2s ease-in-out infinite reverse",
                            animationDirection: "alternate ",
                            transform: "scale(1.5)",
                        }}
                    >
                    </div>
                    <div
                        className="absolute -right-[6px] animate-ping -top-[6px] scale-50 w-5 h-5 rounded-full border-2 border-primary"
                        style={{
                            animation: "ping 5s ease-in-out infinite reverse",
                            animationDelay: "1s",
                            animationDirection: "alternate",
                            transform: "scale(1.5)",
                        }}
                    >
                    </div>
                    <div
                        className="absolute right-0 top-[1px] w-2 h-2 rounded-full bg-white"
                        style={{
                            animation: "pulse 1s ease-in infinite",
                        }}
                    >
                    </div>
                </div>
                <div className="absolute -top-[3px] right-5 w-2 h-2 bg-bgp rounded-full">
                    <div className="absolute top-5 right-0 text-center ">
                        <h5 className="text-nowrap text-white">{destino}</h5>
                        <small className="text-white">a las {horaLlegada}</small>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default AccessDirectTrip