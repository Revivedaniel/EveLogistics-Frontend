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