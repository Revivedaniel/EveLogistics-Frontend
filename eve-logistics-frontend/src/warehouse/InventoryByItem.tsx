import { type GridColDef } from '@mui/x-data-grid'
import { useState, useEffect } from 'react'
import GenericTable from './tables/GenericTable'
import { type CustomDataGridSelection, type ItemTableRow } from './warehouse.model'
import css from './tables/ItemInventory.module.css'
import GenericTasks from '../general/GenericTasks'
import axios, { type AxiosResponse } from 'axios'
import { urlItems } from '../endpoints'
import ItemInventory from './ItemInventory'

const columns: GridColDef[] = [
  { field: 'typeId', headerName: 'Item Number', width: 150 },
  { field: 'name', headerName: 'Item Name', width: 750 },
  { field: 'totalQty', headerName: 'Total Qty', width: 150 },
  { field: 'reservedQty', headerName: 'Reserved', width: 150 },
  { field: 'availableQty', headerName: 'Active', width: 150 }
]

export default function InventoryByItem (): JSX.Element {
  const [selection, setSelection] = useState<CustomDataGridSelection | undefined>(undefined)
  const [items, setItems] = useState<ItemTableRow[] | undefined>(undefined)

  useEffect(() => {
    if (items == null) {
      axios
        .get(urlItems)
        .then((response: AxiosResponse<ItemTableRow[]>) => {
          setItems(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [items])

  useEffect(() => {
    if (items == null) {
      axios.get(urlItems).then((response: AxiosResponse<ItemTableRow[]>) => {
        setItems(response.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  }, [items])

  return (
      <>
        <GenericTasks heading="Inventory by Item" />
        {(selection != null)
          ? (
          <ItemInventory setSelection={setSelection} selectionName={selection.data[0].name} />
            )
          : (
          <div className={css.container}>
            <GenericTable
              rows={items}
              columns={columns}
              setSelection={setSelection}
            />
          </div>
            )}
      </>
  )
}
