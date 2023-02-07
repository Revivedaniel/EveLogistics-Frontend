import { type Region } from '../../general/General.model'
import { type StationInventoryRow } from '../warehouse.model'
import Inventory from './Inventory'
import css from './ItemInventory.module.css'
import { useState, useEffect } from 'react'
import axios, { type AxiosResponse } from 'axios'
import { urlRegionInventory } from '../../endpoints'

export default function RegionInventory (props: RegionInventoryProps): JSX.Element {
  const [regionInventoryRows, setRegionInventoryRows] = useState<StationInventoryRow[] | undefined>(undefined)

  useEffect(() => {
    if (regionInventoryRows == null) {
      axios
        .get(urlRegionInventory(props.region.name))
        .then((response: AxiosResponse<StationInventoryRow[]>) => {
          setRegionInventoryRows(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [regionInventoryRows, props.region.name])

  return <div className={css.container} ><Inventory rows={regionInventoryRows} tableTitle={props.region.name} backButtonTitle='System Select' setSelection={props.setRegionInventory} buttonClickValue={false} /></div>
}

interface RegionInventoryProps {
  region: Region
  setRegionInventory: (arg0: boolean) => void
  inventoryData?: StationInventoryRow[]
}
