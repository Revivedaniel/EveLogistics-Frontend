import {Skeleton} from '@mui/material';
import {DataGrid, type GridRowsProp, type GridColDef, type GridRowId, type GridValidRowModel} from '@mui/x-data-grid';

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
      <DataGrid getRowId={(row) => row._id} rows={props.rows} columns={props.columns} 
      onSelectionModelChange={(newSelectionModel: GridRowId[]) => {
        if(props.setSelection) {
          const data: GridValidRowModel =  props.rows ? props.rows.filter(row => row._id === newSelectionModel[0]) : {error: "There was an error retrieving the selection"};
          console.log(newSelectionModel[0])
          props.setSelection({index: newSelectionModel[0], data });
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

type GenericTableProps = {
	rows?: GridRowsProp;
	columns: GridColDef[];
	setSelection?: Function;
};
