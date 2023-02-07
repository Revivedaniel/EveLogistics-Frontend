import RegionSelect from '../general/RegionSelect'
import { useEffect, useState } from 'react'
import { type Region, type Station, type System } from '../general/General.model'
import SystemSelect from '../general/SystemSelect'
import StationSelect from '../general/StationSelect'
import GenericTasks from '../general/GenericTasks'
import StationInventory from './tables/StationInventory'
import SystemInventory from './tables/SystemInventory'
import RegionInventory from './tables/RegionInventory'
import UniverseInventory from './tables/UniverseInventory'

export default function InventoryByLocation (): JSX.Element {
  const [region, setRegion] = useState<Region | undefined>(undefined)
  const [system, setSystem] = useState<System | undefined>(undefined)
  const [station, setStation] = useState<Station | undefined>(undefined)
  const [stationInventory, setStationInventory] = useState<boolean>(false)
  const [systemInventory, setSystemInventory] = useState<boolean>(false)
  const [regionInventory, setRegionInventory] = useState<boolean>(false)
  const [universeInventory, setUniverseInventory] = useState<boolean>(false)

  useEffect(() => {
    if (stationInventory) {
      setStation(undefined)
      setStationInventory(false)
    }
  }, [stationInventory])

  if (system != null && systemInventory) {
    return (
      <>
        <GenericTasks heading="Inventory by Location" />
        <SystemInventory
          system={system}
          setSystemInventory={setSystemInventory}
        />
      </>
    )
  }

  if (region != null && regionInventory) {
    return (
      <>
        <GenericTasks heading="Inventory by Location" />
        <RegionInventory
          region={region}
          setRegionInventory={setRegionInventory}
        />
      </>
    )
  }

  if (universeInventory) {
    return (
      <>
        <GenericTasks heading="Inventory by Location" />
        <UniverseInventory setUniverseInventory={setUniverseInventory} />
      </>
    )
  }

  return (
    <>
      {region == null
        ? (
        <RegionSelect
          setRegion={setRegion}
          setUniverseInventory={setUniverseInventory}
        />
          )
        : system == null
          ? (
        <SystemSelect
          region={region}
          setSystem={setSystem}
          setRegionInventory={setRegionInventory}
          setRegion={setRegion}
        />
            )
          : station == null
            ? (
        <StationSelect
          region={region}
          system={system}
          setStation={setStation}
          setSystemInventory={setSystemInventory}
          setSystem={setSystem}
        />
              )
            : (
        <>
          <GenericTasks heading="Inventory by Location" />
          <StationInventory
            station={station}
            setStation={setStationInventory}
          />
        </>
              )}
    </>
  )
}
