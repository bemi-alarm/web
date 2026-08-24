import Link from "next/link";

const missions = [
  { icon: "↗", title: "Movement", copy: "Take a few real steps before the alarm can call it a morning." },
  { icon: "Aa", title: "Typing", copy: "Type a short phrase accurately enough to switch your brain on." },
  { icon: "◇", title: "Memory", copy: "Complete a quick pattern challenge built for sleepy attention." },
  { icon: "◉", title: "Face wake check", copy: "A private, on-device check that sees when you’re ready to start." },
];

function Brand() {
  return <Link className="brand" href="/"><img src="/bemi-icon.png" alt="" width="42" height="42" /><span>Bemi</span></Link>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <Brand />
        <div className="nav-links"><a href="#missions">Missions</a><a href="#progress">Progress</a><Link href="/support">Support</Link></div>
        <a className="nav-cta" href="#how-it-works">Meet Bemi <span aria-hidden="true">↓</span></a>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="availability"><span aria-hidden="true" /> Built for iPhone mornings</div>
          <h1>One alarm.<br /><em>Zero negotiations.</em></h1>
          <p className="lede">Bemi pairs your alarm with a tiny wake-up mission—so getting out of bed becomes the first easy win of your day.</p>
          <div className="hero-actions"><a className="button button-primary" href="#how-it-works">See how it works <span aria-hidden="true">→</span></a><Link className="text-link" href="/support">Already using Bemi?</Link></div>
          <div className="trust-row" aria-label="Product highlights"><span>No ads</span><span>Private by design</span><span>Made for iPhone</span></div>
        </div>

        <div className="hero-visual" aria-label="Bemi alarm preview">
          <span className="orb orb-one" aria-hidden="true" /><span className="orb orb-two" aria-hidden="true" />
          <div className="phone">
            <div className="phone-status"><span>7:49</span><span>● ●●</span></div>
            <div className="phone-brand"><img src="/bemi-icon.png" alt="" width="34" height="34" /><strong>Bemi</strong><span className="streak">🔥 4</span></div>
            <p className="phone-kicker">NEXT WAKEUP</p>
            <div className="alarm-card"><div><strong>Tomorrow</strong><span>Alarm in 11 hours</span></div><time>7:50</time><div className="alarm-options"><span><small>MISSION</small>Movement</span><span><small>SOUND</small>Morning birds</span></div></div>
            <div className="week-card"><span>SU</span><span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="phone-nav"><span>⌂</span><span>◷</span><strong>+</strong><span>▥</span><span>⚙</span></div>
          </div>
          <div className="floating-card floating-streak"><span>🔥</span><div><strong>4 day streak</strong><small>Keep showing up</small></div></div>
          <div className="floating-card floating-ready"><span>✓</span><div><strong>Alarm ready</strong><small>Tomorrow at 7:50</small></div></div>
        </div>
      </section>

      <section className="marquee" aria-label="Wake up, move forward, no snooze spiral, start clear">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((item) => <span key={item} aria-hidden={item > 0}>WAKE UP <b>•</b> MOVE FORWARD <b>•</b> NO SNOOZE SPIRAL <b>•</b> START CLEAR <b>•</b></span>)}
        </div>
      </section>

      <section id="how-it-works" className="section shell split-heading"><div><p className="eyebrow">A BETTER FIRST MINUTE</p><h2>Your morning needs momentum, not motivation.</h2></div><p className="section-intro">Bemi removes the half-awake decision-making. Set one plan tonight, then follow one clear path when morning arrives.</p></section>

      <section className="steps shell">
        <article className="step-card step-yellow"><span className="step-number">01</span><div className="mini-time">7:50</div><h3>Set tomorrow once</h3><p>Choose your time, days, sound, and mission while your awake brain is in charge.</p></article>
        <article className="step-card step-blue"><span className="step-number">02</span><div className="mini-action">Slide to wake <b>→</b></div><h3>Do one small thing</h3><p>When the alarm rings, your chosen mission gives sleepy-you a simple next step.</p></article>
        <article className="step-card step-coral"><span className="step-number">03</span><div className="mini-done"><span>✓</span> Morning started</div><h3>Leave the loop behind</h3><p>Complete the mission, quiet the alarm, and carry that first win into your day.</p></article>
      </section>

      <section id="missions" className="missions-section"><div className="shell"><div className="missions-heading"><p className="eyebrow">PICK YOUR PROOF</p><h2>Sleepy brains are different.<br />So are Bemi missions.</h2></div><div className="mission-grid">{missions.map((mission, index) => <article key={mission.title} className={`mission mission-${index + 1}`}><span className="mission-icon">{mission.icon}</span><div><h3>{mission.title}</h3><p>{mission.copy}</p></div><span className="mission-arrow" aria-hidden="true">↗</span></article>)}</div></div></section>

      <section id="progress" className="progress-section shell">
        <div className="progress-copy"><p className="eyebrow">MORNINGS ADD UP</p><h2>See the habit you’re actually building.</h2><p>Bemi turns completed alarms into a calm record of progress—your current streak, best run, total wake-ups, and mission pace.</p><ul><li><span>✓</span> Seven-day wake history</li><li><span>✓</span> Current and best streaks</li><li><span>✓</span> No guilt-inducing red days</li></ul></div>
        <div className="insights-card"><div className="insights-top"><div><small>THIS WEEK</small><strong>4 mornings</strong></div><span>↗ 33%</span></div><div className="bars" aria-label="Four of seven mornings completed"><i style={{height:"42%"}} /><i style={{height:"64%"}} /><i style={{height:"51%"}} /><i style={{height:"82%"}} /><i /><i /><i /></div><div className="days"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div><div className="insight-metrics"><div><small>CURRENT STREAK</small><strong>4 <em>days</em></strong></div><div><small>AVG. MISSION</small><strong>38 <em>sec</em></strong></div></div></div>
      </section>

      <section className="privacy-section shell"><div className="privacy-icon" aria-hidden="true">◉</div><div><p className="eyebrow">PRIVATE BY DESIGN</p><h2>Your wake-up stays yours.</h2></div><p>Face checks run on your iPhone and camera frames are discarded. Motion samples verify your mission on-device. Bemi has no ads and does not track you across apps or websites.</p><Link className="text-link" href="/privacy">Read our plain-language privacy policy →</Link></section>

      <section className="final-cta shell"><div className="cta-copy"><p className="eyebrow">TOMORROW STARTS TONIGHT</p><h2>Make your first decision of the day an easy one.</h2><p>Set one alarm. Choose one mission. Let Bemi handle the handoff to morning.</p><a className="button button-dark" href="#how-it-works">Explore Bemi <span aria-hidden="true">↑</span></a></div><div className="cta-mascot"><span className="sunburst" aria-hidden="true" /><img src="/bemi-full.png" alt="Bemi, your morning companion" width="360" height="360" /></div></section>

      <footer className="footer shell"><Brand /><p>Made for gentler, more dependable mornings.</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link></div><small>© {new Date().getFullYear()} Widechain</small></footer>
    </main>
  );
}
