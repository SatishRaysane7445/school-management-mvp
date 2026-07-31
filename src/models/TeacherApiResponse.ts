import type { Teacher } from "./teacher";

export interface TeacherApiResponse {
  users: Teacher[];
  total: number;
  skip: number;
  limit: number;
}