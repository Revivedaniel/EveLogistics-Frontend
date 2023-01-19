import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./general/ErrorPage";
import Warehouse from "./warehouse/Warehouse";
import Industry from "./industry/Industry";
import Market from "./market/Market";
import Hauling from "./hauling/Hauling";
import GenericTasks from "./general/GenericTasks";
import InventoryByItem from "./warehouse/InventoryByItem";
import InventoryByLocation from "./warehouse/InventoryByLocation";
import VelocityReport from "./warehouse/VelocityReport";
import Picking from "./warehouse/Picking";
import Receiving from "./warehouse/Receiving";
import WarehouseTransfer from "./warehouse/WarehouseTransfer";
import UpdateInventory from "./warehouse/UpdateInventory";

const buttons = [
  {
    to: "warehouse",
    title: "Warehouse"
  },
  {
    to: "market",
    title: "market"
  },
  {
    to: "industry",
    title: "Industry"
  },
  {
    to: "hauling",
    title: "Hauling"
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <GenericTasks heading="Solution Select" buttons={buttons} />,
      },
      {
        path: "warehouse",
        element: <Warehouse />
      },
      {
        path: "warehouse/inventory-by-item",
        element: <InventoryByItem />
      },
      {
        path: "warehouse/inventory-by-location",
        element: <InventoryByLocation />
      },
      {
        path: "warehouse/velocity-report",
        element: <VelocityReport />
      },
      {
        path: "warehouse/picking",
        element: <Picking />
      },
      {
        path: "warehouse/receiving",
        element: <Receiving />
      },
      {
        path: "warehouse/warehouse-transfer",
        element: <WarehouseTransfer />
      },
      {
        path: "warehouse/update-inventory",
        element: <UpdateInventory />
      },
      {
        path: "industry",
        element: <Industry />,
      },
      {
        path: "market",
        element: <Market />,
      },
      {
        path: "hauling",
        element: <Hauling />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
