import RegionSelect from "../general/RegionSelect";
import { useState } from 'react';
import { Region, System } from "../general/General.model";
import SystemSelect from "../general/SystemSelect";

export default function InventoryByLocation() {

  const [region, setRegion] = useState<Region | undefined>(undefined);
  const [system, setSystem] = useState<System | undefined>(undefined);

  return (
    <>
      {!region ? <RegionSelect setRegion={setRegion} /> : !system ? <SystemSelect region={region} setSystem={setSystem} /> : <h2>{system.name}</h2>}
    </>
  );
}
