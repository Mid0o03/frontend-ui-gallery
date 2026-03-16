
export interface PerformanceInsight {
  latencyImpact: string;
  recommendation: string;
  voltStrategy: string;
}

export interface AIPerformanceResponse {
  summary: string;
  insights: PerformanceInsight[];
}
