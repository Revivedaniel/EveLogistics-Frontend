import axios, { type AxiosResponse } from 'axios'
import { useState, useEffect } from 'react'
import { urlStationBySystem } from '../endpoints'
import { type GenericSelection, type Region, type Station, type System } from './General.model'
import GenericSelect from './GenericSelect'

export default function StationSelect (props: StationSelectProps): JSX.Element {
  const [stations, setStations] = useState<Station[] | undefined>(undefined)

  useEffect(() => {
    if (stations == null) {
      axios.get(urlStationBySystem(props.system.name)).then((response: AxiosResponse<Station[]>) => {
        setStations(response.data)
      }).catch((error: any) => {
        console.log(error)
      })
    }
  }, [stations, props.system.name])

  return (
    <>
      <GenericSelect
        title="Station"
        selections={stations}
        extraButton={{ title: `${props.system.name} Inventory` }}
        setSelection={props.setStation}
        setExtraButtonClicked={props.setSystemInventory}
        backButtonTitle="System Select"
        setBackButton={props.setSystem}
      />
    </>
  )
}

interface StationSelectProps {
  region: Region
  system: System
  setStation: (arg0: GenericSelection) => void
  setSystemInventory?: (arg0: boolean) => void
  setSystem: (arg0: GenericSelection | undefined) => void
}
