import { Polyline } from 'react-leaflet';
import useFetchRoute from '../hooks/useFetchRoute';
import { useEffect } from 'react';

interface TripRouteLayerProps {
    origin: [number, number] | null;
    destination: [number, number] | null;
}

const TripRouteLayer: React.FC<TripRouteLayerProps> = ({ origin, destination }) => {
    const { route, loading, error, fetchRoute } = useFetchRoute();

    useEffect(() => {
        if (origin && destination) {
            fetchRoute(origin, destination);
        }
    }, [origin, destination, fetchRoute]);

    if (loading) {
        return <p>Cargando ruta...</p>;
    }

    if (error) {
        return <p>Error al cargar la ruta: {error}</p>;
    }

    return route.length > 0 ? (
        <Polyline positions={route} color="blue" weight={5} opacity={0.7} />
    ) : null;
};

export default TripRouteLayer;