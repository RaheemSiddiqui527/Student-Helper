import React, { useState, useRef, useEffect } from 'react';

export default function EnhancedCard({ 
  title, 
  description, 
  onClick, 
  icon, 
  gradient = "from-blue-500 to-purple-600", 
  className = "",
  badge = null,
  actionText = "Learn More",
  stats = null,
  image = null,
  isSelected = false,
  disabled = false,
  priority = false
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Mouse tracking for dynamic effects
  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Enhanced card with multiple visual states
  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ease-out transform-gpu ${
        disabled ? 'opacity-60 cursor-not-allowed' : 'hover:scale-[1.02]'
      } ${
        isSelected ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-transparent' : ''
      } ${
        priority ? 'order-first' : ''
      } ${className}`}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      onMouseMove={!disabled ? handleMouseMove : undefined}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
      }}
    >
      {/* Enhanced base card with better glassmorphism */}
      <div className={`
        relative p-8 rounded-3xl border backdrop-blur-xl transition-all duration-700
        ${isSelected 
          ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/40 shadow-2xl shadow-blue-500/20' 
          : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/40'
        }
        hover:shadow-2xl hover:shadow-purple-500/25
      `}>
        
        {/* Dynamic mouse-following spotlight */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(200px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />

        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`} />
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-6 right-6 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
          <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Priority badge */}
        {priority && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold rounded-full">
            FEATURED
          </div>
        )}

        {/* Custom badge */}
        {badge && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
            {badge}
          </div>
        )}

        {/* Image section */}
        {image && (
          <div className="relative mb-6 -mx-4 -mt-4 h-48 overflow-hidden rounded-t-3xl">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        )}

        <div className="relative z-10">
          {/* Enhanced icon container */}
          {icon && (
            <div className={`
              w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 
              group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg 
              shadow-purple-500/30 group-hover:shadow-xl group-hover:shadow-purple-500/40
            `}>
              <div className="text-white text-xl">
                {icon}
              </div>
            </div>
          )}

          {/* Enhanced title with better animations */}
          <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-500">
            {title}
          </h2>
          
          {/* Enhanced description */}
          <p className="text-white/70 group-hover:text-white/90 transition-colors duration-500 leading-relaxed mb-6 line-clamp-3">
            {description}
          </p>

          {/* Stats section */}
          {stats && (
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-white font-bold text-lg">{stat.value}</div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Action button */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
              {actionText}
            </span>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
              <svg className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12 group-hover:animate-shimmer" />
        </div>

        {/* Enhanced bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Side glow effects */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Loading state */}
      {disabled && (
        <div className="absolute inset-0 bg-black/20 rounded-3xl flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}

