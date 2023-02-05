import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { urlStationBySystem } from '../endpoints';
import { Region, Station, System } from "./General.model"
import GenericSelect from "./GenericSelect";

export default function StationSelect(props: StationSelectProps) {

    const [stations, setStations] = useState<Station[] | undefined>(undefined);

    useEffect(() => {
        if (!stations) {
          axios.get(urlStationBySystem(props.system.name)).then((response: AxiosResponse<Station[]>) => {
            setStations(response.data);
          })
        }
      }, [stations, props.system.name]);

    return <>
        <GenericSelect title="Station" selections={stations} extraButton={{title: `${props.system.name} Inventory`}} setSelection={props.setStation} setExtraButtonClicked={props.setSystemInventory} backButtonTitle="System Select" setBackButton={props.setSystem} />
    </>
}

interface StationSelectProps {
    region: Region;
    system: System;
    setStation: Function;
    setSystemInventory?: Function;
    setSystem: Function;
}