export interface User{
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    createdAt: Date;
    updatedAt: Date;
    emailing: boolean;
    roles: string[];
    companyId: string;
    enabled: true;
    lastLogin: Date;
}
