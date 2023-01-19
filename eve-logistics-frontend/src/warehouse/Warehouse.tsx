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
  {
    to: "velocity-report",
    title: "Velocity Report"
  },
  {
    to: "picking",
    title: "Picking"
  },
  {
    to: "receiving",
    title: "Receiving"
  },
  {
    to: "warehouse-transfer",
    title: "Warehouse Transfer"
  },
  {
    to: "update-inventory",
    title: "Update Inventory"
  },
];

export default function Warehouse() {
    return <GenericTasks heading="Warehouse Tasks" buttons={buttons}/>
}