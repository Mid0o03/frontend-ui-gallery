
export interface ExtractedImage {
  id: string;
  url: string;
  altText?: string;
  context?: string;
  dimensions?: { width: number; height: number };
  category?: string;
  confidence?: number;
}

export interface AnalysisResult {
  images: ExtractedImage[];
  summary: string;
  recommendations: string[];
}

export enum DashboardTab {
  OVERVIEW = 'overview',
  PROCESSOR = 'processor',
  GALLERY = 'gallery',
  SETTINGS = 'settings'
}

export interface AppState {
  currentTab: DashboardTab;
  isAnalyzing: boolean;
  history: AnalysisResult[];
  lastResult: AnalysisResult | null;
}
