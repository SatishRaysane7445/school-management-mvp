import {
    MdDashboard,
    MdSchool,
    MdPeople,
    MdPayment,
    MdSettings,
    MdAssignment,
} from "react-icons/md";

export const sidebarMenus = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: MdDashboard,
    },
    {
        title: "Teachers",
        path: "/teachers",
        icon: MdPeople,
    },
    {
        title: "Students",
        path: "/students",
        icon: MdSchool,
    },
    {
        title: "Billing",
        path: "/billing",
        icon: MdPayment,
    },
    {
        title: "Settings",
        path: "/settings",
        icon: MdSettings,
    },
    {
        title: "Exams",
        path: "/exams",
        icon: MdAssignment,
    },
];