import GenericTasks from "../general/GenericTasks";

const buttons = [
    {
      to: "anomalies",
      title: "Anomalies"
    },
    {
      to: "forecast",
      title: "Forecast"
    },
    {
      to: "sales-orders",
      title: "Sales Orders"
    },
    {
      to: "purchase-orders",
      title: "Purchase Orders"
    },
    {
      to: "mrp",
      title: "MRP"
    },
  ];

export default function Market() {
    return <GenericTasks heading="Market Tasks" buttons={buttons}/>
}