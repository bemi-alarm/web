import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function PrivacyPage(){return <main className="document shell">
  <Link className="brand" href="/"><img src="/bemi-icon.png" alt="" width="44" height="44"/><span>Bemi</span></Link>
  <header className="document-header"><p className="eyebrow">YOUR DATA, EXPLAINED</p><h1>Privacy Policy</h1><p className="updated">Effective August 23, 2026</p></header>
  <article className="prose">
    <h2>Overview</h2><p>Bemi is a morning alarm application operated by Widechain. This policy explains what information Bemi processes, why it is used, and the choices available to you.</p>
    <h2>Information you provide</h2><ul><li>Your Sign in with Apple account identifier, used to create and secure your Bemi account.</li><li>Your onboarding answers, alarm time, repeat days, selected mission, sound, and alarm preferences.</li><li>A referral code if you choose to enter one.</li></ul>
    <h2>Information processed automatically</h2><ul><li>Product interactions such as onboarding progress, paywall views, alarm creation, and mission completion, used to understand reliability and improve Bemi.</li><li>Subscription status and purchase lifecycle information from Apple through RevenueCat, including trials, renewals, cancellations, and refunds.</li><li>Privacy-preserving Apple Search Ads attribution through Apple AdServices. Bemi does not track you across other companies&apos; apps or websites.</li><li>Basic device and diagnostic information supplied by our service providers when needed to operate, secure, and improve the app.</li></ul>
    <h2>Camera and motion missions</h2><p>Camera frames used by Face Wake Check are processed on your device with Apple Vision and are not stored or uploaded by Bemi. Step samples used by Movement missions are processed on your device and are not uploaded for advertising.</p>
    <h2>How we use information</h2><p>We use information to authenticate your account, synchronize your alarm, verify Bemi Pro access, operate wake missions, support purchases, prevent abuse, measure product performance, attribute campaigns, and comply with legal obligations.</p>
    <h2>Service providers</h2><p>Bemi uses Apple, Supabase, RevenueCat, and PostHog. These providers process information under their own security and privacy commitments for the services configured by Bemi.</p>
    <h2>Retention and deletion</h2><p>Account and alarm records are retained while your Bemi account is active. You can initiate account deletion inside Bemi from Account settings. Subscription records may be retained where required for financial, fraud-prevention, or legal obligations. Deleting Bemi does not cancel an Apple subscription; manage subscriptions from your Apple ID.</p>
    <h2>Your choices</h2><p>You can decline optional notification, camera, motion, and tracking permissions in iOS. Some missions require their corresponding permission. You may manage or cancel subscriptions in Apple settings and request account deletion in the app.</p>
    <h2>Children</h2><p>Bemi is not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
    <h2>Contact</h2><p>Questions or privacy requests can be sent to <a href="mailto:support@widechain.com">support@widechain.com</a>.</p>
  </article>
</main>}
