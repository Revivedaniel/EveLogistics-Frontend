import GenericTasks from "../general/GenericTasks";

const buttons = [
    {
      to: "market/anomalies",
      title: "Anomalies"
    },
    {
      to: "market/forecast",
      title: "Forecast"
    },
    {
      to: "market/sales-orders",
      title: "Sales Orders"
    },
    {
      to: "market/purchase-orders",
      title: "Purchase Orders"
    },
    {
      to: "market/mrp",
      title: "MRP"
    },
  ];

export default function Market() {
    return <GenericTasks heading="Market Tasks" buttons={buttons}/>
}