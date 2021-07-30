// import App from './App';
import Dashboard from './Dashboard/Dashboard.index';
import Table from './Table/Table.index';
import Charts from './Charts/Charts.index';
// import UnitExplorer from '../Explorer/UnitExplorer';

// router configuration.
let routes = [
  {
    path: '/dashboard',
    name: 'Project Dashboard',
    component: Dashboard,
    exact: true,
    strict: true
  },
  {
    path: '/dashboard/table',
    name: 'Table',
    component: Table,
    exact: true,
    strict: true
  },
  {
    path: '/dashboard/charts',
    name: 'Charts',
    component: Charts,
    exact: true,
    strict: true
  }
];

export default routes;