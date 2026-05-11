"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { CheckCircle, ChevronDown, Loader2, Search, UserSearch, X } from "lucide-react";

// ── Department list (from buk.edu.ng/Undergraduate_Programmes) ────────────────

const DEPARTMENTS = [
  "Accounting",
  "Adult Education / Biology",
  "Adult Education / Economics",
  "Adult Education / English",
  "Adult Education / Geography",
  "Adult Education / Islamic Studies",
  "Adult Education / Physics",
  "Adult Education and Community Services",
  "Agricultural Economics and Extension",
  "Agricultural Extension (SAFE Programme)",
  "Agricultural and Environmental Engineering",
  "Agriculture",
  "Applied Biology",
  "Arabic",
  "Arabic Education",
  "Architecture",
  "Arts (Combined)",
  "Automotive Engineering",
  "Biochemistry",
  "Biology",
  "Botany",
  "Business Administration",
  "Chemical Engineering",
  "Chemistry",
  "Civil Engineering",
  "Computer Engineering",
  "Computer Science",
  "Computer Science / Economics",
  "Criminology",
  "Cyber Security",
  "Dental Surgery",
  "Early Childhood Education",
  "Economics",
  "Education (General)",
  "Electrical Engineering",
  "Electronics with Physics",
  "English",
  "English Education",
  "Entrepreneurship",
  "Environmental Health Science",
  "Environmental Management",
  "Estate Management",
  "Finance",
  "Fisheries and Aquaculture",
  "Food Science and Technology",
  "Forensic Science",
  "Forestry and Wildlife Management",
  "French",
  "French Education",
  "Geography",
  "Geography Education",
  "Geography and Environmental Management",
  "Geology",
  "Hausa",
  "Hausa Education",
  "History",
  "History Education",
  "Human Physiology",
  "Industrial Chemistry",
  "Information Technology",
  "Information and Media Studies",
  "International Relations",
  "Islamic Studies",
  "Islamic Studies Education",
  "Irrigation Engineering",
  "Law (LL.B)",
  "Library and Information Science",
  "Linguistics",
  "Mass Communication",
  "Mathematics",
  "Mechanical Engineering",
  "Mechatronics Engineering",
  "Medical Laboratory Science",
  "Medicine and Surgery (MBBS)",
  "Meteorology",
  "Microbiology",
  "Nursing Science",
  "Nutrition and Dietetics",
  "Optometry",
  "Petroleum Engineering",
  "Pharmacy",
  "Physics",
  "Physics with Electronics",
  "Physiotherapy",
  "Political Science",
  "Primary Education",
  "Public Administration",
  "Quantity Surveying",
  "Radiography",
  "Science and Technical Education",
  "Sharia",
  "Sociology",
  "Software Engineering",
  "Special Education",
  "Statistics",
  "Taxation",
  "Telecommunication Engineering",
  "Theatre and Performing Arts",
  "Urban and Regional Planning",
  "Veterinary Medicine",
  "Zoology",
].sort();

// ── Tech skills list ──────────────────────────────────────────────────────────

const TECH_SKILLS = [
  "3D Modeling & Animation",
  "Android Development",
  "Arduino / Embedded Systems",
  "Artificial Intelligence (AI)",
  "Backend Development",
  "Blockchain / Web3",
  "Business Analysis",
  "C / C++ Programming",
  "Cloud Computing (AWS / Azure / GCP)",
  "Computer Networking",
  "Cybersecurity",
  "Data Analysis",
  "Data Science",
  "Database Administration",
  "DevOps / CI/CD",
  "Digital Marketing",
  "Electronics & Circuit Design",
  "Flutter / Cross-platform Development",
  "Frontend Development",
  "Game Development",
  "Graphic Design",
  "Hardware Engineering",
  "iOS Development (Swift)",
  "Internet of Things (IoT)",
  "Java Programming",
  "JavaScript / TypeScript",
  "Linux / System Administration",
  "Machine Learning",
  "MATLAB",
  "Motion Graphics",
  "Photography & Videography",
  "Product Management",
  "Python Programming",
  "R Programming",
  "Robotics",
  "Software Testing & QA",
  "SQL & Database Design",
  "Technical Writing",
  "UI / UX Design",
  "Video Editing",
  "Web Design",
  "Web Development (Full Stack)",
].sort();

// ── DepartmentSelect ──────────────────────────────────────────────────────────

