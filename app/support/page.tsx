import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Support" };
export default function SupportPage(){return <main className="document shell">
  <Link className="brand" href="/"><img src="/bemi-icon.png" alt="" width="44" height="44"/><span>Bemi</span></Link>
  <header className="document-header"><p className="eyebrow">WE'RE HERE TO HELP</p><h1>Bemi Support</h1><p className="updated">Practical help for alarms, missions, accounts, and subscriptions.</p></header>
  <div className="support-grid">
    <article className="support-card"><h2>Alarm did not ring</h2><p>Open Bemi and confirm the alarm is enabled and marked “System alarm ready.” Check Alarm permission, device power, and the configured days and time.</p></article>
    <article className="support-card"><h2>Mission permission</h2><p>Camera and Movement missions request access only when needed. Change access from iPhone Settings → Privacy &amp; Security.</p></article>
    <article className="support-card"><h2>Restore Bemi Pro</h2><p>Use Restore Purchases on the paywall or in Account settings while signed into the Apple ID used for purchase.</p></article>
    <article className="support-card"><h2>Manage or cancel</h2><p>Open Bemi Account settings and choose Manage Subscription, or use iPhone Settings → Apple Account → Subscriptions.</p></article>
    <article className="support-card"><h2>Delete your account</h2><p>Open Account settings in Bemi and choose Delete Account. This removes the Bemi account and synchronized alarm data but does not cancel an Apple subscription.</p></article>
    <article className="support-card"><h2>Contact us</h2><p>Email <a href="mailto:support@widechain.com">support@widechain.com</a> with your iOS version and a short description. Never send passwords or payment details.</p></article>
  </div>
  <footer className="footer"><p>Need the details?</p><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></footer>
</main>}
