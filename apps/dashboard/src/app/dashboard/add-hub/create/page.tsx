"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  MapPin,
  Target,
  Phone,
  Wrench,
  Image as ImageIcon,
  DollarSign,
  UserCog,
  Plus,
  X,
  Upload,
  Loader2,
  CheckCircle2,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";
import { AdminCreationModal, type AdminsData } from "@/components/hubs/AdminCreationModal";
import { createHub, uploadFile } from "@/lib/hubs";

// ─── Types ───────────────────────────────────────────────────────────────────

interface SocialLinks {
  website: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  youtube: string;
}

interface FormState {
  name: string;
  description: string;
  location: string;
  focusArea: string;
  contactEmail: string;
  contactPhone: string;
  socialLinks: SocialLinks;
  facilities: string[];
  logo: string;
  gallery: string[];
  pricingFree: boolean;
  pricingAmount: string;
  pricingCurrency: string;
  pricingDesc: string;
}

const SECTIONS = [
  { id: "basic", label: "Basic Info", icon: FileText },
  { id: "location", label: "Location", icon: MapPin },
  { id: "focus", label: "Focus Area", icon: Target },
  { id: "contact", label: "Contact", icon: Phone },
  { id: "facilities", label: "Facilities", icon: Wrench },
  { id: "images", label: "Images", icon: ImageIcon },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "admins", label: "Admins", icon: UserCog },
] as const;

const FOCUS_AREAS = [
  "Technology & Software",
  "Agriculture & Food Systems",
  "Healthcare & Biotech",
  "Energy & Sustainability",
  "Education & EdTech",
  "Finance & Fintech",
  "Creative Arts & Media",
  "Manufacturing & Engineering",
  "Social Enterprise",
  "Other",
];

const initialForm = (): FormState => ({
  name: "",
  description: "",
  location: "",
  focusArea: "",
  contactEmail: "",
  contactPhone: "",
  socialLinks: { website: "", twitter: "", linkedin: "", instagram: "", facebook: "", youtube: "" },
  facilities: [],
  logo: "",
  gallery: [],
  pricingFree: true,
  pricingAmount: "",
  pricingCurrency: "NGN",
  pricingDesc: "",
});

// ─── Sub-components (must be outside CreateHubPage to keep stable identity) ───

const SectionCard = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <div id={id} className="rounded-2xl border border-[#dfe6d7] bg-white p-6 sm:p-8">
    {children}
  </div>
);

const SectionTitle = ({
  icon: Icon,
  label,
  index,
}: {
  icon: (typeof SECTIONS)[number]["icon"];
  label: string;
  index: number;
}) => (
  <div className="mb-6 flex items-center gap-3">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#006b85] text-sm font-bold text-white">
      {index + 1}
    </span>
    <div className="flex items-center gap-2">
      <Icon className="text-[#006b85]" size={18} />
      <h2 className="text-base font-black text-[#172018]">{label}</h2>
    </div>
  </div>
);

// ─── Component ───────────────────────────────────────────────────────────────

