export interface UserProfile {
    name: string;
    email: string;
    role: string;
    avatar: string;
    taskStats: {
        completed: number;
        pending: number;
        overdue: number;
    };
}