import { StationInventoryRow } from "../warehouse.model";
import Inventory from "./Inventory";
import css from "./ItemInventory.module.css";
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from "axios";
import { urlUniverseInventory } from "../../endpoints";

export default function UniverseInventory(props: UniverseInventoryProps) {

  const [universeInventoryRows, setUniverseInventoryRows] = useState<StationInventoryRow[] | undefined>(undefined);

  useEffect(() => {
    if (!universeInventoryRows) {
      axios.get(urlUniverseInventory).then((response: AxiosResponse<StationInventoryRow[]>) => {
        setUniverseInventoryRows(response.data);
      })
    }
  }, [universeInventoryRows]);

    return (
      <div className={css.container}>
        <Inventory
          rows={universeInventoryRows}
          tableTitle="Universe Inventory"
          backButtonTitle="Region Select"
          setSelection={props.setUniverseInventory}
          buttonClickValue={false}
        />
      </div>
    );
}

interface UniverseInventoryProps {
    setUniverseInventory: Function;
}