import { useState, useCallback } from 'react';

interface RouteResponse {
    features: {
        geometry: {
            coordinates: [number, number][];
        };
    }[];
}

interface UseFetchRouteResult {
    route: [number, number][];
    loading: boolean;
    error: string | null;
    fetchRoute: (origin: [number, number], destination: [number, number]) => void;
}

const useFetchRoute = (): UseFetchRouteResult => {
    const [route, setRoute] = useState<[number, number][]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchRoute = useCallback(async (origin: [number, number], destination: [number, number]) => {
        setLoading(true);
        setError(null);
        setRoute([]);

        const apiKey = '5b3ce3597851110001cf624821279bd3a2d44b9782c2a23a6d82cd3f';
        const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${origin[1]},${origin[0]}&end=${destination[1]},${destination[0]}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = await response.json();
                setError(`Error al obtener la ruta: ${errorData.error.message || response.statusText}`);
                setLoading(false);
                return;
            }
            const data: RouteResponse = await response.json();
            if (data.features && data.features.length > 0) {
                // Importantisimoooo!
                // OpenRouteService devuelve las coordenadas como [longitude, latitude],
                // Leaflet espera [latitude, longitude], así que invertimos el orden. -> coord => [coord[1], coord[0]
                const coordinates = data.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);

                setRoute(coordinates as [number, number][]);
            } else {
                setError('No se encontraron rutas.');
            }
        } catch (err: unknown) {
            setError(`Error de red: ${err instanceof Error ? err.message : 'Unknown error'}`);
        } finally {
            setLoading(false);
        }
    }, []);

    return { route, loading, error, fetchRoute };
};

export default useFetchRoute;