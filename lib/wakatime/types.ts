export interface WakatimeAllTime {
    best_day: {
        id: string;
        date: string;
        text: string;
        total_seconds: string;
    };
    daily_average: string;
    human_readable_daily_average: string;
    human_readable_range: string;
    since: string;
    languages: {
        name: string;
        percent: string;
        text: string;
        total_seconds: string;
    }[];
    operating_systems: {
        name: string;
    }[];
}

export interface Wakatime {
    decimal: string;
    digital: string;
    is_up_to_date: boolean;
    percent_calculated: number;
    range: {
        end: string;
        end_date: string;
        end_text: string;
        start: string;
        start_date: string;
        start_text: string;
        timezone: string;
    };
    text: string;
    timeout: number;
    total_seconds: number;
}
