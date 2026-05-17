import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import { BrandName } from "@/components/ui/BrandName";
import { PageShell } from "@/components/ui/PageShell";
import { marketingNavLinks } from "@/lib/marketing-nav";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AndWhat Extension | andwhat",
  description: "How the AndWhat Chrome extension collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header
        navLinks={[...marketingNavLinks]}
        registerHref="/login"
        registerLabel="Register Now"
      />
      <main className="min-h-screen bg-[#faf7f2] pt-[72px]">
        <PageShell maxWidth="md" className="py-12 sm:py-16 lg:py-20">
          <article className="text-[#0a1628]">
            <p className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0048AE] mb-3">
              Legal
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#0a1628] tracking-tight mb-2">
              Privacy Policy — <BrandName /> Chrome Extension
            </h1>
            <p className="text-sm text-[#0a1628]/70 mb-8">
              <span className="font-semibold text-[#0a1628]">Effective Date:</span> May 16, 2026
            </p>

            <div className="space-y-6 text-[15px] leading-relaxed text-[#0a1628]/90">

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">1. Introduction</h2>
                <p>
                  AndWhat (“we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share information when you use our website, platform, and Chrome Extension. By using AndWhat, you agree to the terms of this policy.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">2. Information We Collect</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Personal Information: Name, email address, login credentials.</li>
                  <li>Educational Information: Student and teacher account details, learning progress, platform activity.</li>
                  <li>Device Information: Browser type, operating system, device information, IP address.</li>
                  <li>Usage Data: Session activity, clicks, and interactions with the platform.</li>
                  <li>Cookies & Tracking: Information collected via cookies and analytics tools.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">3. How We Use Information</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Authenticate and manage user accounts.</li>
                  <li>Provide educational services.</li>
                  <li>Enhance platform functionality, security, and performance.</li>
                  <li>Provide technical support and troubleshooting.</li>
                  <li>Monitor usage to prevent abuse or unauthorized access.</li>
                  <li>Analyze platform activity to improve services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">4. Chrome Extension Data Usage</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Data Accessed: User login credentials, educational activity, browser session data.</li>
                  <li>Purpose: Secure login, platform functionality, and activity tracking.</li>
                  <li>Prohibited Uses: We do not sell, rent, or misuse user data.</li>
                </ul>
                <p>All collected information is used solely for educational and operational purposes.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">5. Cookies and Tracking Technologies</h2>
                <p>
                  AndWhat uses cookies and similar technologies to maintain secure sessions, improve user experience, analyze usage patterns, and remember preferences. Blocking cookies may limit some platform functionality.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">6. Third-Party Services</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Analytics & Tracking: Google Analytics</li>
                  <li>Authentication & Hosting: Firebase, Vercel</li>
                  <li>Security & Performance: Cloudflare</li>
                </ul>
                <p>These providers only process data necessary for their services and do not sell user information.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">7. Data Storage and Security</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Secure cloud storage and encrypted databases</li>
                  <li>Restricted access by authorized personnel only</li>
                  <li>Regular security audits and monitoring</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">8. Data Sharing</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To provide platform services and functionality</li>
                  <li>For legal obligations or to protect our rights</li>
                  <li>To prevent misuse or ensure user safety</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">9. User Rights</h2>
                <p>You may access, correct, or delete your data. To exercise these rights, contact <a href="andwhat.au@gmail.com" className="text-[#0048AE] underline">andwhat.au@gmail.com</a>.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">10. Children’s Privacy</h2>
                <p>AndWhat is designed for educational purposes and complies with all applicable regulations to protect student privacy.</p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">11. Updates to This Privacy Policy</h2>
                <p>The latest version will always be available at: <a href="https://andwhat.au/privacy-policy" className="text-[#0048AE] underline">https://andwhat.au/privacy-policy</a></p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#0a1628] mb-3">12. Contact Us</h2>
                <ul className="list-none space-y-2 pl-0">
                  <li><strong>Email:</strong> <a href="mailto:andwhat.au@gmail.com" className="text-[#0048AE] underline">andwhat.au@gmail.com</a></li>
                  <li><strong>Website:</strong> <Link href="https://andwhat.au" className="text-[#0048AE] underline">https://andwhat.au</Link></li>
                </ul>
              </section>

            </div>
          </article>
        </PageShell>
      </main>
      <Footer />
    </>
  );
}
