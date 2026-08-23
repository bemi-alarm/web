import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <Link className="brand" href="/"><img src="/bemi-icon.png" alt="" width="44" height="44" /><span>Bemi</span></Link>
        <div className="nav-links"><Link href="/support">Support</Link><Link href="/privacy">Privacy</Link></div>
      </nav>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">ONE ALARM. ONE MISSION.</p>
          <h1>Wake up calmly.<br />Get up for real.</h1>
          <p className="lede">Bemi pairs a reliable iPhone alarm with a short wake-up mission, so your morning starts with one clear action instead of another snooze.</p>
          <a className="button" href="#how-it-works">See how Bemi works</a>
        </div>
        <div className="mascot-card" aria-label="Bemi, the great kiskadee morning mascot"><img src="/bemi-icon.png" alt="Bemi smiling" width="420" height="420" /><span className="sun" aria-hidden="true" /></div>
      </section>
      <section id="how-it-works" className="section shell">
        <p className="eyebrow">A BETTER FIRST MINUTE</p>
        <h2>Your alarm starts the morning. Bemi helps you continue it.</h2>
        <div className="steps">
          <article><span>1</span><h3>Choose your time</h3><p>Set the days, sound, and wake-up time that fit your real routine.</p></article>
          <article><span>2</span><h3>Pick a mission</h3><p>Use movement, a camera wake check, memory, or typing to prove you are awake.</p></article>
          <article><span>3</span><h3>Start your day</h3><p>Complete the mission, stop the alarm, and move into the morning with intention.</p></article>
        </div>
      </section>
      <section className="privacy-callout shell">
        <div><p className="eyebrow">BUILT WITH BOUNDARIES</p><h2>Your camera and motion data stay on your iPhone.</h2></div>
        <p>Camera frames are processed on-device and discarded. Motion samples verify your mission and are not uploaded for advertising.</p>
      </section>
      <footer className="footer shell"><p>© {new Date().getFullYear()} Widechain. Bemi is made for gentler, more dependable mornings.</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link></div></footer>
    </main>
  );
}
