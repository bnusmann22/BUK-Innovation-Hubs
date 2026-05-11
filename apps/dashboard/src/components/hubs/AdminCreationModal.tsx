"use client";

import { useState, useRef } from "react";
import { X, Upload, UserCircle, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { uploadFile, type HubAdmin, type HubStaff } from "@/lib/hubs";

export interface AdminsData {
  manager: HubAdmin;
  contentManager?: HubStaff;
  programsOfficer?: HubStaff;
}

interface Props {
  onSave: (data: AdminsData) => void;
  onClose: () => void;
  initial?: AdminsData;
}

interface FieldError {
  [key: string]: string;
}

const emptyManager = (): HubAdmin => ({
  name: "",
  personalEmail: "",
  imageUrl: "",
  socialLinks: { twitter: "", linkedin: "", instagram: "", facebook: "" },
});

const emptyStaff = (): HubStaff => ({ name: "", personalEmail: "" });

export function AdminCreationModal({ onSave, onClose, initial }: Props) {
  const [manager, setManager] = useState<HubAdmin>(initial?.manager ?? emptyManager());
  const [contentManager, setContentManager] = useState<HubStaff>(
    initial?.contentManager ?? emptyStaff(),
  );
  const [programsOfficer, setProgramsOfficer] = useState<HubStaff>(
    initial?.programsOfficer ?? emptyStaff(),
  );
  const [hasCM, setHasCM] = useState(!!initial?.contentManager);
  const [hasPO, setHasPO] = useState(!!initial?.programsOfficer);
  const [expandCM, setExpandCM] = useState(false);
  const [expandPO, setExpandPO] = useState(false);
  const [errors, setErrors] = useState<FieldError>({});
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const e: FieldError = {};
    if (!manager.name.trim()) e["manager.name"] = "Name is required";
    if (!manager.personalEmail.trim()) e["manager.email"] = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(manager.personalEmail))
      e["manager.email"] = "Enter a valid email";

    if (hasCM) {
      if (!contentManager.name.trim()) e["cm.name"] = "Name is required";
      if (!contentManager.personalEmail.trim()) e["cm.email"] = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contentManager.personalEmail))
        e["cm.email"] = "Enter a valid email";
    }

    if (hasPO) {
      if (!programsOfficer.name.trim()) e["po.name"] = "Name is required";
      if (!programsOfficer.personalEmail.trim()) e["po.email"] = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(programsOfficer.personalEmail))
        e["po.email"] = "Enter a valid email";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    onSave({
      manager,
      contentManager: hasCM ? contentManager : undefined,
      programsOfficer: hasPO ? programsOfficer : undefined,
    });
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    try {
      const url = await uploadFile(file);
      setManager((m) => ({ ...m, imageUrl: url }));
    } catch {
      setErrors((e) => ({ ...e, image: "Image upload failed" }));
    } finally {
      setUploading(false);
    }
  };

  const field = (label: string, id: string, value: string, onChange: (v: string) => void, placeholder?: string, type = "text") => (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs font-semibold text-[#5a6b57]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-md border px-3 py-2 text-sm text-[#172018] outline-none transition focus:ring-2 focus:ring-[#009fc3]/40 ${
          errors[id] ? "border-red-400 bg-red-50" : "border-[#a8d8e6] focus:border-[#009fc3]"
        }`}
      />
      {errors[id] && <p className="mt-1 text-xs text-red-500">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#dfe6d7] bg-white px-6 py-4">
          <div>
            <h2 className="text-lg font-black text-[#172018]">Set Up Hub Admins</h2>
            <p className="text-xs text-[#61705d]">
              Hub Manager is required. Content Manager and Programs Officer are optional.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-[#61705d] hover:bg-[#f5f7f2] transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6 p-6">
          {/* Hub Manager — Required */}
          <section>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#006b85] text-xs font-bold text-white">
                1
              </span>
              <h3 className="font-bold text-[#172018]">Hub Manager</h3>
              <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600">
                Required
              </span>
            </div>

            <div className="space-y-4">
              {/* Image Upload */}
              <div>
                <p className="mb-2 text-xs font-semibold text-[#5a6b57]">Profile Photo</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-[#a8d8e6] bg-[#f5f7f2]">
                    {manager.imageUrl ? (
                      <img src={manager.imageUrl} alt="Manager" className="h-full w-full object-cover" />
                    ) : (
                      <UserCircle className="text-[#a8d8e6]" size={40} />
                    )}
                  </div>
                  <div>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) handleImageUpload(f);
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      disabled={uploading}
                      className="flex items-center gap-2 rounded-md border border-[#a8d8e6] bg-white px-3 py-2 text-xs font-semibold text-[#006b85] transition hover:bg-[#e8f4f8] disabled:opacity-50"
                    >
                      {uploading ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <Upload size={14} />
                      )}
                      {uploading ? "Uploading…" : "Upload Photo"}
                    </button>
                    {errors.image && <p className="mt-1 text-xs text-red-500">{errors.image}</p>}
                    <p className="mt-1 text-xs text-[#a0a9a0]">Max 5MB — JPG, PNG, WebP</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {field("Full Name *", "manager.name", manager.name, (v) => setManager((m) => ({ ...m, name: v })), "e.g. Aisha Abdullahi")}
                {field("Personal Email *", "manager.email", manager.personalEmail, (v) => setManager((m) => ({ ...m, personalEmail: v })), "e.g. aisha@gmail.com", "email")}
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold text-[#5a6b57]">Social Links (optional)</p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {(["twitter", "linkedin", "instagram", "facebook"] as const).map((platform) => (
                    <div key={platform}>
                      <label className="mb-1 block text-xs capitalize text-[#61705d]">{platform}</label>
                      <input
                        type="url"
                        value={manager.socialLinks?.[platform] ?? ""}
                        onChange={(e) =>
                          setManager((m) => ({
                            ...m,
                            socialLinks: { ...m.socialLinks, [platform]: e.target.value },
                          }))
                        }
                        placeholder={`https://${platform}.com/…`}
                        className="w-full rounded-md border border-[#dfe6d7] px-3 py-2 text-xs text-[#172018] outline-none transition focus:border-[#009fc3] focus:ring-2 focus:ring-[#009fc3]/30"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <hr className="border-[#dfe6d7]" />

          {/* Content Manager — Optional */}
          <section>
            <button
              type="button"
              onClick={() => {
                setHasCM((v) => !v);
                setExpandCM((v) => !v);
              }}
              className="flex w-full items-center justify-between rounded-lg border border-[#dfe6d7] bg-[#f5f7f2] px-4 py-3 text-left transition hover:bg-[#eef2ea]"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#61705d] text-xs font-bold text-white">
                  2
                </span>
                <span className="font-semibold text-[#172018]">Content Manager</span>
                <span className="rounded-full bg-[#dfe6d7] px-2 py-0.5 text-xs text-[#61705d]">
                  Optional
                </span>
              </div>
              {expandCM ? <ChevronUp size={16} className="text-[#61705d]" /> : <ChevronDown size={16} className="text-[#61705d]" />}
            </button>

            {hasCM && expandCM && (
              <div className="mt-4 grid grid-cols-1 gap-4 pl-2 sm:grid-cols-2">
                {field("Full Name *", "cm.name", contentManager.name, (v) => setContentManager((m) => ({ ...m, name: v })), "e.g. Ibrahim Sani")}
                {field("Personal Email *", "cm.email", contentManager.personalEmail, (v) => setContentManager((m) => ({ ...m, personalEmail: v })), "e.g. ibrahim@gmail.com", "email")}
              </div>
            )}
          </section>

          {/* Programs Officer — Optional */}
          <section>
            <button
              type="button"
              onClick={() => {
                setHasPO((v) => !v);
                setExpandPO((v) => !v);
              }}
              className="flex w-full items-center justify-between rounded-lg border border-[#dfe6d7] bg-[#f5f7f2] px-4 py-3 text-left transition hover:bg-[#eef2ea]"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#61705d] text-xs font-bold text-white">
                  3
                </span>
                <span className="font-semibold text-[#172018]">Programs Officer</span>
                <span className="rounded-full bg-[#dfe6d7] px-2 py-0.5 text-xs text-[#61705d]">
                  Optional
                </span>
              </div>
              {expandPO ? <ChevronUp size={16} className="text-[#61705d]" /> : <ChevronDown size={16} className="text-[#61705d]" />}
            </button>

            {hasPO && expandPO && (
              <div className="mt-4 grid grid-cols-1 gap-4 pl-2 sm:grid-cols-2">
                {field("Full Name *", "po.name", programsOfficer.name, (v) => setProgramsOfficer((m) => ({ ...m, name: v })), "e.g. Fatima Usman")}
                {field("Personal Email *", "po.email", programsOfficer.personalEmail, (v) => setProgramsOfficer((m) => ({ ...m, personalEmail: v })), "e.g. fatima@gmail.com", "email")}
              </div>
            )}
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex items-center justify-end gap-3 border-t border-[#dfe6d7] bg-white px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-[#dfe6d7] bg-white px-5 py-2.5 text-sm font-semibold text-[#172018] transition hover:bg-[#f5f7f2]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="rounded-md bg-[#006b85] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#005a70]"
          >
            Save Admins
          </button>
        </div>
      </div>
    </div>
  );
}