export default function CreateHubPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm());
  const [admins, setAdmins] = useState<AdminsData | null>(null);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [facilityInput, setFacilityInput] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const logoRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const setSocial = (key: keyof SocialLinks, value: string) =>
    setForm((f) => ({ ...f, socialLinks: { ...f.socialLinks, [key]: value } }));

  // ── Facilities ──────────────────────────────────────────────────────────────
  const addFacility = () => {
    const v = facilityInput.trim();
    if (!v || form.facilities.includes(v)) return;
    set("facilities", [...form.facilities, v]);
    setFacilityInput("");
  };

  const removeFacility = (i: number) =>
    set("facilities", form.facilities.filter((_, idx) => idx !== i));

  // ── Image uploads ───────────────────────────────────────────────────────────
  const handleLogoUpload = async (file: File) => {
    setUploadingLogo(true);
    try {
      const url = await uploadFile(file);
      set("logo", url);
    } catch {
      setErrors((e) => ({ ...e, logo: "Logo upload failed" }));
    } finally {
      setUploadingLogo(false);
    }
  };

  const handleGalleryUpload = async (files: FileList) => {
    setUploadingGallery(true);
    try {
      const uploads = await Promise.all(Array.from(files).map((f) => uploadFile(f)));
      set("gallery", [...form.gallery, ...uploads]);
    } catch {
      setErrors((e) => ({ ...e, gallery: "One or more uploads failed" }));
    } finally {
      setUploadingGallery(false);
    }
  };

  const removeGalleryImage = (i: number) =>
    set("gallery", form.gallery.filter((_, idx) => idx !== i));

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Hub name is required";
    if (form.name.trim().length < 2) e.name = "Name must be at least 2 characters";
    if (!form.description.trim()) e.description = "Description is required";
    if (form.description.trim().length < 10) e.description = "Description must be at least 10 characters";
    if (!form.focusArea) e.focusArea = "Focus area is required";
    if (form.contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail))
      e.contactEmail = "Enter a valid email";
    if (!admins) e.admins = "You must set up hub admins before creating the hub";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!validate()) {
      const first = document.querySelector("[data-error]");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      await createHub({
        name: form.name.trim(),
        description: form.description.trim(),
        location: form.location.trim() || undefined,
        focusArea: form.focusArea,
        contactEmail: form.contactEmail.trim() || undefined,
        contactPhone: form.contactPhone.trim() || undefined,
        socialLinks: {
          website: form.socialLinks.website || undefined,
          twitter: form.socialLinks.twitter || undefined,
          linkedin: form.socialLinks.linkedin || undefined,
          instagram: form.socialLinks.instagram || undefined,
          facebook: form.socialLinks.facebook || undefined,
          youtube: form.socialLinks.youtube || undefined,
        },
        facilities: form.facilities,
        logo: form.logo || undefined,
        gallery: form.gallery,
        pricing: {
          free: form.pricingFree,
          amount: !form.pricingFree && form.pricingAmount ? Number(form.pricingAmount) : undefined,
          currency: form.pricingCurrency,
          description: form.pricingDesc.trim() || undefined,
        },
        manager: admins!.manager,
        contentManager: admins!.contentManager,
        programsOfficer: admins!.programsOfficer,
      });

      router.push("/dashboard/manage-hubs?created=1");
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to create hub. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Field helpers ───────────────────────────────────────────────────────────
  const inputCls = (errKey: string) =>
    `w-full rounded-md border px-3 py-2.5 text-sm text-[#172018] outline-none transition focus:ring-2 focus:ring-[#009fc3]/40 ${
      errors[errKey]
        ? "border-red-400 bg-red-50"
        : "border-[#a8d8e6] focus:border-[#009fc3]"
    }`;

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Back link */}
      <a
        href="/dashboard/add-hub"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#006b85] hover:underline"
      >
        <ArrowLeft size={16} />
        Back to Hub Overview
      </a>

      {/* Progress Bar */}
      <div className="rounded-xl border border-[#dfe6d7] bg-white p-4">
        <div className="flex flex-wrap gap-2">
          {SECTIONS.map((s, i) => {
            const Icon = s.icon;
            const isAdmins = s.id === "admins";
            const done = isAdmins ? !!admins : false;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition ${
                  done
                    ? "bg-[#1b5e2b] text-white"
                    : "bg-[#f5f7f2] text-[#61705d] hover:bg-[#e8f4f8] hover:text-[#006b85]"
                }`}
              >
                {done ? <CheckCircle2 size={12} /> : <Icon size={12} />}
                {s.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* ① Basic Info */}
      <SectionCard id="basic">
        <SectionTitle icon={FileText} label="Basic Information" index={0} />
        <div className="space-y-5">
          <div>
            <label className="mb-1 block text-xs font-semibold text-[#5a6b57]">Hub Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="e.g. BUK Tech Innovation Hub"
              className={inputCls("name")}
              data-error={errors.name ? true : undefined}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-[#5a6b57]">Description *</label>
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={4}
              placeholder="Describe the hub's mission, purpose, and what it offers to innovators…"
              className={`${inputCls("description")} resize-none`}
              data-error={errors.description ? true : undefined}
            />
            {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
          </div>
        </div>
      </SectionCard>

      {/* ② Location */}
      <SectionCard id="location">
        <SectionTitle icon={MapPin} label="Location" index={1} />
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#5a6b57]">Physical Location</label>
          <input
            type="text"
            value={form.location}
            onChange={(e) => set("location", e.target.value)}
            placeholder="e.g. Faculty of Computing, BUK Main Campus, Kano"
            className={inputCls("location")}
          />
          <p className="mt-1 text-xs text-[#a0a9a0]">Building, faculty, or campus address where the hub is located.</p>
        </div>
      </SectionCard>

      {/* ③ Focus Area */}
      <SectionCard id="focus">
        <SectionTitle icon={Target} label="Major Area of Focus" index={2} />
        <div>
          <label className="mb-1 block text-xs font-semibold text-[#5a6b57]">Focus Area *</label>
          <select
            value={form.focusArea}
            onChange={(e) => set("focusArea", e.target.value)}
            className={inputCls("focusArea")}
            data-error={errors.focusArea ? true : undefined}
          >
            <option value="">Select a focus area…</option>
            {FOCUS_AREAS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          {errors.focusArea && <p className="mt-1 text-xs text-red-500">{errors.focusArea}</p>}
        </div>
      </SectionCard>

      {/* ④ Contact Details */}
      <SectionCard id="contact">
        <SectionTitle icon={Phone} label="Contact Details" index={3} />
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#5a6b57]">Contact Email</label>
              <input
                type="email"
                value={form.contactEmail}
                onChange={(e) => set("contactEmail", e.target.value)}
                placeholder="hub@buk.edu.ng"
                className={inputCls("contactEmail")}
              />
              {errors.contactEmail && <p className="mt-1 text-xs text-red-500">{errors.contactEmail}</p>}
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#5a6b57]">Phone Number</label>
              <input
                type="tel"
                value={form.contactPhone}
                onChange={(e) => set("contactPhone", e.target.value)}
                placeholder="+234 800 000 0000"
                className={inputCls("contactPhone")}
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold text-[#5a6b57]">Social Media &amp; Web</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {(["website", "twitter", "linkedin", "instagram", "facebook", "youtube"] as const).map((key) => (
                <div key={key}>
                  <label className="mb-1 block text-xs capitalize text-[#61705d]">{key === "website" ? "Website" : key.charAt(0).toUpperCase() + key.slice(1)}</label>
                  <input
                    type="url"
                    value={form.socialLinks[key]}
                    onChange={(e) => setSocial(key, e.target.value)}
                    placeholder={key === "website" ? "https://hub.buk.edu.ng" : `https://${key}.com/…`}
                    className="w-full rounded-md border border-[#dfe6d7] px-3 py-2 text-xs text-[#172018] outline-none transition focus:border-[#009fc3] focus:ring-2 focus:ring-[#009fc3]/30"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionCard>

      {/* ⑤ Facilities */}
      <SectionCard id="facilities">
        <SectionTitle icon={Wrench} label="Hub Facilities" index={4} />
        <div className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={facilityInput}
              onChange={(e) => setFacilityInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addFacility())}
              placeholder="e.g. 3D Printer, Co-working Space, Server Room…"
              className="flex-1 rounded-md border border-[#a8d8e6] px-3 py-2.5 text-sm text-[#172018] outline-none transition focus:border-[#009fc3] focus:ring-2 focus:ring-[#009fc3]/40"
            />
            <button
              type="button"
              onClick={addFacility}
              className="flex items-center gap-1.5 rounded-md bg-[#006b85] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#005a70]"
            >
              <Plus size={16} />
              Add
            </button>
          </div>
          <p className="text-xs text-[#a0a9a0]">Press Enter or click Add to add a facility. Click × to remove.</p>

          {form.facilities.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {form.facilities.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 rounded-full bg-[#e8f4f8] px-3 py-1 text-sm font-medium text-[#006b85]"
                >
                  {f}
                  <button type="button" onClick={() => removeFacility(i)} className="hover:text-red-500 transition">
                    <X size={13} />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </SectionCard>

      {/* ⑥ Images */}
      <SectionCard id="images">
        <SectionTitle icon={ImageIcon} label="Picture Uploads" index={5} />
        <div className="space-y-6">
          {/* Logo */}
          <div>
            <p className="mb-2 text-xs font-semibold text-[#5a6b57]">Hub Logo</p>
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-[#a8d8e6] bg-[#f5f7f2]">
                {form.logo ? (
                  <img src={form.logo} alt="Logo" className="h-full w-full object-cover" />
                ) : (
                  <ImageIcon className="text-[#a8d8e6]" size={28} />
                )}
              </div>
              <div>
                <input
                  ref={logoRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleLogoUpload(f);
                  }}
                />
                <button
                  type="button"
                  onClick={() => logoRef.current?.click()}
                  disabled={uploadingLogo}
                  className="flex items-center gap-2 rounded-md border border-[#a8d8e6] bg-white px-3 py-2 text-xs font-semibold text-[#006b85] transition hover:bg-[#e8f4f8] disabled:opacity-50"
                >
                  {uploadingLogo ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                  {uploadingLogo ? "Uploading…" : form.logo ? "Change Logo" : "Upload Logo"}
                </button>
                {errors.logo && <p className="mt-1 text-xs text-red-500">{errors.logo}</p>}
                <p className="mt-1 text-xs text-[#a0a9a0]">Max 5MB — JPG, PNG, WebP, SVG</p>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <p className="mb-2 text-xs font-semibold text-[#5a6b57]">Gallery Images</p>
            <input
              ref={galleryRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files?.length) handleGalleryUpload(e.target.files);
              }}
            />
            <button
              type="button"
              onClick={() => galleryRef.current?.click()}
              disabled={uploadingGallery}
              className="flex items-center gap-2 rounded-md border border-dashed border-[#a8d8e6] bg-[#f5f7f2] px-4 py-3 text-sm font-semibold text-[#006b85] transition hover:bg-[#e8f4f8] disabled:opacity-50"
            >
              {uploadingGallery ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
              {uploadingGallery ? "Uploading…" : "Upload Gallery Images"}
            </button>
            {errors.gallery && <p className="mt-1 text-xs text-red-500">{errors.gallery}</p>}

            {form.gallery.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {form.gallery.map((url, i) => (
                  <div key={i} className="group relative aspect-square overflow-hidden rounded-lg border border-[#dfe6d7]">
                    <img src={url} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeGalleryImage(i)}
                      className="absolute right-1 top-1 hidden rounded-full bg-red-500 p-0.5 text-white group-hover:block"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </SectionCard>

      {/* ⑦ Pricing */}
      <SectionCard id="pricing">
        <SectionTitle icon={DollarSign} label="Pricing" index={6} />
        <div className="space-y-5">
          <div className="flex gap-3">
            {[
              { label: "Free Access", value: true },
              { label: "Paid Access", value: false },
            ].map((opt) => (
              <button
                key={String(opt.value)}
                type="button"
                onClick={() => set("pricingFree", opt.value)}
                className={`flex-1 rounded-lg border-2 py-3 text-sm font-bold transition ${
                  form.pricingFree === opt.value
                    ? "border-[#006b85] bg-[#e8f4f8] text-[#006b85]"
                    : "border-[#dfe6d7] bg-white text-[#61705d] hover:border-[#a8d8e6]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {!form.pricingFree && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#5a6b57]">Amount</label>
                <input
                  type="number"
                  min="0"
                  value={form.pricingAmount}
                  onChange={(e) => set("pricingAmount", e.target.value)}
                  placeholder="0.00"
                  className={inputCls("pricingAmount")}
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#5a6b57]">Currency</label>
                <select
                  value={form.pricingCurrency}
                  onChange={(e) => set("pricingCurrency", e.target.value)}
                  className={inputCls("pricingCurrency")}
                >
                  <option value="NGN">NGN — Nigerian Naira</option>
                  <option value="USD">USD — US Dollar</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label className="mb-1 block text-xs font-semibold text-[#5a6b57]">Pricing Description</label>
            <textarea
              value={form.pricingDesc}
              onChange={(e) => set("pricingDesc", e.target.value)}
              rows={2}
              placeholder="e.g. Free for registered BUK students. Alumni pay ₦5,000/month."
              className={`${inputCls("pricingDesc")} resize-none`}
            />
          </div>
        </div>
      </SectionCard>

      {/* ⑧ Admins */}
      <SectionCard id="admins">
        <SectionTitle icon={UserCog} label="Hub Admins" index={7} />
        <div className="space-y-4">
          <p className="text-sm leading-6 text-[#61705d]">
            Create the administrative team for this hub. A Hub Manager is required. Content Manager
            and Programs Officer are optional and can be added now or later.
          </p>

          {admins ? (
            <div className="rounded-xl border border-[#dfe6d7] bg-[#f5f7f2] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1b5e2b]">
                  <CheckCircle2 size={18} className="text-[#1b5e2b]" />
                  Admins configured
                </div>
                <button
                  type="button"
                  onClick={() => setShowAdminModal(true)}
                  className="text-xs font-semibold text-[#006b85] hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="space-y-1 text-sm">
                <p>
                  <span className="font-semibold text-[#172018]">Hub Manager:</span>{" "}
                  <span className="text-[#61705d]">
                    {admins.manager.name} ({admins.manager.personalEmail})
                  </span>
                </p>
                {admins.contentManager && (
                  <p>
                    <span className="font-semibold text-[#172018]">Content Manager:</span>{" "}
                    <span className="text-[#61705d]">
                      {admins.contentManager.name} ({admins.contentManager.personalEmail})
                    </span>
                  </p>
                )}
                {admins.programsOfficer && (
                  <p>
                    <span className="font-semibold text-[#172018]">Programs Officer:</span>{" "}
                    <span className="text-[#61705d]">
                      {admins.programsOfficer.name} ({admins.programsOfficer.personalEmail})
                    </span>
                  </p>
                )}
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowAdminModal(true)}
              className={`flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed py-5 text-sm font-bold transition ${
                errors.admins
                  ? "border-red-400 bg-red-50 text-red-600"
                  : "border-[#a8d8e6] text-[#006b85] hover:bg-[#e8f4f8]"
              }`}
              data-error={errors.admins ? true : undefined}
            >
              <UserCog size={18} />
              Set Up Hub Admins
            </button>
          )}
          {errors.admins && <p className="text-xs text-red-500">{errors.admins}</p>}
        </div>
      </SectionCard>

      {/* Submit Error */}
      {submitError && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 shrink-0 text-red-500" size={18} />
          <p className="text-sm text-red-700">{submitError}</p>
        </div>
      )}

      {/* Submit */}
      <div className="flex items-center justify-between pb-6">
        <a
          href="/dashboard/add-hub"
          className="text-sm font-semibold text-[#61705d] hover:text-[#172018]"
        >
          ← Cancel
        </a>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting || !admins}
          title={!admins ? "Set up hub admins first" : undefined}
          className="inline-flex items-center gap-2 rounded-lg bg-[#1b5e2b] px-8 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#154a22] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Creating Hub…
            </>
          ) : (
            "Create Hub"
          )}
        </button>
      </div>

      {/* Admin Modal */}
      {showAdminModal && (
        <AdminCreationModal
          initial={admins ?? undefined}
          onSave={(data) => {
            setAdmins(data);
            setShowAdminModal(false);
            setErrors((e) => ({ ...e, admins: "" }));
          }}
          onClose={() => setShowAdminModal(false)}
        />
      )}
    </div>
  );
}
