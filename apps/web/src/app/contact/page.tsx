"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  FileText,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "general",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", category: "general", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "innovation@buk.edu.ng",
      description: "For general inquiries and support",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 (0) 800 000 0000",
      description: "Monday - Friday, 9AM - 5PM",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Bayero University Kano, Nigeria",
      description: "Kofar Maraji Campus, Innovation Hub Building",
    },
  ];

  const departments = [
    {
      name: "General Inquiries",
      email: "info@buk-hubs.edu.ng",
      icon: MessageSquare,
    },
    {
      name: "Program Registration",
      email: "programs@buk-hubs.edu.ng",
      icon: FileText,
    },
    {
      name: "Partnership & Sponsorship",
      email: "partnerships@buk-hubs.edu.ng",
      icon: Briefcase,
    },
    {
      name: "Event & Workshop",
      email: "events@buk-hubs.edu.ng",
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-[#172018] mb-4">Get in Touch</h1>
          <p className="text-xl text-[#61705d] max-w-3xl">
            Have questions about our programs, hubs, or opportunities? We'd love to hear from you.
            Contact us through any of the channels below or fill out the form.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#dfe6d7] p-8 hover:shadow-lg transition text-center"
              >
                <method.icon className="w-12 h-12 text-[#1b5e2b] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#172018] mb-2">{method.title}</h3>
                <p className="text-lg font-semibold text-[#1b5e2b] mb-2">{method.value}</p>
                <p className="text-sm text-[#61705d]">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[#172018] mb-12 text-center">Department Contacts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, idx) => (
              <a
                key={idx}
                href={`mailto:${dept.email}`}
                className="rounded-lg border border-[#dfe6d7] p-6 hover:shadow-lg hover:border-[#1b5e2b] transition bg-white text-center"
              >
                <dept.icon className="w-10 h-10 text-[#1b5e2b] mx-auto mb-3" />
                <h3 className="font-bold text-[#172018] mb-2">{dept.name}</h3>
                <p className="text-sm text-[#1b5e2b] font-semibold hover:text-[#154a22]">
                  {dept.email}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-[#172018] mb-8 text-center">Send us a Message</h2>

          <div className="rounded-lg border border-[#dfe6d7] p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#172018] mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#172018] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#172018] mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                      placeholder="+234..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#172018] mb-2">Category *</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="program">Program Registration</option>
                      <option value="partnership">Partnership</option>
                      <option value="event">Event Inquiry</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-bold text-[#172018] mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-[#172018] mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[#dfe6d7] bg-white focus:outline-none focus:border-[#1b5e2b]"
                    placeholder="Please tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#1b5e2b] text-white py-3 rounded-lg font-bold hover:bg-[#154a22] transition flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✓</div>
                <h2 className="text-2xl font-bold text-[#172018] mb-2">Message Sent!</h2>
                <p className="text-[#61705d] mb-4">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-[#172018] mb-8 text-center">Office Hours</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="rounded-lg border border-[#dfe6d7] p-6 text-center">
              <Clock className="w-10 h-10 text-[#1b5e2b] mx-auto mb-3" />
              <h3 className="font-bold text-[#172018] mb-3">Regular Hours</h3>
              <div className="text-[#61705d] text-sm space-y-1">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>

            <div className="rounded-lg border border-[#dfe6d7] p-6 text-center">
              <MessageSquare className="w-10 h-10 text-[#1b5e2b] mx-auto mb-3" />
              <h3 className="font-bold text-[#172018] mb-3">Response Time</h3>
              <div className="text-[#61705d] text-sm space-y-1">
                <p><strong>Emails:</strong> Within 24 hours</p>
                <p><strong>Phone:</strong> Same business day</p>
                <p><strong>Forms:</strong> Within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
