export interface Teacher {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;

  // UI-only fields for now
  subject: string;
  className: string;
}