import GenericSelect from "./GenericSelect";
import regions from "../utils/regions"

export default function RegionSelect(props: RegionSelectProps) {

    return <GenericSelect title="Region" selections={regions} extraButton={{title: "Universe Inventory"}} setSelection={props.setRegion} />
}

interface RegionSelectProps {
    setRegion: Function;
}