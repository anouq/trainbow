export interface AgendaItem extends Item {
    name: string;
    time?: string;
    location?: string;
    details?: string;
}

export interface BlogItem extends Item {
    title: string;
    message: string[];
    archive?: boolean;
    action?: string;
    actionMessage?: string;
    images?: string[];
}

export interface Item {
    id: number;
    startDate?: string;
    endDate?: string;
    inactive?: boolean;
    date: string;
}
