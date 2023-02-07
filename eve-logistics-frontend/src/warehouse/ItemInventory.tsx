import { type GridColDef } from '@mui/x-data-grid'
import axios, { type AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { urlItemInventory } from '../endpoints'
import Inventory from './tables/Inventory'
import { type CustomDataGridSelection, type ItemInventoryRow } from './warehouse.model'

const inventoryItems: GridColDef[] = [
  { field: 'region', headerName: 'Region', width: 150 },
  { field: 'system', headerName: 'System', width: 150 },
  { field: 'station', headerName: 'Station', width: 600 },
  { field: 'totalQty', headerName: 'Total Qty', width: 150 },
  { field: 'reservedQty', headerName: 'Reserved', width: 150 },
  { field: 'availableQty', headerName: 'Available', width: 150 }
]

export default function ItemInventory (props: ItemInventoryProps): JSX.Element {
  const [itemInventoryRows, setItemInventoryRows] = useState<
  ItemInventoryRow[] | undefined
  >(undefined)
  const [renderInventory, setRenderInventory] = useState<boolean | undefined>(
    undefined
  )

  useEffect(() => {
    const url = urlItemInventory(props.selectionName)
    axios
      .get(url)
      .then((response: AxiosResponse<ItemInventoryRow[]>) => {
        setItemInventoryRows(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [props.selectionName])

  useEffect(() => {
    if (renderInventory === false) {
      setRenderInventory(undefined)
      props.setSelection(undefined)
    }
  }, [renderInventory, props])

  return (
    <Inventory
      rows={itemInventoryRows}
      setSelection={setRenderInventory}
      tableTitle={props.selectionName}
      backButtonTitle="Item Select"
      columns={inventoryItems}
    />
  )
}

interface ItemInventoryProps {
  setSelection: (arg0: CustomDataGridSelection | undefined) => void
  selectionName: string
}
