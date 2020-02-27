export interface Metric{
    eventName: string;
    scope: string;
}

export interface AnalyticsImplementaion{
    recordEvent(metric: Metric): void;
}