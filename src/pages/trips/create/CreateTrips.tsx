import { useRoutes } from "../../routes/hooks/useRoutes";
import { MapView } from "../../maps";
import { useState } from "react";
import Titles from "../../../components/ui/SubMenu";
import AlertBg from "../../../components/ui/AlertsBg";
import Select from "../../../components/ui/Select";
import { useTrips } from "../hooks/useTripsHook";
import Button from "../../../components/ui/Button";
import { GrDocumentConfig, GrDocumentCsv, GrDocumentExcel, GrDocumentImage, GrDocumentPdf } from "react-icons/gr";
import Input from "../../../components/ui/Input";
import { useNavigate } from "react-router";

function CreateTrips() {
    const routes = useRoutes();
    const { Trips } = useTrips();

    const navigate = useNavigate();
    const drivers = Trips.map(trip => trip.assigned_driver);
    const trips = routes.routes;

    const [coordOrigin, setCoordOrigin] = useState<[number, number]>([0, 0]);
    const [coordDestiny, setCoordDestiny] = useState<[number, number]>([0, 0]);

    const handleTripChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.value;
        const selectedTrip = trips.find(trip => trip.id === parseInt(selectedId));

        if (selectedTrip) {
            const origen: [number, number] = [
                selectedTrip.origin.coordinates.latitude,
                selectedTrip.origin.coordinates.longitude
            ];
            const destino: [number, number] = [
                selectedTrip.destination.coordinates.latitude,
                selectedTrip.destination.coordinates.longitude
            ];
            setCoordOrigin(origen);
            setCoordDestiny(destino);
        }
    };

    return (
        <div className="h-full w-full flex-1 flex flex-col justify-start items-start  pb-1">
            <Titles title="Crear nuevo recorrido" />
            <div className="grid grid-cols-2 w-full gap-1">
                <div className="p-5 flex flex-col gap-2">
                    <h5>Configuración del recorrido</h5>
                    <div className="py-5  w-full   grid grid-cols-2 gap-5">
                        <div>
                            <h5>Origen - Destino</h5>
                            <div className="w-full">
                                <Select onChange={handleTripChange}>
                                    <option value="">Selecciona una ruta</option>
                                    {trips.map((trip, index) => (
                                        <option key={index} value={trip.id}>
                                            {trip.origin.name} - {trip.destination.name}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <h5>Vehículo y  conductor encargado</h5>
                            <div className="w-full">
                                <Select onChange={handleTripChange}>
                                    <option value="">Selecciona un vehículo</option>
                                    {drivers.map((drive, index) => (
                                        <option key={index} value={drive.id}>
                                            {drive.name} - {drive.vehicle}
                                        </option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div>
                            <h5>Tipo de carga</h5>
                            <div className="w-full">
                                <Select>
                                    <option value="">Selecciona tipo de carga</option>
                                    <option value="">Peso</option>
                                    <option value="">Kilogramos</option>
                                    <option value="">Litros</option>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <h5>Cliente</h5>
                            <div className="w-full">
                                <Select>
                                    <option value="">Selecciona cliente</option>
                                    <option value="">Cristofer</option>
                                    <option value="">Jose</option>
                                    <option value="">Carlos</option>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <h5>Documentacion</h5>
                            <div>
                                <div className="w-full flex justify-start gap-3 items-center mt-5">
                                    <GrDocumentPdf size={30} />
                                    <GrDocumentExcel size={30} />
                                    <GrDocumentCsv size={30} />
                                    <GrDocumentConfig size={30} />
                                    <GrDocumentImage size={30} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5>Observación</h5>
                            <div>
                                <div className="w-full flex justify-start gap-3 items-center mt-5">
                                    <textarea
                                        className="w-full h-full rounded-lg border-2 border-bgsecondary/50 p-3 text-sm"
                                        placeholder="Escribe aquí tu observación"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5>Fecha y hora de registro</h5>
                            <div>
                                <div className="w-full flex justify-start gap-3 items-center mt-5">
                                    <h5 className="text-gray">{new Date().toISOString().slice(0, 10)}</h5>
                                    <h5 className="text-gray">{new Date().toISOString().slice(11, 19)}</h5>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5>Fecha y hora de inicio</h5>
                            <div>
                                <div className="w-full flex justify-start gap-3 items-center mt-5">
                                    <Input type="date" value={new Date().toISOString().slice(0, 10)} />
                                    <Input type="time" value={new Date().toISOString().slice(11, 19)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            onClick={() => { navigate('/viajes') }}
                            rounded="lg"
                            className="bg-primary text-black px-5 hover:bg-bgsecondary">
                            Programar recorrido
                        </Button>
                    </div>
                </div>
                <div id="mapa" className="relative w-full">
                    {
                        coordOrigin[0] === 0 && coordOrigin[1] === 0 && coordDestiny[0] === 0 && coordDestiny[1] === 0 ? (
                            <AlertBg message="Selecciona una ruta" />
                        ) : (
                            <MapView
                                tripOrigin={coordOrigin}
                                tripDestination={coordDestiny}
                                origenDestinyAsigned={[coordOrigin, coordDestiny]}
                                vehicleLastPosition={[coordOrigin[0], coordOrigin[1]]}
                                height="800px"
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default CreateTrips;