import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Sparkles,
  Image as ImageIcon,
  MapPin,
  PhoneCall,
  Upload,
  Check,
  Plus,
  Pencil,
  Trash2,
  Building2,
  Wrench,
  X,
  Save,
} from 'lucide-react';
import { api } from '../../lib/api';
import type {
  AboutGalleryItem,
  BranchRecord,
  SiteContent,
  WorkshopRecord,
} from '../../types';

type CmsSection = 'hero' | 'about' | 'locations' | 'contact';

const MAP_PRESETS: Array<{ label: string; country: string; city: string; x: number; y: number }> = [
  { label: 'Bahrain — Amwaj', country: 'Bahrain', city: 'Amwaj', x: 598, y: 248 },
  { label: 'KSA — Al Khobar', country: 'Saudi Arabia', city: 'Khobar', x: 565, y: 256 },
  { label: 'KSA — Jubail', country: 'Saudi Arabia', city: 'Jubail', x: 540, y: 212 },
  { label: 'KSA — Riyadh', country: 'Saudi Arabia', city: 'Riyadh', x: 472, y: 318 },
  { label: 'KSA — Jeddah', country: 'Saudi Arabia', city: 'Jeddah', x: 266, y: 410 },
  { label: 'KSA — Yanbu', country: 'Saudi Arabia', city: 'Yanbu', x: 225, y: 326 },
  { label: 'KSA — NEOM / Tabuk', country: 'Saudi Arabia', city: 'Neom', x: 196, y: 178 },
  { label: 'Oman — Muscat', country: 'Oman', city: 'Muscat', x: 816, y: 356 },
];

