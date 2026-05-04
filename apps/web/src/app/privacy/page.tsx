"use client";

import Link from "next/link";
import { Shield, Eye, Lock, Database, Mail, Phone } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-[#172018] mb-4">Privacy Policy</h1>
          <p className="text-xl text-[#61705d] max-w-3xl">
            Your privacy is important to us. This policy explains how BUK Innovation Hubs
            collects, uses, and protects your personal information.
          </p>
          <div className="mt-6 text-sm text-[#5a6b57]">
            Last updated: May 4, 2026
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none text-[#172018]">

            {/* Introduction */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-[#1b5e2b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[#172018] mb-3">Our Commitment to Privacy</h2>
                  <p className="text-[#61705d] leading-relaxed">
                    BUK Innovation Hubs ("we," "us," or "our") is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                    when you visit our website, use our services, or participate in our programs.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <Eye className="w-8 h-8 text-[#1b5e2b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[#172018] mb-4">Information We Collect</h2>

                  <h3 className="text-xl font-semibold text-[#172018] mb-3">Personal Information</h3>
                  <p className="text-[#61705d] mb-4">
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 text-[#61705d] mb-6 space-y-2">
                    <li>Name, email address, phone number</li>
                    <li>Educational background and institution</li>
                    <li>Professional experience and skills</li>
                    <li>Program registration information</li>
                    <li>Newsletter subscription preferences</li>
                    <li>Communication history with our team</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#172018] mb-3">Automatically Collected Information</h3>
                  <p className="text-[#61705d] mb-4">
                    When you visit our website, we automatically collect certain information:
                  </p>
                  <ul className="list-disc pl-6 text-[#61705d] mb-6 space-y-2">
                    <li>IP address and location information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Device information and screen resolution</li>
                    <li>Referral sources</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <Database className="w-8 h-8 text-[#1b5e2b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[#172018] mb-4">How We Use Your Information</h2>
                  <p className="text-[#61705d] mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                    <li><strong>Program Administration:</strong> Process applications, manage registrations, and communicate about programs</li>
                    <li><strong>Communication:</strong> Send newsletters, event invitations, and important updates</li>
                    <li><strong>Community Building:</strong> Connect innovators, facilitate networking, and build our ecosystem</li>
                    <li><strong>Research & Analytics:</strong> Understand our community needs and improve our services</li>
                    <li><strong>Legal Compliance:</strong> Meet legal obligations and protect our rights</li>
                    <li><strong>Website Improvement:</strong> Enhance user experience and website functionality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Information Sharing and Disclosure</h2>
              <p className="text-[#61705d] mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
                <li><strong>Service Providers:</strong> With trusted partners who help us operate (under strict confidentiality agreements)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Program Partners:</strong> With sponsors or partners for program administration (with your consent)</li>
                <li><strong>Aggregated Data:</strong> Non-identifiable, aggregated data for research and reporting</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <Lock className="w-8 h-8 text-[#1b5e2b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[#172018] mb-4">Data Security</h2>
                  <p className="text-[#61705d] mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information:
                  </p>
                  <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure data storage with access controls</li>
                    <li>Regular security audits and updates</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-[#61705d] mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used for targeted communications (with consent)</li>
              </ul>
              <p className="text-[#61705d] mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Your Rights */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Your Rights and Choices</h2>
              <p className="text-[#61705d] mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for processing</li>
              </ul>
              <p className="text-[#61705d] mt-4">
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@buk-hubs.edu.ng" className="text-[#1b5e2b] font-semibold hover:text-[#154a22]">
                  privacy@buk-hubs.edu.ng
                </a>
              </p>
            </div>

            {/* Data Retention */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Data Retention</h2>
              <p className="text-[#61705d] mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li><strong>Program Records:</strong> 7 years after program completion</li>
                <li><strong>Newsletter Subscriptions:</strong> Until you unsubscribe</li>
                <li><strong>Website Analytics:</strong> 2 years for analysis purposes</li>
                <li><strong>Legal Requirements:</strong> As required by applicable laws</li>
              </ul>
            </div>

            {/* International Data Transfers */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">International Data Transfers</h2>
              <p className="text-[#61705d]">
                Your information may be transferred to and processed in countries other than Nigeria.
                We ensure appropriate safeguards are in place to protect your data during such transfers,
                including standard contractual clauses and adequacy decisions.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Children's Privacy</h2>
              <p className="text-[#61705d]">
                Our services are intended for individuals 18 years and older. We do not knowingly collect
                personal information from children under 18. If we become aware that we have collected
                personal information from a child under 18, we will take steps to delete such information.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Changes to This Privacy Policy</h2>
              <p className="text-[#61705d] mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material
                changes by posting the new policy on this page and updating the "Last updated" date.
                We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Contact Us</h2>
              <p className="text-[#61705d] mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1b5e2b]" />
                  <a href="mailto:privacy@buk-hubs.edu.ng" className="text-[#1b5e2b] font-semibold hover:text-[#154a22]">
                    privacy@buk-hubs.edu.ng
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#1b5e2b]" />
                  <a href="tel:+2348000000000" className="text-[#1b5e2b] font-semibold hover:text-[#154a22]">
                    +234 800 000 0000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
