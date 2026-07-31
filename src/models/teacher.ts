export interface Teacher {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age: number;
    gender: string;
    image: string;

    company: {
        title: string;
    };
}