import GenericTable from "./GenericTable";
import { GridColDef } from '@mui/x-data-grid';
import { ItemInventoryRow } from "../warehouse.model";
import { Button } from "@mui/material";

// TODO: Make the itemName be displayed to the top right side of the table.
// TODO: Make Item Select button update the selection state to undefined.
// TODO: Update loading to a progress or loading component.


const itemcolumns: GridColDef[] = [
    { field: 'region', headerName: 'Region', width: 150 },
    { field: 'system', headerName: 'System', width: 150 },
    { field: 'station', headerName: 'Station', width: 450 },
    { field: 'totalQty', headerName: 'Total Qty', width: 150 },
    { field: 'reservedQty', headerName: 'Reserved', width: 150 },
    { field: 'activeQty', headerName: 'Active', width: 150 },
  ];

export default function ItemInventory(props: ItemInventoryProps) {

    if (!props.rows) {
        return <h2>Loading...</h2>
    } else if (props.rows.length === 0) {
        return <h2>There is no inventory for this Item.</h2>
    } else {
        return <>
            <Button variant="contained">Item Select</Button>
            <Button variant="contained">{props.itemName}</Button>
            <GenericTable rows={props.rows} columns={itemcolumns} />
        </>
    }

}

interface ItemInventoryProps {
    rows?: ItemInventoryRow[];
    setSelection?: Function;
    itemName: string;
}
