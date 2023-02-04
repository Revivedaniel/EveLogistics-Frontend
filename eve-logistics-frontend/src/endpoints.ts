const baseUrl = `${process.env.REACT_APP_API_URL}/api`;
export const urlItems = `${baseUrl}/items`;
export function urlItemInventory(itemName: string) {
	return `${baseUrl}/inventory?item=${itemName}`;
}

export const urlUniverseInventory = `${baseUrl}/inventory`;
export function urlRegionInventory(regionName: string) {
	return `${baseUrl}/inventory?region=${regionName}`;
}

export function urlSystemInventory(systemName: string) {
	return `${baseUrl}/inventory?system=${systemName}`;
}

export function urlStationInventory(stationName: string) {
	return `${baseUrl}/inventory?station=${stationName}`;
}

export const urlRegions = `${baseUrl}/regions`;
export const urlSystems = `${baseUrl}/systems`;
export function urlSystemByRegion(regionName: string) {
	return `${baseUrl}/systems?region=${regionName}`;
}

export const urlStation = `${baseUrl}/stations`;
export function urlStationBySystem(systemName: string) {
	return `${baseUrl}/stations?solarSystem=${systemName}`;
}

export const urlUpdateInventory = `${baseUrl}/inventory`;
export const urlAccounts = `${baseUrl}/accounts`;
