import aridia from "../utils/systems"
import { Region, System } from "./General.model"
import GenericSelect from "./GenericSelect";
import { useState, useEffect } from 'react';

export default function SystemSelect(props: SystemSelectProps) {

    const [systems, setSystems] = useState<System[] | undefined>(undefined);

    useEffect(() => {
        if(!systems) {
          const timer = setTimeout(() => {
            setSystems(aridia);
          }, 2500)
          return () => clearTimeout(timer);
        }
      });
      
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