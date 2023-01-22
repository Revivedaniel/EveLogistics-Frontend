import { Station } from "../../general/General.model";
import { StationInventoryRow } from "../warehouse.model";
import Inventory from "./Inventory";
import css from "./ItemInventory.module.css";
  
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
    }
  ]

export default function StationInventory(props: StationInventoryProps) {
    return <div className={css.container} ><Inventory rows={rows} tableTitle={props.station.name} backButtonTitle="Station Select" setSelection={props.setStation} /></div>
}

interface StationInventoryProps {
    station: Station;
    setStation: Function;
}