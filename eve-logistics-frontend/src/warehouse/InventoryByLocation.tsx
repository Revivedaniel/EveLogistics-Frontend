import RegionSelect from '../general/RegionSelect';
import {useState} from 'react';
import {type Region, type Station, type System} from '../general/General.model';
import SystemSelect from '../general/SystemSelect';
import StationSelect from '../general/StationSelect';
import GenericTasks from '../general/GenericTasks';
import StationInventory from './tables/StationInventory';
import SystemInventory from './tables/SystemInventory';
import RegionInventory from './tables/RegionInventory';
import UniverseInventory from './tables/UniverseInventory';

export default function InventoryByLocation() {
	const [region, setRegion] = useState<Region | undefined>(undefined);
	const [system, setSystem] = useState<System | undefined>(undefined);
	const [station, setStation] = useState<Station | undefined>(undefined);
	const [systemInventory, setSystemInventory] = useState<boolean>(false);
	const [regionInventory, setRegionInventory] = useState<boolean>(false);
	const [universeInventory, setUniverseInventory] = useState<boolean>(false);

	if (system && systemInventory) {
		return <>
			<GenericTasks heading='Inventory by Location' />
			<SystemInventory system={system} setSystemInventory={setSystemInventory} />
		</>;
	}

	if (region && regionInventory) {
		return <>
			<GenericTasks heading='Inventory by Location' />
			<RegionInventory region={region} setRegionInventory={setRegionInventory} />
		</>;
	}

	if (universeInventory) {
		return <>
			<GenericTasks heading='Inventory by Location' />
			<UniverseInventory setUniverseInventory={setUniverseInventory} />
		</>;
	}

	return (
		<>
			{!region ? <RegionSelect setRegion={setRegion} setUniverseInventory={setUniverseInventory} />
				: !system ? <SystemSelect region={region} setSystem={setSystem} setRegionInventory={setRegionInventory} setRegion={setRegion} />
					: !station ? <StationSelect region={region} system={system} setStation={setStation} setSystemInventory={setSystemInventory} setSystem={setSystem} />
						: <>
							<GenericTasks heading='Inventory by Location' />
							<StationInventory station={station} setStation={setStation} />
						</>}
		</>
	);
}
