import { useState, type FormEvent } from 'react';
import { Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { api } from '../lib/api';
import { BRAND } from '../data/brand';

export function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Bahrain');
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
    <div className="bg-[#F8F8F6] min-h-[75vh]">
      <section className="bg-white border-b border-[#E3E5E0]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
          <p className="text-sm font-medium text-[#7B6C53]">Jadeer United Motors &amp; Leasing</p>
          <h1 className="mt-2 font-display text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1F1A]">
            Contact Our GCC Offices
          </h1>
          <p className="mt-3 text-sm text-[#4D544C] max-w-2xl leading-relaxed">
            Connect directly with our headquarters in Amwaj, Bahrain or our regional branch desks in
            Khobar, Saudi Arabia and Muscat, Oman.
          </p>
        </div>
      </section>

      {/* Regional Offices Strip */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BRAND.offices.map((office) => (
            <div
              key={office.country}
              className="bg-white border border-[#E3E5E0] rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-medium text-[#7B6C53]">{office.role}</div>
                <h2 className="mt-1 font-display text-xl font-bold text-[#1B1F1A]">
                  {office.country} — {office.city}
                </h2>
                <p className="mt-2 text-sm text-[#4D544C] leading-relaxed">{office.focus}</p>
              </div>
              <a
                href={office.telHref}
                className="mt-6 pt-4 border-t border-[#ECEEE9] inline-flex items-center gap-2 font-mono tabular-nums text-sm font-semibold text-[#3A4338] hover:text-[#1B1F1A]"
              >
                <Phone className="h-4 w-4" />
                <span>{office.phone}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form + Department Directory & Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-white border border-[#E3E5E0] rounded-lg p-7 lg:p-8 space-y-5"
          >
            <h2 className="font-display text-xl font-bold text-[#1B1F1A]">Send a Direct Message</h2>

            {error && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-md text-sm text-red-800">
                {error}
              </div>
            )}

            {successMsg && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-sm text-emerald-900 flex items-start gap-2.5">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Phone *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm font-mono border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Region / Office
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                >
                  <option value="Bahrain">Bahrain (Amwaj HQ)</option>
                  <option value="Saudi Arabia">Saudi Arabia (Khobar)</option>
                  <option value="Oman">Oman (Muscat)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-[#4D544C] mb-1.5">
                  Department Routing
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
                >
                  <option value="Sales Team">Sales Team (sales@jadeergulf.com)</option>
                  <option value="Customer Support">Customer Support (Maisara@jadeergulf.com)</option>
                  <option value="General Inquiries">General Inquiries (info@jadeergulf.com)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Subject *</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="How can our team assist you?"
                className="w-full px-3.5 py-2.5 text-sm border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#4D544C] mb-1.5">Message *</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm border border-[#D8DBD4] rounded-md focus:outline-none focus:border-[#3A4338]"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 text-sm font-medium text-white bg-[#3A4338] hover:bg-[#282F27] disabled:opacity-60 rounded-md transition-colors"
            >
              {submitting ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E3E5E0] rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#1B1F1A] font-display font-semibold">
                <Mail className="h-4 w-4 text-[#7B6C53]" />
                <h3>Department Email Desks</h3>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-[#5E6B5B]">Customer Support</dt>
                  <dd>
                    <a
                      href={`mailto:${BRAND.emails.customerSupport}`}
                      className="font-medium text-[#1B1F1A] hover:text-[#3A4338]"
                    >
                      {BRAND.emails.customerSupport}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#5E6B5B]">Sales Team</dt>
                  <dd>
                    <a
                      href={`mailto:${BRAND.emails.sales}`}
                      className="font-medium text-[#1B1F1A] hover:text-[#3A4338]"
                    >
                      {BRAND.emails.sales}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#5E6B5B]">General Inquiries</dt>
                  <dd>
                    <a
                      href={`mailto:${BRAND.emails.general}`}
                      className="font-medium text-[#1B1F1A] hover:text-[#3A4338]"
                    >
                      {BRAND.emails.general}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-white border border-[#E3E5E0] rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#1B1F1A] font-display font-semibold">
                <Clock className="h-4 w-4 text-[#7B6C53]" />
                <h3>Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                {BRAND.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex items-center justify-between py-1.5 border-b border-[#ECEEE9] last:border-b-0"
                  >
                    <span className="text-[#4D544C]">{h.days}</span>
                    <span className="font-mono tabular-nums font-medium text-[#1B1F1A]">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5E6B5B]">
                24/7 Mobile Service Crew remains active around the clock for active corporate lease
                clients.
              </p>
            </div>

            <div className="bg-white border border-[#E3E5E0] rounded-lg p-6 space-y-2">
              <h3 className="font-display text-sm font-semibold text-[#1B1F1A]">
                Operational &amp; Service Coverage
              </h3>
              <p className="text-xs text-[#4D544C] leading-6">
                {BRAND.coverageCities.join(' · ')}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
