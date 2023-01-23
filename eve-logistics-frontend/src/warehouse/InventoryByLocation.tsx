import RegionSelect from "../general/RegionSelect";
import { useState } from 'react';
import { Region, Station, System } from "../general/General.model";
import SystemSelect from "../general/SystemSelect";
import StationSelect from "../general/StationSelect";
import GenericTasks from "../general/GenericTasks";
import StationInventory from "./tables/StationInventory";
import SystemInventory from "./tables/SystemInventory";

export default function InventoryByLocation() {

  const [region, setRegion] = useState<Region | undefined>(undefined);
  const [system, setSystem] = useState<System | undefined>(undefined);
  const [station, setStation] = useState<Station | undefined>(undefined);
  const [systemInventory, setSystemInventory] = useState<boolean | undefined>(false);

  if (system && systemInventory) {
    return <>
      <GenericTasks heading="Inventory by Location" />
      <SystemInventory system={system} setSystemInventory={setSystemInventory} />
    </>
  } else {
    return (
      <>
        <GenericTasks heading="Inventory by Location" />
        {!region ? <RegionSelect setRegion={setRegion} /> : 
        !system ? <SystemSelect region={region} setSystem={setSystem} /> : 
        !station ? <StationSelect system={system} setStation={setStation} setSystemInventory={setSystemInventory}/> : 
        <StationInventory station={station} setStation={setStation} />}
      </>
    );
  }
}
