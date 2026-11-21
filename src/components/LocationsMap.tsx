import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, Minus, RotateCcw, MapPin, Clock, Phone } from 'lucide-react';
import { EASE_LUXURY } from './MotionPrimitives';

export interface GccLocation {
  id: string;
  name: string;
  type: 'branch' | 'workshop';
  country: 'Saudi Arabia' | 'Bahrain' | 'Oman';
  city: string;
  address: string;
  hours: string;
  phone: string;
  // Normalized map coordinates on GCC 0-1000 x 0-620 canvas
  x: number;
  y: number;
}

export const GCC_LOCATIONS: GccLocation[] = [
  {
    id: 'khobar-hq',
    name: 'Eastern Region — Khobar (KSA HQ)',
    type: 'branch',
    country: 'Saudi Arabia',
    city: 'Khobar',
    address: 'King Faisal Road, Al Khobar, Eastern Province',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
    phone: '+966 56 887 7769',
    x: 565,
    y: 256,
  },
  {
    id: 'bahrain-hq',
    name: 'Bahrain — Amwaj HQ',
    type: 'branch',
    country: 'Bahrain',
    city: 'Amwaj',
    address: 'Amwaj Islands & Southern Governorate, Bahrain',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM · Sat 9:00 AM – 1:00 PM',
    phone: '+973 6666 6064',
    x: 598,
    y: 248,
  },
  {
    id: 'oman-branch',
    name: 'Oman — Muscat Branch',
    type: 'branch',
    country: 'Oman',
    city: 'Muscat',
    address: 'Al Ghubrah Commercial District, Muscat, Oman',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
    phone: '+968 7745 9000',
    x: 816,
    y: 356,
  },
  {
    id: 'riyadh-branch',
    name: 'Riyadh Regional Branch',
    type: 'branch',
    country: 'Saudi Arabia',
    city: 'Riyadh',
    address: 'King Fahd Corridor, Riyadh',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
    phone: '+966 54 316 8080',
    x: 472,
    y: 318,
  },
  {
    id: 'western-branch',
    name: 'Western Region Branch (Jeddah)',
    type: 'branch',
    country: 'Saudi Arabia',
    city: 'Jeddah',
    address: 'Al Madinah Road, Jeddah — Western Region',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
    phone: '+966 54 316 8080',
    x: 266,
    y: 410,
  },
  {
    id: 'neom-branch',
    name: 'NEOM Region Branch',
    type: 'branch',
    country: 'Saudi Arabia',
    city: 'Neom',
    address: 'NEOM Project Logistics Corridor, Tabuk Region',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM · 24/7 Mobile Crew',
    phone: '+966 54 316 8080',
    x: 196,
    y: 174,
  },
  {
    id: 'jizan-branch',
    name: 'Jizan Region Branch',
    type: 'branch',
    country: 'Saudi Arabia',
    city: 'Jizan',
    address: 'Jizan Economic City & Coastal Fleet Hub',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
    phone: '+966 54 316 8080',
    x: 318,
    y: 495,
  },
  {
    id: 'khafji-branch',
    name: 'Eastern Province — Khafji Branch',
    type: 'branch',
    country: 'Saudi Arabia',
    city: 'Khafji',
    address: 'Al Khafji Industrial Zone, Eastern Province',
    hours: 'Sun–Thu · 8:00 AM – 5:30 PM',
    phone: '+966 54 316 8080',
    x: 512,
    y: 158,
  },
  {
    id: 'turaif-branch',
    name: 'Turaif Northern Branch',
    type: 'branch',
    country: 'Saudi Arabia',
    city: 'Turaif',
    address: 'Northern Borders Energy Logistics Park, Turaif',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
    phone: '+966 54 316 8080',
    x: 298,
    y: 108,
  },
  {
    id: 'jadeer-united-ws',
    name: 'Jadeer United Workshop — Khobar',
    type: 'workshop',
    country: 'Saudi Arabia',
    city: 'Khobar Workshop',
    address: 'Eastern Region Fleet Engineering & Maintenance Center, Khobar',
    hours: 'Sun–Thu · 8:00 AM – 6:00 PM · 24/7 Mobile Crew',
    phone: '+966 57 000 6378',
    x: 554,
    y: 274,
  },
  {
    id: 'four-lines-ws',
    name: 'Four Lines Workshop — Khobar',
    type: 'workshop',
    country: 'Saudi Arabia',
    city: 'Four Lines',
    address: 'Authorized Partner Fleet Workshop, Eastern Region — Khobar',
    hours: 'Sun–Sat · 8:00 AM – 6:00 PM',
    phone: '+966 54 307 4915',
    x: 540,
    y: 244,
  },
  {
    id: 'jubail-workshop',
    name: 'Jubail Industrial Workshop',
    type: 'workshop',
    country: 'Saudi Arabia',
    city: 'Jubail',
    address: 'Jubail Industrial City — Support Zone 2',
    hours: '24/7 Mobile Crew · Workshop 7:30 AM – 6:00 PM',
    phone: '+966 54 307 4915',
    x: 542,
    y: 214,
  },
  {
    id: 'ras-al-khair-ws',
    name: 'Ras al Khair Fleet Support',
    type: 'workshop',
    country: 'Saudi Arabia',
    city: 'Ras al Khair',
    address: 'Mining & Maritime Industrial Corridor',
    hours: '24/7 Mobile Crew · Sun–Sat 8:00 AM – 5:30 PM',
    phone: '+966 54 307 4915',
    x: 530,
    y: 190,
  },
  {
    id: 'tabuk-ws',
    name: 'Tabuk Quick Service Center',
    type: 'workshop',
    country: 'Saudi Arabia',
    city: 'Tabuk',
    address: 'King Abdulaziz Road, Tabuk',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
    phone: '+966 54 307 4915',
    x: 248,
    y: 150,
  },
  {
    id: 'yanbu-ws',
    name: 'Yanbu Petrochemical Workshop',
    type: 'workshop',
    country: 'Saudi Arabia',
    city: 'Yanbu',
    address: 'Yanbu Industrial City — Gate 4',
    hours: '24/7 Mobile Crew · Workshop 8:00 AM – 6:00 PM',
    phone: '+966 54 307 4915',
    x: 230,
    y: 326,
  },
];

