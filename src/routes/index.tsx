import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/commons/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

// * Monitoring
const Dashboard = Loadable(
  lazy(() => import('../components/dashboard/dashboard/Dashboard.Container'))
);
const Topology = Loadable(
  lazy(() => import('../components/dashboard/topology/Topology.Container'))
);
const Interface = Loadable(
  lazy(() => import('../components/dashboard/interface/Interface.Container'))
);
// * DETECTION
const Issue = Loadable(lazy(() => import('../components/dashboard/issue/Issue.Container')));
const IssueDetail = Loadable(
  lazy(() => import('../components/dashboard/issue/IssueDetail.Container'))
);
const Anomaly = Loadable(lazy(() => import('../components/dashboard/anomaly/Anomaly.Container')));
// * MANAGEMENT
const Transaction = Loadable(
  lazy(() => import('../components/dashboard/transaction/Transaction.Container'))
);
const TransactionDetail = Loadable(
  lazy(() => import('../components/dashboard/transaction/TransactionDetail.Container'))
);
const Server = Loadable(lazy(() => import('../components/dashboard/server/Server.Container')));
const ServerDetail = Loadable(
  lazy(() => import('../components/dashboard/server/ServerDetail.Container'))
);
const Network = Loadable(lazy(() => import('../components/dashboard/network/Network.Container')));

const Login = Loadable(lazy(() => import('../components/dashboard/login/LoginContainer')));

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/dashboard" replace />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [{ element: <Dashboard />, index: true }],
    },
    {
      path: '/topology',
      element: <DashboardLayout />,
      children: [{ element: <Topology />, index: true }],
    },
    {
      path: '/interface',
      element: <DashboardLayout />,
      children: [{ element: <Interface />, index: true }],
    },
    {
      path: '/issue',
      element: <DashboardLayout />,
      children: [
        { element: <Issue />, index: true },
        { path: '/issue/:id', element: <IssueDetail /> },
      ],
    },
    {
      path: '/anomaly',
      element: <DashboardLayout />,
      children: [{ element: <Anomaly />, index: true }],
    },
    {
      path: '/Transaction',
      element: <DashboardLayout />,
      children: [
        { element: <Transaction />, index: true },
        { path: '/Transaction/:id', element: <TransactionDetail /> },
      ],
    },

    {
      path: '/login',
      // element: <DashboardLayout />,
      children: [{ element: <Login />, index: true }],
    },

    {
      path: '/Server',
      element: <DashboardLayout />,
      children: [
        { element: <Server />, index: true },
        {
          path: '/Server/:id',
          element: <ServerDetail />,
        },
      ],
    },
    {
      path: '/Network',
      element: <DashboardLayout />,
      children: [{ element: <Network />, index: true }],
    },

    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// Dashboard
const NotFound = Loadable(lazy(() => import('../components/commons/Page404')));
