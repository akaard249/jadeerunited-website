import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Phone,
  MessageSquare,
  Mail,
  User,
  Clock,
  MapPin,
  Wrench,
  Briefcase,
  Settings,
  Send,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { api } from '../lib/api';
import { BRAND } from '../data/brand';
import {
  AmbientGoldBackdrop,
  AnimatedCounter,
  EASE_LUXURY,
  GoldGlowCard,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '../components/MotionPrimitives';
import { LocationsMap } from '../components/LocationsMap';

const DEPARTMENTS = [
  {
    key: 'sales',
    department: 'Sales',
    icon: Briefcase,
    phone: '+966 56 887 7769',
    whatsapp: '+973 6666 6064',
    email: BRAND.emails.sales,
    lead: 'Hatem Sabry · GCC Sales Desk',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
  },
  {
    key: 'operations',
    department: 'Operations',
    icon: Settings,
    phone: '+966 54 316 8080',
    whatsapp: '+968 7745 9000',
    email: BRAND.emails.general,
    lead: 'Tamer Ismaeil · Fleet Operations',
    hours: 'Sun–Thu · 8:30 AM – 5:30 PM',
  },
  {
    key: 'workshop',
    department: 'Workshop — HQ',
    icon: Wrench,
    phone: '+966 54 307 4915',
    whatsapp: '+973 6666 6064',
    email: BRAND.emails.customerSupport,
    lead: 'Maisara · Support & 24/7 Mobile Crew',
    hours: 'Sun–Thu 8:30–5:30 · Sat 9:00–1:00',
  },
];

const TOPICS = [
  'Operational Leasing & Corporate Fleet',
  'Showroom & Hybrid Fleet Inquiry',
  'Certified Used Car Purchase',
  'Limousine & Dedicated Driver Services',
  'Workshop, Maintenance & 24/7 Support',
  'General Inquiries',
];

export function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Saudi Arabia');
  const [department, setDepartment] = useState('Sales Team');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    if (!subject) {
      setError('Please choose a topic for your message.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await api.submitContact({
        full_name: fullName,
        company_name: companyName,
        email,
        phone,
        country,
        department,
        subject,
        message,
      });
      setSuccessMsg(res.message);
      setFullName('');
      setCompanyName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0B0B0D] text-[#E4E0D8] overflow-x-hidden">
      {/* 1. Hero + 3 Department Cards (matching video opening) */}
      <section className="relative border-b border-white/[0.08] py-16 lg:py-24">
        <AmbientGoldBackdrop />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE_LUXURY }}
              className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]"
            >
              GET IN TOUCH
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE_LUXURY }}
              className="mt-4 font-display font-bold tracking-tight text-white leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.85rem)' }}
            >
              Every question{' '}
              <span className="block text-[#C8A45D]">deserves an answer.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: EASE_LUXURY }}
              className="mt-5 text-sm sm:text-base text-[#B4B0A8] leading-relaxed"
            >
              Reach the right team directly across Bahrain, Saudi Arabia, and Oman. Available Sunday
              through Thursday, 8:30 AM – 5:30 PM &amp; Saturday 9:00 AM – 1:00 PM.
            </motion.p>
          </div>

          {/* 3 Department Cards */}
          <StaggerGroup className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPARTMENTS.map((dept) => {
              const Icon = dept.icon;
              return (
                <StaggerItem key={dept.key}>
                  <GoldGlowCard className="p-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="h-11 w-11 rounded-lg bg-[#1D1B15] border border-[#C8A45D]/25 flex items-center justify-center text-[#C8A45D]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-5 text-[11px] font-semibold tracking-[0.16em] text-[#949088]">
                        DEPARTMENT
                      </div>
                      <h2 className="mt-1 font-display text-xl font-bold text-white">
                        {dept.department}
                      </h2>

                      <ul className="mt-6 space-y-3.5 text-sm text-[#D4D4DC]">
                        <li className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-[#C8A45D] shrink-0" />
                          <a
                            href={`tel:${dept.phone.replace(/\s+/g, '')}`}
                            className="font-mono tabular-nums hover:text-[#C8A45D] transition-colors"
                          >
                            {dept.phone}
                          </a>
                        </li>
                        <li className="flex items-center gap-3">
                          <MessageSquare className="h-4 w-4 text-[#C8A45D] shrink-0" />
                          <a
                            href={`tel:${dept.whatsapp.replace(/\s+/g, '')}`}
                            className="font-mono tabular-nums hover:text-[#C8A45D] transition-colors"
                          >
                            {dept.whatsapp}
                          </a>
                        </li>
                        <li className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-[#C8A45D] shrink-0" />
                          <a
                            href={`mailto:${dept.email}`}
                            className="hover:text-[#C8A45D] transition-colors truncate"
                          >
                            {dept.email}
                          </a>
                        </li>
                        <li className="flex items-center gap-3">
                          <User className="h-4 w-4 text-[#C8A45D] shrink-0" />
                          <span className="text-[#B4B0A8]">{dept.lead}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-7 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs text-[#B4B0A8]">
                      <Clock className="h-3.5 w-3.5 text-[#C8A45D] shrink-0" />
                      <span>{dept.hours}</span>
                    </div>
                  </GoldGlowCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 2. Interactive Our Locations Section (Map + Scrollable Branch/Workshop Directory) */}
      <section className="py-16 lg:py-20 bg-[#0E0E11] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal>
            <LocationsMap />
          </Reveal>
        </div>
      </section>

      {/* 3. Direct Contact & Send Us a Message */}
      <section className="py-16 lg:py-24 bg-[#0B0B0D] border-b border-white/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Direct Contact Info */}
          <Reveal className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">DIRECT CONTACT</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight text-balance">
                We respond within a heartbeat.
              </h2>
              <p className="mt-4 text-sm text-[#B4B0A8] leading-relaxed">
                Fill in the form and the right regional team member will get back to you with a
                personalized response — no bots, no generic replies.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  label: 'HEADQUARTERS & HUBS',
                  value: 'Amwaj, Bahrain · King Faisal Road, Khobar · Muscat, Oman',
                },
                {
                  icon: Phone,
                  label: 'PHONE (BHR / KSA / OMN)',
                  value: '+973 6666 6064 · +966 56 887 7769 · +968 7745 9000',
                  mono: true,
                },
                {
                  icon: Mail,
                  label: 'DIRECT DESKS',
                  value: 'sales@jadeergulf.com · Maisara@jadeergulf.com · info@jadeergulf.com',
                },
                {
                  icon: Clock,
                  label: 'BUSINESS HOURS',
                  value: 'Sun–Thu · 8:30 AM – 5:30 PM | Fri: Closed | Sat · 9:00 AM – 1:00 PM',
                },
              ].map((row) => {
                const Icon = row.icon;
                return (
                  <div
                    key={row.label}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#141418] border border-white/[0.07]"
                  >
                    <div className="h-10 w-10 rounded-lg bg-[#1D1B15] border border-[#C8A45D]/25 flex items-center justify-center text-[#C8A45D] shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold tracking-wider text-[#949088]">
                        {row.label}
                      </div>
                      <div
                        className={`mt-1 text-sm text-white leading-snug ${
                          row.mono ? 'font-mono tabular-nums' : ''
                        }`}
                      >
                        {row.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right Animated Form Card with Gold Shimmer Top Edge */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
              <div className="h-[2px] w-full gold-top-accent" />
              <form onSubmit={handleSubmit} className="p-7 lg:p-9 space-y-5">
                <h3 className="font-display text-xl font-bold text-white">Send us a message</h3>

                {error && (
                  <div className="p-3.5 bg-red-950/50 border border-red-500/40 rounded-lg text-sm text-red-200">
                    {error}
                  </div>
                )}

                {successMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-lg text-sm text-emerald-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{successMsg}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                      COMPANY
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Your Company LLC"
                      className="w-full px-4 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                      PHONE *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full px-4 py-2.5 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                      GCC OFFICE
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                    >
                      <option value="Bahrain">Bahrain — Amwaj HQ</option>
                      <option value="Saudi Arabia">Saudi Arabia — Khobar</option>
                      <option value="Oman">Oman — Muscat</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                      DEPARTMENT ROUTING
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                    >
                      <option value="Sales Team">Sales Team (sales@jadeergulf.com)</option>
                      <option value="Customer Support">Customer Support (Maisara@jadeergulf.com)</option>
                      <option value="General Inquiries">General Inquiries (info@jadeergulf.com)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    SUBJECT *
                  </label>
                  <select
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  >
                    <option value="">Choose a topic...</option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#B4B0A8] mb-1.5">
                    MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your fleet needs, timeline, or vehicle inquiry..."
                    className="w-full px-4 py-3 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white placeholder:text-[#7F7B74] focus:outline-none focus:border-[#C8A45D] transition-colors"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg transition-colors"
                >
                  <Send className="h-4 w-4" />
                  <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                </motion.button>

                <p className="text-center text-[11px] text-[#8F8B84]">
                  Your details stay confidential and are used solely to respond to your inquiry.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Ready to Drive Forward? CTA & Animated Metrics Band (matching video finale) */}
      <section className="relative py-20 lg:py-28 bg-[#0E0E11]">
        <AmbientGoldBackdrop />

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A45D]">
              GCC&apos;S FLEET PARTNER · BAHRAIN · SAUDI ARABIA · OMAN
            </p>
            <h2
              className="mt-4 font-display font-extrabold tracking-tight leading-[1.05]"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)' }}
            >
              <span className="block text-white">Ready to</span>
              <span className="block text-gold-outline mt-1">Drive Forward?</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-[#B4B0A8] max-w-xl mx-auto leading-relaxed">
              Fleet leasing. Direct vehicle sales. Expert consulting. Whatever your mobility need —
              we&apos;ve got a sustainable solution built for GCC business.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/showroom"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Browse Our Fleet</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/quotation"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#141418] hover:bg-[#1C1C22] border border-white/15 hover:border-[#C8A45D]/50 rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Request a Quotation</span>
                </Link>
              </motion.div>
            </div>
          </Reveal>

          {/* Animated Count-up Stats Strip */}
          <StaggerGroup className="mt-16 pt-12 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { target: 3000, suffix: '+', label: 'VEHICLES' },
              { target: 100, suffix: '+', label: 'ENTERPRISE CLIENTS' },
              { target: 25, suffix: '+', label: 'YEARS EXPERIENCE' },
              { target: 700, suffix: '+', label: 'SERVICE FACILITIES' },
              { target: 14, suffix: '', label: 'GCC CITIES COVERED' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-2xl lg:text-3xl font-bold text-[#C8A45D]">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="mt-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#949088]">
                  {stat.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
}