function DepartmentSelect({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => searchRef.current?.focus(), 0);
    }
  }, [open]);

  const filtered = DEPARTMENTS.filter((d) =>
    d.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm outline-none transition ${
          error
            ? "border-red-400 bg-red-50"
            : open
              ? "border-[#009fc3] ring-2 ring-[#009fc3]/10"
              : "border-[#dfe6d7] bg-white"
        }`}
      >
        <span className={value ? "text-[#172018]" : "text-[#8b9a86]"}>
          {value || "Select your department…"}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-[#8b9a86] transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-[#dfe6d7] bg-white shadow-xl">
          <div className="border-b border-[#dfe6d7] p-2">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#8b9a86]"
              />
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search departments…"
                className="w-full rounded-md border border-[#dfe6d7] py-2 pl-8 pr-3 text-sm outline-none focus:border-[#009fc3]"
              />
            </div>
          </div>
          <ul className="max-h-52 overflow-y-auto py-1">
            {filtered.length > 0 ? (
              filtered.map((dept) => (
                <li key={dept}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(dept);
                      setOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition hover:bg-[#e8f4f8] hover:text-[#006b85] ${
                      value === dept
                        ? "bg-[#e8f4f8] font-semibold text-[#006b85]"
                        : "text-[#172018]"
                    }`}
                  >
                    {dept}
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-sm text-[#8b9a86]">No departments found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// ── SkillPicker ───────────────────────────────────────────────────────────────

function SkillPicker({
  selected,
  onChange,
  error,
}: {
  selected: string[];
  onChange: (skills: string[]) => void;
  error?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const trimmed = query.trim();

  const filtered = TECH_SKILLS.filter(
    (s) =>
      s.toLowerCase().includes(query.toLowerCase()) && !selected.includes(s),
  );

  const canAddCustom =
    trimmed.length >= 2 &&
    !TECH_SKILLS.some((s) => s.toLowerCase() === trimmed.toLowerCase()) &&
    !selected.some((s) => s.toLowerCase() === trimmed.toLowerCase());

  const showDropdown = open && (filtered.length > 0 || canAddCustom);

  const addSkill = (skill: string) => {
    onChange([...selected, skill]);
    setQuery("");
    inputRef.current?.focus();
  };

  const removeSkill = (skill: string) => {
    onChange(selected.filter((s) => s !== skill));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && trimmed && canAddCustom) {
      e.preventDefault();
      addSkill(trimmed);
    }
    if (e.key === "Backspace" && !query && selected.length > 0) {
      removeSkill(selected[selected.length - 1]);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        onClick={() => {
          setOpen(true);
          inputRef.current?.focus();
        }}
        className={`min-h-[48px] w-full cursor-text rounded-lg border px-3 py-2 transition ${
          error
            ? "border-red-400 bg-red-50"
            : open
              ? "border-[#009fc3] ring-2 ring-[#009fc3]/10"
              : "border-[#dfe6d7] bg-white"
        }`}
      >
        <div className="flex flex-wrap gap-1.5">
          {selected.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 rounded-full bg-[#e8f4f8] px-2.5 py-1 text-xs font-semibold text-[#006b85]"
            >
              {skill}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeSkill(skill);
                }}
                className="transition hover:text-red-500"
              >
                <X size={11} />
              </button>
            </span>
          ))}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={selected.length === 0 ? "Search or type a skill…" : "Add more…"}
            className="min-w-[120px] flex-1 bg-transparent text-sm text-[#172018] outline-none placeholder:text-[#8b9a86]"
          />
        </div>
      </div>

      {showDropdown && (
        <ul className="absolute z-50 mt-1 max-h-52 w-full overflow-y-auto rounded-lg border border-[#dfe6d7] bg-white py-1 shadow-xl">
          {filtered.map((skill) => (
            <li key={skill}>
              <button
                type="button"
                onClick={() => addSkill(skill)}
                className="w-full px-4 py-2 text-left text-sm text-[#172018] transition hover:bg-[#e8f4f8] hover:text-[#006b85]"
              >
                {skill}
              </button>
            </li>
          ))}
          {canAddCustom && (
            <li className="border-t border-[#dfe6d7]">
              <button
                type="button"
                onClick={() => addSkill(trimmed)}
                className="w-full px-4 py-2 text-left text-sm font-semibold text-[#009fc3] transition hover:bg-[#e8f4f8]"
              >
                + Add &ldquo;{trimmed}&rdquo;
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

// ── RegNumberInput ─────────────────────────────────────────────────────────────
// Format: CST/23/SWE/00989 → 3 chars / 2 digits / 3 chars / 5 digits

function RegNumberInput({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}) {
  const formatValue = (input: string): string => {
    // Remove all non-alphanumeric characters
    const cleaned = input.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

    // Build formatted string with slashes at correct positions
    let formatted = "";
    let pos = 0;

    // First 3 characters
    if (pos < cleaned.length) {
      formatted += cleaned.slice(pos, pos + 3);
      pos += 3;
    }
    if (pos < cleaned.length) {
      formatted += "/";
      formatted += cleaned.slice(pos, pos + 2);
      pos += 2;
    }
    if (pos < cleaned.length) {
      formatted += "/";
      formatted += cleaned.slice(pos, pos + 3);
      pos += 3;
    }
    if (pos < cleaned.length) {
      formatted += "/";
      formatted += cleaned.slice(pos, pos + 5);
    }

    return formatted;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatValue(e.target.value);
    onChange(formatted);
  };

  // Validate format: 3 letters / 2 digits / 3 letters / 5 digits
  const isValid = (val: string): boolean => {
    const pattern = /^[A-Z]{3}\/\d{2}\/[A-Z]{3}\/\d{5}$/;
    return pattern.test(val);
  };

  // Only show validation error after field is complete OR after form submission (error prop)
  const isComplete = value.length === 16;
  const showError = error || (isComplete && !isValid(value));
  const errorMsg = showError
    ? "Format: 3 letters / 2 digits / 3 letters / 5 digits (e.g., CST/23/SWE/00989)"
    : "";

  return (
    <FormField
      label="Registration Number"
      value={value}
      onChange={onChange}
      placeholder="CST/23/SWE/00989"
      type="text"
      error={showError}
      errorMessage={errorMsg}
    />
  );
}

// ── PhoneInput ─────────────────────────────────────────────────────────────────
// Format: 11 digits, starting with 080, 081, 070, 071, 090, 091

function PhoneInput({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}) {
  const formatValue = (input: string): string => {
    // Remove all non-digit characters
    const cleaned = input.replace(/\D/g, "");
    // Limit to 11 digits
    return cleaned.slice(0, 11);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatValue(e.target.value);
    onChange(formatted);
  };

  // Validate: exactly 11 digits, starts with allowed prefixes
  const isValid = (val: string): boolean => {
    if (val.length !== 11) return false;
    const allowedPrefixes = ["080", "081", "070", "071", "090", "091"];
    return allowedPrefixes.some((prefix) => val.startsWith(prefix));
  };

  // Only show validation error after field is complete OR after form submission (error prop)
  const isComplete = value.length === 11;
  const showError = error || (isComplete && !isValid(value));
  const errorMsg = showError
    ? "Phone must be 11 digits starting with 080, 081, 070, 071, 090, or 091"
    : "";

  return (
    <FormField
      label="WhatsApp Number"
      value={value}
      onChange={onChange}
      placeholder="08012345678"
      type="tel"
      error={showError}
      errorMessage={errorMsg}
    />
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  errorMessage,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "email" | "tel" | "text";
  error?: boolean;
  errorMessage?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#172018]">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        className={`w-full rounded-lg border px-4 py-3 text-sm text-[#172018] outline-none transition placeholder:text-[#8b9a86] focus:ring-2 focus:ring-[#009fc3]/10 ${
          error
            ? "border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-100"
            : "border-[#dfe6d7] bg-white focus:border-[#009fc3]"
        }`}
      />
      {error && errorMessage && (
        <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
      )}
    </label>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

type ModalStep = "call" | "form" | "success";

export default function TalentDiscoveryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ModalStep>("call");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
   const [fieldErrors, setFieldErrors] = useState({ 
    department: false, 
    skills: false,
    regNumber: false,
    whatsappNumber: false
  });

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    regNumber: "",
    whatsappNumber: "",
    email: "",
  });

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const set = (key: keyof typeof formData) => (value: string) =>
    setFormData((f) => ({ ...f, [key]: value }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const deptErr = !formData.department;
    const skillsErr = skills.length === 0;

    // Validate Registration Number
    const regNumberPattern = /^[A-Z]{3}\/\d{2}\/[A-Z]{3}\/\d{5}$/;
    const regErr = !regNumberPattern.test(formData.regNumber);

    // Validate WhatsApp Number
    const phonePattern = /^(080|081|070|071|090|091)\d{8}$/;
    const phoneErr = !phonePattern.test(formData.whatsappNumber);

    if (deptErr || skillsErr || regErr || phoneErr) {
      setFieldErrors({
        department: deptErr,
        skills: skillsErr,
        regNumber: regErr,
        whatsappNumber: phoneErr,
      });
      return;
    }
    setFieldErrors({ department: false, skills: false, regNumber: false, whatsappNumber: false });

    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/talent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, skillset: skills.join(", ") }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || "Submission failed. Please try again.");
        return;
      }

      setStep("success");
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#172018]/80 backdrop-blur-sm">
      <div className="relative flex min-h-full items-start justify-center px-4 py-14 sm:items-center sm:px-6 sm:py-10 lg:px-8">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="fixed right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/95 text-[#172018] shadow-lg transition hover:bg-white sm:right-6 sm:top-6"
        >
          <X className="h-5 w-5" />
        </button>

        {/* ── Call to action ── */}
        {step === "call" && (
          <div className="w-full max-w-5xl overflow-hidden rounded-lg border border-white/20 bg-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col justify-center bg-gradient-to-br from-[#009fc3] to-[#006b85] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 sm:h-14 sm:w-14">
                  <UserSearch className="h-5 w-5 sm:h-8 sm:w-8" />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75 sm:mb-3 sm:text-sm">
                  Call for partners
                </p>
                <h2 className="mb-3 text-2xl font-black leading-tight sm:mb-4 sm:text-4xl lg:text-5xl">
                  BUK Innovation Hub Talent Discovery
                </h2>
                <p className="text-sm leading-relaxed text-white/90 sm:text-lg">
                  We are identifying skilled students, builders, creatives, researchers, and
                  technical talent across departments for upcoming innovation programs,
                  partnerships, and project opportunities.
                </p>
              </div>

              <div className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                <div className="mb-5 space-y-3 sm:mb-8">
                  {[
                    "Register your skillset with the Innovation Hub.",
                    "Get considered for talent discovery opportunities.",
                    "Join partner-backed projects and innovation activities.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#009fc3] sm:h-5 sm:w-5" />
                      <p className="text-sm text-[#61705d] sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#009fc3] px-6 py-4 text-base font-bold text-white transition hover:bg-[#0088a6]"
                >
                  Submit Talent Profile
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-[#dfe6d7] px-6 py-3 text-sm font-bold text-[#61705d] transition hover:border-[#009fc3] hover:text-[#009fc3] sm:mt-4"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Form ── */}
        {step === "form" && (
          <div className="w-full max-w-2xl rounded-lg border border-[#dfe6d7] bg-white p-5 shadow-2xl sm:p-8">
            <div className="mb-6">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#009fc3]">
                Talent profile
              </p>
              <h2 className="text-2xl font-black text-[#172018] sm:text-3xl">
                Tell us what you can build
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
               {/* Row 1 */}
               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                 <FormField
                   label="Full Name"
                   value={formData.name}
                   onChange={set("name")}
                 />
                 <RegNumberInput
                   value={formData.regNumber}
                   onChange={(v) => {
                     set("regNumber")(v);
                     setFieldErrors((fe) => ({ ...fe, regNumber: false }));
                   }}
                   error={fieldErrors.regNumber}
                 />
               </div>

               {/* Row 2 */}
               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                 <PhoneInput
                   value={formData.whatsappNumber}
                   onChange={(v) => {
                     set("whatsappNumber")(v);
                     setFieldErrors((fe) => ({ ...fe, whatsappNumber: false }));
                   }}
                   error={fieldErrors.whatsappNumber}
                 />
                 <FormField
                   label="Email Address"
                   type="email"
                   value={formData.email}
                   onChange={set("email")}
                 />
               </div>

              {/* Department */}
              <div>
                <span className="mb-2 block text-sm font-bold text-[#172018]">
                  Department <span className="text-red-400">*</span>
                </span>
                <DepartmentSelect
                  value={formData.department}
                  onChange={(v) => {
                    setFormData((f) => ({ ...f, department: v }));
                    setFieldErrors((fe) => ({ ...fe, department: false }));
                  }}
                  error={fieldErrors.department}
                />
                {fieldErrors.department && (
                  <p className="mt-1 text-xs text-red-500">Please select your department</p>
                )}
              </div>

              {/* Skills */}
              <div>
                <span className="mb-2 block text-sm font-bold text-[#172018]">
                  Skills <span className="text-red-400">*</span>
                </span>
                <SkillPicker
                  selected={skills}
                  onChange={(s) => {
                    setSkills(s);
                    setFieldErrors((fe) => ({ ...fe, skills: false }));
                  }}
                  error={fieldErrors.skills}
                />
                {fieldErrors.skills ? (
                  <p className="mt-1 text-xs text-red-500">Add at least one skill</p>
                ) : (
                  <p className="mt-1 text-xs text-[#a0a9a0]">
                    Select from the list or type your own and press Enter
                  </p>
                )}
              </div>

              {submitError && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#009fc3] px-6 py-4 text-base font-bold text-white transition hover:bg-[#0088a6] disabled:opacity-60"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {submitting ? "Submitting…" : "Submit Profile"}
              </button>
            </form>
          </div>
        )}

        {/* ── Success ── */}
        {step === "success" && (
          <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-2xl sm:p-8">
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-[#009fc3] sm:h-14 sm:w-14" />
            <h2 className="mb-2 text-xl font-black text-[#172018] sm:text-2xl">
              Profile submitted!
            </h2>
            <p className="text-sm leading-7 text-[#61705d] sm:text-base">
              Thank you. The Innovation Hub team has received your talent profile.
              <br />
              <strong className="text-[#172018]">Check your email</strong> — we&apos;ve sent
              you a confirmation with the link to join our WhatsApp community.
            </p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#009fc3] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0088a6]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
