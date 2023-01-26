import { Skeleton } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export default function GenericTable(props: GenericTableProps) {
    if (!props.rows) {
      return <>
      <div style={{ height: 500, width: '100%' }}>
      <Skeleton variant="rectangular" width={1350} height={500} />
      </div>
      </>
    } else if (props.rows.length === 0) {
      return <h2>There is no inventory for this item.</h2>
    } else {
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
}

interface GenericTableProps {
    rows?: GridRowsProp;
    columns: GridColDef[];
    setSelection?: Function;
}