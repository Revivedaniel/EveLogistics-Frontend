import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export default function GenericTable(props: GenericTableProps) {
    return <>
    <h2>Generic Table</h2>
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={props.rows} columns={props.columns} 
      onSelectionModelChange={(newSelectionModel) => {
        if(props.setSelection) {
          props.setSelection(newSelectionModel);
        }
      }}
      />
    </div>
    </>
}

interface GenericTableProps {
    rows: GridRowsProp;
    columns: GridColDef[];
    setSelection?: Function;
}