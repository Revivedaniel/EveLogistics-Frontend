import { GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import GenericTable from "./tables/GenericTable";
import ItemInventory from './tables/ItemInventory';
import { ItemInventoryRow, ItemTableRow } from './warehouse.model';

// update references to this data when replacing with state
const rows: ItemTableRow[] = [
    { id: 0, itemNumber: 34, itemName: 'Tritanium', totalQty: 1216, reservedQty: 500, activeQty: 716 },
    { id: 1, itemNumber: 36, itemName: 'Mexallon', totalQty: 573, reservedQty: 0, activeQty: 573 },
    { id: 2, itemNumber: 37, itemName: 'Isogen', totalQty: 4, reservedQty: 1, activeQty: 3 },
    { id: 3, itemNumber: 39, itemName: 'Zydrine', totalQty: 13, reservedQty: 10, activeQty: 3 },
    { id: 4, itemNumber: 40, itemName: 'Megacyte', totalQty: 4, reservedQty: 0, activeQty: 4 },
  ];
  
  const columns: GridColDef[] = [
    { field: 'itemNumber', headerName: 'Item Number', width: 150 },
    { field: 'itemName', headerName: 'Item Name', width: 150 },
    { field: 'totalQty', headerName: 'Total Qty', width: 150 },
    { field: 'reservedQty', headerName: 'Reserved', width: 150 },
    { field: 'activeQty', headerName: 'Active', width: 150 },
  ];

  const itemrows: ItemInventoryRow[] = [
    { id: 0, region: 'Kor-Azor', system: 'Amdonen', station: "Amdonen VII - Moon 7 - Imperial Shipment Storage", totalQty: 1216, reservedQty: 500, activeQty: 716 },
    { id: 1, region: 'Kor-Azor', system: 'Amdonen', station: "Amdonen VII - Moon 7 - Imperial Shipment Storage", totalQty: 573, reservedQty: 0, activeQty: 573 },
    { id: 2, region: 'Kor-Azor', system: 'Amdonen', station: "Amdonen VII - Moon 7 - Imperial Shipment Storage", totalQty: 4, reservedQty: 1, activeQty: 3 },
    { id: 3, region: 'Kor-Azor', system: 'Amdonen', station: "Amdonen VII - Moon 7 - Imperial Shipment Storage", totalQty: 13, reservedQty: 10, activeQty: 3 },
    { id: 4, region: 'Kor-Azor', system: 'Amdonen', station: "Amdonen VII - Moon 7 - Imperial Shipment Storage", totalQty: 4, reservedQty: 0, activeQty: 4 },
  ];
  
  

export default function InventoryByItem() {

    const [selection, setSelection] = useState(undefined);
    const [itemRows, setItemRows] = useState<ItemInventoryRow[] | undefined>(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItemRows(itemrows);
    }, 2500)
    return () => clearTimeout(timer);
  });

    return <>
        <h2>Inventory by Item</h2>
        {selection ? <ItemInventory rows={itemRows} setSelection={setSelection} itemName={rows[selection[0]].itemName} /> : <GenericTable rows={rows} columns={columns} setSelection={setSelection} />}
    </>
}