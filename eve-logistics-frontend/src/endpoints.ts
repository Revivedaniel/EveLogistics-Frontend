const baseURL = process.env.REACT_APP_API_URL + "/api";
export const urlItems = `${baseURL}/items`;
export default function urlItemInventory(itemName: string) {
    return `${baseURL}/inventory?item=${itemName}`;
}
export const urlInventoryItems = `${baseURL}/inventory?`;