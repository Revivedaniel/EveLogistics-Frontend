import GenericTasks from "../general/GenericTasks";

const buttons = [
  {
    to: "warehouse/inventory-by-item",
    title: "Inventory by Item"
  },
  {
    to: "warehouse/inventory-by-location",
    title: "Inventory by Location"
  },
  {
    to: "warehouse/velocity-report",
    title: "Velocity Report"
  },
  {
    to: "warehouse/picking",
    title: "Picking"
  },
  {
    to: "warehouse/receiving",
    title: "Receiving"
  },
  {
    to: "warehouse/warehouse-transfer",
    title: "Warehouse Transfer"
  },
  {
    to: "warehouse/update-inventory",
    title: "Update Inventory"
  },
];

export default function Warehouse() {
    return <GenericTasks heading="Warehouse Tasks" buttons={buttons}/>
}