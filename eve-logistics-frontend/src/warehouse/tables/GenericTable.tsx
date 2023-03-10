import { Skeleton } from '@mui/material'
import { DataGrid, type GridRowsProp, type GridColDef, type GridRowId, type GridValidRowModel } from '@mui/x-data-grid'
import { type CustomDataGridSelection } from '../warehouse.model'

export default function GenericTable (props: GenericTableProps): JSX.Element {
  if (props.rows == null) {
    return (
      <>
        <div style={{ height: 500, width: '100%' }}>
          <Skeleton variant="rectangular" width={1350} height={500} />
        </div>
      </>
    )
  } else if (props.rows.length === 0) {
    return <h2>There is no inventory for this item.</h2>
  } else {
    return (
      <>
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid
            getRowId={(row) => row._id}
            rows={props.rows}
            columns={props.columns}
            onSelectionModelChange={(newSelectionModel: GridRowId[]) => {
              if (props.setSelection != null) {
                const data: GridValidRowModel = (props.rows != null)
                  ? props.rows.filter((row) => row._id === newSelectionModel[0])
                  : { error: 'There was an error retrieving the selection' }
                props.setSelection({ index: newSelectionModel[0] as number, data })
              }
            }}
            initialState={{
              pagination: {
                pageSize: 30
              }
            }}
            rowsPerPageOptions={[30, 50, 100]}
          />
        </div>
      </>
    )
  }
}

interface GenericTableProps {
  rows?: GridRowsProp
  columns: GridColDef[]
  setSelection?: (arg0: CustomDataGridSelection | undefined) => void
}
