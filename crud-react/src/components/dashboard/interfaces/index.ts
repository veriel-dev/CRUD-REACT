export interface UserProfile {
    username: string;
    email: string;
    role: "admin" | "user";
    status: "active" | "inactive";
    createdAt: string;
    updatedAt: string;
    uid: string;
} 