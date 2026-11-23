import { useEffect, useState, type FormEvent } from 'react';
import {
  ShieldCheck,
  UserPlus,
  Pencil,
  Trash2,
  Car,
  FileText,
  Globe,
  Users,
  X,
  Check,
} from 'lucide-react';
import { api } from '../../lib/api';
import type { AdminPrivilege, AdminUser } from '../../types';

const PRIVILEGE_META: Array<{
  id: AdminPrivilege;
  label: string;
  description: string;
  icon: typeof Car;
}> = [
  {
    id: 'vehicles',
    label: 'Car Input & Inventory',
    description: 'Add, edit, upload images, feature, and delete Showroom & Used Cars.',
    icon: Car,
  },
  {
    id: 'quotations',
    label: 'Quotation Management',
    description: 'View corporate/individual RFQs, set monthly quotes, update statuses, and archive requests.',
    icon: FileText,
  },
  {
    id: 'website',
    label: 'Website Management',
    description: 'Edit Main Page Hero, About Us & Gallery, Branches/Workshops, Contact Info, Messages & Reviews.',
    icon: Globe,
  },
  {
    id: 'admins',
    label: 'Admin Team & Roles',
    description: 'Create staff accounts, assign section privileges, reset passwords, and suspend access.',
    icon: Users,
  },
];

const ROLE_PRESETS: Array<{
  label: string;
  role: 'super_admin' | 'staff';
  privileges: AdminPrivilege[];
}> = [
  { label: 'Car Input Specialist', role: 'staff', privileges: ['vehicles'] },
  { label: 'Quotation Manager', role: 'staff', privileges: ['quotations'] },
  { label: 'Website & Content Editor', role: 'staff', privileges: ['website'] },
  { label: 'Fleet & Sales Lead', role: 'staff', privileges: ['vehicles', 'quotations'] },
  {
    label: 'Full Super Admin',
    role: 'super_admin',
    privileges: ['vehicles', 'quotations', 'website', 'admins'],
  },
];

