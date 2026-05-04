"use client";

import Link from "next/link";
import { FileText, Users, AlertTriangle, Scale, Mail, Phone } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-[#172018] mb-4">Terms of Service</h1>
          <p className="text-xl text-[#61705d] max-w-3xl">
            These terms govern your use of BUK Innovation Hubs services and website.
            By using our platform, you agree to these terms.
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

            {/* Acceptance of Terms */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="w-8 h-8 text-[#1b5e2b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[#172018] mb-3">Acceptance of Terms</h2>
                  <p className="text-[#61705d] leading-relaxed">
                    Welcome to BUK Innovation Hubs. These Terms of Service ("Terms") govern your access to and use of
                    our website, services, programs, and community platforms. By accessing or using our services,
                    you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Description of Service */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Description of Service</h2>
              <p className="text-[#61705d] mb-4">
                BUK Innovation Hubs provides:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li>Innovation hub directory and information</li>
                <li>Program registration and management</li>
                <li>Event registration and community networking</li>
                <li>Newsletter and communication services</li>
                <li>Startup showcase and mentorship opportunities</li>
                <li>Educational resources and workshops</li>
                <li>Community forums and collaboration tools</li>
              </ul>
            </div>

            {/* User Eligibility */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-8 h-8 text-[#1b5e2b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[#172018] mb-4">User Eligibility</h2>
                  <p className="text-[#61705d] mb-4">
                    To use our services, you must:
                  </p>
                  <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                    <li>Be at least 18 years old</li>
                    <li>Be affiliated with Bayero University Kano or related institutions</li>
                    <li>Provide accurate and complete registration information</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Use the services in accordance with applicable laws</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">User Responsibilities</h2>
              <p className="text-[#61705d] mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li>Provide truthful and accurate information</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain professional and respectful communication</li>
                <li>Not engage in harmful or illegal activities</li>
                <li>Report security vulnerabilities or inappropriate content</li>
                <li>Comply with program-specific rules and guidelines</li>
                <li>Keep your contact information current</li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-[#1b5e2b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[#172018] mb-4">Prohibited Activities</h2>
                  <p className="text-[#61705d] mb-4">
                    You may not use our services to:
                  </p>
                  <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit harmful, offensive, or inappropriate content</li>
                    <li>Attempt to gain unauthorized access to systems</li>
                    <li>Distribute malware or engage in cyber attacks</li>
                    <li>Impersonate others or misrepresent your identity</li>
                    <li>Spam other users or send unsolicited communications</li>
                    <li>Interfere with the proper functioning of our services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Intellectual Property</h2>
              <p className="text-[#61705d] mb-4">
                All content, features, and functionality of our services are owned by BUK Innovation Hubs
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li>You may not reproduce, distribute, or create derivative works without permission</li>
                <li>You retain ownership of content you submit, but grant us a license to use it</li>
                <li>We respect your intellectual property rights and expect the same in return</li>
                <li>Program materials may have additional licensing terms</li>
              </ul>
            </div>

            {/* Privacy and Data Protection */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Privacy and Data Protection</h2>
              <p className="text-[#61705d] mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our{" "}
                <Link href="/privacy" className="text-[#1b5e2b] font-semibold hover:text-[#154a22]">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
              <p className="text-[#61705d]">
                By using our services, you consent to the collection, use, and sharing of your information
                as described in our Privacy Policy.
              </p>
            </div>

            {/* Service Availability */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Service Availability and Modifications</h2>
              <p className="text-[#61705d] mb-4">
                We strive to provide reliable services but cannot guarantee uninterrupted availability:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li>Services may be temporarily unavailable for maintenance</li>
                <li>We reserve the right to modify or discontinue services</li>
                <li>We will provide reasonable notice of significant changes</li>
                <li>Program schedules and offerings may change</li>
                <li>Emergency situations may require immediate service interruption</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <Scale className="w-8 h-8 text-[#1b5e2b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[#172018] mb-4">Limitation of Liability</h2>
                  <p className="text-[#61705d] mb-4">
                    To the maximum extent permitted by law, BUK Innovation Hubs shall not be liable for:
                  </p>
                  <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Service interruptions or data loss</li>
                    <li>Third-party actions or content</li>
                    <li>Acts of nature or force majeure events</li>
                  </ul>
                  <p className="text-[#61705d] mt-4">
                    Our total liability shall not exceed the amount paid by you for services in the 12 months preceding the claim.
                  </p>
                </div>
              </div>
            </div>

            {/* Indemnification */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Indemnification</h2>
              <p className="text-[#61705d]">
                You agree to indemnify and hold harmless BUK Innovation Hubs, its officers, directors,
                employees, and agents from any claims, damages, losses, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] mt-4 space-y-2">
                <li>Your violation of these Terms</li>
                <li>Your use of our services</li>
                <li>Your infringement of third-party rights</li>
                <li>Content you submit or share</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Termination</h2>
              <p className="text-[#61705d] mb-4">
                Either party may terminate these Terms at any time:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li><strong>You may terminate:</strong> By ceasing use of our services</li>
                <li><strong>We may terminate:</strong> For violation of these Terms or illegal activity</li>
                <li><strong>Effect of termination:</strong> Your access rights end immediately</li>
                <li><strong>Survival:</strong> Certain provisions survive termination</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Governing Law</h2>
              <p className="text-[#61705d]">
                These Terms shall be governed by and construed in accordance with the laws of Nigeria,
                without regard to its conflict of law provisions. Any disputes shall be resolved in the
                courts of Kano State, Nigeria.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Dispute Resolution</h2>
              <p className="text-[#61705d] mb-4">
                We encourage amicable resolution of disputes. If a dispute cannot be resolved through
                direct communication, it shall be submitted to mediation before pursuing other remedies.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Changes to Terms</h2>
              <p className="text-[#61705d] mb-4">
                We may modify these Terms from time to time. Material changes will be communicated via
                email or prominent notice on our website. Continued use of our services after changes
                constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Severability */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Severability</h2>
              <p className="text-[#61705d]">
                If any provision of these Terms is found to be unenforceable, the remaining provisions
                shall remain in full force and effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Contact Information</h2>
              <p className="text-[#61705d] mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1b5e2b]" />
                  <a href="mailto:legal@buk-hubs.edu.ng" className="text-[#1b5e2b] font-semibold hover:text-[#154a22]">
                    legal@buk-hubs.edu.ng
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
