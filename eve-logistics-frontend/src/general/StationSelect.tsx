import { useState, useEffect } from 'react';
import testStations from '../utils/stations';
import { Station, System } from "./General.model"
import GenericSelect from "./GenericSelect";

export default function StationSelect(props: StationSelectProps) {

    const [stations, setStations] = useState<Station[] | undefined>(undefined);

    useEffect(() => {
        if(!stations) {
          const timer = setTimeout(() => {
            setStations(testStations);
          }, 2500)
          return () => clearTimeout(timer);
        }
      });

    return <>
        <GenericSelect title="Station" selections={stations} extraButton={{title: `${props.system.name} Inventory`}} setSelection={props.setStation} setExtraButtonClicked={props.setSystemInventory} />
    </>
}

interface StationSelectProps {
    system: System;
    setStation: Function;
    setSystemInventory?: Function;
}