export interface ItemInventoryRow {
    id: number; 
    region: string;
    system: string;
    station: string;
    totalQty: number;
    reservedQty: number;
    availableQty: number;
}

export interface ItemTableRow {
    id: number;
    itemNumber: number;
    itemName: string;
    totalQty: number;
    reservedQty: number;
    availableQty: number;
}

export interface StationInventoryRow {
    id: number;
    region: string;
    system: string;
    station: string;
    itemName: string;
    totalQty: number;
    reservedQty: number;
    availableQty: number;
}