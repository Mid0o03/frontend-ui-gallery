
export enum StageStatus {
  ACTIVE = 'ACTIVE',
  LOCKED = 'LOCKED',
  COMPLETED = 'COMPLETED'
}

export interface StageStats {
  logic: number;
  visual: number;
}

export interface Stage {
  id: string;
  title: string;
  subtitle: string;
  sector: string;
  image: string;
  status: StageStatus;
  stats: StageStats;
  themeColor: string;
}

export interface GlobalStat {
  label: string;
  value: string;
  trend: 'up' | 'down';
  change: string;
  color: string;
}
