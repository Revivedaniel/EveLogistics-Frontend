import GenericTable from "./GenericTable";
import { GridColDef } from '@mui/x-data-grid';
import { ItemInventoryRow } from "../warehouse.model";
import { Button, Paper } from "@mui/material";
import css from "./ItemInventory.module.css";

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

    const handleButtonClick = () => {
        if (props.setSelection) {
            props.setSelection(undefined);
        }
    }

    if (!props.rows) {
        return <h2>Loading...</h2>
    } else if (props.rows.length === 0) {
        return <h2>There is no inventory for this Item.</h2>
    } else {
        return (
          <div className={css.container}>
            <div className={css.aboveTable}>
              <Button variant="contained" onClick={handleButtonClick}>Item Select</Button>
              <Paper elevation={1} className={css.paper} >{props.itemName}</Paper>
            </div>
            <GenericTable rows={props.rows} columns={itemcolumns} />
          </div>
        );
    }

}

interface ItemInventoryProps {
    rows?: ItemInventoryRow[];
    setSelection?: Function;
    itemName: string;
}
