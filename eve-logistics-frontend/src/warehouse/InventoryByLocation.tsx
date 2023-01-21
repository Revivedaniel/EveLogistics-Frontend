import RegionSelect from "../general/RegionSelect";
import { useState } from 'react';
import { region } from "../general/General.model";

export default function InventoryByLocation() {

  const [region, setRegion] = useState<region | undefined>(undefined);

  return (
    <>
      {region ? <h2>System Select: {region.name}</h2> : <RegionSelect setRegion={setRegion} />}
    </>
  );
}
