import { type Station } from '../../general/General.model'
import { type StationInventoryRow } from '../warehouse.model'

import Inventory from './Inventory'
import css from './ItemInventory.module.css'
import { useState, useEffect } from 'react'
import { urlStationInventory } from '../../endpoints'
import axios, { type AxiosResponse } from 'axios'

export default function StationInventory (props: StationInventoryProps): JSX.Element {
  const [stationInventory, setStationInventory] = useState<StationInventoryRow[] | undefined>(undefined)

  useEffect(() => {
    if (stationInventory == null) {
      axios
        .get(urlStationInventory(props.station.name))
        .then((response: AxiosResponse<StationInventoryRow[]>) => {
          setStationInventory(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [stationInventory, props.station.name])

  return (
    <div className={css.container}>
      <Inventory
        rows={stationInventory}
        tableTitle={props.station.name}
        backButtonTitle="Station Select"
        setSelection={props.setStation}
        buttonClickValue={undefined}
      />
    </div>
  )
}

interface StationInventoryProps {
  station: Station
  setStation: (arg0: boolean) => void
}
