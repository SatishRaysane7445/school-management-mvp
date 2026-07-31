import type{ Teacher } from "../models/teacher";

export const dummyTeachers: Teacher[] = [
  {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily@example.com",
    gender: "Female",
    image: "https://dummyjson.com/icon/emilys/128",
    subject: "Mathematics",
    className: "10-A",
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Brown",
    email: "michael@example.com",
    gender: "Male",
    image: "https://dummyjson.com/icon/michaelw/128",
    subject: "Physics",
    className: "11-B",
  },
];