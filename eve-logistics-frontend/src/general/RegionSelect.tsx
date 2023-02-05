import GenericSelect from "./GenericSelect";
import { useState, useEffect } from 'react';
import { Region } from "./General.model";
import axios, { AxiosResponse } from "axios";
import { urlRegions } from "../endpoints";

export default function RegionSelect(props: RegionSelectProps) {

    const [regions, setRegions] = useState<Region[] | undefined>(undefined);

    useEffect(() => {
        if (!regions) {
          axios.get(urlRegions).then((response: AxiosResponse<Region[]>) => {
            setRegions(response.data);
          })
        }
      }, [regions]);

    return <GenericSelect title="Region" selections={regions} extraButton={{title: "Universe Inventory"}} setSelection={props.setRegion} setExtraButtonClicked={props.setUniverseInventory} />
}

interface RegionSelectProps {
    setRegion: Function;
    setUniverseInventory?: Function;
}