export function AdminUsersPanel({ currentUser }: { currentUser: AdminUser }) {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const [form, setForm] = useState<{
    name: string;
    email: string;
    password: string;
    role: 'super_admin' | 'staff';
    privileges: AdminPrivilege[];
    is_active: boolean;
  }>({
    name: '',
    email: '',
    password: '',
    role: 'staff',
    privileges: ['vehicles'],
    is_active: true,
  });

  const showNotice = (type: 'success' | 'error', message: string) => {
    setFeedback({ type, message });
    window.setTimeout(() => {
      setFeedback((curr) => (curr?.message === message ? null : curr));
    }, 4500);
  };

  const loadUsers = async () => {
    setLoading(true);
    try {
      const res = await api.getAdminUsers();
      setUsers(res.users);
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Failed to load admin accounts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const openCreateModal = () => {
    setEditingUser(null);
    setForm({
      name: '',
      email: '',
      password: '',
      role: 'staff',
      privileges: ['vehicles'],
      is_active: true,
    });
    setModalOpen(true);
  };

  const openEditModal = (user: AdminUser) => {
    setEditingUser(user);
    setForm({
      name: user.name,
      email: user.email,
      password: '',
      role: user.role,
      privileges:
        user.role === 'super_admin'
          ? ['vehicles', 'quotations', 'website', 'admins']
          : [...user.privileges],
      is_active: user.is_active !== false,
    });
    setModalOpen(true);
  };

  const togglePrivilege = (priv: AdminPrivilege) => {
    setForm((prev) => {
      const exists = prev.privileges.includes(priv);
      const next = exists ? prev.privileges.filter((p) => p !== priv) : [...prev.privileges, priv];
      return {
        ...prev,
        role: next.length === 4 && prev.role === 'super_admin' ? 'super_admin' : 'staff',
        privileges: next,
      };
    });
  };

  const applyPreset = (preset: (typeof ROLE_PRESETS)[number]) => {
    setForm((prev) => ({
      ...prev,
      role: preset.role,
      privileges: [...preset.privileges],
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.role !== 'super_admin' && form.privileges.length === 0) {
      showNotice('error', 'Select at least one section privilege for a staff administrator.');
      return;
    }

    setSaving(true);
    try {
      const effectivePrivileges: AdminPrivilege[] =
        form.role === 'super_admin'
          ? ['vehicles', 'quotations', 'website', 'admins']
          : form.privileges;

      if (editingUser) {
        const res = await api.updateAdminUser(editingUser.id, {
          name: form.name,
          email: form.email,
          role: form.role,
          privileges: effectivePrivileges,
          is_active: form.is_active,
          password: form.password.trim() || undefined,
        });
        setUsers((prev) => prev.map((u) => (u.id === editingUser.id ? res.user : u)));
        showNotice('success', `Updated permissions for ${res.user.name}.`);
      } else {
        const res = await api.createAdminUser({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
          privileges: effectivePrivileges,
        });
        setUsers((prev) => [...prev, res.user]);
        showNotice('success', `Created administrator account for ${res.user.name}.`);
      }
      setModalOpen(false);
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Could not save administrator.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.deleteAdminUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      setConfirmDeleteId(null);
      showNotice('success', 'Administrator removed and active sessions revoked.');
    } catch (err) {
      showNotice('error', err instanceof Error ? err.message : 'Could not delete administrator.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Legend */}
      <div className="bg-[#141418] border border-white/[0.08] rounded-xl p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[#C8A45D]/15 border border-[#C8A45D]/35 flex items-center justify-center text-[#C8A45D]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-white">
                Admin Team &amp; Section Privileges
              </h2>
              <p className="text-xs text-[#949088]">
                Assign dedicated staff accounts with scoped access to Car Input, Quotations, or Website Management.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] rounded-lg"
          >
            <UserPlus className="h-4 w-4" />
            <span>Add Administrator</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-white/[0.06]">
          {PRIVILEGE_META.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-3.5 rounded-lg bg-[#101014] border border-white/[0.06] space-y-1"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-[#E4E0D8]">
                  <Icon className="h-3.5 w-3.5 text-[#C8A45D]" />
                  <span>{item.label}</span>
                </div>
                <p className="text-[11px] text-[#949088] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

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

      {/* Admin Table */}
      <div className="bg-[#141418] border border-white/[0.08] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#101014] text-xs text-[#B4B0A8] border-b border-white/[0.08]">
              <tr>
                <th className="py-3 px-4 font-medium">Administrator</th>
                <th className="py-3 px-4 font-medium">Role</th>
                <th className="py-3 px-4 font-medium">Section Privileges</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-sm text-[#B4B0A8]">
                    Loading administrator directory...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-sm text-[#B4B0A8]">
                    No database administrator accounts yet. Click &ldquo;Add Administrator&rdquo; to create staff accounts.
                  </td>
                </tr>
              ) : (
                users.map((u) => {
                  const isSelf = u.id === currentUser.id;
                  const active = u.is_active !== false;
                  return (
                    <tr key={u.id} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-white flex items-center gap-2">
                          <span>{u.name}</span>
                          {isSelf && (
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/10 text-[#C8A45D]">
                              You
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-[#949088]">{u.email}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex px-2.5 py-0.5 text-[11px] font-semibold rounded border ${
                            u.role === 'super_admin'
                              ? 'bg-[#C8A45D]/15 text-[#C8A45D] border-[#C8A45D]/40'
                              : 'bg-white/[0.04] text-[#D4D4DC] border-white/10'
                          }`}
                        >
                          {u.role === 'super_admin' ? 'Super Admin' : 'Staff Admin'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1.5">
                          {(u.role === 'super_admin'
                            ? (['vehicles', 'quotations', 'website', 'admins'] as AdminPrivilege[])
                            : u.privileges
                          ).map((priv) => {
                            const meta = PRIVILEGE_META.find((m) => m.id === priv);
                            return (
                              <span
                                key={priv}
                                className="px-2 py-0.5 text-[11px] bg-[#101014] border border-white/10 rounded text-[#E4E0D8]"
                              >
                                {meta?.label || priv}
                              </span>
                            );
                          })}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`text-xs font-medium ${
                            active ? 'text-[#4ADE80]' : 'text-[#F87171]'
                          }`}
                        >
                          {active ? 'Active' : 'Suspended'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        {confirmDeleteId === u.id ? (
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleDelete(u.id)}
                              className="px-2.5 py-1 text-xs font-medium text-white bg-red-600 rounded"
                            >
                              Delete
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmDeleteId(null)}
                              className="px-2.5 py-1 text-xs text-[#B4B0A8] border border-white/15 rounded"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => openEditModal(u)}
                              className="h-8 w-8 inline-flex items-center justify-center text-[#B4B0A8] hover:text-[#C8A45D] hover:bg-white/[0.06] rounded-lg"
                              title="Edit privileges"
                            >
                              <Pencil className="h-3.5 w-3.5" />
                            </button>
                            {!isSelf && (
                              <button
                                type="button"
                                onClick={() => setConfirmDeleteId(u.id)}
                                className="h-8 w-8 inline-flex items-center justify-center text-[#B4B0A8] hover:text-red-400 hover:bg-red-950/30 rounded-lg"
                                title="Remove administrator"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD / EDIT ADMIN MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-xl bg-[#141418] border border-white/10 rounded-2xl overflow-hidden my-8">
            <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-white">
                {editingUser ? `Edit Administrator — ${editingUser.name}` : 'Create New Administrator'}
              </h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-[#949088] hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[82vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Tariq Al-Dosari"
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                    Admin Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="name@jadeergulf.com"
                    className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8] mb-1">
                  {editingUser ? 'Reset Password (optional, min 8 chars)' : 'Temporary Password (min 8 chars) *'}
                </label>
                <input
                  type="password"
                  required={!editingUser}
                  minLength={editingUser ? 0 : 8}
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  placeholder={editingUser ? 'Leave blank to keep existing password' : 'Minimum 8 characters'}
                  className="w-full px-3.5 py-2 text-sm bg-[#0C0C0F] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#C8A45D]"
                />
              </div>

              {/* Quick Role Presets */}
              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A45D]">
                  Quick Privilege Presets
                </div>
                <div className="flex flex-wrap gap-2">
                  {ROLE_PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => applyPreset(preset)}
                      className="px-2.5 py-1 text-xs text-[#E4E0D8] hover:text-[#0B0B0D] bg-white/[0.04] hover:bg-[#C8A45D] border border-white/10 hover:border-[#C8A45D] rounded-lg transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Role Type */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, role: 'staff' }))}
                  className={`p-3 text-left rounded-xl border transition-colors ${
                    form.role === 'staff'
                      ? 'bg-[#C8A45D]/15 border-[#C8A45D] text-white'
                      : 'bg-[#101014] border-white/10 text-[#B4B0A8]'
                  }`}
                >
                  <div className="text-xs font-semibold">Scoped Staff Admin</div>
                  <div className="text-[11px] opacity-80 mt-0.5">
                    Access only the selected sections below.
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setForm((p) => ({
                      ...p,
                      role: 'super_admin',
                      privileges: ['vehicles', 'quotations', 'website', 'admins'],
                    }))
                  }
                  className={`p-3 text-left rounded-xl border transition-colors ${
                    form.role === 'super_admin'
                      ? 'bg-[#C8A45D]/15 border-[#C8A45D] text-white'
                      : 'bg-[#101014] border-white/10 text-[#B4B0A8]'
                  }`}
                >
                  <div className="text-xs font-semibold">Super Admin</div>
                  <div className="text-[11px] opacity-80 mt-0.5">
                    Full access to every section and admin team.
                  </div>
                </button>
              </div>

              {/* Granular Section Checkboxes */}
              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#B4B0A8]">
                  Section Privileges
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PRIVILEGE_META.map((item) => {
                    const Icon = item.icon;
                    const checked =
                      form.role === 'super_admin' || form.privileges.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        disabled={form.role === 'super_admin'}
                        onClick={() => togglePrivilege(item.id)}
                        className={`p-3 text-left rounded-xl border transition-all flex items-start gap-2.5 ${
                          checked
                            ? 'bg-[#1A1812] border-[#C8A45D]/60 text-white'
                            : 'bg-[#101014] border-white/10 text-[#949088] hover:border-white/25'
                        } disabled:opacity-80`}
                      >
                        <span
                          className={`mt-0.5 h-4 w-4 rounded flex items-center justify-center border shrink-0 ${
                            checked
                              ? 'bg-[#C8A45D] border-[#C8A45D] text-[#0B0B0D]'
                              : 'border-white/25'
                          }`}
                        >
                          {checked && <Check className="h-3 w-3" />}
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 text-xs font-semibold">
                            <Icon className="h-3.5 w-3.5 text-[#C8A45D]" />
                            <span>{item.label}</span>
                          </div>
                          <div className="text-[11px] text-[#949088] mt-0.5 leading-snug">
                            {item.description}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {editingUser && (
                <label className="inline-flex items-center gap-2 text-xs text-[#E4E0D8] cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={form.is_active}
                    onChange={(e) => setForm((p) => ({ ...p, is_active: e.target.checked }))}
                    className="accent-[#C8A45D]"
                  />
                  <span>Account Active (uncheck to immediately suspend login access)</span>
                </label>
              )}

              <div className="pt-3 border-t border-white/[0.08] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-[#B4B0A8] hover:text-white border border-white/10 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 text-xs font-semibold text-[#0B0B0D] bg-[#C8A45D] hover:bg-[#DCBC7A] disabled:opacity-60 rounded-lg"
                >
                  {saving
                    ? 'Saving...'
                    : editingUser
                      ? 'Save Changes'
                      : 'Create Administrator'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
