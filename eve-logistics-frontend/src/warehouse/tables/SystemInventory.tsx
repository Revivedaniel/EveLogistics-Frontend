import {type System} from '../../general/General.model';
import {type StationInventoryRow} from '../warehouse.model';
import Inventory from './Inventory';
import css from './ItemInventory.module.css';
import {useState, useEffect} from 'react';
import axios, {type AxiosResponse} from 'axios';
import {urlSystemInventory} from '../../endpoints';

export default function SystemInventory(props: SystemInventoryProps) {
	const [systemInventoryRows, setSystemInventoryRows] = useState<StationInventoryRow[] | undefined>(undefined);

	useEffect(() => {
		if (!systemInventoryRows) {
			axios.get(urlSystemInventory(props.system.name)).then((response: AxiosResponse<StationInventoryRow[]>) => {
				setSystemInventoryRows(response.data);
			});
		}
	}, [systemInventoryRows, props.system.name]);

	return <div className={css.container} ><Inventory rows={systemInventoryRows} tableTitle={props.system.name} backButtonTitle='Station Select' setSelection={props.setSystemInventory} buttonClickValue={false} /></div>;
}

type SystemInventoryProps = {
	system: System;
	setSystemInventory: Function;
};
