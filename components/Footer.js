import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { nav, site } from "../lib/site";

const socialLinks = [
  {
    name: "LinkedIn",
    href: site.company.linkedin,
    icon: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zM8.5 8.25h4.31v2.02h.06c.6-1.13 2.07-2.33 4.26-2.33 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.35c0-1.51-.03-3.46-2.11-3.46-2.11 0-2.43 1.65-2.43 3.35V23H8.5V8.25z",
  },
  {
    name: "Instagram",
    href: site.company.instagram,
    icon: "M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.46.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.24.64.41 1.36.46 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.79-.46 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.24-1.36.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.46a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.24-.64-.41-1.36-.46-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.79.46-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 015.44 2.53c.64-.24 1.36-.41 2.43-.46C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.72.36-1.03.67-.31.31-.5.61-.67 1.03-.12.31-.26.78-.3 1.65C4.26 8.51 4.25 8.83 4.25 12s.01 3.49.06 4.54c.04.87.18 1.34.3 1.65.16.42.36.72.67 1.03.31.31.61.5 1.03.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.72-.36 1.03-.67.31-.31.5-.61.67-1.03.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.54s-.01-3.49-.06-4.54c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 00-.67-1.03 2.7 2.7 0 00-1.03-.67c-.31-.12-.78-.26-1.65-.3C14.99 3.81 14.67 3.8 12 3.8zm0 3.05a5.15 5.15 0 110 10.3 5.15 5.15 0 010-10.3zm0 1.8a3.35 3.35 0 100 6.7 3.35 3.35 0 000-6.7zm5.35-1.99a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/brand/logo-icon.png"
                alt="ServicePro logo"
                width={30}
                height={30}
                className="h-7 w-7"
              />
              <span className="text-base font-extrabold text-white">
                SERVICE <span className="text-brand-blueLight">PRO</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Billing, inventory, CRM and repair-service management for electronics
              stores and service centres — built by BUYP Technologies.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-white mb-4">Site</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-white mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href={`mailto:${site.company.email}`} className="hover:text-white transition-colors">
                  {site.company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.company.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {site.company.phone}
                </a>
              </li>
              <li>{site.company.address}</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-white mb-4">Get Started</p>
            <a
              href={site.trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-blueLight transition-colors"
            >
              Start Free Trial
            </a>
            <div className="mt-5 flex gap-4">
              <a href={site.company.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href={site.company.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} BUYP Technologies Pvt. Ltd. All rights reserved.</p>
          <p>ServicePro — serving businesses across India, expanding to the GCC soon.</p>
        </div>
      </Container>
    </footer>
  );
}
