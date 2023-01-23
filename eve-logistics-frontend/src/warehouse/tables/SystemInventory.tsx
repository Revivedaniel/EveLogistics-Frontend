import { System } from "../../general/General.model";
import { StationInventoryRow } from "../warehouse.model";
import Inventory from "./Inventory";
import css from "./ItemInventory.module.css";
import { useState, useEffect } from 'react';
  
  const rows: StationInventoryRow[] = [
    {
      id: 0,
      region: "Aridia",
      system: "Shakasi",
      station: "Shirshocin III - Moon 2 - Amarr Constructions Warehouse",
      itemName: "Damage Control II",
      totalQty: 126,
      reservedQty: 100,
      availableQty: 26
    },
    {
      id: 1,
      region: "Aridia",
      system: "Shakasi",
      station: "Shirshocin III - Moon 2 - Amarr Constructions Warehouse",
      itemName: "Kernite",
      totalQty: 0,
      reservedQty: 0,
      availableQty: 0
    },
    {
      id: 2,
      region: "Aridia",
      system: "Shakasi",
      station: "Shirshocin III - Moon 2 - Amarr Constructions Warehouse",
      itemName: "Plex",
      totalQty: 0,
      reservedQty: 0,
      availableQty: 0
    },
    {
      id: 3,
      region: "Aridia",
      system: "Shakasi",
      station: "Shirshocin III - Moon 2 - Amarr Constructions Warehouse",
      itemName: "Tritanium",
      totalQty: 0,
      reservedQty: 0,
      availableQty: 0
    },
    {
        id: 4,
        region: "Aridia",
        system: "Shakasi",
        station: "Shirshocin III - Moon 3 - Amarr Constructions Warehouse",
        itemName: "Damage Control II",
        totalQty: 126,
        reservedQty: 100,
        availableQty: 26
      },
      {
        id: 5,
        region: "Aridia",
        system: "Shakasi",
        station: "Shirshocin III - Moon 3 - Amarr Constructions Warehouse",
        itemName: "Kernite",
        totalQty: 0,
        reservedQty: 0,
        availableQty: 0
      },
      {
        id: 6,
        region: "Aridia",
        system: "Shakasi",
        station: "Shirshocin III - Moon 3 - Amarr Constructions Warehouse",
        itemName: "Plex",
        totalQty: 0,
        reservedQty: 0,
        availableQty: 0
      },
      {
        id: 7,
        region: "Aridia",
        system: "Shakasi",
        station: "Shirshocin III - Moon 3 - Amarr Constructions Warehouse",
        itemName: "Tritanium",
        totalQty: 0,
        reservedQty: 0,
        availableQty: 0
      }
  ]

export default function SystemInventory(props: SystemInventoryProps) {

  const [systemInventoryRows, setSystemInventoryRows] = useState<StationInventoryRow[] | undefined>(undefined);

  useEffect(() => {
    const timer = setTimeout(() => {
        setSystemInventoryRows(rows);
    }, 2500)
    return () => clearTimeout(timer);
  });

    return <div className={css.container} ><Inventory rows={systemInventoryRows} tableTitle={props.system.name} backButtonTitle="Station Select" setSelection={props.setSystemInventory} buttonClickValue={false} /></div>
}

interface SystemInventoryProps {
    system: System;
    setSystemInventory: Function;
}