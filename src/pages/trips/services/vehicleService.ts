


import { PositionsLast, StateVehicle, StatusVehicle } from "../types/Vehicles";
// import lastPositionsJson from "../../../data/lastPositions.json";


// const lastPositions: PositionsLast[] = [lastPositionsJson as unknown as PositionsLast];


// export const getLastPositions = async (): Promise<PositionsLast[]> => {
//     return lastPositions;
// };

// -> cuando se haga el backend

export const getLastPositions = async (): Promise<PositionsLast[]> => {
  const response = await fetch("https://apitrack.wisensor.cl/positions/last");

  if (!response.ok || response.redirected) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: PositionsLast[] = await response.json();
  return data;
};


export const getStateVehicles = async (): Promise<StateVehicle> => {
  const response = await fetch("https://apitrack.wisensor.cl/geocerca/estado-reciente");

  if (!response.ok || response.redirected) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: StateVehicle = await response.json();
  return data;
};
export const getStatusVehicle = async (): Promise<StatusVehicle> => {
  const response = await fetch("https://apitrack.wisensor.cl/estado-camion");

  if (!response.ok || response.redirected) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: StatusVehicle = await response.json();
  return data;
};