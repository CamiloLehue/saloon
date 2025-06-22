import { GrFormDown, GrFormNextLink, GrLocation } from "react-icons/gr";
import Error from "../../../components/errorComponents/Error";
import Button from "../../../components/ui/Button";
import { useLastPositions } from "../../vehicles/hooks/useVehicles";
import { useNavigate } from "react-router";
import { useStatusVehicle } from "../../vehicles/hooks/useVehicleStatus";
import TruckIconFront from "../../../assets/vehicles/truckFrontal.webp";
import UiCard from "../../dashboard/components/UiCard";
import { LiaCopy } from "react-icons/lia";

function TripSet() {
    const { lastPosition, error } = useLastPositions();
    const { vehicleStatus } = useStatusVehicle();
    const navigate = useNavigate();

    if (error) return <Error errorType={"API DISCONNECTED"} />;

    const km = lastPosition?.positionStatus.tripDistance ?? 20;
    const progress = (km / 1200) * 100;
    const visualProgress = getVisualProgress(progress);
    const deviceId = lastPosition?.assetStatus.deviceSN;
    const origen = "Chiloé, Planta Yadran";
    const comuna = lastPosition?.positionStatus.city;
    const region = lastPosition?.positionStatus.state;
    const estado = vehicleStatus?.estado;
    const estadoHora = vehicleStatus?.ultimo_mensaje;
    const horaSalida = lastPosition?.positionStatus.arrivalTime;
    const horaLlegada = lastPosition?.assetStatus.messageStamp;
    const calle = lastPosition?.positionStatus.street;
    const zipcode = lastPosition?.positionStatus.zipCode;


    function getVisualProgress(p: number) {
        const visualMin = 10;
        const visualMax = 110;
        const clamped = Math.max(0, Math.min(100, p));
        return ((clamped / 100) * (visualMax - visualMin)) + visualMin;
    }

    return (
        <div className="w-full h-full">
            <TripHeader estadoHora={estadoHora} onNavigate={() => navigate("/livedemo")} />
            <UiCard>
                <div className="py-3">
                    <div className="flex justify-center items-center w-full gap-2">
                        <div className="relative flex justify-center items-center gap-2 py-2 px-2 border-2 border-gray rounded-xl">
                            <small className="absolute left-[50%] -top-[1px] -translate-1/2 text-[10px] bg-bgt px-2">Identificación</small>
                            <div className="flex justify-center items-center gap-0.5">
                                <small>{deviceId}</small>
                                <div>
                                    <LiaCopy className="text-secondary cursor-pointer hover:opacity-50" />
                                </div>
                            </div>
                        </div>
                        <div className=" gap-2">
                            <img draggable={false} src={TruckIconFront} alt="vehiculopng" className="w-20" />
                        </div>
                    </div>

                    <TripProgressBar progress={progress} visualProgress={visualProgress} estado={estado} />
                </div>
                <TripLocationFooter
                    origen={origen}
                    comuna={comuna}
                    region={region}
                    horaSalida={horaSalida}
                    horaLlegada={horaLlegada}
                />
            </UiCard>
        </div>
    );
}


function TripHeader({ estadoHora, onNavigate }: { estadoHora?: string; onNavigate: () => void }) {
    return (
        <div className=" relative">
            <div className="flex justify-between items-center w-full px-5 pt-5 ">
                <div>
                    <h4 className="leading-4">
                        Vehículo
                    </h4>
                    <small className="text-xs text-gray">
                        En seguimiento
                    </small>
                </div>
                <div>
                    <span className="px-2 text-[9px] bg-bgb rounded-2xl py-1">
                        último movimiento <span className="animate-pulse">{estadoHora?.slice(11, 19)}</span>
                    </span>
                </div>
            </div>
            <div className="absolute right-0 top-0 flex gap-2 z-10">
                <Button onClick={onNavigate} rounded="full" className="py-1 hover:bg-bgp">
                    <GrFormNextLink size={20} />
                </Button>
                <Button rounded="full" className="py-1 hover:bg-bgp">
                    <GrFormDown size={20} />
                </Button>
            </div>
        </div>
    );
}

function TripStats({ km, calle }: { km: number; calle?: string; zipcode?: string | undefined | null }) {
    return (
        <div className="flex flex-col gap-1 ps-2 pt-2">
            <div className="flex flex-col">
                <small className="font-semibold text-xs">KM Recorridos</small>
                <small className="text-xs">{km} Kilómetros</small>
            </div>
            <div>
                <small className="font-semibold text-xs">Calle actual</small>
                <small className="text-xs">{calle}</small>
            </div>
        </div>
    );
}

function VehicleCard() {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <img draggable={false} src={TruckIconFront} alt="vehiculopng" className="w-[50%]" />
        </div>
    );
}

function TripProgressBar({ progress, visualProgress, estado }: { progress: number; visualProgress: number; estado?: string }) {
    return (
        <div className="relative h-2 w-[calc(100%-60px)] mx-auto mt-15 mb-8  bg-gradient-to-r from-gray/50 to-gray rounded-full shadow shadow-bgp">
            <div className="absolute -left-6 bottom-1 flex w-full justify-start items-center">
                <GrFormNextLink size={24} className="text-white" />
            </div>
            <div className="absolute -right-6 bottom-1 flex w-full justify-end items-center">
                <GrLocation size={24} className="text-primary" />
            </div>
            <div
                className="relative h-2 w-3 bg-gradient-to-tl from-primary to-primary/40 rounded-full"
                style={{ width: `${progress}%` }}
            >
                <div className="absolute w-13 bottom-0" style={{ left: `${visualProgress}%` }}>
                    <img draggable={false} src="/dashboard/truck.png" alt="vehiculopng" className="w-full" />
                </div>
                <div
                    style={{ left: `${visualProgress}%` }}
                    className="absolute -right-4 bottom-8">
                    <small className="text-nowrap text-white uppercase text-[12px] font-semibold tracking-widest py-1">
                        {estado} {parseInt(String(progress))}%
                    </small>
                </div>
            </div>
        </div>
    );
}

function TripLocationFooter({
    origen,
    comuna,
    region,
    horaSalida,
    horaLlegada,
}: {
    origen: string;
    comuna?: string;
    region?: string;
    horaSalida?: string;
    horaLlegada?: string;
}) {
    return (
        <div className="w-full flex justify-between items-center  gap-2  px-3 bg-bgp py-3 rounded-xl">
            <div className="flex flex-col justify-center items-start">
                <small className="text-[10px]">{origen}</small>
                <small className="text-[10px] uppercase">LOS LAGOS X</small>
                <small className="text-[10px] font-bold">{horaSalida?.slice(11, 19)} hrs</small>
            </div>
            <div className="flex flex-col justify-center items-end">
                <small className="text-[10px]">{comuna}</small>
                <small className="text-[10px]">{region}</small>
                <small className="text-[10px] font-bold">{horaLlegada?.slice(11, 19)} hrs</small>
            </div>
        </div>
    );
}

export default TripSet;
