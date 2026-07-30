// import {
//     MdDashboard,
//     MdSchool,
//     MdPeople,
//     MdPayment,
//     MdSettings,
//     MdAssignment,
// } from "react-icons/md";
import type { ComponentType } from "react";

import Dashboard from "../../../../assets/dashboard.png";
import People from "../../../../assets/teacher.png"
import School from "../../../../assets/school.png"
import Payment from "../../../../assets/billing.png"
import Exam from "../../../../assets/exam.png"
import Settings from "../../../../assets/setting.png"




export interface SidebarMenu {
  title: string;
  path: string;
  icon: string | ComponentType;
}

export const sidebarMenus: SidebarMenu[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: Dashboard,
    },
    {
        title: "Teachers",
        path: "/teachers",
        icon: People,
    },
    {
        title: "Students",
        path: "/students",
        icon: School,
    },
    {
        title: "Billing",
        path: "/billing",
        icon: Payment,
    },
    {
        title: "Settings & Profile",
        path: "/settings",
        icon: Settings,
    },
    {
        title: "Exams",
        path: "/exams",
        icon: Exam,
    },
];