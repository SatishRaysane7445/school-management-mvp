import DashboardLayout from '../../components/Common/Dashboard/DashboardLayout';
import WelcomeSection from "../../components/Common/Dashboard/WelcomeCard/index";
import QuickActionCard from "../../components/Common/Dashboard/QuickActionCard";
import { quickActions } from "../../pages/dashboard/dashboardData";
const Dashboard = () => {
  return (
    <DashboardLayout>
      <WelcomeSection />
       {quickActions.map((item) => (
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
