
export interface ServiceTab {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  details: {
    heading: string;
    description: string;
    features: string[];
    imageLabel: string;
  };
}

export interface TrustFactor {
  id: string;
  title: string;
  description: string;
  icon: string;
}
