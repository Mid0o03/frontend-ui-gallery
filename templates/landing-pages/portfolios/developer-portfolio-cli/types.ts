export interface Project {
    id: string;
    path: string;
    description: string;
    permissions: string;
    icon: string;
}

export interface Skill {
    name: string;
}

export interface SystemLog {
    id: number;
    type: 'SYSTEM' | 'SUCCESS' | 'ERROR' | 'WARNING';
    message: string;
}