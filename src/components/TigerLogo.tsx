import React from 'react';

interface TigerLogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export const TigerLogo: React.FC<TigerLogoProps> = ({
  size = 36,
  showWordmark = true,
  className = '',
}) => {
  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer gold frame crest */}
        <path
          d="M32 4L56 16L58 38L44 56L32 60L20 56L6 38L8 16L32 4Z"
          fill="#09090B"
          stroke="#D4AF37"
          strokeWidth="1.75"
        />
        {/* Tiger ears */}
        <path d="M13 17L19 9L24 18L13 17Z" fill="#EA580C" />
        <path d="M51 17L45 9L40 18L51 17Z" fill="#EA580C" />
        <path d="M15 16L19 11L21 16H15Z" fill="#FAFAF9" />
        <path d="M49 16L45 11L43 16H49Z" fill="#FAFAF9" />

        {/* Tiger head silhouette */}
        <path
          d="M32 14C22 14 14 21 14 31C14 40 20 49 32 53C44 49 50 40 50 31C50 21 42 14 32 14Z"
          fill="#EA580C"
        />

        {/* White cheek & chin markings */}
        <path
          d="M15 33C18 39 23 45 32 52C26 48 22 43 21 36L15 33Z"
          fill="#FAFAF9"
        />
        <path
          d="M49 33C46 39 41 45 32 52C38 48 42 43 43 36L49 33Z"
          fill="#FAFAF9"
        />
        <path d="M26 44L32 52L38 44L32 46L26 44Z" fill="#FAFAF9" />

        {/* Crown & forehead stripes */}
        <path
          d="M32 15V24M27 17L30 22M37 17L34 22M20 22L25 25M44 22L39 25"
          stroke="#09090B"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Cheek stripes */}
        <path
          d="M16 28L23 30M17 33L24 34M48 28L41 30M47 33L40 34"
          stroke="#09090B"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Piercing gold/amber eyes */}
        <path d="M21 29L27 31L22 33L21 29Z" fill="#09090B" />
        <path d="M43 29L37 31L42 33L43 29Z" fill="#09090B" />
        <circle cx="24" cy="31" r="1.4" fill="#E8CA64" />
        <circle cx="40" cy="31" r="1.4" fill="#E8CA64" />

        {/* Nose bridge & muzzle */}
        <path d="M29 39H35L32 43L29 39Z" fill="#09090B" />
        <path
          d="M32 43V46M28 46C30 47.5 34 47.5 36 46"
          stroke="#09090B"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark && (
        <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.12em] text-[#FAFAF9] whitespace-nowrap shrink-0">
          TIGER <span className="text-[#EA580C]">WORLD</span>
        </span>
      )}
    </span>
  );
};
