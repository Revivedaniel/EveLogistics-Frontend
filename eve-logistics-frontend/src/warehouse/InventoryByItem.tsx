import { GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import GenericTable from "./tables/GenericTable";
import Inventory from './tables/Inventory';
import { ItemInventoryRow, ItemTableRow } from './warehouse.model';
import css from "./tables/ItemInventory.module.css";
import GenericTasks from '../general/GenericTasks';

// update references to this data when replacing with state
const rows: ItemTableRow[] = [
    { id: 0, itemNumber: 34, itemName: 'Tritanium', totalQty: 1216, reservedQty: 500, availableQty: 716 },
    { id: 1, itemNumber: 36, itemName: 'Mexallon', totalQty: 573, reservedQty: 0, availableQty: 573 },
    { id: 2, itemNumber: 37, itemName: 'Isogen', totalQty: 4, reservedQty: 1, availableQty: 3 },
    { id: 3, itemNumber: 39, itemName: 'Zydrine', totalQty: 13, reservedQty: 10, availableQty: 3 },
    { id: 4, itemNumber: 40, itemName: 'Megacyte', totalQty: 4, reservedQty: 0, availableQty: 4 },
    { id: 5, itemNumber: 34, itemName: 'Tritanium', totalQty: 1216, reservedQty: 500, availableQty: 716 },
    { id: 6, itemNumber: 36, itemName: 'Mexallon', totalQty: 573, reservedQty: 0, availableQty: 573 },
    { id: 7, itemNumber: 37, itemName: 'Isogen', totalQty: 4, reservedQty: 1, availableQty: 3 },
    { id: 8, itemNumber: 39, itemName: 'Zydrine', totalQty: 13, reservedQty: 10, availableQty: 3 },
    { id: 9, itemNumber: 40, itemName: 'Megacyte', totalQty: 4, reservedQty: 0, availableQty: 4 },
    { id: 10, itemNumber: 34, itemName: 'Tritanium', totalQty: 1216, reservedQty: 500, availableQty: 716 },
    { id: 11, itemNumber: 36, itemName: 'Mexallon', totalQty: 573, reservedQty: 0, availableQty: 573 },
    { id: 12, itemNumber: 37, itemName: 'Isogen', totalQty: 4, reservedQty: 1, availableQty: 3 },
    { id: 13, itemNumber: 39, itemName: 'Zydrine', totalQty: 13, reservedQty: 10, availableQty: 3 },
    { id: 14, itemNumber: 40, itemName: 'Megacyte', totalQty: 4, reservedQty: 0, availableQty: 4 },
    { id: 15, itemNumber: 34, itemName: 'Tritanium', totalQty: 1216, reservedQty: 500, availableQty: 716 },
    { id: 16, itemNumber: 36, itemName: 'Mexallon', totalQty: 573, reservedQty: 0, availableQty: 573 },
    { id: 17, itemNumber: 37, itemName: 'Isogen', totalQty: 4, reservedQty: 1, availableQty: 3 },
    { id: 18, itemNumber: 39, itemName: 'Zydrine', totalQty: 13, reservedQty: 10, availableQty: 3 },
    { id: 19, itemNumber: 40, itemName: 'Megacyte', totalQty: 4, reservedQty: 0, availableQty: 4 },
  ];
  
  const columns: GridColDef[] = [
    { field: 'itemNumber', headerName: 'Item Number', width: 150 },
    { field: 'itemName', headerName: 'Item Name', width: 750 },
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
    const [itemRows, setItemRows] = useState<ItemInventoryRow[] | undefined>(undefined);

  useEffect(() => {
    if(selection) {
      const timer = setTimeout(() => {
        setItemRows(itemrows);
      }, 2500)
      return () => clearTimeout(timer);
    }
  });

    return (
      <>
        <GenericTasks heading="Inventory by Item" />
        {selection ? (
          <Inventory
            rows={itemRows}
            setSelection={setSelection}
            tableTitle={rows[selection[0]].itemName}
            backButtonTitle="Item Select"
            columns={inventoryItems}
          />
        ) : (
          <div className={css.container}>
            <GenericTable
              rows={rows}
              columns={columns}
              setSelection={setSelection}
            />
          </div>
        )}
      </>
    );
}