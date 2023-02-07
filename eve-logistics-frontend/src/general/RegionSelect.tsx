import GenericSelect from './GenericSelect'
import { useState, useEffect } from 'react'
import { type GenericSelection, type Region } from './General.model'
import axios, { type AxiosResponse } from 'axios'
import { urlRegions } from '../endpoints'

export default function RegionSelect (props: RegionSelectProps): JSX.Element {
  const [regions, setRegions] = useState<Region[] | undefined>(undefined)

  useEffect(() => {
    if (regions == null) {
      axios.get(urlRegions).then((response: AxiosResponse<Region[]>) => {
        setRegions(response.data)
      }).catch((error: any) => {
        console.log(error)
      })
    }
  }, [regions])

  return <GenericSelect title='Region' selections={regions} extraButton={{ title: 'Universe Inventory' }} setSelection={props.setRegion} setExtraButtonClicked={props.setUniverseInventory} backButtonTitle="Go Back"/>
}

interface RegionSelectProps {
  setRegion: (arg0: GenericSelection) => void
  setUniverseInventory?: (arg0: boolean) => void
}
