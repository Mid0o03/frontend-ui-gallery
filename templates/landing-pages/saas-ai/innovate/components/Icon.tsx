
import React from 'react';
import { 
  Rocket, 
  XCircle, 
  Zap, 
  TrendingUp, 
  Sparkles,
  Menu,
  X
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = "", size = 24 }) => {
  switch (name) {
    case 'rocket_launch': return <Rocket className={className} size={size} />;
    case 'cancel': return <XCircle className={className} size={size} />;
    case 'speed': return <Zap className={className} size={size} />;
    case 'insights': return <TrendingUp className={className} size={size} />;
    case 'auto_awesome': return <Sparkles className={className} size={size} />;
    case 'menu': return <Menu className={className} size={size} />;
    case 'close': return <X className={className} size={size} />;
    default: return null;
  }
};

export default Icon;
