const baseURL = process.env.REACT_APP_API_URL + "/api";
export const urlItems = `${baseURL}/items`;
export function urlItemInventory(itemName: string) {
    return `${baseURL}/inventory?item=${itemName}`;
}
export const urlUniverseInventory = `${baseURL}/inventory`;
export function urlRegionInventory(regionName: string) {
    return `${baseURL}/inventory?region=${regionName}`;
}
export function urlSystemInventory(systemName: string) {
    return `${baseURL}/inventory?system=${systemName}`;
}
export function urlStationInventory(stationName: string) {
    return `${baseURL}/inventory?station=${stationName}`;
}
export const urlRegions = `${baseURL}/regions`;
export const urlSystems = `${baseURL}/systems`;
export function urlSystemByRegion(regionName: string) {
    return `${baseURL}/systems?region=${regionName}`;
};
export const urlStation = `${baseURL}/stations`;
export function urlStationBySystem(systemName: string) {
    return `${baseURL}/stations?solarSystem=${systemName}`;
}
export const urlUpdateInventory = `${baseURL}/inventory`;