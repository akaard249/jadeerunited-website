import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useInView } from 'motion/react';

export const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.58, delay, ease: EASE_LUXURY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className = '',
  stagger = 0.075,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.52, ease: EASE_LUXURY },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GoldGlowCard({
  children,
  className = '',
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: EASE_LUXURY }}
      className={`relative overflow-hidden bg-[#141418] border border-white/[0.08] hover:border-[#C8A45D]/40 rounded-xl transition-colors duration-200 ${className}`}
    >
      {/* Dynamic cursor-following champagne gold radial sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(360px circle at ${mousePos.x}% ${mousePos.y}%, rgba(200, 164, 93, 0.12), transparent 60%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  durationMs = 1200,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let rafId = 0;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayVal(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, durationMs]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {displayVal.toLocaleString()}
      {suffix}
    </span>
  );
}

export function AmbientGoldBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="ambient-gold-orb absolute -top-28 left-1/2 -translate-x-1/2 w-[780px] h-[340px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(200,164,93,0.16) 0%, rgba(200,164,93,0.03) 55%, transparent 75%)',
        }}
      />
    </div>
  );
}
