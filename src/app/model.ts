export interface AgendaItem {
    id: number;
    startDate?: string;
    endDate?: string;
    inactive?: boolean;
    name: string;
    date: string;
    time?: string;
    location?: string;
    details?: string;
}
