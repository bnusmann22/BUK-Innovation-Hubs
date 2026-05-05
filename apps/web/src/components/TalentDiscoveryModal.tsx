"use client";

import { FormEvent, useEffect, useState } from "react";
import { CheckCircle, UserSearch, X } from "lucide-react";

type ModalStep = "call" | "form" | "success";

export default function TalentDiscoveryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ModalStep>("call");
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    regNumber: "",
    whatsappNumber: "",
    skillset: "",
    email: "",
  });

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep("success");

    window.setTimeout(() => {
      setIsOpen(false);
    }, 1800);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#172018]/80 backdrop-blur-sm">
      <div className="relative flex min-h-dvh items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close talent discovery call"
          className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/95 text-[#172018] shadow-lg transition hover:bg-white sm:right-6 sm:top-6"
        >
          <X className="h-5 w-5" />
        </button>

        {step === "call" && (
          <div className="w-full max-w-5xl overflow-hidden rounded-lg border border-white/20 bg-white shadow-2xl">
            <div className="grid min-h-[min(760px,calc(100dvh-3rem))] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col justify-center bg-gradient-to-br from-[#1b5e2b] to-[#006b85] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/15 sm:h-14 sm:w-14">
                  <UserSearch className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/75 sm:text-sm">
                  Call for partners
                </p>
                <h2 className="mb-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  BUK Innovation Hub Talent Discovery
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                  We are identifying skilled students, builders, creatives, researchers, and technical talent across departments for upcoming innovation programs, partnerships, and project opportunities.
                </p>
              </div>

              <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10">
                <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
                  {[
                    "Register your skillset with the Innovation Hub.",
                    "Get considered for talent discovery opportunities.",
                    "Join partner-backed projects and innovation activities.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1b5e2b]" />
                      <p className="text-sm text-[#61705d] sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#1b5e2b] px-6 py-4 text-base font-bold text-white transition hover:bg-[#154a22] sm:py-4"
                >
                  Submit Talent Profile
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-[#dfe6d7] px-6 py-3 text-sm font-bold text-[#61705d] transition hover:border-[#1b5e2b] hover:text-[#1b5e2b] sm:mt-4 sm:py-3"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        )}

        {step === "form" && (
          <div className="w-full max-w-2xl rounded-lg border border-[#dfe6d7] bg-white p-6 shadow-2xl sm:p-8">
            <div className="mb-6">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#1b5e2b]">
                Talent profile
              </p>
              <h2 className="text-2xl font-black text-[#172018] sm:text-3xl">Tell us what you can build</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  value={formData.name}
                  onChange={(value) => setFormData((current) => ({ ...current, name: value }))}
                />
                <FormField
                  label="Department"
                  value={formData.department}
                  onChange={(value) => setFormData((current) => ({ ...current, department: value }))}
                />
                <FormField
                  label="Registration Number"
                  value={formData.regNumber}
                  onChange={(value) => setFormData((current) => ({ ...current, regNumber: value }))}
                />
                <FormField
                  label="WhatsApp Number"
                  type="tel"
                  value={formData.whatsappNumber}
                  onChange={(value) => setFormData((current) => ({ ...current, whatsappNumber: value }))}
                />
                <FormField
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(value) => setFormData((current) => ({ ...current, email: value }))}
                />
                <FormField
                  label="Skillset"
                  value={formData.skillset}
                  onChange={(value) => setFormData((current) => ({ ...current, skillset: value }))}
                  placeholder="Design, frontend, AI, data, hardware..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#1b5e2b] px-6 py-4 text-base font-bold text-white transition hover:bg-[#154a22] sm:py-4"
              >
                Submit Profile
              </button>
            </form>
          </div>
        )}

        {step === "success" && (
          <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-2xl sm:p-8">
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-[#1b5e2b] sm:h-14 sm:w-14" />
            <h2 className="mb-2 text-xl font-black text-[#172018] sm:text-2xl">Profile submitted</h2>
            <p className="text-sm text-[#61705d] sm:text-base">
              Thank you. The Innovation Hub team has received your talent profile.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "email" | "tel" | "text";
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: FormFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#172018]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required
        className="w-full rounded-lg border border-[#dfe6d7] bg-white px-4 py-3 text-[#172018] outline-none transition placeholder:text-[#8b9a86] focus:border-[#1b5e2b] focus:ring-2 focus:ring-[#1b5e2b]/10"
      />
    </label>
  );
}
