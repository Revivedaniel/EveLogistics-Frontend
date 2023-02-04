export type ItemInventoryRow = {
	id: number;
	region: string;
	system: string;
	station: string;
	totalQty: number;
	reservedQty: number;
	availableQty: number;
};

export type ItemTableRow = {
	id: number;
	typeId: number;
	name: string;
	totalQty: number;
	reservedQty: number;
	availableQty: number;
};

export type StationInventoryRow = {
	id: number;
	region: string;
	system: string;
	station: string;
	itemName: string;
	totalQty: number;
	reservedQty: number;
	availableQty: number;
};

export type CustomDataGridSelection = {
	index: number;
	data: GridValidRowModel;
};
