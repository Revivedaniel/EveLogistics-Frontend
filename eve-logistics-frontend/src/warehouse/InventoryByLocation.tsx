import RegionSelect from "../general/RegionSelect";
import { useState } from 'react';
import { Region, Station, System } from "../general/General.model";
import SystemSelect from "../general/SystemSelect";
import StationSelect from "../general/StationSelect";

export default function InventoryByLocation() {

  const [region, setRegion] = useState<Region | undefined>(undefined);
  const [system, setSystem] = useState<System | undefined>(undefined);
  const [station, setStation] = useState<Station | undefined>(undefined);

  return (
    <>
      {!region ? <RegionSelect setRegion={setRegion} /> : 
      !system ? <SystemSelect region={region} setSystem={setSystem} /> : 
      !station ? <StationSelect system={system} setStation={setStation} /> : 
      <h2>{station.name}</h2>}
    </>
  );
}
