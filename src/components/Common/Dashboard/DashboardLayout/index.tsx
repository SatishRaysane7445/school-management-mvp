import type{ ReactNode } from "react";

import Header from "../Header";
import Sidebar from "../Sidebar";

import "./DashboardLayout.css";
import TopBar from "../TopBar";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">


        <Header/>

        <main className="dashboard-content">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;