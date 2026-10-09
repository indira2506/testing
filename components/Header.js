"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import { nav, site } from "../lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow dark:bg-slate-950/90 ${
        scrolled ? "border-slate-200 shadow-sm dark:border-slate-800" : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/brand/logo-icon.png"
            alt="ServicePro logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-brand-blue">SERVICE</span>
            <span className="text-brand-navy dark:text-white"> PRO</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 dark:border-slate-800 dark:bg-slate-900">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-sm font-semibold text-slate-600 hover:bg-white hover:text-brand-navy hover:shadow-sm transition-all dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={site.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-600 hover:text-brand-navy transition-colors dark:text-slate-300 dark:hover:text-white"
          >
            Login
          </a>
          <a
            href={site.trialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-blue px-5 py-2.5 text-sm font-bold text-white shadow-card hover:bg-brand-navy hover:shadow-cardHover transition-all"
          >
            Start Free Trial
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-brand-navy dark:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              Login
            </a>
            <a
              href={site.trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-bold text-white"
            >
              Start Free Trial
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
