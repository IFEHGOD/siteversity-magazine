import { Link } from 'react-router-dom';

interface AdPlaceholderProps {
  size?: 'banner' | 'sidebar' | 'inline' | 'leaderboard';
  className?: string;
}

const sizeClasses = {
  banner: 'h-24 w-full',
  sidebar: 'h-64 w-full',
  inline: 'h-20 w-full my-6',
  leaderboard: 'h-28 w-full',
};

export default function AdPlaceholder({ size = 'banner', className = '' }: AdPlaceholderProps) {
  return (
    <div className={`ad-placeholder ${sizeClasses[size]} ${className}`}>
      <div className="text-center">
        <p className="font-medium">Ad Space</p>
        <p className="text-xs opacity-60">Advertisement</p>
      </div>
    </div>
  );
}
