import { Injectable } from '@angular/core';
import { AnalyticsImplementaion, Metric } from './analytics-demo.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private implementaion: AnalyticsImplementaion) { }

  record(metric : Metric): void{
    this.implementaion.recordEvent(metric);
  }

}
