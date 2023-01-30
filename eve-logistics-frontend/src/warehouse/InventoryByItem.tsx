import { GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import GenericTable from "./tables/GenericTable";
import { CustomDataGridSelection, ItemTableRow } from './warehouse.model';
import css from "./tables/ItemInventory.module.css";
import GenericTasks from '../general/GenericTasks';
import axios, { AxiosResponse } from 'axios';
import { urlItems } from '../endpoints';
import ItemInventory from './ItemInventory';
  
  const columns: GridColDef[] = [
    { field: 'typeId', headerName: 'Item Number', width: 150 },
    { field: 'name', headerName: 'Item Name', width: 750 },
    { field: 'totalQty', headerName: 'Total Qty', width: 150 },
    { field: 'reservedQty', headerName: 'Reserved', width: 150 },
    { field: 'availableQty', headerName: 'Active', width: 150 },
  ];

export default function InventoryByItem() {

    const [selection, setSelection] = useState<CustomDataGridSelection | undefined>(undefined);
    const [items, setItems] = useState<ItemTableRow[] | undefined>(undefined);
    

  useEffect(() => {
    if (!items) {
      axios.get(urlItems).then((response: AxiosResponse<ItemTableRow[]>) => {
        setItems(response.data);
      })
    }
  }, [items]);

    return (
      <>
        <GenericTasks heading="Inventory by Item" />
        {selection ? (
          <ItemInventory setSelection={setSelection} selectionName={selection.data.name} />
        ) : (
          <div className={css.container}>
            <GenericTable
              rows={items}
              columns={columns}
              setSelection={setSelection}
            />
          </div>
        )}
      </>
    );
}