function ImageFieldControl({
  label,
  value,
  availableAssets,
  onChange,
  onUpload,
  uploading,
}: {
  label: string;
  value: string;
  availableAssets: string[];
  onChange: (url: string) => void;
  onUpload: (file: File) => Promise<void>;
  uploading: boolean;
}) {
  const [showPicker, setShowPicker] = useState(false);

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await onUpload(file);
    e.target.value = '';
  };

  return (
    <div className="space-y-3 bg-[#101014] border border-white/[0.08] rounded-xl p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D]">
          {label}
        </label>
        <div className="flex items-center gap-2">
          <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg transition-colors">
            <Upload className="h-3.5 w-3.5" />
            <span>{uploading ? 'Uploading...' : 'Upload Photo'}</span>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFile}
              disabled={uploading}
              className="hidden"
            />
          </label>
          <button
            type="button"
            onClick={() => setShowPicker((prev) => !prev)}
            className="px-3 py-1.5 text-xs font-medium text-[#E4E0D8] border border-white/15 hover:border-[#C8A45D]/50 rounded-lg transition-colors"
          >
            {showPicker ? 'Close Library' : 'Studio Library'}
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <div className="w-full sm:w-48 aspect-[16/10] rounded-lg overflow-hidden bg-[#18181D] border border-white/10 shrink-0">
          {value ? (
            <img src={value} alt={label} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-[#8F8B84]">
              No image set
            </div>
          )}
        </div>
        <div className="flex-1 w-full space-y-2">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/assets/jadeer/hero-fleet.jpg or /uploads/..."
            className="w-full px-3 py-2 text-xs font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-[#E4E0D8] focus:outline-none focus:border-[#C8A45D]"
          />
          <p className="text-[11px] text-[#949088]">
            Upload JPG, PNG, or WEBP (max 5 MB) or choose from the Jadeer studio asset library.
          </p>
        </div>
      </div>

      {showPicker && availableAssets.length > 0 && (
        <div className="pt-3 border-t border-white/[0.08]">
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2 max-h-48 overflow-y-auto pr-1">
            {availableAssets.map((assetUrl) => {
              const selected = value === assetUrl;
              return (
                <button
                  key={assetUrl}
                  type="button"
                  onClick={() => {
                    onChange(assetUrl);
                    setShowPicker(false);
                  }}
                  className={`relative aspect-[16/10] rounded-md overflow-hidden border transition-all ${
                    selected
                      ? 'border-[#C8A45D] ring-2 ring-[#C8A45D]/40'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img src={assetUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
                  {selected && (
                    <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-[#C8A45D] text-[#0B0B0D] flex items-center justify-center">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export function WebsiteCmsPanel() {
  const [section, setSection] = useState<CmsSection>('hero');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const [content, setContent] = useState<Partial<SiteContent>>({});
  const [gallery, setGallery] = useState<AboutGalleryItem[]>([]);
  const [branches, setBranches] = useState<BranchRecord[]>([]);
  const [workshops, setWorkshops] = useState<WorkshopRecord[]>([]);
  const [availableAssets, setAvailableAssets] = useState<string[]>([]);

  // Gallery item editor state
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [editingGalleryItem, setEditingGalleryItem] = useState<AboutGalleryItem | null>(null);
  const [galleryForm, setGalleryForm] = useState({
    title: '',
    title_ar: '',
    caption: '',
    caption_ar: '',
    image_url: '',
    sort_order: 0,
  });
  const [galleryFile, setGalleryFile] = useState<File | null>(null);
  const [galleryPreview, setGalleryPreview] = useState<string>('');
  const [confirmDeleteGalleryId, setConfirmDeleteGalleryId] = useState<number | null>(null);

  // Branch editor state
  const [branchModalOpen, setBranchModalOpen] = useState(false);
  const [editingBranch, setEditingBranch] = useState<BranchRecord | null>(null);
  const [branchForm, setBranchForm] = useState<Omit<BranchRecord, 'id'>>({
    name: '',
    name_ar: '',
    country: 'Bahrain',
    city: '',
    phone: '',
    is_hq: false,
    address: '',
    hours: 'Sun–Thu: 8:30 AM – 5:30 PM | Sat: 9:00 AM – 1:00 PM',
    map_x: 500,
    map_y: 215,
    focus: '',
  });
  const [confirmDeleteBranchId, setConfirmDeleteBranchId] = useState<number | null>(null);

  // Workshop editor state
  const [workshopModalOpen, setWorkshopModalOpen] = useState(false);
  const [editingWorkshop, setEditingWorkshop] = useState<WorkshopRecord | null>(null);
  const [workshopForm, setWorkshopForm] = useState<Omit<WorkshopRecord, 'id'>>({
    name: '',
    name_ar: '',
    branch_name: '',
    city: '',
    country: 'Saudi Arabia',
    phone: '',
    hours: 'Sun–Thu: 8:00 AM – 6:00 PM',
    address: '',
    map_x: 500,
    map_y: 215,
  });
  const [confirmDeleteWorkshopId, setConfirmDeleteWorkshopId] = useState<number | null>(null);

  const showNotice = (type: 'success' | 'error', message: string) => {
    setFeedback({ type, message });
    window.setTimeout(() => {
      setFeedback((curr) => (curr?.message === message ? null : curr));
    }, 4500);
  };

  const loadCms = async () => {
    setLoading(true);
    try {
      const res = await api.getAdminSiteContent();
      setContent(res.content || {});
      setGallery(res.gallery || []);
      setBranches(res.branches || []);
      setWorkshops(res.workshops || []);
      setAvailableAssets(res.availableAssets || []);
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Failed to load website settings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCms();
  }, []);

  const setField = (key: keyof SiteContent, val: string) => {
    setContent((prev) => ({ ...prev, [key]: val }));
  };

  const handleUploadForField = async (key: keyof SiteContent, file: File) => {
    setUploadingKey(key);
    try {
      const res = await api.uploadAdminImage(file);
      setContent((prev) => ({ ...prev, [key]: res.image_url }));
      showNotice('success', 'Image uploaded. Click Save Changes to publish it live.');
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Image upload failed.');
    } finally {
      setUploadingKey(null);
    }
  };

  const handleSaveSiteContent = async (keys: Array<keyof SiteContent>, label: string) => {
    setSaving(true);
    try {
      const patch: Partial<SiteContent> = {};
      keys.forEach((k) => {
        patch[k] = content[k] ?? '';
      });
      const res = await api.updateAdminSiteContent(patch);
      setContent((prev) => ({ ...prev, ...res.content }));
      showNotice('success', `${label} saved and published to the live website.`);
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Failed to save changes.');
    } finally {
      setSaving(false);
    }
  };

  // Gallery CRUD handlers
  const openAddGallery = () => {
    setEditingGalleryItem(null);
    setGalleryForm({
      title: '',
      title_ar: '',
      caption: '',
      caption_ar: '',
      image_url: availableAssets[0] || '/assets/jadeer/hero-fleet.jpg',
      sort_order: gallery.length + 1,
    });
    setGalleryFile(null);
    setGalleryPreview('');
    setGalleryModalOpen(true);
  };

  const openEditGallery = (item: AboutGalleryItem) => {
    setEditingGalleryItem(item);
    setGalleryForm({
      title: item.title,
      title_ar: item.title_ar,
      caption: item.caption,
      caption_ar: item.caption_ar,
      image_url: item.image_url,
      sort_order: item.sort_order,
    });
    setGalleryFile(null);
    setGalleryPreview('');
    setGalleryModalOpen(true);
  };

  const handleSaveGallery = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append('title', galleryForm.title);
      fd.append('title_ar', galleryForm.title_ar);
      fd.append('caption', galleryForm.caption);
      fd.append('caption_ar', galleryForm.caption_ar);
      fd.append('sort_order', String(galleryForm.sort_order));
      fd.append('image_url', galleryForm.image_url);
      if (galleryFile) {
        fd.append('image', galleryFile);
      }

      if (editingGalleryItem) {
        const res = await api.updateAdminGalleryItem(editingGalleryItem.id, fd);
        setGallery((prev) =>
          prev
            .map((g) => (g.id === editingGalleryItem.id ? res.item : g))
            .sort((a, b) => a.sort_order - b.sort_order || a.id - b.id)
        );
        showNotice('success', 'Gallery photo updated.');
      } else {
        const res = await api.createAdminGalleryItem(fd);
        setGallery((prev) =>
          [...prev, res.item].sort((a, b) => a.sort_order - b.sort_order || a.id - b.id)
        );
        showNotice('success', 'New photo added to the About Us gallery.');
      }
      setGalleryModalOpen(false);
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Failed to save gallery photo.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteGallery = async (id: number) => {
    try {
      await api.deleteAdminGalleryItem(id);
      setGallery((prev) => prev.filter((g) => g.id !== id));
      setConfirmDeleteGalleryId(null);
      showNotice('success', 'Gallery photo removed.');
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Failed to delete gallery photo.');
    }
  };

  // Branch CRUD handlers
  const openAddBranch = () => {
    setEditingBranch(null);
    setBranchForm({
      name: '',
      name_ar: '',
      country: 'Saudi Arabia',
      city: '',
      phone: '',
      is_hq: false,
      address: '',
      hours: 'Sun–Thu: 8:30 AM – 5:30 PM | Sat: 9:00 AM – 1:00 PM',
      map_x: 500,
      map_y: 215,
      focus: 'Corporate Operational Leasing & Fleet Desk',
    });
    setBranchModalOpen(true);
  };

  const openEditBranch = (b: BranchRecord) => {
    setEditingBranch(b);
    setBranchForm({
      name: b.name,
      name_ar: b.name_ar,
      country: b.country,
      city: b.city,
      phone: b.phone,
      is_hq: b.is_hq,
      address: b.address,
      hours: b.hours,
      map_x: b.map_x,
      map_y: b.map_y,
      focus: b.focus,
    });
    setBranchModalOpen(true);
  };

  const handleSaveBranch = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingBranch) {
        const res = await api.updateAdminBranch(editingBranch.id, branchForm);
        setBranches((prev) => prev.map((b) => (b.id === editingBranch.id ? res.branch : b)));
        showNotice('success', 'Branch office updated across Contact, Home & GCC Map.');
      } else {
        const res = await api.createAdminBranch(branchForm);
        setBranches((prev) => [...prev, res.branch]);
        showNotice('success', 'New GCC branch added.');
      }
      setBranchModalOpen(false);
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Failed to save branch.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteBranch = async (id: number) => {
    try {
      await api.deleteAdminBranch(id);
      setBranches((prev) => prev.filter((b) => b.id !== id));
      setConfirmDeleteBranchId(null);
      showNotice('success', 'Branch deleted.');
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Failed to delete branch.');
    }
  };

  // Workshop CRUD handlers
  const openAddWorkshop = () => {
    setEditingWorkshop(null);
    setWorkshopForm({
      name: '',
      name_ar: '',
      branch_name: branches[0]?.name || '',
      city: '',
      country: 'Saudi Arabia',
      phone: '',
      hours: 'Sun–Thu: 8:00 AM – 6:00 PM',
      address: '',
      map_x: 500,
      map_y: 215,
    });
    setWorkshopModalOpen(true);
  };

  const openEditWorkshop = (w: WorkshopRecord) => {
    setEditingWorkshop(w);
    setWorkshopForm({
      name: w.name,
      name_ar: w.name_ar,
      branch_name: w.branch_name,
      city: w.city,
      country: w.country,
      phone: w.phone,
      hours: w.hours,
      address: w.address,
      map_x: w.map_x,
      map_y: w.map_y,
    });
    setWorkshopModalOpen(true);
  };

  const handleSaveWorkshop = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingWorkshop) {
        const res = await api.updateAdminWorkshop(editingWorkshop.id, workshopForm);
        setWorkshops((prev) => prev.map((w) => (w.id === editingWorkshop.id ? res.workshop : w)));
        showNotice('success', 'Service workshop updated.');
      } else {
        const res = await api.createAdminWorkshop(workshopForm);
        setWorkshops((prev) => [...prev, res.workshop]);
        showNotice('success', 'Service workshop added.');
      }
      setWorkshopModalOpen(false);
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Failed to save workshop.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteWorkshop = async (id: number) => {
    try {
      await api.deleteAdminWorkshop(id);
      setWorkshops((prev) => prev.filter((w) => w.id !== id));
      setConfirmDeleteWorkshopId(null);
      showNotice('success', 'Workshop deleted.');
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Failed to delete workshop.');
    }
  };

  if (loading) {
    return (
      <div className="bg-[#141418] border border-white/[0.08] rounded-xl p-12 text-center text-sm text-[#B4B0A8]">
        Loading Website Management Studio...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Sub-navigation */}
      <div className="bg-[#141418] border border-white/[0.08] rounded-xl p-2 flex flex-wrap gap-1.5">
        {(
          [
            { id: 'hero', label: 'Main Page Hero', icon: Sparkles },
            { id: 'about', label: 'About Us & Gallery', icon: ImageIcon },
            { id: 'locations', label: 'Branches & Workshops', icon: MapPin },
            { id: 'contact', label: 'Contact Info & Desks', icon: PhoneCall },
          ] as const
        ).map((tab) => {
          const Icon = tab.icon;
          const active = section === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSection(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                active
                  ? 'bg-[#C8A45D] text-[#0B0B0D]'
                  : 'text-[#B4B0A8] hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div
          className={`px-4 py-3 rounded-xl border text-sm flex items-center justify-between gap-3 ${
            feedback.type === 'success'
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              : 'bg-red-950/50 border-red-500/40 text-red-200'
          }`}
        >
          <span>{feedback.message}</span>
          <button type="button" onClick={() => setFeedback(null)} className="opacity-70 hover:opacity-100">
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* 1. MAIN PAGE HERO */}
      {section === 'hero' && (
        <div className="space-y-6">
          {/* Live Preview */}
          <div className="bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
              <div>
                <h2 className="font-display text-base font-semibold text-white">
                  Live Homepage Hero Preview
                </h2>
                <p className="text-xs text-[#949088]">
                  Updates immediately on the homepage once saved.
                </p>
              </div>
              <button
                type="button"
                disabled={saving}
                onClick={() =>
                  handleSaveSiteContent(
                    [
                      'hero_image_url',
                      'hero_tagline_en',
                      'hero_tagline_ar',
                      'hero_headline_en',
                      'hero_headline_highlight_en',
                      'hero_headline_suffix_en',
                      'hero_headline_ar',
                      'hero_headline_highlight_ar',
                      'hero_headline_suffix_ar',
                      'hero_subtitle_en',
                      'hero_subtitle_ar',
                      'hero_quote_en',
                      'hero_card_eyebrow_en',
                      'hero_card_eyebrow_ar',
                      'hero_card_caption_en',
                      'hero_card_caption_ar',
                    ],
                    'Main Page Hero'
                  )
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{saving ? 'Saving...' : 'Save Hero Changes'}</span>
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#0B0B0D]/60">
              <div className="lg:col-span-6 space-y-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C8A45D]">
                  {content.hero_tagline_en || 'Bahrain · Saudi Arabia · Oman'}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {content.hero_headline_en}{' '}
                  <span className="text-[#C8A45D]">{content.hero_headline_highlight_en}</span>{' '}
                  {content.hero_headline_suffix_en}
                </h3>
                <p className="text-xs text-[#B4B0A8] leading-relaxed">
                  {content.hero_subtitle_en}
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] italic text-[#949088]">
                  &ldquo;{content.hero_quote_en}&rdquo;
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#141418]">
                  {content.hero_image_url && (
                    <img
                      src={content.hero_image_url}
                      alt="Hero preview"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#141418]/90 backdrop-blur border border-white/10 rounded-lg p-3">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-[#C8A45D]">
                      {content.hero_card_eyebrow_en}
                    </div>
                    <div className="text-xs text-white mt-0.5">{content.hero_card_caption_en}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image Control */}
          <ImageFieldControl
            label="Main Hero Visual"
            value={content.hero_image_url || ''}
            availableAssets={availableAssets}
            onChange={(url) => setField('hero_image_url', url)}
            onUpload={(file) => handleUploadForField('hero_image_url', file)}
            uploading={uploadingKey === 'hero_image_url'}
          />

          {/* Hero Text Fields */}
          <div className="bg-[#141418] border border-white/[0.08] rounded-xl p-6 space-y-5">
            <h3 className="font-display text-sm font-semibold text-white">Hero Copy (English & Arabic)</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Eyebrow Tagline (EN)
                </label>
                <input
                  type="text"
                  value={content.hero_tagline_en || ''}
                  onChange={(e) => setField('hero_tagline_en', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Eyebrow Tagline (AR)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={content.hero_tagline_ar || ''}
                  onChange={(e) => setField('hero_tagline_ar', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Headline Prefix (EN)
                </label>
                <input
                  type="text"
                  value={content.hero_headline_en || ''}
                  onChange={(e) => setField('hero_headline_en', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#C8A45D] mb-1.5">
                  Gold Highlight Phrase (EN)
                </label>
                <input
                  type="text"
                  value={content.hero_headline_highlight_en || ''}
                  onChange={(e) => setField('hero_headline_highlight_en', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-[#C8A45D]/40 rounded-lg text-[#EBD4A0] focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Headline Suffix (EN)
                </label>
                <input
                  type="text"
                  value={content.hero_headline_suffix_en || ''}
                  onChange={(e) => setField('hero_headline_suffix_en', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Headline Prefix (AR)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={content.hero_headline_ar || ''}
                  onChange={(e) => setField('hero_headline_ar', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#C8A45D] mb-1.5">
                  Gold Highlight (AR)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={content.hero_headline_highlight_ar || ''}
                  onChange={(e) => setField('hero_headline_highlight_ar', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-[#C8A45D]/40 rounded-lg text-[#EBD4A0] focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Headline Suffix (AR)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={content.hero_headline_suffix_ar || ''}
                  onChange={(e) => setField('hero_headline_suffix_ar', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Hero Subtitle (EN)
                </label>
                <textarea
                  rows={3}
                  value={content.hero_subtitle_en || ''}
                  onChange={(e) => setField('hero_subtitle_en', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Hero Subtitle (AR)
                </label>
                <textarea
                  rows={3}
                  dir="rtl"
                  value={content.hero_subtitle_ar || ''}
                  onChange={(e) => setField('hero_subtitle_ar', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                Signature Quote (Hero & Footer)
              </label>
              <input
                type="text"
                value={content.hero_quote_en || ''}
                onChange={(e) => setField('hero_quote_en', e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-white/[0.06]">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Hero Image Overlay Eyebrow (EN)
                </label>
                <input
                  type="text"
                  value={content.hero_card_eyebrow_en || ''}
                  onChange={(e) => setField('hero_card_eyebrow_en', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Hero Image Overlay Caption (EN)
                </label>
                <input
                  type="text"
                  value={content.hero_card_caption_en || ''}
                  onChange={(e) => setField('hero_card_caption_en', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Hero Image Overlay Eyebrow (AR)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={content.hero_card_eyebrow_ar || ''}
                  onChange={(e) => setField('hero_card_eyebrow_ar', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Hero Image Overlay Caption (AR)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={content.hero_card_caption_ar || ''}
                  onChange={(e) => setField('hero_card_caption_ar', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. ABOUT US & PHOTO GALLERY */}
      {section === 'about' && (
        <div className="space-y-8">
          {/* About Us Gallery Manager */}
          <div className="bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-base font-semibold text-white">
                  About Us Photo Gallery ({gallery.length})
                </h2>
                <p className="text-xs text-[#949088]">
                  Add, replace, reorder, or delete corporate fleet and operations photos shown on /about.
                </p>
              </div>
              <button
                type="button"
                onClick={openAddGallery}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Gallery Photo</span>
              </button>
            </div>

            {gallery.length === 0 ? (
              <div className="p-10 text-center text-sm text-[#B4B0A8]">
                No gallery images configured yet. Click &ldquo;Add Gallery Photo&rdquo; to publish one.
              </div>
            ) : (
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {gallery.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#101014] border border-white/[0.08] rounded-xl overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] bg-[#18181D] overflow-hidden">
                        <img
                          src={item.image_url}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-mono font-semibold bg-[#0B0B0D]/80 text-[#C8A45D] border border-white/10 rounded">
                          #{item.sort_order}
                        </span>
                      </div>
                      <div className="p-4 space-y-1">
                        <div className="font-display text-sm font-semibold text-white line-clamp-1">
                          {item.title}
                        </div>
                        {item.title_ar && (
                          <div className="text-xs text-[#C8A45D] line-clamp-1" dir="rtl">
                            {item.title_ar}
                          </div>
                        )}
                        <p className="text-xs text-[#949088] line-clamp-2 pt-1">{item.caption}</p>
                      </div>
                    </div>

                    <div className="px-4 py-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
                      {confirmDeleteGalleryId === item.id ? (
                        <div className="flex items-center gap-2 w-full justify-end">
                          <button
                            type="button"
                            onClick={() => handleDeleteGallery(item.id)}
                            className="px-2.5 py-1 text-xs font-medium text-white bg-red-600 rounded"
                          >
                            Confirm Delete
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteGalleryId(null)}
                            className="px-2.5 py-1 text-xs text-[#B4B0A8] border border-white/15 rounded"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <button
                            type="button"
                            onClick={() => openEditGallery(item)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#E4E0D8] hover:text-[#C8A45D] border border-white/10 hover:border-[#C8A45D]/40 rounded-lg"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                            <span>Edit Photo</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteGalleryId(item.id)}
                            className="p-1.5 text-[#949088] hover:text-red-400 rounded-lg hover:bg-red-950/30"
                            title="Delete photo"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* About Showcase Images & Narrative */}
          <div className="bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-base font-semibold text-white">
                  About Us Narrative &amp; Showcase Images
                </h2>
                <p className="text-xs text-[#949088]">
                  Manage company overview, Vision, Mission, Strategic Focus, and featured photos.
                </p>
              </div>
              <button
                type="button"
                disabled={saving}
                onClick={() =>
                  handleSaveSiteContent(
                    [
                      'about_headline_en',
                      'about_headline_ar',
                      'about_p1_en',
                      'about_p1_ar',
                      'about_p2_en',
                      'about_p2_ar',
                      'about_quote_en',
                      'about_quote_ar',
                      'vision_en',
                      'vision_ar',
                      'mission_en',
                      'mission_ar',
                      'about_hq_image_url',
                      'about_vision_image_url',
                      'about_strategic_title_en',
                      'about_strategic_title_ar',
                      'about_strategic_p1_en',
                      'about_strategic_p2_en',
                    ],
                    'About Us Content'
                  )
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg"
              >
                <Save className="h-3.5 w-3.5" />
                <span>{saving ? 'Saving...' : 'Save About Changes'}</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ImageFieldControl
                  label="About Us Hero / HQ Showcase Photo"
                  value={content.about_hq_image_url || ''}
                  availableAssets={availableAssets}
                  onChange={(url) => setField('about_hq_image_url', url)}
                  onUpload={(file) => handleUploadForField('about_hq_image_url', file)}
                  uploading={uploadingKey === 'about_hq_image_url'}
                />
                <ImageFieldControl
                  label="Vision 2030 / Hybrid Showcase Photo"
                  value={content.about_vision_image_url || ''}
                  availableAssets={availableAssets}
                  onChange={(url) => setField('about_vision_image_url', url)}
                  onUpload={(file) => handleUploadForField('about_vision_image_url', file)}
                  uploading={uploadingKey === 'about_vision_image_url'}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Headline (EN)
                  </label>
                  <input
                    type="text"
                    value={content.about_headline_en || ''}
                    onChange={(e) => setField('about_headline_en', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Headline (AR)
                  </label>
                  <input
                    type="text"
                    dir="rtl"
                    value={content.about_headline_ar || ''}
                    onChange={(e) => setField('about_headline_ar', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Intro Paragraph 1 (EN)
                  </label>
                  <textarea
                    rows={3}
                    value={content.about_p1_en || ''}
                    onChange={(e) => setField('about_p1_en', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Intro Paragraph 1 (AR)
                  </label>
                  <textarea
                    rows={3}
                    dir="rtl"
                    value={content.about_p1_ar || ''}
                    onChange={(e) => setField('about_p1_ar', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Intro Paragraph 2 (EN)
                  </label>
                  <textarea
                    rows={3}
                    value={content.about_p2_en || ''}
                    onChange={(e) => setField('about_p2_en', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Intro Paragraph 2 (AR)
                  </label>
                  <textarea
                    rows={3}
                    dir="rtl"
                    value={content.about_p2_ar || ''}
                    onChange={(e) => setField('about_p2_ar', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Our Vision (EN)
                  </label>
                  <textarea
                    rows={3}
                    value={content.vision_en || ''}
                    onChange={(e) => setField('vision_en', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Our Mission (EN)
                  </label>
                  <textarea
                    rows={3}
                    value={content.mission_en || ''}
                    onChange={(e) => setField('mission_en', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Strategic Focus Title (EN)
                  </label>
                  <input
                    type="text"
                    value={content.about_strategic_title_en || ''}
                    onChange={(e) => setField('about_strategic_title_en', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Featured Brand Quote (EN)
                  </label>
                  <input
                    type="text"
                    value={content.about_quote_en || ''}
                    onChange={(e) => setField('about_quote_en', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Strategic Focus Paragraph 1 (EN)
                  </label>
                  <textarea
                    rows={3}
                    value={content.about_strategic_p1_en || ''}
                    onChange={(e) => setField('about_strategic_p1_en', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                    Strategic Focus Paragraph 2 (EN)
                  </label>
                  <textarea
                    rows={3}
                    value={content.about_strategic_p2_en || ''}
                    onChange={(e) => setField('about_strategic_p2_en', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. BRANCHES & WORKSHOPS */}
      {section === 'locations' && (
        <div className="space-y-8">
          {/* Branches */}
          <div className="bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Building2 className="h-4 w-4 text-[#C8A45D]" />
                <div>
                  <h2 className="font-display text-base font-semibold text-white">
                    GCC Regional Branches ({branches.length})
                  </h2>
                  <p className="text-xs text-[#949088]">
                    Displayed on the Homepage GCC Offices grid, Contact page directory, and interactive GCC Map.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={openAddBranch}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Branch</span>
              </button>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {branches.map((b) => (
                <div
                  key={b.id}
                  className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.015]"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-sm font-semibold text-white">{b.name}</span>
                      {b.is_hq && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#C8A45D]/20 text-[#C8A45D] border border-[#C8A45D]/40 rounded">
                          Headquarters
                        </span>
                      )}
                      <span className="text-xs text-[#949088]">
                        {b.country} · {b.city}
                      </span>
                    </div>
                    <div className="text-xs text-[#D4D4DC] font-mono">{b.phone}</div>
                    {b.address && <div className="text-xs text-[#B4B0A8]">{b.address}</div>}
                    <div className="text-[11px] text-[#949088]">
                      {b.hours} {b.focus ? `· ${b.focus}` : ''} · Map ({b.map_x}, {b.map_y})
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {confirmDeleteBranchId === b.id ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleDeleteBranch(b.id)}
                          className="px-2.5 py-1.5 text-xs font-medium text-white bg-red-600 rounded"
                        >
                          Confirm Delete
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteBranchId(null)}
                          className="px-2.5 py-1.5 text-xs text-[#B4B0A8] border border-white/15 rounded"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => openEditBranch(b)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#E4E0D8] hover:text-[#C8A45D] border border-white/10 hover:border-[#C8A45D]/40 rounded-lg"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteBranchId(b.id)}
                          className="p-2 text-[#949088] hover:text-red-400 rounded-lg hover:bg-red-950/30"
                          title="Delete branch"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workshops */}
          <div className="bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Wrench className="h-4 w-4 text-[#C8A45D]" />
                <div>
                  <h2 className="font-display text-base font-semibold text-white">
                    Maintenance Workshops ({workshops.length})
                  </h2>
                  <p className="text-xs text-[#949088]">
                    Service &amp; fleet maintenance hubs shown on the interactive GCC map.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={openAddWorkshop}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Workshop</span>
              </button>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {workshops.map((w) => (
                <div
                  key={w.id}
                  className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.015]"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-sm font-semibold text-white">{w.name}</span>
                      <span className="text-xs text-[#949088]">
                        {w.country} · {w.city}
                      </span>
                    </div>
                    <div className="text-xs text-[#D4D4DC] font-mono">{w.phone}</div>
                    {w.address && <div className="text-xs text-[#B4B0A8]">{w.address}</div>}
                    <div className="text-[11px] text-[#949088]">
                      {w.hours} · Map ({w.map_x}, {w.map_y})
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {confirmDeleteWorkshopId === w.id ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleDeleteWorkshop(w.id)}
                          className="px-2.5 py-1.5 text-xs font-medium text-white bg-red-600 rounded"
                        >
                          Confirm Delete
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteWorkshopId(null)}
                          className="px-2.5 py-1.5 text-xs text-[#B4B0A8] border border-white/15 rounded"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => openEditWorkshop(w)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#E4E0D8] hover:text-[#C8A45D] border border-white/10 hover:border-[#C8A45D]/40 rounded-lg"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                          <span>Edit</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteWorkshopId(w.id)}
                          className="p-2 text-[#949088] hover:text-red-400 rounded-lg hover:bg-red-950/30"
                          title="Delete workshop"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. CONTACT INFO & DESKS */}
      {section === 'contact' && (
        <div className="bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-base font-semibold text-white">
                Contact Page, Emails, Phones &amp; Footer Information
              </h2>
              <p className="text-xs text-[#949088]">
                Changes sync live across the Contact Us page, regional desk cards, and global website footer.
              </p>
            </div>
            <button
              type="button"
              disabled={saving}
              onClick={() =>
                handleSaveSiteContent(
                  [
                    'contact_hero_title_en',
                    'contact_hero_subtitle_en',
                    'contact_sales_email',
                    'contact_support_email',
                    'contact_general_email',
                    'contact_bahrain_phone',
                    'contact_ksa_phone',
                    'contact_oman_phone',
                    'contact_ops_phone',
                    'contact_workshop_phone',
                    'contact_sales_lead',
                    'contact_ops_lead',
                    'contact_workshop_lead',
                    'contact_hours_en',
                    'contact_hours_short_en',
                    'contact_hq_summary_en',
                  ],
                  'Contact Information'
                )
              }
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg"
            >
              <Save className="h-3.5 w-3.5" />
              <span>{saving ? 'Saving...' : 'Save Contact Info'}</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Contact Hero Title
                </label>
                <input
                  type="text"
                  value={content.contact_hero_title_en || ''}
                  onChange={(e) => setField('contact_hero_title_en', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Headquarters Address Summary (Footer)
                </label>
                <input
                  type="text"
                  value={content.contact_hq_summary_en || ''}
                  onChange={(e) => setField('contact_hq_summary_en', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1.5">
                  Contact Hero Subtitle
                </label>
                <textarea
                  rows={2}
                  value={content.contact_hero_subtitle_en || ''}
                  onChange={(e) => setField('contact_hero_subtitle_en', e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-3">
                Department Emails
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Sales &amp; Leasing Email</label>
                  <input
                    type="email"
                    value={content.contact_sales_email || ''}
                    onChange={(e) => setField('contact_sales_email', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Customer Support / Operations Email</label>
                  <input
                    type="email"
                    value={content.contact_support_email || ''}
                    onChange={(e) => setField('contact_support_email', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">General Inquiries Email</label>
                  <input
                    type="email"
                    value={content.contact_general_email || ''}
                    onChange={(e) => setField('contact_general_email', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-3">
                Phone Numbers &amp; Hotlines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Bahrain HQ Phone</label>
                  <input
                    type="text"
                    value={content.contact_bahrain_phone || ''}
                    onChange={(e) => setField('contact_bahrain_phone', e.target.value)}
                    className="w-full px-3 py-2 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Saudi Arabia Sales Phone</label>
                  <input
                    type="text"
                    value={content.contact_ksa_phone || ''}
                    onChange={(e) => setField('contact_ksa_phone', e.target.value)}
                    className="w-full px-3 py-2 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Oman Muscat Phone</label>
                  <input
                    type="text"
                    value={content.contact_oman_phone || ''}
                    onChange={(e) => setField('contact_oman_phone', e.target.value)}
                    className="w-full px-3 py-2 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Operations Desk Phone</label>
                  <input
                    type="text"
                    value={content.contact_ops_phone || ''}
                    onChange={(e) => setField('contact_ops_phone', e.target.value)}
                    className="w-full px-3 py-2 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Workshop &amp; Service Phone</label>
                  <input
                    type="text"
                    value={content.contact_workshop_phone || ''}
                    onChange={(e) => setField('contact_workshop_phone', e.target.value)}
                    className="w-full px-3 py-2 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-3">
                Department Leads &amp; Operating Hours
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Sales Department Lead</label>
                  <input
                    type="text"
                    value={content.contact_sales_lead || ''}
                    onChange={(e) => setField('contact_sales_lead', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Operations Lead</label>
                  <input
                    type="text"
                    value={content.contact_ops_lead || ''}
                    onChange={(e) => setField('contact_ops_lead', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Workshop Lead</label>
                  <input
                    type="text"
                    value={content.contact_workshop_lead || ''}
                    onChange={(e) => setField('contact_workshop_lead', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Full Operating Hours (Contact Page)</label>
                  <input
                    type="text"
                    value={content.contact_hours_en || ''}
                    onChange={(e) => setField('contact_hours_en', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#B4B0A8] mb-1">Compact Hours (Footer)</label>
                  <input
                    type="text"
                    value={content.contact_hours_short_en || ''}
                    onChange={(e) => setField('contact_hours_short_en', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GALLERY ITEM MODAL */}
      {galleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-[#141418] border border-white/10 rounded-2xl overflow-hidden my-8">
            <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-white">
                {editingGalleryItem ? 'Edit About Us Gallery Photo' : 'Add About Us Gallery Photo'}
              </h3>
              <button
                type="button"
                onClick={() => setGalleryModalOpen(false)}
                className="text-[#949088] hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveGallery} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D]">
                    Photo Asset
                  </label>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg">
                    <Upload className="h-3.5 w-3.5" />
                    <span>Upload New Image</span>
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(e) => {
                        const f = e.target.files?.[0] || null;
                        setGalleryFile(f);
                        if (f) {
                          setGalleryPreview(URL.createObjectURL(f));
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#0C0C0F] border border-white/10">
                  {(galleryPreview || galleryForm.image_url) && (
                    <img
                      src={galleryPreview || galleryForm.image_url}
                      alt="Gallery preview"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {availableAssets.length > 0 && (
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-[#949088]">Or pick from Jadeer studio photos:</div>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-28 overflow-y-auto pr-1">
                      {availableAssets.map((url) => (
                        <button
                          key={url}
                          type="button"
                          onClick={() => {
                            setGalleryFile(null);
                            setGalleryPreview('');
                            setGalleryForm((prev) => ({ ...prev, image_url: url }));
                          }}
                          className={`aspect-[16/10] rounded overflow-hidden border ${
                            !galleryFile && galleryForm.image_url === url
                              ? 'border-[#C8A45D] ring-1 ring-[#C8A45D]'
                              : 'border-white/10'
                          }`}
                        >
                          <img src={url} alt="" className="w-full h-full object-cover" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Title (EN) *
                  </label>
                  <input
                    type="text"
                    required
                    value={galleryForm.title}
                    onChange={(e) => setGalleryForm((p) => ({ ...p, title: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Title (AR)
                  </label>
                  <input
                    type="text"
                    dir="rtl"
                    value={galleryForm.title_ar}
                    onChange={(e) => setGalleryForm((p) => ({ ...p, title_ar: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Caption (EN)
                  </label>
                  <textarea
                    rows={2}
                    value={galleryForm.caption}
                    onChange={(e) => setGalleryForm((p) => ({ ...p, caption: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Caption (AR)
                  </label>
                  <textarea
                    rows={2}
                    dir="rtl"
                    value={galleryForm.caption_ar}
                    onChange={(e) => setGalleryForm((p) => ({ ...p, caption_ar: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Display Order
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={999}
                    value={galleryForm.sort_order}
                    onChange={(e) =>
                      setGalleryForm((p) => ({ ...p, sort_order: Number(e.target.value) || 0 }))
                    }
                    className="w-full px-3 py-2 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setGalleryModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-[#B4B0A8] hover:text-white border border-white/10 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg"
                >
                  {saving ? 'Saving...' : editingGalleryItem ? 'Save Photo' : 'Add to Gallery'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* BRANCH MODAL */}
      {branchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-[#141418] border border-white/10 rounded-2xl overflow-hidden my-8">
            <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-white">
                {editingBranch ? 'Edit Branch Office' : 'Add GCC Branch Office'}
              </h3>
              <button
                type="button"
                onClick={() => setBranchModalOpen(false)}
                className="text-[#949088] hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBranch} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Branch Name (EN) *
                  </label>
                  <input
                    type="text"
                    required
                    value={branchForm.name}
                    onChange={(e) => setBranchForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Bahrain Headquarters — Amwaj"
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Branch Name (AR)
                  </label>
                  <input
                    type="text"
                    dir="rtl"
                    value={branchForm.name_ar}
                    onChange={(e) => setBranchForm((p) => ({ ...p, name_ar: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Country *
                  </label>
                  <select
                    value={branchForm.country}
                    onChange={(e) => setBranchForm((p) => ({ ...p, country: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  >
                    <option value="Bahrain">Bahrain</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Oman">Oman</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={branchForm.city}
                    onChange={(e) => setBranchForm((p) => ({ ...p, city: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Phone *
                  </label>
                  <input
                    type="text"
                    required
                    value={branchForm.phone}
                    onChange={(e) => setBranchForm((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full px-3 py-2 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Operating Hours
                  </label>
                  <input
                    type="text"
                    value={branchForm.hours}
                    onChange={(e) => setBranchForm((p) => ({ ...p, hours: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Street / District Address
                  </label>
                  <input
                    type="text"
                    value={branchForm.address}
                    onChange={(e) => setBranchForm((p) => ({ ...p, address: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Branch Focus / Specialization
                  </label>
                  <input
                    type="text"
                    value={branchForm.focus}
                    onChange={(e) => setBranchForm((p) => ({ ...p, focus: e.target.value }))}
                    placeholder="e.g. Executive HQ, Eastern Province Industrial Leasing"
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              {/* GCC Map Coordinates */}
              <div className="p-4 bg-[#101014] border border-white/[0.08] rounded-xl space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#C8A45D]">Interactive GCC Map Pin Position</span>
                  <div className="flex flex-wrap gap-1.5">
                    {MAP_PRESETS.map((preset) => (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() =>
                          setBranchForm((p) => ({
                            ...p,
                            country: preset.country,
                            city: p.city || preset.city,
                            map_x: preset.x,
                            map_y: preset.y,
                          }))
                        }
                        className="px-2 py-0.5 text-[10px] text-[#B4B0A8] hover:text-white bg-white/[0.04] hover:bg-white/10 border border-white/10 rounded"
                      >
                        {preset.city}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#949088] mb-1">Map X (40–960)</label>
                    <input
                      type="number"
                      min={40}
                      max={960}
                      value={branchForm.map_x}
                      onChange={(e) =>
                        setBranchForm((p) => ({ ...p, map_x: Number(e.target.value) || 565 }))
                      }
                      className="w-full px-3 py-1.5 text-xs font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#949088] mb-1">Map Y (40–580)</label>
                    <input
                      type="number"
                      min={40}
                      max={580}
                      value={branchForm.map_y}
                      onChange={(e) =>
                        setBranchForm((p) => ({ ...p, map_y: Number(e.target.value) || 256 }))
                      }
                      className="w-full px-3 py-1.5 text-xs font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white"
                    />
                  </div>
                </div>
              </div>

              <label className="inline-flex items-center gap-2 text-xs text-[#E4E0D8] cursor-pointer">
                <input
                  type="checkbox"
                  checked={branchForm.is_hq}
                  onChange={(e) => setBranchForm((p) => ({ ...p, is_hq: e.target.checked }))}
                  className="accent-[#C8A45D]"
                />
                <span>Designate as Regional Headquarters</span>
              </label>

              <div className="pt-3 border-t border-white/[0.08] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setBranchModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-[#B4B0A8] hover:text-white border border-white/10 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg"
                >
                  {saving ? 'Saving...' : editingBranch ? 'Save Branch' : 'Create Branch'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* WORKSHOP MODAL */}
      {workshopModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-2xl bg-[#141418] border border-white/10 rounded-2xl overflow-hidden my-8">
            <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-white">
                {editingWorkshop ? 'Edit Maintenance Workshop' : 'Add Maintenance Workshop'}
              </h3>
              <button
                type="button"
                onClick={() => setWorkshopModalOpen(false)}
                className="text-[#949088] hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSaveWorkshop} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Workshop Name (EN) *
                  </label>
                  <input
                    type="text"
                    required
                    value={workshopForm.name}
                    onChange={(e) => setWorkshopForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Workshop Name (AR)
                  </label>
                  <input
                    type="text"
                    dir="rtl"
                    value={workshopForm.name_ar}
                    onChange={(e) => setWorkshopForm((p) => ({ ...p, name_ar: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Country *
                  </label>
                  <select
                    value={workshopForm.country}
                    onChange={(e) => setWorkshopForm((p) => ({ ...p, country: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  >
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Oman">Oman</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={workshopForm.city}
                    onChange={(e) => setWorkshopForm((p) => ({ ...p, city: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Phone *
                  </label>
                  <input
                    type="text"
                    required
                    value={workshopForm.phone}
                    onChange={(e) => setWorkshopForm((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full px-3 py-2 text-sm font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Operating Hours
                  </label>
                  <input
                    type="text"
                    value={workshopForm.hours}
                    onChange={(e) => setWorkshopForm((p) => ({ ...p, hours: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Address / Industrial Area
                  </label>
                  <input
                    type="text"
                    value={workshopForm.address}
                    onChange={(e) => setWorkshopForm((p) => ({ ...p, address: e.target.value }))}
                    className="w-full px-3 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#949088] mb-1">Map X (40–960)</label>
                  <input
                    type="number"
                    min={40}
                    max={960}
                    value={workshopForm.map_x}
                    onChange={(e) =>
                      setWorkshopForm((p) => ({ ...p, map_x: Number(e.target.value) || 565 }))
                    }
                    className="w-full px-3 py-1.5 text-xs font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-[#949088] mb-1">Map Y (40–580)</label>
                  <input
                    type="number"
                    min={40}
                    max={580}
                    value={workshopForm.map_y}
                    onChange={(e) =>
                      setWorkshopForm((p) => ({ ...p, map_y: Number(e.target.value) || 256 }))
                    }
                    className="w-full px-3 py-1.5 text-xs font-mono bg-[#0C0C0F] border border-white/10 rounded-lg text-white"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setWorkshopModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-[#B4B0A8] hover:text-white border border-white/10 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg"
                >
                  {saving ? 'Saving...' : editingWorkshop ? 'Save Workshop' : 'Create Workshop'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
