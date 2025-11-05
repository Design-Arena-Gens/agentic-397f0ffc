"use client";

import { useEffect, useState } from "react";

const TARGET_URL = "https://davcmc.in/";

export default function HomePage() {
  const [hasAttemptedAutoOpen, setHasAttemptedAutoOpen] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.replace(TARGET_URL);
      setHasAttemptedAutoOpen(true);
    }, 1200);

    return () => window.clearTimeout(timeout);
  }, []);

  const handleLaunch = () => {
    window.location.assign(TARGET_URL);
    setHasAttemptedAutoOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-16 text-center">
      <section className="flex max-w-2xl flex-col items-center gap-6 rounded-3xl bg-slate-900/80 p-10 shadow-xl shadow-black/30">
        <div className="flex flex-col gap-3">
          <span className="text-sm uppercase tracking-[0.4em] text-cyan-300/75">
            DAV College Managing Committee
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Opening the DAVCMC website on your phone
          </h1>
        </div>

        <p className="max-w-xl text-lg text-slate-200/90">
          This launcher opens the official DAVCMC site in your mobile browser. If it
          does not open automatically, tap the button below.
        </p>

        <button
          onClick={handleLaunch}
          className="group relative mt-2 flex items-center gap-3 rounded-full border border-cyan-400/70 bg-gradient-to-r from-brand-blue via-cyan-600 to-brand-teal px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-900/50 transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-cyan-500/40 blur-2xl opacity-0 transition group-hover:opacity-100" />
          Open DAVCMC Now
        </button>

        {hasAttemptedAutoOpen ? null : (
          <p className="text-sm text-slate-400">
            We will try automatically in a moment…
          </p>
        )}
      </section>

      <section className="grid w-full max-w-3xl gap-4 rounded-3xl bg-slate-900/60 p-8 text-left text-slate-200/90 sm:grid-cols-2 sm:gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            iPhone &amp; iPad
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Tap the button above. Safari opens davcmc.in.</li>
            <li>
              If you see a prompt, choose <strong>Allow</strong> to open in your browser.
            </li>
            <li>
              Add it to your Home Screen: tap <strong>Share</strong> → <strong>Add to Home Screen</strong>.
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            Android
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Tap the button above. Chrome will load davcmc.in.</li>
            <li>If asked, pick your preferred browser.</li>
            <li>
              Save quick access: menu ⋮ → <strong>Add to Home screen</strong>.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
