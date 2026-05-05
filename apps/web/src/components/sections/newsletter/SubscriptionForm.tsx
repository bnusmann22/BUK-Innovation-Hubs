"use client";

import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { id: "programs", label: "Programs & Training" },
    { id: "startups", label: "Startup Opportunities" },
    { id: "events", label: "Events & Hackathons" },
    { id: "grants", label: "Grants & Funding" },
    { id: "internships", label: "Internship Opportunities" },
    { id: "announcements", label: "General Announcements" },
  ];

  const handleCategoryToggle = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((cat) => cat !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setEmail("");
      setSelectedCategories([]);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border border-[#dfe6d7] p-8 bg-white">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email Input */}
              <div>
                <label className="block text-lg font-bold text-[#172018] mb-3">
                  Your Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-[#5a6b57]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b] text-lg"
                  />
                </div>
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-lg font-bold text-[#172018] mb-4">
                  What are you interested in?
                </label>
                <p className="text-[#61705d] mb-4">
                  Select the topics you'd like to hear about. You can change these anytime.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categories.map((cat) => (
                    <label
                      key={cat.id}
                      className="flex items-center gap-3 p-4 rounded-lg border border-[#dfe6d7] cursor-pointer hover:border-[#1b5e2b] hover:bg-[#f5f7f2] transition"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => handleCategoryToggle(cat.id)}
                        className="w-5 h-5 rounded border-[#c9d5c3] text-[#1b5e2b] cursor-pointer"
                      />
                      <span className="font-semibold text-[#172018]">{cat.label}</span>
                    </label>
                  ))}
                </div>

                {selectedCategories.length === 0 && (
                  <p className="text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-2 mt-4">
                    Please select at least one category
                  </p>
                )}
              </div>

              {/* Newsletter Frequency */}
              <div>
                <label className="block text-lg font-bold text-[#172018] mb-3">
                  Email Frequency
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]">
                  <option>Weekly Digest</option>
                  <option>Bi-weekly</option>
                  <option>Monthly</option>
                  <option>Immediate Updates</option>
                </select>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="w-5 h-5 rounded border-[#c9d5c3] text-[#1b5e2b] mt-1"
                />
                <label htmlFor="consent" className="text-[#61705d] text-sm">
                  I agree to receive emails from BUK Innovation Hubs and understand I can unsubscribe
                  anytime. See our{" "}
                  <a href="#" className="text-[#1b5e2b] font-semibold hover:text-[#154a22]">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!email || selectedCategories.length === 0}
                className="w-full bg-[#1b5e2b] text-white py-3 rounded-lg font-bold hover:bg-[#154a22] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Subscribe to Newsletter <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-[#1b5e2b] mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-[#172018] mb-2">Successfully Subscribed!</h2>
              <p className="text-[#61705d] mb-4">
                Check your email for a confirmation link. We'll start sending you updates based on your
                preferences.
              </p>
              <p className="text-sm text-[#5a6b57]">
                Redirecting you back... or{" "}
                <button
                  onClick={() => {
                    setEmail("");
                    setSelectedCategories([]);
                    setSubmitted(false);
                  }}
                  className="text-[#1b5e2b] font-semibold hover:text-[#154a22]"
                >
                  subscribe with another email
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}