import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Terms of Use" };
export default function TermsPage(){return <main className="document shell">
  <Link className="brand" href="/"><img src="/bemi-icon.png" alt="" width="44" height="44"/><span>Bemi</span></Link>
  <header className="document-header"><p className="eyebrow">THE AGREEMENT</p><h1>Terms of Use</h1><p className="updated">Effective August 23, 2026</p></header>
  <article className="prose">
    <h2>Using Bemi</h2><p>These terms govern your use of Bemi, operated by Widechain. By using Bemi, you agree to these terms and Apple's applicable terms. You must use the app lawfully and provide accurate account information.</p>
    <h2>Alarm reliability</h2><p>Bemi is designed to help with personal wake routines, but no alarm application can guarantee wake-up or uninterrupted delivery in every circumstance. Device power, volume, permissions, operating-system behavior, hardware, and user settings can affect alarms. Do not rely on Bemi as the only alert for emergencies, medical care, safety-critical work, travel, or other situations where a missed alarm could cause serious harm.</p>
    <h2>Health disclaimer</h2><p>Bemi is a habit and productivity tool, not a medical device. It does not diagnose, treat, cure, or prevent sleep disorders or other health conditions. Seek qualified medical advice for persistent sleep or waking difficulties.</p>
    <h2>Bemi Pro subscriptions</h2><p>Bemi Pro is sold through Apple's App Store. Available plans, localized prices, billing periods, and any introductory trial are shown by Apple before purchase. Payment is charged to your Apple ID. Auto-renewing subscriptions renew unless cancelled through Apple at least 24 hours before the end of the current period. Eligibility for a free trial is determined by Apple. You can restore purchases in Bemi and manage or cancel from your Apple ID subscription settings.</p>
    <h2>Accounts</h2><p>Sign in with Apple connects your alarm plan and subscription access to an account. You may initiate deletion from Bemi's Account settings. Deleting an account does not automatically cancel an Apple subscription.</p>
    <h2>Permissions and missions</h2><p>Some missions require camera or motion access. You control these permissions in iOS. Do not perform movement missions where movement would be unsafe, and stop if you feel unwell.</p>
    <h2>Acceptable use</h2><p>You may not interfere with Bemi's operation, attempt unauthorized access, misuse referral or subscription systems, reverse engineer the service where prohibited, or use Bemi to violate another person's rights.</p>
    <h2>Availability and changes</h2><p>We may improve, modify, suspend, or discontinue features. We may update these terms and will post the effective date. Material changes will be communicated where legally required.</p>
    <h2>Liability</h2><p>To the maximum extent permitted by law, Bemi is provided without warranties beyond those that cannot legally be excluded. Widechain is not liable for indirect, incidental, or consequential loss arising from app use or a missed alarm. Nothing in these terms limits mandatory consumer rights.</p>
    <h2>Contact</h2><p>Questions can be sent to <a href="mailto:support@widechain.com">support@widechain.com</a>.</p>
  </article>
</main>}
