import GenericTable from "./GenericTable";
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Button, Paper, Skeleton } from "@mui/material";
import css from "./ItemInventory.module.css";

const itemcolumns: GridColDef[] = [
    { field: 'region', headerName: 'Region', width: 150 },
    { field: 'system', headerName: 'System', width: 150 },
    { field: 'station', headerName: 'Station', width: 450 },
    { field: 'totalQty', headerName: 'Total Qty', width: 150 },
    { field: 'reservedQty', headerName: 'Reserved', width: 150 },
    { field: 'availableQty', headerName: 'Available', width: 150 },
  ];

export default function Inventory(props: InventoryProps) {

    const handleButtonClick = () => {
        if (props.setSelection) {
            props.setSelection(undefined);
        }
    }

    if (!props.rows) {
        return (
            <div className={css.container}>
              <div className={css.aboveTable}>
                <Button variant="contained" onClick={handleButtonClick}>Item Select</Button>
                <Paper elevation={1} className={css.paper} ><Skeleton /></Paper>
              </div>
              <Skeleton variant="rectangular" width={1200} height={500}>
              </Skeleton>
            </div>
          );
    } else if (props.rows.length === 0) {
        return <h2>There is no inventory for this Item.</h2>
    } else {
        return (
          <div className={css.container}>
            <div className={css.aboveTable}>
              <Button variant="contained" onClick={handleButtonClick}>{props.backButtonTitle}</Button>
              <Paper elevation={1} className={css.paper} >{props.tableTitle}</Paper>
            </div>
            <GenericTable rows={props.rows} columns={itemcolumns} />
          </div>
        );
    }

}

interface InventoryProps {
  rows?: GridRowsProp;
  setSelection?: Function;
  tableTitle: string;
  backButtonTitle: string;
}
