import MainDashboard from '../../components/dashboard/';

import { useAuth } from '../../context/AuthProvider';
import { ProtectedComponent } from '../../HOC/withAuth';

const DashboardWithAuth = ProtectedComponent(MainDashboard);

const Dashboard = () => {
  const { isLogin } = useAuth();

  return <DashboardWithAuth isLogin={isLogin} />;
};

export default Dashboard;
