import { useState } from 'react';
import { Car } from 'lucide-react';

export function JadeerLogoMark({
  className = 'h-7 w-7',
  tone = 'gold',
}: {
  className?: string;
  tone?: 'gold' | 'light' | 'dark';
}) {
  const fillColor =
    tone === 'light' ? '#F5F5F4' : tone === 'dark' ? '#0B0B0D' : '#C8A45D';

  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M28 5L34 1.5V7.5L28 11V5Z" fill={fillColor} />
      <path d="M8 16L24 7V13L8 22V16Z" fill={fillColor} />
      <path
        d="M28 14.5V31C28 36.2 24.4 40 19 40C13.6 40 10 36.2 10 31V27.5L23.5 20V25.2L14.8 30.1V31C14.8 33.7 16.5 35.4 19 35.4C21.5 35.4 23.2 33.7 23.2 31V17.2L28 14.5Z"
        fill={fillColor}
      />
    </svg>
  );
}

export function VehicleImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  objectPosition = 'object-center',
}: {
  src?: string;
  alt: string;
  className?: string;
  objectPosition?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1B1B20] via-[#131317] to-[#0B0B0D] text-[#E6E4DC] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Car className="h-9 w-9 text-[#C8A45D] mb-3" strokeWidth={1.5} />
        <span className="font-display text-sm font-semibold tracking-tight text-white/90 max-w-[200px] leading-snug">
          {alt}
        </span>
        <span className="mt-1 text-xs text-[#C8A45D]">Jadeer United Fleet</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`${className} ${objectPosition}`}
      loading="lazy"
    />
  );
}
