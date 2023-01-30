import { Region, Station, System } from "./General.model"
import GenericSelect from "./GenericSelect";
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from "axios";
import { urlSystemByRegion } from "../endpoints";

export default function SystemSelect(props: SystemSelectProps) {

    const [systems, setSystems] = useState<System[] | undefined>(undefined);

    useEffect(() => {
      if (!systems) {
        axios.get(urlSystemByRegion(props.region.name)).then((response: AxiosResponse<Station[]>) => {
          setSystems(response.data);
        })
      }
    }, [systems, props.region.name]);
      
    return <>
        <GenericSelect title="System" selections={systems} extraButton={{title: `${props.region.name} Inventory`}} setSelection={props.setSystem} setExtraButtonClicked={props.setRegionInventory} backButtonTitle="Region Select" setBackButton={props.setRegion} />
    </>
}

interface SystemSelectProps {
    region: Region;
    setSystem: Function;
    setRegionInventory?: Function;
    setRegion: Function;
}