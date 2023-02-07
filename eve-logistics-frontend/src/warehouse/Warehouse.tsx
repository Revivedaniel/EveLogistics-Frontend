import { Backdrop } from '@mui/material'
import axios, { type AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { urlUpdateInventory } from '../endpoints'
import GenericTasks from '../general/GenericTasks'

const buttons = [
  {
    to: 'inventory-by-item',
    title: 'Inventory by Item'
  },
  {
    to: 'inventory-by-location',
    title: 'Inventory by Location'
  }
  // {
  //   to: "velocity-report",
  //   title: "Velocity Report"
  // },
  // {
  //   to: "picking",
  //   title: "Picking"
  // },
  // {
  //   to: "receiving",
  //   title: "Receiving"
  // },
  // {
  //   to: "warehouse-transfer",
  //   title: "Warehouse Transfer"
  // }
]

export default function Warehouse (): JSX.Element {
  const [updateInventory, setUpdateInventory] = useState<boolean>(false)
  const handleClose = (): void => {
    setUpdateInventory(false)
  }

  useEffect(() => {
    if (updateInventory) {
      axios
        .head(urlUpdateInventory)
        .then((response: AxiosResponse) => {
          handleClose()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [updateInventory])

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={updateInventory}
        onClick={handleClose}
      ></Backdrop>
      <GenericTasks
        heading="Warehouse Tasks"
        buttons={buttons}
        specialButtonTitle="Update Inventory"
        specialButtonSelected={setUpdateInventory}
      />
    </>
  )
}
