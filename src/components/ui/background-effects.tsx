import React from 'react';

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  opacity?: number;
  scale?: number;
}

export const DotPattern: React.FC<DotPatternProps> = ({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className = '',
  opacity = 0.05,
  scale = 1,
  ...props
}) => {
  const id = React.useId();

  return (
    <div
      className={`pointer-events-none fixed inset-0 h-full w-full ${className}`}
      style={{
        transform: `scale(${scale})`,
        opacity,
        zIndex: 1,
      }}
      {...props}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        style={{
          maskImage: 'radial-gradient(circle at center, white 40%, transparent 70%)',
        }}
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <circle
              id="pattern-circle"
              cx={cx}
              cy={cy}
              r={cr}
              fill="rgb(var(--color-border-hairline))"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>
    </div>
  );
};

interface RadialGradientProps {
  className?: string;
  opacity?: number;
  scale?: number;
  position?: 'top' | 'center' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: 'mint' | 'lavender' | 'peach';
  blur?: boolean;
}

export const RadialGradient: React.FC<RadialGradientProps> = ({
  className = '',
  opacity = 0.1,
  scale = 1,
  position = 'center',
  color = 'mint',
  blur = true,
  ...props
}) => {
  const colorMap = {
    mint: 'var(--color-accent-mint)',
    lavender: 'var(--color-accent-lavender)',
    peach: 'var(--color-accent-peach)',
  };

  const positionMap = {
    'top': 'top center',
    'center': 'center center',
    'bottom': 'bottom center',
    'top-left': 'top left',
    'top-right': 'top right',
    'bottom-left': 'bottom left',
    'bottom-right': 'bottom right',
  };

  return (
    <div
      className={`pointer-events-none fixed inset-0 ${className}`}
      style={{
        background: `radial-gradient(circle at ${positionMap[position]}, rgb(${colorMap[color]}) 0%, transparent 50%)`,
        opacity,
        transform: `scale(${scale})`,
        filter: blur ? 'blur(80px)' : 'none',
        zIndex: 1,
      }}
      {...props}
    />
  );
};

interface BackgroundGridProps {
  className?: string;
  opacity?: number;
  scale?: number;
  size?: number;
  strokeWidth?: number;
  fade?: boolean;
}

export const BackgroundGrid: React.FC<BackgroundGridProps> = ({
  className = '',
  opacity = 0.06,
  scale = 1,
  size = 32,
  strokeWidth = 1,
  fade = true,
  ...props
}) => {
  const id = React.useId();

  return (
    <div
      className={`pointer-events-none fixed inset-0 h-full w-full ${className}`}
      style={{
        opacity,
        transform: `scale(${scale})`,
        zIndex: 1,
      }}
      {...props}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        style={{
          maskImage: fade 
            ? 'radial-gradient(ellipse 80% 50% at 50% 0%, white 70%, transparent 100%)'
            : 'none',
        }}
      >
        <defs>
          <pattern
            id={`grid-${id}`}
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${size} 0 L 0 0 0 ${size}`}
              fill="none"
              stroke="rgb(var(--color-border-hairline))"
              strokeWidth={strokeWidth}
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#grid-${id})`}
        />
      </svg>
    </div>
  );
};

interface LinearBackgroundProps {
  variant?: 'minimal' | 'rich' | 'hero' | 'featured';
  className?: string;
}

export const LinearBackground: React.FC<LinearBackgroundProps> = ({
  variant = 'minimal',
  className = '',
}) => {
  switch (variant) {
    case 'hero':
      return (
        <div className={`fixed inset-0 ${className}`}>
          <BackgroundGrid size={40} opacity={0.08} fade={true} />
          <RadialGradient position="top-right" color="mint" opacity={0.06} blur={true} />
          <RadialGradient position="bottom-left" color="lavender" opacity={0.04} blur={true} scale={0.7} />
          <DotPattern width={24} height={24} opacity={0.04} />
        </div>
      );
    
    case 'featured':
      return (
        <div className={`fixed inset-0 ${className}`}>
          <BackgroundGrid size={32} opacity={0.06} />
          <RadialGradient position="center" color="peach" opacity={0.05} blur={true} />
          <DotPattern width={20} height={20} opacity={0.03} />
        </div>
      );
    
    case 'rich':
      return (
        <div className={`fixed inset-0 ${className}`}>
          <BackgroundGrid size={32} opacity={0.07} fade={true} />
          <RadialGradient position="top" color="lavender" opacity={0.05} />
          <DotPattern width={16} height={16} opacity={0.05} />
        </div>
      );
    
    default: // minimal
      return (
        <div className={`fixed inset-0 ${className}`}>
          <BackgroundGrid size={32} opacity={0.04} />
          <DotPattern width={16} height={16} opacity={0.03} />
        </div>
      );
  }
};