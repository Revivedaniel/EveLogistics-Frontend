import { Backdrop } from "@mui/material";
import { useState } from "react";
import GenericTasks from "../general/GenericTasks";

const buttons = [
  {
    to: "inventory-by-item",
    title: "Inventory by Item"
  },
  {
    to: "inventory-by-location",
    title: "Inventory by Location"
  },
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
];


export default function Warehouse() {

  const [updateInventory, setUpdateInventory] = useState<boolean>(false);
  const handleClose = () => {
    setUpdateInventory(false);
  };

    return (
      <>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={updateInventory}
          onClick={handleClose}
        >Updating Inventory...</Backdrop>
        <GenericTasks
          heading="Warehouse Tasks"
          buttons={buttons}
          specialButtonTitle="Update Inventory"
          specialButtonSelected={setUpdateInventory}
        />
      </>
    );
}