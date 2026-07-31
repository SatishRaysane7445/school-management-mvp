import DashboardLayout from '../../components/Common/Dashboard/DashboardLayout';
import WelcomeSection from '../../components/Common/Dashboard/WelcomeCard/index';
import QuickActionCard from '../../components/Common/Dashboard/QuickActionCard';
import { quickActions } from '../../pages/dashboard/dashboardData';
const Dashboard = () => {
  return (
    <DashboardLayout
      leftHeaderContent={
        <div className="dashboard-header-text">
          <h2>Learn how to launch faster</h2>
          <p>
            Watch our webinar for tips from our experts and get a limited time
            offer.
          </p>
        </div>
      }
    >
      <WelcomeSection />
      {quickActions.map(item => (
        <QuickActionCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </DashboardLayout>
  );
};

export default Dashboard;
