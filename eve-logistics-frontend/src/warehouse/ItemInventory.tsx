import { GridColDef } from "@mui/x-data-grid";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import urlItemInventory from "../endpoints";
import Inventory from "./tables/Inventory";
import { ItemInventoryRow } from "./warehouse.model";

const inventoryItems: GridColDef[] = [
  { field: "region", headerName: "Region", width: 150 },
  { field: "system", headerName: "System", width: 150 },
  { field: "station", headerName: "Station", width: 600 },
  { field: "totalQty", headerName: "Total Qty", width: 150 },
  { field: "reservedQty", headerName: "Reserved", width: 150 },
  { field: "availableQty", headerName: "Available", width: 150 },
];

export default function ItemInventory(props: ItemInventoryProps) {
    const [itemInventoryRows, setItemInventoryRows] = useState<ItemInventoryRow[] | undefined>(undefined);

    useEffect(() => {
        const url = urlItemInventory(props.selectionName);
        axios.get(url).then((response: AxiosResponse<ItemInventoryRow[]>) => {
          setItemInventoryRows(response.data);
        }); 
    }, [props.selectionName])

  return (
    <Inventory
      rows={itemInventoryRows}
      setSelection={props.setSelection}
      tableTitle={props.selectionName}
      backButtonTitle="Item Select"
      columns={inventoryItems}
    />
  );
}

interface ItemInventoryProps {
    setSelection: Function;
    selectionName: string;
}