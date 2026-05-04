"use client";

import Link from "next/link";
import { Accessibility, Eye, Keyboard, Volume2, Monitor, Users, Mail, Phone, CheckCircle } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b5e2b]/10 to-[#006b85]/10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-bold text-[#172018] mb-4">Accessibility Statement</h1>
          <p className="text-xl text-[#61705d] max-w-3xl">
            BUK Innovation Hubs is committed to ensuring digital accessibility for people with disabilities.
            We are continually improving the user experience for everyone.
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

            {/* Our Commitment */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <Accessibility className="w-8 h-8 text-[#1b5e2b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[#172018] mb-3">Our Commitment to Accessibility</h2>
                  <p className="text-[#61705d] leading-relaxed">
                    BUK Innovation Hubs is committed to making our website accessible to all users,
                    including those with disabilities. We strive to comply with the Web Content Accessibility
                    Guidelines (WCAG) 2.1 Level AA standards and the Nigerian Disability Act.
                  </p>
                </div>
              </div>
            </div>

            {/* Accessibility Features */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Accessibility Features</h2>
              <p className="text-[#61705d] mb-6">
                Our website includes the following accessibility features:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-[#1b5e2b] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#172018] mb-2">Visual Accessibility</h3>
                    <ul className="text-sm text-[#61705d] space-y-1">
                      <li>High contrast color schemes</li>
                      <li>Resizable text (up to 200%)</li>
                      <li>Alternative text for images</li>
                      <li>Clear focus indicators</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Keyboard className="w-6 h-6 text-[#1b5e2b] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#172018] mb-2">Keyboard Navigation</h3>
                    <ul className="text-sm text-[#61705d] space-y-1">
                      <li>Full keyboard accessibility</li>
                      <li>Logical tab order</li>
                      <li>Skip navigation links</li>
                      <li>Keyboard shortcuts where applicable</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Volume2 className="w-6 h-6 text-[#1b5e2b] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#172018] mb-2">Audio & Multimedia</h3>
                    <ul className="text-sm text-[#61705d] space-y-1">
                      <li>Captions for videos</li>
                      <li>Transcripts for audio content</li>
                      <li>Adjustable audio controls</li>
                      <li>Text alternatives for multimedia</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Monitor className="w-6 h-6 text-[#1b5e2b] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#172018] mb-2">Screen Reader Support</h3>
                    <ul className="text-sm text-[#61705d] space-y-1">
                      <li>ARIA labels and landmarks</li>
                      <li>Semantic HTML structure</li>
                      <li>Descriptive link text</li>
                      <li>Form labels and instructions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* WCAG Compliance */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">WCAG 2.1 AA Compliance</h2>
              <p className="text-[#61705d] mb-6">
                We aim to meet WCAG 2.1 Level AA success criteria, which includes:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1b5e2b] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#172018]">Perceivable:</strong>
                    <span className="text-[#61705d] ml-2">Information and user interface components must be presentable to users in ways they can perceive.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1b5e2b] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#172018]">Operable:</strong>
                    <span className="text-[#61705d] ml-2">User interface components and navigation must be operable.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1b5e2b] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#172018]">Understandable:</strong>
                    <span className="text-[#61705d] ml-2">Information and the operation of user interface must be understandable.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1b5e2b] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#172018]">Robust:</strong>
                    <span className="text-[#61705d] ml-2">Content must be robust enough to be interpreted reliably by a wide variety of user agents.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Assistive Technologies */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-8 h-8 text-[#1b5e2b] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-[#172018] mb-4">Compatible Assistive Technologies</h2>
                  <p className="text-[#61705d] mb-4">
                    Our website is designed to work with common assistive technologies:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-[#61705d] space-y-2">
                      <li>• Screen readers (NVDA, JAWS, VoiceOver)</li>
                      <li>• Screen magnification software</li>
                      <li>• Speech recognition software</li>
                      <li>• Alternative input devices</li>
                    </ul>
                    <ul className="text-[#61705d] space-y-2">
                      <li>• Braille displays</li>
                      <li>• Text-to-speech systems</li>
                      <li>• Voice control systems</li>
                      <li>• Switch access devices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Browser Support */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Browser and Device Support</h2>
              <p className="text-[#61705d] mb-4">
                Our website is optimized for accessibility across various browsers and devices:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#172018] mb-2">Supported Browsers</h3>
                  <ul className="text-[#61705d] space-y-1">
                    <li>• Chrome (latest 2 versions)</li>
                    <li>• Firefox (latest 2 versions)</li>
                    <li>• Safari (latest 2 versions)</li>
                    <li>• Edge (latest 2 versions)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#172018] mb-2">Mobile Accessibility</h3>
                  <ul className="text-[#61705d] space-y-1">
                    <li>• iOS VoiceOver</li>
                    <li>• Android TalkBack</li>
                    <li>• Mobile screen readers</li>
                    <li>• Touch and gesture support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feedback and Contact */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Accessibility Feedback</h2>
              <p className="text-[#61705d] mb-4">
                We welcome feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
              </p>

              <div className="bg-[#f5f7f2] p-6 rounded-lg">
                <h3 className="font-semibold text-[#172018] mb-3">Accessibility Support Team</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#1b5e2b]" />
                    <a href="mailto:accessibility@buk-hubs.edu.ng" className="text-[#1b5e2b] font-semibold hover:text-[#154a22]">
                      accessibility@buk-hubs.edu.ng
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#1b5e2b]" />
                    <a href="tel:+2348000000000" className="text-[#1b5e2b] font-semibold hover:text-[#154a22]">
                      +234 800 000 0000
                    </a>
                  </div>
                </div>
                <p className="text-sm text-[#61705d] mt-4">
                  We aim to respond to accessibility concerns within 3 business days.
                </p>
              </div>
            </div>

            {/* Known Limitations */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Known Accessibility Limitations</h2>
              <p className="text-[#61705d] mb-4">
                While we strive for full accessibility, some legacy content or third-party integrations may have limitations:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li>Some PDF documents may not be fully accessible (we provide alternative formats when possible)</li>
                <li>Third-party embedded content (videos, forms) may have varying accessibility levels</li>
                <li>Archived content from before our accessibility initiatives may have limitations</li>
                <li>Complex data visualizations may require text descriptions</li>
              </ul>
              <p className="text-[#61705d] mt-4">
                We are actively working to address these limitations and welcome specific feedback.
              </p>
            </div>

            {/* Accessibility Training */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Accessibility Training and Awareness</h2>
              <p className="text-[#61705d] mb-4">
                We are committed to accessibility education and awareness:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li>Regular accessibility training for our development and content teams</li>
                <li>Accessibility considerations in our design and development processes</li>
                <li>User testing with people with disabilities</li>
                <li>Participation in accessibility communities and standards development</li>
                <li>Accessibility audits and remediation planning</li>
              </ul>
            </div>

            {/* Legal Compliance */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Legal Compliance</h2>
              <p className="text-[#61705d] mb-4">
                Our accessibility efforts comply with:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li>Nigerian Disability Act (2018)</li>
                <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                <li>Section 508 of the Rehabilitation Act (where applicable)</li>
                <li>International accessibility standards and best practices</li>
              </ul>
            </div>

            {/* Continuous Improvement */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Continuous Improvement</h2>
              <p className="text-[#61705d] mb-4">
                Accessibility is an ongoing commitment. We regularly:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li>Conduct accessibility audits and testing</li>
                <li>Monitor emerging accessibility standards and technologies</li>
                <li>Update our website based on user feedback and technological advancements</li>
                <li>Publish accessibility progress reports</li>
                <li>Collaborate with accessibility experts and organizations</li>
              </ul>
            </div>

            {/* Alternative Access */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Alternative Access Methods</h2>
              <p className="text-[#61705d] mb-4">
                If you experience difficulties accessing our website, alternative access methods are available:
              </p>
              <ul className="list-disc pl-6 text-[#61705d] space-y-2">
                <li><strong>Phone Support:</strong> Call us at +234 800 000 0000 for assistance</li>
                <li><strong>Email Support:</strong> Contact accessibility@buk-hubs.edu.ng</li>
                <li><strong>Physical Location:</strong> Visit our offices at Bayero University Kano</li>
                <li><strong>Alternative Formats:</strong> Request information in alternative formats</li>
                <li><strong>Human Assistance:</strong> Request human assistance for complex interactions</li>
              </ul>
            </div>

            {/* Updates to Statement */}
            <div className="rounded-lg border border-[#dfe6d7] p-8 mb-8 bg-white">
              <h2 className="text-2xl font-bold text-[#172018] mb-4">Updates to This Statement</h2>
              <p className="text-[#61705d]">
                This accessibility statement is reviewed and updated regularly to reflect improvements
                to our website and changes in accessibility standards. The last update was May 4, 2026.
                We encourage you to check back periodically for updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
