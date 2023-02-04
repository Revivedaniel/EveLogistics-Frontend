import App from './App';
import ErrorPage from './general/ErrorPage';
import Warehouse from './warehouse/Warehouse';
import Industry from './industry/Industry';
import Market from './market/Market';
import Hauling from './hauling/Hauling';
import GenericTasks from './general/GenericTasks';
import InventoryByItem from './warehouse/InventoryByItem';
import InventoryByLocation from './warehouse/InventoryByLocation';
import VelocityReport from './warehouse/VelocityReport';
import Picking from './warehouse/Picking';
import Receiving from './warehouse/Receiving';
import WarehouseTransfer from './warehouse/WarehouseTransfer';
import UpdateInventory from './warehouse/UpdateInventory';
import Login from './auth/Login';

const buttons = [
	{
		to: 'warehouse',
		title: 'Warehouse',
	},
	{
		to: 'market',
		title: 'market',
	},
	{
		to: 'industry',
		title: 'Industry',
	},
	{
		to: 'hauling',
		title: 'Hauling',
	},
];

const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <GenericTasks heading='Solution Select' buttons={buttons} />,
			},
			{
				path: 'warehouse',
				element: <Warehouse />,
			},
			{
				path: 'warehouse/inventory-by-item',
				element: <InventoryByItem />,
			},
			{
				path: 'warehouse/inventory-by-location',
				element: <InventoryByLocation />,
			},
			{
				path: 'warehouse/velocity-report',
				element: <VelocityReport />,
			},
			{
				path: 'warehouse/picking',
				element: <Picking />,
			},
			{
				path: 'warehouse/receiving',
				element: <Receiving />,
			},
			{
				path: 'warehouse/warehouse-transfer',
				element: <WarehouseTransfer />,
			},
			{
				path: 'warehouse/update-inventory',
				element: <UpdateInventory />,
			},
			{
				path: 'industry',
				element: <Industry />,
			},
			{
				path: 'market',
				element: <Market />,
			},
			{
				path: 'hauling',
				element: <Hauling />,
			},
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
];

export default routes;
