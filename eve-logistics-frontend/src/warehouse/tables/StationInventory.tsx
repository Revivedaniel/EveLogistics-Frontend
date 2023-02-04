import {type Station} from '../../general/General.model';
import {type StationInventoryRow} from '../warehouse.model';
import Inventory from './Inventory';
import css from './ItemInventory.module.css';
import {useState, useEffect} from 'react';
import {urlStationInventory} from '../../endpoints';
import axios, {type AxiosResponse} from 'axios';

export default function StationInventory(props: StationInventoryProps) {
	const [stationInventory, setStationInventory] = useState<StationInventoryRow[] | undefined>(undefined);

	useEffect(() => {
		if (!stationInventory) {
			axios.get(urlStationInventory(props.station.name)).then((response: AxiosResponse<StationInventoryRow[]>) => {
				setStationInventory(response.data);
			});
		}
	}, [stationInventory, props.station.name]);

	return <div className={css.container} ><Inventory rows={stationInventory} tableTitle={props.station.name} backButtonTitle='Station Select' setSelection={props.setStation} /></div>;
}

type StationInventoryProps = {
	station: Station;
	setStation: Function;
};
