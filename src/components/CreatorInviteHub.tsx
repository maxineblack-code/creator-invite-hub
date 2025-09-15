export default function CreatorInviteHub() {
  const dmText = `Hey [Name]! I’m inviting a few creators to an elevated fashion show in [City] on [Date]. VIP seat + backstage access + personal code for your audience. Quick deliverables: 1 pre, day-of stories, 1 recap. Details & RSVP here: [YOUR-LINK]`;

  const copyDM = async () => {
    try {
      await navigator.clipboard.writeText(dmText);
      alert("Copied outreach text to clipboard ✨");
    } catch (e) {
      alert("Couldn't copy. Long-press to select manually.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-900 text-zinc-100">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">👗</div>
          <span className="tracking-[0.2em] uppercase text-xs text-zinc-300">MM PRODUCTIONS</span>
        </div>
        <a href="#rsvp" className="rounded-2xl px-4 py-2 text-sm bg-white text-black hover:bg-zinc-200 transition">RSVP</a>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pt-4">
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
          <video
            className="w-full h-[56vh] object-cover"
            src="https://cdn.coverr.co/videos/coverr-a-model-poses-for-the-camera-5345/1080p.mp4"
            poster="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1600&auto=format&fit=crop"
            playsInline
            autoPlay
            muted
            loop
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs tracking-[0.22em] uppercase text-zinc-300">Creator Invitation</p>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight">[Show Name] — An elevated runway experience in [City]</h1>
              <p className="text-zinc-300 max-w-xl">Join our creator circle for VIP seats, backstage access, and a custom code for your audience. Keep it simple: one pre, day‑of stories, one recap. We’ll handle the rest.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#rsvp" className="rounded-2xl px-5 py-3 bg-white text-black hover:bg-zinc-200 transition">RSVP & Get Your Code</a>
                <a href="#brief" className="rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/20 ring-1 ring-white/15 transition">Open Creator Brief</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-6xl px-6 py-14" id="perks">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: 'VIP Seat + Backstage', text: 'Priority check‑in, wristband, and escorted backstage moments.' },
            { title: 'Personal Code', text: 'Unique discount or invite code to share; track clicks & seats.' },
            { title: 'Glam & Outfit Pulls', text: 'Optional glam slot + look pulls where available.' },
            { title: 'Fast Payouts', text: 'If paid/affiliate, we pay within 7 days. No chasing.' },
          ].map((p, i) => (
            <div key={i} className="rounded-3xl p-5 bg-white/5 ring-1 ring-white/10">
              <h3 className="font-medium mb-1">{p.title}</h3>
              <p className="text-sm text-zinc-300">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-6xl px-6" id="brief">
        <div className="rounded-3xl p-6 md:p-8 bg-white/5 ring-1 ring-white/10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.22em] uppercase text-zinc-300">Deliverables</p>
              <h2 className="text-2xl md:text-3xl font-semibold mt-2">Plain‑English brief</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>• Pre: 1 Reel/TikTok (15–30s) “I’m going to [Show Name]” + code.</li>
                <li>• Day‑of: 4–6 IG Stories (arrival, backstage, runway, CTA).</li>
                <li>• Post: 1 recap short (best looks + CTA “shop the looks”).</li>
                <li>• Tag @yourbrand + #YourShow. Use in‑app sounds. Add “ad/gifted”.</li>
                <li>• Share raw clips within 24–48h to our shared folder.</li>
              </ul>
            </div>
            <div className="md:w-80 shrink-0 space-y-3">
              <div className="rounded-2xl p-4 bg-white/5 ring-1 ring-white/10">
                <h4 className="font-medium">Event details</h4>
                <p className="text-sm text-zinc-300">[Date], call time [Time]<br/>[Venue], [Address]</p>
              </div>
              <div className="rounded-2xl p-4 bg-white/5 ring-1 ring-white/10">
                <h4 className="font-medium">Usage rights</h4>
                <p className="text-sm text-zinc-300">Brand may repost organically on socials/site for 90 days. Paid usage requires written approval & fee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { k: 'Now', v: 'RSVP + claim your code' },
            { k: 'T‑2 wks', v: 'Post save‑the‑date' },
            { k: 'Show week', v: 'Final reminder + seat map' },
            { k: 'T+2 days', v: 'Drop recap; we post master edit' },
          ].map((s, i) => (
            <div key={i} className="rounded-3xl p-5 bg-white/5 ring-1 ring-white/10">
              <p className="text-xs tracking-[0.22em] uppercase text-zinc-300">{s.k}</p>
              <p className="mt-1 font-medium">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section className="mx-auto max-w-6xl px-6 pb-16" id="rsvp">
        <div className="rounded-3xl p-6 md:p-8 bg-white text-black">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ready to join?</h3>
              <p className="text-zinc-700">Tap to RSVP and we’ll email your seat + personal code.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="rounded-2xl px-5 py-3 bg-black text-white hover:opacity-80 transition" href="https://your-typeform-or-forms-link" target="_blank" rel="noreferrer">RSVP Form</a>
              <a className="rounded-2xl px-5 py-3 bg-zinc-200 hover:bg-zinc-300 transition" href="https://your-brief-link.pdf" target="_blank" rel="noreferrer">Download Brief (PDF)</a>
              <button onClick={copyDM} className="rounded-2xl px-5 py-3 bg-zinc-100 hover:bg-zinc-200 transition">Copy DM Invite</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-10 text-xs text-zinc-400">
        <p>Questions? Email <a className="underline hover:text-white" href="mailto:press@mmproductions.co">press@mmproductions.co</a> or text your point of contact.</p>
        <p className="mt-2">Please disclose “ad” or “gifted”. Use rights: 90 days organic reposting by brand; paid usage requires written approval.</p>
      </footer>
    </div>
  );
}
