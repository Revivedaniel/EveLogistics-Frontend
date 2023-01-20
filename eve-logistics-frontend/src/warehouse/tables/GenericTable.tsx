import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export default function GenericTable(props: GenericTableProps) {
    return <>
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid rows={props.rows} columns={props.columns} 
      onSelectionModelChange={(newSelectionModel) => {
        if(props.setSelection) {
          props.setSelection(newSelectionModel);
        }
      }}
      initialState={{
        pagination: {
          pageSize: 30,
        },
      }}
      rowsPerPageOptions={[30, 50, 100]}
      />
    </div>
    </>
}

interface GenericTableProps {
    rows: GridRowsProp;
    columns: GridColDef[];
    setSelection?: Function;
}