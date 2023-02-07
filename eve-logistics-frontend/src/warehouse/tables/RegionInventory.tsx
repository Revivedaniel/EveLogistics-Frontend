import { Region } from "../../general/General.model";
import { StationInventoryRow } from "../warehouse.model";
import Inventory from "./Inventory";
import css from "./ItemInventory.module.css";
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from "axios";
import { urlRegionInventory } from "../../endpoints";

export default function RegionInventory(props: RegionInventoryProps) {

  const [regionInventoryRows, setRegionInventoryRows] = useState<StationInventoryRow[] | undefined>(undefined);

  useEffect(() => {
    if (!regionInventoryRows) {
      axios.get(urlRegionInventory(props.region.name)).then((response: AxiosResponse<StationInventoryRow[]>) => {
        setRegionInventoryRows(response.data);
      })
    }
  }, [regionInventoryRows, props.region.name]);

    return <div className={css.container} ><Inventory rows={regionInventoryRows} tableTitle={props.region.name} backButtonTitle="System Select" setSelection={props.setRegionInventory} buttonClickValue={false} /></div>
}

interface RegionInventoryProps {
    region: Region;
    setRegionInventory: Function;
    inventoryData?: StationInventoryRow[];
}