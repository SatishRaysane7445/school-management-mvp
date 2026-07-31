import type { ReactNode } from "react";

import Header from "../Header";
import Sidebar from "../Sidebar";

import "./DashboardLayout.css";

type DashboardLayoutProps = {
  children: ReactNode;
  showHeader?: boolean;
};

const DashboardLayout = ({
  children,
  showHeader = true,
}: DashboardLayoutProps) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        {showHeader && <Header />}

        <main className="dashboard-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;