export function LocationsMap() {
  const [filterType, setFilterType] = useState<'all' | 'branch' | 'workshop'>('all');
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<string>('khobar-hq');
  const [zoom, setZoom] = useState(1);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return GCC_LOCATIONS.filter((loc) => {
      if (filterType !== 'all' && loc.type !== filterType) return false;
      if (!q) return true;
      return (
        loc.name.toLowerCase().includes(q) ||
        loc.city.toLowerCase().includes(q) ||
        loc.country.toLowerCase().includes(q) ||
        loc.address.toLowerCase().includes(q)
      );
    });
  }, [filterType, search]);

  const selected =
    filtered.find((l) => l.id === selectedId) ||
    GCC_LOCATIONS.find((l) => l.id === selectedId) ||
    filtered[0] ||
    GCC_LOCATIONS[0];

  return (
    <div className="space-y-6">
      {/* Header + Filter Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
        <div>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">
            Our Locations
          </h2>
          <p className="mt-1 text-sm text-[#B4B0A8]">
            Find a regional branch or B2B fleet workshop near your operations.
          </p>

          <div className="mt-5 flex items-center gap-1 p-1 bg-[#141418] border border-white/[0.08] rounded-lg w-fit">
            {(
              [
                { id: 'all', label: 'All' },
                { id: 'branch', label: 'Branches' },
                { id: 'workshop', label: 'Workshops' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterType(tab.id)}
                className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  filterType === tab.id
                    ? 'bg-[#C8A45D] text-[#0B0B0D]'
                    : 'text-[#B5B5BE] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="h-4 w-4 text-[#949088] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or city..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#141418] border border-white/10 rounded-lg text-white placeholder:text-[#8F8B84] focus:outline-none focus:border-[#C8A45D]"
          />
        </div>
      </div>

      {/* Split Map & Locations Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Interactive GCC Vector Map */}
        <div className="lg:col-span-8 bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden flex flex-col">
          <div className="relative flex-1 min-h-[420px] bg-[#191B20] overflow-hidden select-none">
            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-20 flex flex-col bg-[#111114]/90 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(1.8, Number((z + 0.25).toFixed(2))))}
                className="h-9 w-9 flex items-center justify-center text-[#E5E5E7] hover:bg-white/10 hover:text-[#C8A45D] transition-colors"
                aria-label="Zoom in map"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(1, Number((z - 0.25).toFixed(2))))}
                className="h-9 w-9 flex items-center justify-center text-[#E5E5E7] hover:bg-white/10 hover:text-[#C8A45D] border-t border-white/10 transition-colors"
                aria-label="Zoom out map"
              >
                <Minus className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setZoom(1)}
                className="h-9 w-9 flex items-center justify-center text-[#B4B0A8] hover:bg-white/10 hover:text-white border-t border-white/10 transition-colors"
                aria-label="Reset map zoom"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Interactive SVG Arabian Peninsula Map */}
            <motion.div
              className="w-full h-full flex items-center justify-center"
              animate={{
                scale: zoom,
                x: zoom > 1 && selected ? (500 - selected.x) * (zoom - 1) * 0.45 : 0,
                y: zoom > 1 && selected ? (310 - selected.y) * (zoom - 1) * 0.45 : 0,
              }}
              transition={{ duration: 0.45, ease: EASE_LUXURY }}
            >
              <svg
                viewBox="0 0 1000 620"
                className="w-full h-full object-cover"
                role="img"
                aria-label="Interactive map of Jadeer United branches and workshops across Bahrain, Saudi Arabia, and Oman"
              >
                {/* Sea backdrop */}
                <rect x="0" y="0" width="1000" height="620" fill="#181C22" />

                {/* Subtle lat/lng architectural grid */}
                <g stroke="rgba(255,255,255,0.035)" strokeWidth="1">
                  {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((gx) => (
                    <line key={`vx-${gx}`} x1={gx} y1="0" x2={gx} y2="620" />
                  ))}
                  {[100, 200, 300, 400, 500].map((gy) => (
                    <line key={`hy-${gy}`} x1="0" y1={gy} x2="1000" y2={gy} />
                  ))}
                </g>

                {/* Arabian Peninsula Landmass silhouette */}
                <path
                  d="M150,90 L330,72 L470,118 L518,150 L548,204 L575,246 L615,272 L670,296 L732,262 L790,308 L858,364 L820,440 L710,510 L565,556 L360,575 L312,516 L260,418 L212,306 L174,180 Z"
                  fill="#23252C"
                  stroke="rgba(200,164,93,0.22)"
                  strokeWidth="1.5"
                />

                {/* Bahrain island cluster highlight */}
                <ellipse
                  cx="598"
                  cy="248"
                  rx="11"
                  ry="16"
                  fill="#2D303A"
                  stroke="rgba(200,164,93,0.5)"
                  strokeWidth="1.5"
                />

                {/* Major GCC regional highway corridors connecting hubs */}
                <g stroke="rgba(200,164,93,0.2)" strokeWidth="1.25" strokeDasharray="4 4" fill="none">
                  <path d="M598,248 L565,256 L472,318 L266,410" />
                  <path d="M565,256 L542,214 L530,190 L512,158" />
                  <path d="M565,256 L816,356" />
                  <path d="M266,410 L230,326 L196,174 L248,150 L298,108" />
                  <path d="M266,410 L318,495" />
                </g>

                {/* Regional Water & Country Labels */}
                <text x="645" y="195" fill="rgba(255,255,255,0.22)" fontSize="13" fontFamily="Manrope, sans-serif" letterSpacing="2">
                  ARABIAN GULF
                </text>
                <text x="112" y="370" fill="rgba(255,255,255,0.22)" fontSize="13" fontFamily="Manrope, sans-serif" letterSpacing="2" transform="rotate(64 112 370)">
                  RED SEA
                </text>
                <text x="390" y="368" fill="rgba(255,255,255,0.16)" fontSize="15" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="3">
                  SAUDI ARABIA
                </text>
                <text x="720" y="425" fill="rgba(255,255,255,0.16)" fontSize="14" fontFamily="Outfit, sans-serif" fontWeight="600" letterSpacing="3">
                  OMAN
                </text>
                <text x="618" y="246" fill="rgba(200,164,93,0.75)" fontSize="11" fontFamily="Outfit, sans-serif" fontWeight="600">
                  BAHRAIN
                </text>

                {/* Interactive Pins */}
                {filtered.map((loc) => {
                  const isSelected = selected?.id === loc.id;
                  const isBranch = loc.type === 'branch';
                  const pinFill = isBranch ? '#C8A45D' : '#60A5FA';

                  return (
                    <g
                      key={loc.id}
                      onClick={() => setSelectedId(loc.id)}
                      className="cursor-pointer"
                    >
                      {isSelected && (
                        <circle
                          cx={loc.x}
                          cy={loc.y}
                          r="20"
                          fill={isBranch ? 'rgba(200,164,93,0.18)' : 'rgba(96,165,250,0.18)'}
                          stroke={pinFill}
                          strokeWidth="1.5"
                        />
                      )}
                      <circle
                        cx={loc.x}
                        cy={loc.y}
                        r={isSelected ? 8.5 : 6.5}
                        fill={pinFill}
                        stroke="#0B0B0D"
                        strokeWidth="2.5"
                      />
                      <text
                        x={loc.x + 12}
                        y={loc.y + 4}
                        fill={isSelected ? '#FFFFFF' : 'rgba(245,245,244,0.72)'}
                        fontSize={isSelected ? '12.5' : '11'}
                        fontWeight={isSelected ? '700' : '500'}
                        fontFamily="Manrope, sans-serif"
                      >
                        {loc.city}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </motion.div>

            {/* Selected Pin Overlay Summary Card */}
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.22, ease: EASE_LUXURY }}
                  className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm z-20 bg-[#111114]/95 backdrop-blur-md border border-[#C8A45D]/35 rounded-lg p-4 shadow-xl"
                >
                  <div className="flex items-center justify-between gap-3 text-[11px] font-medium text-[#C8A45D]">
                    <span>{selected.type === 'branch' ? 'REGIONAL BRANCH' : 'SERVICE WORKSHOP'}</span>
                    <span className="text-[#B4B0A8]">{selected.country}</span>
                  </div>
                  <div className="mt-1 font-display text-sm font-semibold text-white">
                    {selected.name}
                  </div>
                  <div className="mt-1 text-xs text-[#B4B0A8]">{selected.address}</div>
                  <div className="mt-2.5 pt-2.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-[#C8CBC4] flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#C8A45D]" />
                      {selected.hours}
                    </span>
                    <a
                      href={`tel:${selected.phone.replace(/\s+/g, '')}`}
                      className="font-mono tabular-nums text-[#C8A45D] hover:text-[#EBD4A0] flex items-center gap-1"
                    >
                      <Phone className="h-3 w-3" />
                      {selected.phone}
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Map Legend Bar */}
          <div className="px-5 py-3 bg-[#111114] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs text-[#B4B0A8]">
            <div className="flex items-center gap-5">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#C8A45D]" />
                <span>Branch Offices</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#60A5FA]" />
                <span>Workshops &amp; Field Depots</span>
              </span>
            </div>
            <span className="font-mono tabular-nums">
              {filtered.length} location{filtered.length === 1 ? '' : 's'} shown
            </span>
          </div>
        </div>

        {/* Scrollable Right Directory Cards (matching video layout) */}
        <div className="lg:col-span-4 bg-[#141418] border border-white/[0.08] rounded-xl p-3 max-h-[500px] overflow-y-auto space-y-2.5">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-sm text-[#B4B0A8]">
              No branches or workshops match &ldquo;{search}&rdquo;.
            </div>
          ) : (
            filtered.map((loc) => {
              const isSelected = selected?.id === loc.id;
              return (
                <motion.button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedId(loc.id)}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.15 }}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-[#1C1B18] border-[#C8A45D]/60'
                      : 'bg-[#101013] border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 text-[11px] font-medium">
                    <span className={loc.type === 'branch' ? 'text-[#C8A45D]' : 'text-[#60A5FA]'}>
                      {loc.type === 'branch' ? 'BRANCH' : 'WORKSHOP'}
                    </span>
                    <span className="text-[#949088]">{loc.country}</span>
                  </div>
                  <div className="mt-1.5 font-display text-sm font-semibold text-white">
                    {loc.name}
                  </div>
                  <div className="mt-1 text-xs text-[#B4B0A8] flex items-start gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#8F8B84] shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="mt-2 text-[11px] text-[#949088]">{loc.hours}</div>
                </motion.button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
