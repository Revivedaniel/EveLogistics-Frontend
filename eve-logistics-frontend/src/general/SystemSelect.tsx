import { type GenericSelection, type Region, type Station, type System } from './General.model'
import GenericSelect from './GenericSelect'
import { useState, useEffect } from 'react'
import axios, { type AxiosResponse } from 'axios'
import { urlSystemByRegion } from '../endpoints'

export default function SystemSelect (props: SystemSelectProps): JSX.Element {
  const [systems, setSystems] = useState<System[] | undefined>(undefined)

  useEffect(() => {
    if (systems == null) {
      axios
        .get(urlSystemByRegion(props.region.name))
        .then((response: AxiosResponse<Station[]>) => {
          setSystems(response.data)
        })
        .catch((error: any) => {
          console.log(error)
        })
    }
  }, [systems, props.region.name])

  return (
    <>
      <GenericSelect
        title="System"
        selections={systems}
        extraButton={{ title: `${props.region.name} Inventory` }}
        setSelection={props.setSystem}
        setExtraButtonClicked={props.setRegionInventory}
        backButtonTitle="Region Select"
        setBackButton={props.setRegion}
      />
    </>
  )
}

interface SystemSelectProps {
  region: Region
  setSystem: (arg0: GenericSelection) => void
  setRegionInventory?: (arg0: boolean) => void
  setRegion: (arg0: GenericSelection | undefined) => void
}
