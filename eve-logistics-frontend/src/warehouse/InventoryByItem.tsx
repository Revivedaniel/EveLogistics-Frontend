import { GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import GenericTable from "./tables/GenericTable";
import Inventory from './tables/Inventory';
import { ItemInventoryRow, ItemTableRow } from './warehouse.model';
import css from "./tables/ItemInventory.module.css";
import GenericTasks from '../general/GenericTasks';
import axios, { AxiosResponse } from 'axios';
import urlItemInventory, { urlItems } from '../endpoints';
  
  const columns: GridColDef[] = [
    { field: 'typeId', headerName: 'Item Number', width: 150 },
    { field: 'name', headerName: 'Item Name', width: 750 },
    { field: 'totalQty', headerName: 'Total Qty', width: 150 },
    { field: 'reservedQty', headerName: 'Reserved', width: 150 },
    { field: 'availableQty', headerName: 'Active', width: 150 },
  ];

  const itemrows: ItemInventoryRow[] = [
    { id: 0, region: 'Kor-Azor', system: 'Amdonen', station: "Amdonen VII - Moon 7 - Imperial Shipment Storage", totalQty: 1216, reservedQty: 500, availableQty: 716 },
    { id: 1, region: 'Kor-Azor', system: 'Amdonen', station: "Amdonen VII - Moon 7 - Imperial Shipment Storage", totalQty: 573, reservedQty: 0, availableQty: 573 },
    { id: 2, region: 'Kor-Azor', system: 'Amdonen', station: "Amdonen VII - Moon 7 - Imperial Shipment Storage", totalQty: 4, reservedQty: 1, availableQty: 3 },
    { id: 3, region: 'Kor-Azor', system: 'Amdonen', station: "Amdonen VII - Moon 7 - Imperial Shipment Storage", totalQty: 13, reservedQty: 10, availableQty: 3 },
    { id: 4, region: 'Kor-Azor', system: 'Amdonen', station: "Amdonen VII - Moon 7 - Imperial Shipment Storage", totalQty: 4, reservedQty: 0, availableQty: 4 },
  ];

  const inventoryItems: GridColDef[] = [
    { field: 'region', headerName: 'Region', width: 150 },
      { field: 'system', headerName: 'System', width: 150 },
      { field: 'station', headerName: 'Station', width: 600 },
      { field: 'totalQty', headerName: 'Total Qty', width: 150 },
      { field: 'reservedQty', headerName: 'Reserved', width: 150 },
      { field: 'availableQty', headerName: 'Available', width: 150 },
  ]
  
  

export default function InventoryByItem() {

    const [selection, setSelection] = useState(undefined);
    const [items, setItems] = useState<ItemTableRow[] | undefined>(undefined);
    const [selectedItem, setSelectedItem] = useState<string>("Selected Item");
    const [itemInventoryRows, setItemInventoryRows] = useState<ItemInventoryRow[] | undefined>(undefined);

  useEffect(() => {
    if(selection && items) {
      setSelectedItem(items[selection[0]].name);
      axios.get(urlItemInventory(items[selection[0]].name)).then((response: AxiosResponse<ItemInventoryRow[]>) => {
        setItemInventoryRows(response.data);
      })
    } else if (!items) {
      axios.get(urlItems).then((response: AxiosResponse<ItemTableRow[]>) => {
        setItems(response.data);
      })
    }
  }, [selection, items]);

    return (
      <>
        <GenericTasks heading="Inventory by Item" />
        {selection ? (
          <Inventory
            rows={itemInventoryRows}
            setSelection={setSelection}
            tableTitle={selectedItem}
            backButtonTitle="Item Select"
            columns={inventoryItems}
          />
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