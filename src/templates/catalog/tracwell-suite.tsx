import React from "react";
import { toPlainText } from "@react-email/render";
import { EmailTemplate } from "../types";

// ── Shared UI helpers ──
function BrandLogo({
  company,
  color,
}: {
  company: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-sm"
        style={{ background: color }}
      >
        {company[0]}
      </span>
      <span className="font-semibold text-[15px] tracking-tight text-zinc-900 dark:text-zinc-100">
        {company}
      </span>
    </div>
  );
}

// ── 1. Welcome layout ──
function WelcomePreview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Welcome to {company}
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            Thanks for joining {company}. Your account is ready—let&apos;s get your first
            website connected so you can see where visitors come from and what they do next.
          </p>
        </div>

        <ol className="space-y-4 text-[13px] list-none pl-0">
          <li className="flex gap-3">
            <span className="text-zinc-500 font-medium text-xs pt-0.5">1.</span>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs">Add your website</div>
              <div className="text-zinc-500 leading-5 mt-1 text-xs">
                Finish your workspace setup, then add the website you want to measure.
              </div>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-zinc-500 font-medium text-xs pt-0.5">2.</span>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs">Install your tracking script</div>
              <div className="text-zinc-500 leading-5 mt-1 text-xs">
                Choose your collection and consent settings, then copy the script into your site.
              </div>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-zinc-500 font-medium text-xs pt-0.5">3.</span>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs">See your first visit</div>
              <div className="text-zinc-500 leading-5 mt-1 text-xs">
                Visit your site and check that events appear. Add custom events when you&apos;re ready to
                measure signups and other actions.
              </div>
            </div>
          </li>
        </ol>

        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Need a hand? Follow our <a className="underline font-medium text-zinc-900 dark:text-zinc-100">setup guide</a>.
        </p>

        <div>
          <a
            className="inline-flex px-5 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Get started
          </a>
        </div>

        <div className="space-y-2 pt-2 text-[11.5px] leading-5 text-zinc-500">
          <p>You&apos;re receiving this email because you created a {company} account.</p>
          <p>
            Button not working? <a className="underline text-zinc-700 dark:text-zinc-300 font-medium">Open {company}</a>
          </p>
        </div>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 2. OTP Verification Layout ──
function OtpPreview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Verify your email address
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            Here is your one-time verification code to securely access your {company} workspace.
            Enter this code on the verification screen to continue.
          </p>
        </div>

        {/* Monospace Code Display */}
        <div
          className="rounded-xl p-5 text-center my-4 border"
          style={{ backgroundColor: `${color}15`, borderColor: `${color}35` }}
        >
          <div className="font-mono text-3xl font-bold tracking-[0.25em]" style={{ color }}>
            582 914
          </div>
          <div className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">
            Expires in 10 minutes
          </div>
        </div>

        <p className="text-xs text-zinc-500 leading-relaxed">
          Never share this code with anyone. {company} staff will never request your verification code
          over chat, phone, or email.
        </p>

        <div className="space-y-1.5 pt-2 text-[11.5px] leading-5 text-zinc-500">
          <p>Didn&apos;t request this code? You can safely ignore this email.</p>
        </div>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 3. Magic Sign-In Link Layout ──
function MagicLinkPreview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sign in to your {company} account
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            Click the button below to securely authenticate your session. No password required.
            This link is single-use and expires in 10 minutes.
          </p>
        </div>

        <div>
          <a
            className="inline-flex px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Sign In to {company}
          </a>
        </div>

        {/* Security / Device metadata */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-3.5 space-y-1.5 text-xs text-zinc-500">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100">Sign-in Request Details</div>
          <div>Device: Chrome on macOS (Sonoma)</div>
          <div>Location: San Francisco, CA, USA (198.51.100.42)</div>
        </div>

        <div className="text-xs text-zinc-500 space-y-1">
          <div>Or copy and paste this URL into your browser:</div>
          <div className="p-2 rounded bg-zinc-100 dark:bg-zinc-900 font-mono text-[11px] text-zinc-600 dark:text-zinc-400 break-all select-all">
            https://auth.{domain}/verify?token=mglk_9821804918204128941098
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 4. Password Reset Layout ──
function ResetPasswordPreview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Reset your {company} password
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            We received a request to reset the password for your account. Click the button below to choose
            a secure new password.
          </p>
        </div>

        <div>
          <a
            className="inline-flex px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Reset Password
          </a>
        </div>

        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 text-xs text-zinc-500">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">⏱ This link expires in 30 minutes</div>
          <p className="text-[11px] leading-relaxed m-0">
            If you didn&apos;t request a password reset, please ignore this email. Your password will remain unchanged.
          </p>
        </div>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 5. Team Workspace Invite Layout ──
function InvitePreview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sarah Chen invited you to collaborate on {company}
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            Sarah has invited you to join the <strong className="text-zinc-900 dark:text-zinc-100">Acme Studio</strong> workspace
            on {company} to monitor visitor traffic, verify funnel metrics, and inspect conversion flows.
          </p>
        </div>

        {/* Workspace Card */}
        <div className="flex items-center gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-4">
          <div
            className="w-10 h-10 rounded-lg text-white font-bold text-sm flex items-center justify-center shadow-xs shrink-0"
            style={{ background: color }}
          >
            AS
          </div>
          <div>
            <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Acme Studio</div>
            <div className="text-[11px] text-zinc-500 mt-0.5">Role: Admin • {domain}/acme-studio</div>
          </div>
        </div>

        <div>
          <a
            className="inline-flex px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Accept Invitation
          </a>
        </div>

        <p className="text-[11.5px] text-zinc-500 leading-relaxed">
          If you were not expecting an invitation from Sarah Chen, you can safely disregard this message.
        </p>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 6. Usage 80% Layout ──
function Usage80Preview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            You&apos;re nearing your event limit
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            Acme Studio has used at least <strong className="text-zinc-900 dark:text-zinc-100">80%</strong> of its
            monthly event allowance. Review your usage before reaching the limit to avoid gaps in
            collection.
          </p>
        </div>

        <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">80,000 of 100,000 events used</div>

        <div>
          <a
            className="inline-flex px-5 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Review usage and plan
          </a>
        </div>

        <p className="text-[11.5px] leading-5 text-zinc-500">
          Your allowance resets on Oct 1, 2026, 12:00 AM UTC. Usage is shared across websites in
          this workspace. Select Acme Studio in {company} to review its plan.
        </p>

        <p className="text-[11.5px] text-zinc-500">
          Button not working? <a className="underline text-zinc-700 dark:text-zinc-300 font-medium">Open {company}</a>
        </p>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 7. Usage 100% Layout ──
function Usage100Preview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            You&apos;ve reached your event limit
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            Acme Studio has reached its monthly event limit. Events beyond the limit are rejected.
            Review your usage to avoid gaps in collection.
          </p>
        </div>

        <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">100,000 of 100,000 events used</div>

        <div>
          <a
            className="inline-flex px-5 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Review usage and plan
          </a>
        </div>

        <p className="text-[11.5px] leading-5 text-zinc-500">
          Your allowance resets on Oct 1, 2026, 12:00 AM UTC. Usage is shared across websites in
          this workspace. Select Acme Studio in {company} to review its plan.
        </p>

        <p className="text-[11.5px] text-zinc-500">
          Button not working? <a className="underline text-zinc-700 dark:text-zinc-300 font-medium">Open {company}</a>
        </p>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}


// ── 8. API Key Created Layout ──
function ApiKeyPreview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            API key created
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            A new secret API key has been generated for your {company} workspace. If you didn&apos;t authorize this key, revoke it immediately.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-4 space-y-2.5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500">Key Name:</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Production Ingest</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500">Key Prefix:</span>
            <code className="font-mono px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-[11px]">
              lmn_live_9f83...
            </code>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500">Created By:</span>
            <span className="text-zinc-700 dark:text-zinc-300">alex@acme.com</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500">Permissions:</span>
            <span className="text-zinc-700 dark:text-zinc-300">Full Access (Ingest & Read)</span>
          </div>
        </div>

        <div>
          <a
            className="inline-flex px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Manage API Keys
          </a>
        </div>

        <p className="text-[11.5px] text-zinc-500 leading-relaxed">
          Never commit API secret keys to public version control or expose them in browser client bundles.
        </p>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 9. Payment Receipt Layout ──
function InvoicePreview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Payment receipt
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            Thanks for your payment. Your receipt and subscription renewal details for {company} are summarized below.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-4 space-y-3">
          <div className="flex justify-between items-center text-xs pb-2.5 border-b border-zinc-200 dark:border-zinc-800">
            <span className="text-zinc-500">Invoice Number:</span>
            <span className="font-mono text-zinc-800 dark:text-zinc-200 font-semibold">INV-2026-8941</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Lumen Pro Plan (Monthly)</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">$49.00</span>
          </div>
          <div className="flex justify-between items-center text-xs text-zinc-500">
            <span>Payment Method:</span>
            <span>Visa ending in 4242</span>
          </div>
          <div className="flex justify-between items-center text-xs pt-2.5 border-t border-zinc-200 dark:border-zinc-800 font-bold">
            <span className="text-zinc-900 dark:text-zinc-100">Amount Paid</span>
            <span className="text-zinc-900 dark:text-zinc-100 text-sm">$49.00 USD</span>
          </div>
        </div>

        <div>
          <a
            className="inline-flex px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Download Invoice PDF
          </a>
        </div>

        <p className="text-[11.5px] text-zinc-500 leading-relaxed">
          Questions about this charge? Reach billing anytime at billing@{domain}.
        </p>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 10. Weekly Analytics Digest Layout ──
function DigestPreview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Your weekly analytics digest
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            Here&apos;s a quick summary of visitor activity across your websites on {company} for the past 7 days.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Pageviews</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">148,920</div>
            <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">↑ 18.4% vs last week</div>
          </div>
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Unique Visitors</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">62,410</div>
            <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">↑ 12.1% vs last week</div>
          </div>
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Avg. Duration</div>
            <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">2m 48s</div>
            <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">↑ 5.3% vs last week</div>
          </div>
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Top Referrer</div>
            <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-1 truncate">ycombinator.com</div>
            <div className="text-[11px] font-medium text-zinc-500 mt-0.5">34% of inbound</div>
          </div>
        </div>

        <div>
          <a
            className="inline-flex px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Open Analytics Dashboard
          </a>
        </div>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 11. New Device Sign-in Layout ──
function NewDevicePreview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            New device sign-in alert
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            Your {company} account was just accessed from a new device or browser. Review the details below to ensure it was you.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-4 space-y-2.5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500">Browser & OS:</span>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Chrome 128.0 (macOS)</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500">Approx. Location:</span>
            <span className="text-zinc-800 dark:text-zinc-200">San Francisco, CA, USA</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500">IP Address:</span>
            <code className="font-mono text-zinc-800 dark:text-zinc-200 text-[11px]">198.51.100.42</code>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500">Time:</span>
            <span className="text-zinc-800 dark:text-zinc-200">Today at 10:14 AM UTC</span>
          </div>
        </div>

        <div>
          <a
            className="inline-flex px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Review Active Sessions
          </a>
        </div>

        <p className="text-[11.5px] text-zinc-500 leading-relaxed">
          If this wasn&apos;t you, change your password immediately and revoke active API tokens to safeguard your workspace.
        </p>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 12. Payment Action Required Layout ──
function PaymentFailedPreview({
  company,
  domain,
  color,
}: {
  company: string;
  domain: string;
  color: string;
}) {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white dark:bg-[#0c0d12] border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden text-zinc-900 dark:text-zinc-100 font-sans shadow-sm">
      <div className="p-7 sm:p-8 space-y-5">
        <BrandLogo company={company} color={color} />
        <div>
          <h2 className="text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Payment action required
          </h2>
          <p className="text-[13px] leading-6 text-zinc-600 dark:text-zinc-400 mt-2">
            We couldn&apos;t process your recent monthly payment of <strong className="text-zinc-900 dark:text-zinc-100">$49.00</strong> for your {company} Pro workspace.
          </p>
        </div>

        <div className="rounded-xl border border-red-200 dark:border-red-900/40 bg-red-50/60 dark:bg-red-950/20 p-4 space-y-2 text-xs">
          <div className="font-semibold text-red-900 dark:text-red-300">Billing Grace Period Active</div>
          <p className="text-[11.5px] text-red-800 dark:text-red-400 leading-relaxed m-0">
            Your card ending in <strong>8812</strong> was declined. You have <strong>3 days</strong> to update your billing details before event ingestion is paused.
          </p>
        </div>

        <div>
          <a
            className="inline-flex px-6 py-2.5 rounded-full text-xs font-semibold text-white shadow-xs"
            style={{ background: color }}
          >
            Update Payment Method
          </a>
        </div>

        <p className="text-[11.5px] text-zinc-500 leading-relaxed">
          Need an invoice or have billing questions? Reply directly to this email or reach us at billing@{domain}.
        </p>

        <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] leading-4 text-zinc-500">
          <div>Sent by {company}</div>
          <div>
            {domain} &nbsp;·&nbsp; <a className="underline">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Code Generators ──

function welcomeCode(companyName: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Button,
  Link,
} from "@react-email/components";

export default function WelcomeEmail() {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                    <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>Welcome to {companyName}</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Thanks for joining {companyName}. Your account is ready—let's get your first website connected so you can see where visitors come from and what they do next.
            </Text>
          </Section>

          <Section style={{ padding: "8px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
              <tbody>
                <tr>
                  <td style={{ width: "22px", verticalAlign: "top", paddingTop: "2px" }}>
                    <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>1.</Text>
                  </td>
                  <td style={{ paddingBottom: "14px" }}>
                    <Text style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", margin: "0 0 4px 0" }}>Add your website</Text>
                    <Text style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.5", margin: 0 }}>Finish your workspace setup, then add the website you want to measure.</Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "22px", verticalAlign: "top", paddingTop: "2px" }}>
                    <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>2.</Text>
                  </td>
                  <td style={{ paddingBottom: "14px" }}>
                    <Text style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", margin: "0 0 4px 0" }}>Install your tracking script</Text>
                    <Text style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.5", margin: 0 }}>Choose your collection and consent settings, then copy the script into your site.</Text>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "22px", verticalAlign: "top", paddingTop: "2px" }}>
                    <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>3.</Text>
                  </td>
                  <td>
                    <Text style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", margin: "0 0 4px 0" }}>See your first visit</Text>
                    <Text style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.5", margin: 0 }}>Visit your site and check that events appear. Add custom events when you're ready to measure signups and other actions.</Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section style={{ padding: "16px 32px 0 32px" }}>
            <Button href={"https://" + domain + "/get-started"} style={{ backgroundColor: "${color}", color: "#fff", borderRadius: "9999px", padding: "11px 22px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
              Get started
            </Button>
          </Section>

          <Section style={{ padding: "20px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>
                      {domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

function otpCode(companyName: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
} from "@react-email/components";

export default function OtpEmail({ code = "582 914" }: { code?: string }) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          {/* Logo */}
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                    <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>Verify your email address</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Here is your one-time verification code to securely access your {companyName} workspace. Enter this code on the verification screen to continue.
            </Text>
          </Section>

          {/* OTP Box */}
          <Section style={{ padding: "16px 32px" }}>
            <div style={{ backgroundColor: "${color}15", border: "1px solid ${color}35", borderRadius: "12px", padding: "20px", textAlign: "center" }}>
              <Text style={{ fontFamily: "monospace", fontSize: "28px", fontWeight: 700, color: "${color}", letterSpacing: "0.25em", margin: "0 0 4px 0" }}>
                {code}
              </Text>
              <Text style={{ fontSize: "11px", fontWeight: 600, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
                Expires in 10 minutes
              </Text>
            </div>
          </Section>

          <Section style={{ padding: "0 32px 16px 32px" }}>
            <Text style={{ fontSize: "12px", color: "#71717a", lineHeight: "1.6", margin: 0 }}>
              Never share this code with anyone. {companyName} staff will never request your verification code over chat, phone, or email.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "12px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>
                      {domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

function magicLinkCode(companyName: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Link,
} from "@react-email/components";

export default function MagicLinkEmail({
  verifyUrl = "https://auth.${domain}/verify?token=mglk_89218041",
}: {
  verifyUrl?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          {/* Logo */}
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                    <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>Sign in to your {companyName} account</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Click the button below to securely authenticate your session. No password required. This link is single-use and expires in 10 minutes.
            </Text>
          </Section>

          {/* CTA */}
          <Section style={{ padding: "16px 32px 20px 32px" }}>
            <Button href={verifyUrl} style={{ backgroundColor: "${color}", color: "#fff", borderRadius: "9999px", padding: "12px 26px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
              Sign In to {companyName}
            </Button>
          </Section>

          {/* Details */}
          <Section style={{ padding: "0 32px 16px 32px" }}>
            <div style={{ border: "1px solid #e4e4e7", backgroundColor: "#f8fafc", borderRadius: "10px", padding: "14px 16px" }}>
              <Text style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", margin: "0 0 4px 0" }}>Sign-in Request Details</Text>
              <Text style={{ fontSize: "12px", color: "#64748b", margin: "0 0 2px 0" }}>Device: Chrome on macOS</Text>
              <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Location: San Francisco, CA (198.51.100.42)</Text>
            </div>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "12px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>
                      {domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

function resetPasswordCode(companyName: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Link,
} from "@react-email/components";

export default function ResetPasswordEmail({
  resetUrl = "https://" + domain + "/reset-password?token=rst_89124",
}: {
  resetUrl?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          {/* Logo */}
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                    <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>Reset your {companyName} password</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              We received a request to reset the password for your account. Click the button below to set a new password.
            </Text>
          </Section>

          {/* CTA */}
          <Section style={{ padding: "16px 32px 20px 32px" }}>
            <Button href={resetUrl} style={{ backgroundColor: "${color}", color: "#fff", borderRadius: "9999px", padding: "12px 26px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
              Reset Password
            </Button>
          </Section>

          <Section style={{ padding: "0 32px 16px 32px" }}>
            <div style={{ border: "1px solid #e4e4e7", backgroundColor: "#f8fafc", borderRadius: "10px", padding: "12px 16px" }}>
              <Text style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", margin: "0 0 2px 0" }}>⏱ This link expires in 30 minutes</Text>
              <Text style={{ fontSize: "11px", color: "#64748b", margin: 0 }}>If you didn't request a password reset, you can safely ignore this email.</Text>
            </div>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "12px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>
                      {domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

function inviteCode(companyName: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Link,
} from "@react-email/components";

export default function WorkspaceInviteEmail({
  inviterName = "Sarah Chen",
  workspaceName = "Acme Studio",
  role = "Admin",
  inviteUrl = "https://" + domain + "/invite/acme-studio",
}: {
  inviterName?: string;
  workspaceName?: string;
  role?: string;
  inviteUrl?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          {/* Logo */}
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                    <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>{inviterName} invited you to collaborate on {companyName}</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              {inviterName} has invited you to join the <strong>{workspaceName}</strong> workspace on {companyName} to monitor visitor traffic, verify funnel metrics, and inspect conversion flows.
            </Text>
          </Section>

          {/* Workspace Card */}
          <Section style={{ padding: "12px 32px 20px 32px" }}>
            <div style={{ border: "1px solid #e4e4e7", backgroundColor: "#f8fafc", borderRadius: "10px", padding: "14px 16px" }}>
              <Text style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", margin: "0 0 2px 0" }}>{workspaceName}</Text>
              <Text style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>Role: {role} • {domain}/{workspaceName.toLowerCase().replace(/\\s+/g, "-")}</Text>
            </div>
          </Section>

          {/* CTA */}
          <Section style={{ padding: "0 32px 20px 32px" }}>
            <Button href={inviteUrl} style={{ backgroundColor: "${color}", color: "#fff", borderRadius: "9999px", padding: "12px 26px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
              Accept Invitation
            </Button>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "12px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>
                      {domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

function usage80Code(company: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Button,
  Link,
} from "@react-email/components";

export default function Usage80Email({
  companyName = "${company}",
  domain = "${domain}",
  color = "${color}",
}: {
  companyName?: string;
  domain?: string;
  color?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <Row>
              <Column>
                <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>
                        <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                        <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Column>
            </Row>
          </Section>
          <Section style={{ padding: "20px 32px 0 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>You&apos;re nearing your event limit</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Acme Studio has used at least <strong style={{ color: "#0f172a" }}>80%</strong> of its monthly event allowance. Review your usage before reaching the limit to avoid gaps in collection.
            </Text>
          </Section>
          <Section style={{ padding: "16px 32px 0 32px" }}>
            <Text style={{ fontSize: "12px", color: "#52525b", fontWeight: 600, margin: 0 }}>80,000 of 100,000 events used</Text>
          </Section>
          <Section style={{ padding: "16px 32px 0 32px" }}>
            <Button href={"https://" + domain + "/usage"} style={{ backgroundColor: "${color}", color: "#fff", borderRadius: "9999px", padding: "11px 22px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>Review usage and plan</Button>
          </Section>
          <Section style={{ padding: "16px 32px 0 32px" }}>
            <Text style={{ fontSize: "11px", color: "#71717a", lineHeight: "1.6", margin: 0 }}>
              Your allowance resets on Oct 1, 2026, 12:00 AM UTC. Usage is shared across websites in this workspace. Select Acme Studio in {companyName} to review its plan.
            </Text>
          </Section>
          <Section style={{ padding: "20px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>{domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link></Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

function usage100Code(company: string, domain: string, color: string) {
  return usage80Code(company, domain, color)
    .replaceAll("nearing your event limit", "reached your event limit")
    .replaceAll("has used at least <strong", "has reached its monthly event limit. Events beyond")
    .replace("80% of its monthly event allowance. Review your usage before reaching the limit to avoid gaps", "the limit are rejected. Review your usage")
    .replace("80,000 of 100,000", "100,000 of 100,000");
}


function apiKeyCode(companyName: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Link,
} from "@react-email/components";

export default function ApiKeyCreatedEmail({
  keyName = "Production Ingest",
  keyPrefix = "lmn_live_9f83...",
  createdBy = "alex@acme.com",
}: {
  keyName?: string;
  keyPrefix?: string;
  createdBy?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          {/* Logo */}
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                    <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>API key created</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              A new secret API key has been generated for your {companyName} workspace. If you didn't create this key, revoke it immediately.
            </Text>
          </Section>

          {/* Details Card */}
          <Section style={{ padding: "12px 32px 16px 32px" }}>
            <div style={{ border: "1px solid #e4e4e7", backgroundColor: "#f8fafc", borderRadius: "10px", padding: "16px" }}>
              <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
                <tbody>
                  <tr>
                    <td style={{ fontSize: "12px", color: "#64748b", paddingBottom: "8px" }}>Key Name:</td>
                    <td style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", textAlign: "right", paddingBottom: "8px" }}>{keyName}</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "12px", color: "#64748b", paddingBottom: "8px" }}>Key Prefix:</td>
                    <td style={{ fontSize: "12px", fontFamily: "monospace", color: "#0f172a", textAlign: "right", paddingBottom: "8px" }}>{keyPrefix}</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "12px", color: "#64748b", paddingBottom: "8px" }}>Created By:</td>
                    <td style={{ fontSize: "12px", color: "#0f172a", textAlign: "right", paddingBottom: "8px" }}>{createdBy}</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "12px", color: "#64748b" }}>Permissions:</td>
                    <td style={{ fontSize: "12px", color: "#0f172a", textAlign: "right" }}>Full Access (Read/Write)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* CTA */}
          <Section style={{ padding: "0 32px 20px 32px" }}>
            <Button href={"https://" + domain + "/settings/api-keys"} style={{ backgroundColor: "${color}", color: "#fff", borderRadius: "9999px", padding: "12px 26px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
              Manage API Keys
            </Button>
          </Section>

          {/* Security Note */}
          <Section style={{ padding: "0 32px 16px 32px" }}>
            <Text style={{ fontSize: "11.5px", color: "#71717a", lineHeight: "1.6", margin: 0 }}>
              Never commit API secret keys to public version control or expose them in browser bundles.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "12px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>
                      {domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

function invoiceCode(companyName: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Link,
} from "@react-email/components";

export default function InvoiceReceiptEmail({
  invoiceId = "INV-2026-8941",
  amount = "$49.00",
  plan = "Lumen Pro Plan (Monthly)",
}: {
  invoiceId?: string;
  amount?: string;
  plan?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          {/* Logo */}
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                    <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>Payment receipt</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Thanks for your payment. Your receipt and billing details for your {companyName} subscription are summarized below.
            </Text>
          </Section>

          {/* Receipt Breakdown */}
          <Section style={{ padding: "12px 32px 16px 32px" }}>
            <div style={{ border: "1px solid #e4e4e7", backgroundColor: "#f8fafc", borderRadius: "10px", padding: "16px" }}>
              <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
                <tbody>
                  <tr>
                    <td style={{ fontSize: "12px", color: "#64748b", paddingBottom: "10px" }}>Invoice Number:</td>
                    <td style={{ fontSize: "12px", fontFamily: "monospace", fontWeight: 700, color: "#0f172a", textAlign: "right", paddingBottom: "10px" }}>{invoiceId}</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "12px", color: "#0f172a", paddingBottom: "10px" }}>{plan}</td>
                    <td style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", textAlign: "right", paddingBottom: "10px" }}>{amount}</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "12px", color: "#64748b", paddingBottom: "10px" }}>Payment Method:</td>
                    <td style={{ fontSize: "12px", color: "#0f172a", textAlign: "right", paddingBottom: "10px" }}>Visa ending in 4242</td>
                  </tr>
                  <tr style={{ borderTop: "1px solid #e4e4e7" }}>
                    <td style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", paddingTop: "10px" }}>Amount Paid</td>
                    <td style={{ fontSize: "14px", fontWeight: 800, color: "#0f172a", textAlign: "right", paddingTop: "10px" }}>{amount} USD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* CTA */}
          <Section style={{ padding: "0 32px 20px 32px" }}>
            <Button href={"https://" + domain + "/billing"} style={{ backgroundColor: "${color}", color: "#fff", borderRadius: "9999px", padding: "12px 26px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
              Download Invoice PDF
            </Button>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "12px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>
                      {domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

function digestCode(companyName: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Button,
  Link,
} from "@react-email/components";

export default function DigestEmail() {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          {/* Logo */}
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                    <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>Your weekly analytics digest</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Here's a quick summary of visitor activity across your websites on {companyName} for the past 7 days.
            </Text>
          </Section>

          {/* Stats Grid */}
          <Section style={{ padding: "12px 32px 20px 32px" }}>
            <Row>
              <Column style={{ width: "50%", paddingRight: "6px" }}>
                <div style={{ border: "1px solid #e4e4e7", backgroundColor: "#f8fafc", borderRadius: "10px", padding: "14px" }}>
                  <Text style={{ fontSize: "11px", fontWeight: 600, color: "#64748b", textTransform: "uppercase", margin: "0 0 4px 0" }}>Pageviews</Text>
                  <Text style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", margin: "0 0 2px 0" }}>148,920</Text>
                  <Text style={{ fontSize: "11px", fontWeight: 600, color: "#16a34a", margin: 0 }}>↑ 18.4%</Text>
                </div>
              </Column>
              <Column style={{ width: "50%", paddingLeft: "6px" }}>
                <div style={{ border: "1px solid #e4e4e7", backgroundColor: "#f8fafc", borderRadius: "10px", padding: "14px" }}>
                  <Text style={{ fontSize: "11px", fontWeight: 600, color: "#64748b", textTransform: "uppercase", margin: "0 0 4px 0" }}>Unique Visitors</Text>
                  <Text style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a", margin: "0 0 2px 0" }}>62,410</Text>
                  <Text style={{ fontSize: "11px", fontWeight: 600, color: "#16a34a", margin: 0 }}>↑ 12.1%</Text>
                </div>
              </Column>
            </Row>
          </Section>

          {/* CTA */}
          <Section style={{ padding: "0 32px 20px 32px" }}>
            <Button href={"https://" + domain + "/dashboard"} style={{ backgroundColor: "${color}", color: "#fff", borderRadius: "9999px", padding: "12px 26px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
              Open Analytics Dashboard
            </Button>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "12px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>
                      {domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

function newDeviceCode(companyName: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Link,
} from "@react-email/components";

export default function NewDeviceAlertEmail({
  device = "Chrome 128.0 (macOS)",
  location = "San Francisco, CA, USA",
  ip = "198.51.100.42",
}: {
  device?: string;
  location?: string;
  ip?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          {/* Logo */}
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                    <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>New device sign-in alert</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              Your {companyName} account was just accessed from a new device or browser. Review the details below to verify your activity.
            </Text>
          </Section>

          {/* Device Card */}
          <Section style={{ padding: "12px 32px 16px 32px" }}>
            <div style={{ border: "1px solid #e4e4e7", backgroundColor: "#f8fafc", borderRadius: "10px", padding: "16px" }}>
              <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation">
                <tbody>
                  <tr>
                    <td style={{ fontSize: "12px", color: "#64748b", paddingBottom: "8px" }}>Device / OS:</td>
                    <td style={{ fontSize: "12px", fontWeight: 700, color: "#0f172a", textAlign: "right", paddingBottom: "8px" }}>{device}</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "12px", color: "#64748b", paddingBottom: "8px" }}>Approx. Location:</td>
                    <td style={{ fontSize: "12px", color: "#0f172a", textAlign: "right", paddingBottom: "8px" }}>{location}</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "12px", color: "#64748b" }}>IP Address:</td>
                    <td style={{ fontSize: "12px", fontFamily: "monospace", color: "#0f172a", textAlign: "right" }}>{ip}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* CTA */}
          <Section style={{ padding: "0 32px 20px 32px" }}>
            <Button href={"https://" + domain + "/security"} style={{ backgroundColor: "${color}", color: "#fff", borderRadius: "9999px", padding: "12px 26px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
              Review Active Sessions
            </Button>
          </Section>

          {/* Note */}
          <Section style={{ padding: "0 32px 16px 32px" }}>
            <Text style={{ fontSize: "11.5px", color: "#71717a", lineHeight: "1.6", margin: 0 }}>
              If this wasn't you, change your password immediately to protect your workspace.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "12px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>
                      {domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

function paymentFailedCode(companyName: string, domain: string, color: string) {
  return `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Link,
} from "@react-email/components";

export default function PaymentFailedEmail({
  amount = "$49.00",
  cardLast4 = "8812",
  daysRemaining = 3,
}: {
  amount?: string;
  cardLast4?: string;
  daysRemaining?: number;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={{ backgroundColor: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", margin: 0, padding: "40px 0" }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", backgroundColor: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "12px", overflow: "hidden" }}>
          {/* Logo */}
          <Section style={{ padding: "28px 32px 0 32px" }}>
            <table border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ margin: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={{ display: "inline-block", verticalAlign: "middle", width: "28px", height: "28px", borderRadius: "8px", backgroundColor: "${color}", textAlign: "center", lineHeight: "28px", color: "#fff", fontWeight: 700, fontSize: "12px", marginRight: "10px" }}>{companyName[0]}</span>
                    <span style={{ display: "inline-block", verticalAlign: "middle", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: "28px" }}>{companyName}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Heading */}
          <Section style={{ padding: "20px 32px 8px 32px" }}>
            <Text style={{ fontSize: "18px", fontWeight: 800, color: "#0f172a", margin: "0 0 8px 0" }}>Payment action required</Text>
            <Text style={{ fontSize: "13px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
              We couldn't process your recent monthly payment of <strong style={{ color: "#0f172a" }}>{amount}</strong> for your {companyName} Pro workspace.
            </Text>
          </Section>

          {/* Alert Card */}
          <Section style={{ padding: "12px 32px 16px 32px" }}>
            <div style={{ border: "1px solid #fecaca", backgroundColor: "#fef2f2", borderRadius: "10px", padding: "16px" }}>
              <Text style={{ fontSize: "13px", fontWeight: 700, color: "#991b1b", margin: "0 0 4px 0" }}>Billing Grace Period Active</Text>
              <Text style={{ fontSize: "12px", color: "#b91c1c", lineHeight: "1.5", margin: 0 }}>
                Your card ending in <strong>{cardLast4}</strong> was declined. You have <strong>{daysRemaining} days</strong> to update your billing details before event collection pauses.
              </Text>
            </div>
          </Section>

          {/* CTA */}
          <Section style={{ padding: "0 32px 20px 32px" }}>
            <Button href={"https://" + domain + "/billing"} style={{ backgroundColor: "${color}", color: "#fff", borderRadius: "9999px", padding: "12px 26px", fontSize: "12px", fontWeight: 700, textDecoration: "none" }}>
              Update Payment Method
            </Button>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "12px 32px 0 32px" }}>
            <table width="100%" border={0} cellPadding={0} cellSpacing={0} role="presentation" style={{ borderTop: "1px solid #e4e4e7" }}>
              <tbody>
                <tr>
                  <td style={{ padding: "16px 0 24px 0" }}>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: "0 0 4px 0" }}>Sent by {companyName}</Text>
                    <Text style={{ fontSize: "11px", color: "#71717a", margin: 0 }}>
                      {domain} &nbsp;·&nbsp; <Link href={"https://" + domain + "/privacy"} style={{ color: "#71717a", textDecoration: "underline" }}>Privacy policy</Link>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}`;
}

// ── HTML Generators ──

function welcomeHtml(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Welcome to ${company}</title>
    <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'); * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }</style>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 8px 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">Welcome to ${company}</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">Thanks for joining ${company}. Your account is ready—let's get your first website connected so you can see where visitors come from and what they do next.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:8px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody>
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;"><p style="font-size:12px;color:#64748b;margin:0;">1.</p></td>
                  <td style="padding-bottom:14px;"><p style="font-size:12px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Add your website</p><p style="font-size:12px;color:#64748b;line-height:1.5;margin:0;">Finish your workspace setup, then add the website you want to measure.</p></td>
                </tr>
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;"><p style="font-size:12px;color:#64748b;margin:0;">2.</p></td>
                  <td style="padding-bottom:14px;"><p style="font-size:12px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Install your tracking script</p><p style="font-size:12px;color:#64748b;line-height:1.5;margin:0;">Choose your collection and consent settings, then copy the script into your site.</p></td>
                </tr>
                <tr>
                  <td style="width:22px;vertical-align:top;padding-top:2px;"><p style="font-size:12px;color:#64748b;margin:0;">3.</p></td>
                  <td><p style="font-size:12px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">See your first visit</p><p style="font-size:12px;color:#64748b;line-height:1.5;margin:0;">Visit your site and check that events appear. Add custom events when you're ready to measure signups and other actions.</p></td>
                </tr>
              </tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 0 32px;">
              <a href="https://${domain}/get-started" style="background-color:${color};color:#ffffff;border-radius:9999px;padding:11px 22px;font-size:12px;font-weight:700;text-decoration:none;display:inline-block;">Get started</a>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

function otpHtml(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Your ${company} Verification Code</title>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 8px 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">Verify your email address</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">Here is your one-time verification code to securely access your ${company} workspace. Enter this code on the verification screen to continue.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:16px 32px;">
              <div style="background-color:${color}15;border:1px solid ${color}35;border-radius:12px;padding:20px;text-align:center;">
                <p style="font-family:monospace;font-size:28px;font-weight:700;color:${color};letter-spacing:0.25em;margin:0 0 4px 0;">582 914</p>
                <p style="font-size:11px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.1em;margin:0;">Expires in 10 minutes</p>
              </div>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 16px 32px;">
              <p style="font-size:12px;color:#71717a;line-height:1.6;margin:0;">Never share this code with anyone. ${company} staff will never request your verification code over chat, phone, or email.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

function magicLinkHtml(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Sign in to ${company}</title>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 8px 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">Sign in to your ${company} account</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">Click the button below to securely authenticate your session. No password required. This link is single-use and expires in 10 minutes.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:16px 32px 20px 32px;">
              <a href="https://auth.${domain}/verify" style="background-color:${color};color:#ffffff;border-radius:9999px;padding:12px 26px;font-size:12px;font-weight:700;text-decoration:none;display:inline-block;">Sign In to ${company}</a>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 16px 32px;">
              <div style="border:1px solid #e4e4e7;background-color:#f8fafc;border-radius:10px;padding:14px 16px;">
                <p style="font-size:12px;font-weight:700;color:#0f172a;margin:0 0 4px 0;">Sign-in Request Details</p>
                <p style="font-size:12px;color:#64748b;margin:0 0 2px 0;">Device: Chrome on macOS</p>
                <p style="font-size:12px;color:#64748b;margin:0;">Location: San Francisco, CA (198.51.100.42)</p>
              </div>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

function resetPasswordHtml(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Reset your ${company} password</title>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 8px 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">Reset your ${company} password</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">We received a request to reset the password for your account. Click the button below to set a new password.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:16px 32px 20px 32px;">
              <a href="https://${domain}/reset-password" style="background-color:${color};color:#ffffff;border-radius:9999px;padding:12px 26px;font-size:12px;font-weight:700;text-decoration:none;display:inline-block;">Reset Password</a>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 16px 32px;">
              <div style="border:1px solid #e4e4e7;background-color:#f8fafc;border-radius:10px;padding:12px 16px;">
                <p style="font-size:12px;font-weight:700;color:#0f172a;margin:0 0 2px 0;">⏱ This link expires in 30 minutes</p>
                <p style="font-size:11px;color:#64748b;margin:0;">If you didn't request a password reset, you can safely ignore this email.</p>
              </div>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

function inviteHtml(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Invitation to collaborate on ${company}</title>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 8px 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">Sarah Chen invited you to collaborate on ${company}</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">Sarah has invited you to join the <strong>Acme Studio</strong> workspace on ${company} to monitor visitor traffic, verify funnel metrics, and inspect conversion flows.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 20px 32px;">
              <div style="border:1px solid #e4e4e7;background-color:#f8fafc;border-radius:10px;padding:14px 16px;">
                <p style="font-size:13px;font-weight:700;color:#0f172a;margin:0 0 2px 0;">Acme Studio</p>
                <p style="font-size:12px;color:#64748b;margin:0;">Role: Admin • ${domain}/acme-studio</p>
              </div>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 20px 32px;">
              <a href="https://${domain}/invite" style="background-color:${color};color:#ffffff;border-radius:9999px;padding:12px 26px;font-size:12px;font-weight:700;text-decoration:none;display:inline-block;">Accept Invitation</a>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

function usage80Html(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${company} Usage Alert</title>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 0 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">You're nearing your event limit</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">Acme Studio has used at least <strong style="color:#0f172a;">80%</strong> of its monthly event allowance. Review your usage before reaching the limit to avoid gaps in collection.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:16px 32px 0 32px;">
              <p style="font-size:12px;color:#52525b;font-weight:600;margin:0;">80,000 of 100,000 events used</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:16px 32px 0 32px;">
              <a href="https://${domain}/usage" style="background-color:${color};color:#ffffff;border-radius:9999px;padding:11px 22px;font-size:12px;font-weight:700;text-decoration:none;display:inline-block;">Review usage and plan</a>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:16px 32px 0 32px;">
              <p style="font-size:11px;color:#71717a;line-height:1.6;margin:0;">Your allowance resets on Oct 1, 2026, 12:00 AM UTC. Usage is shared across websites in this workspace. Select Acme Studio in ${company} to review its plan.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

function usage100Html(company: string, domain: string, color: string) {
  return usage80Html(company, domain, color)
    .replace("nearing your event limit", "reached your event limit")
    .replace("You're nearing", "You've reached")
    .replace("has used at least <strong", "has reached its monthly event limit. Events beyond")
    .replace("80%</strong> of its monthly event allowance. Review your usage before reaching the limit to avoid gaps", "the limit are rejected. Review your usage")
    .replace("80,000 of 100,000", "100,000 of 100,000");
}


function apiKeyHtml(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>API Key Created for ${company}</title>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 8px 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">API key created</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">A new secret API key has been generated for your ${company} workspace. If you didn't create this key, revoke it immediately.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 16px 32px;">
              <div style="border:1px solid #e4e4e7;background-color:#f8fafc;border-radius:10px;padding:16px;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                  <tbody>
                    <tr>
                      <td style="font-size:12px;color:#64748b;padding-bottom:8px;">Key Name:</td>
                      <td style="font-size:12px;font-weight:700;color:#0f172a;text-align:right;padding-bottom:8px;">Production Ingest</td>
                    </tr>
                    <tr>
                      <td style="font-size:12px;color:#64748b;padding-bottom:8px;">Key Prefix:</td>
                      <td style="font-size:12px;font-family:monospace;color:#0f172a;text-align:right;padding-bottom:8px;">lmn_live_9f83...</td>
                    </tr>
                    <tr>
                      <td style="font-size:12px;color:#64748b;padding-bottom:8px;">Created By:</td>
                      <td style="font-size:12px;color:#0f172a;text-align:right;padding-bottom:8px;">alex@acme.com</td>
                    </tr>
                    <tr>
                      <td style="font-size:12px;color:#64748b;">Permissions:</td>
                      <td style="font-size:12px;color:#0f172a;text-align:right;">Full Access (Read/Write)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 20px 32px;">
              <a href="https://${domain}/settings/api-keys" style="background-color:${color};color:#ffffff;border-radius:9999px;padding:12px 26px;font-size:12px;font-weight:700;text-decoration:none;display:inline-block;">Manage API Keys</a>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 16px 32px;">
              <p style="font-size:11.5px;color:#71717a;line-height:1.6;margin:0;">Never commit API secret keys to public version control or expose them in browser bundles.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

function invoiceHtml(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Payment Receipt for ${company}</title>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 8px 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">Payment receipt</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">Thanks for your payment. Your receipt and billing details for your ${company} subscription are summarized below.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 16px 32px;">
              <div style="border:1px solid #e4e4e7;background-color:#f8fafc;border-radius:10px;padding:16px;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                  <tbody>
                    <tr>
                      <td style="font-size:12px;color:#64748b;padding-bottom:10px;">Invoice Number:</td>
                      <td style="font-size:12px;font-family:monospace;font-weight:700;color:#0f172a;text-align:right;padding-bottom:10px;">INV-2026-8941</td>
                    </tr>
                    <tr>
                      <td style="font-size:12px;color:#0f172a;padding-bottom:10px;">${company} Pro Plan (Monthly)</td>
                      <td style="font-size:12px;font-weight:700;color:#0f172a;text-align:right;padding-bottom:10px;">$49.00</td>
                    </tr>
                    <tr>
                      <td style="font-size:12px;color:#64748b;padding-bottom:10px;">Payment Method:</td>
                      <td style="font-size:12px;color:#0f172a;text-align:right;padding-bottom:10px;">Visa ending in 4242</td>
                    </tr>
                    <tr style="border-top:1px solid #e4e4e7;">
                      <td style="font-size:13px;font-weight:700;color:#0f172a;padding-top:10px;">Amount Paid</td>
                      <td style="font-size:14px;font-weight:800;color:#0f172a;text-align:right;padding-top:10px;">$49.00 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 20px 32px;">
              <a href="https://${domain}/billing" style="background-color:${color};color:#ffffff;border-radius:9999px;padding:12px 26px;font-size:12px;font-weight:700;text-decoration:none;display:inline-block;">Download Invoice PDF</a>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

function digestHtml(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Weekly Analytics Digest for ${company}</title>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 8px 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">Your weekly analytics digest</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">Here's a quick summary of visitor activity across your websites on ${company} for the past 7 days.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 20px 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                <tbody>
                  <tr>
                    <td style="width:50%;padding-right:6px;">
                      <div style="border:1px solid #e4e4e7;background-color:#f8fafc;border-radius:10px;padding:14px;">
                        <p style="font-size:11px;font-weight:600;color:#64748b;text-transform:uppercase;margin:0 0 4px 0;">Pageviews</p>
                        <p style="font-size:20px;font-weight:800;color:#0f172a;margin:0 0 2px 0;">148,920</p>
                        <p style="font-size:11px;font-weight:600;color:#16a34a;margin:0;">↑ 18.4%</p>
                      </div>
                    </td>
                    <td style="width:50%;padding-left:6px;">
                      <div style="border:1px solid #e4e4e7;background-color:#f8fafc;border-radius:10px;padding:14px;">
                        <p style="font-size:11px;font-weight:600;color:#64748b;text-transform:uppercase;margin:0 0 4px 0;">Unique Visitors</p>
                        <p style="font-size:20px;font-weight:800;color:#0f172a;margin:0 0 2px 0;">62,410</p>
                        <p style="font-size:11px;font-weight:600;color:#16a34a;margin:0;">↑ 12.1%</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 20px 32px;">
              <a href="https://${domain}/dashboard" style="background-color:${color};color:#ffffff;border-radius:9999px;padding:12px 26px;font-size:12px;font-weight:700;text-decoration:none;display:inline-block;">Open Analytics Dashboard</a>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

function newDeviceHtml(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>New Device Sign-in for ${company}</title>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 8px 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">New device sign-in alert</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">Your ${company} account was just accessed from a new device or browser. Review the details below to verify your activity.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 16px 32px;">
              <div style="border:1px solid #e4e4e7;background-color:#f8fafc;border-radius:10px;padding:16px;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                  <tbody>
                    <tr>
                      <td style="font-size:12px;color:#64748b;padding-bottom:8px;">Device / OS:</td>
                      <td style="font-size:12px;font-weight:700;color:#0f172a;text-align:right;padding-bottom:8px;">Chrome 128.0 (macOS)</td>
                    </tr>
                    <tr>
                      <td style="font-size:12px;color:#64748b;padding-bottom:8px;">Approx. Location:</td>
                      <td style="font-size:12px;color:#0f172a;text-align:right;padding-bottom:8px;">San Francisco, CA, USA</td>
                    </tr>
                    <tr>
                      <td style="font-size:12px;color:#64748b;">IP Address:</td>
                      <td style="font-size:12px;font-family:monospace;color:#0f172a;text-align:right;">198.51.100.42</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 20px 32px;">
              <a href="https://${domain}/security" style="background-color:${color};color:#ffffff;border-radius:9999px;padding:12px 26px;font-size:12px;font-weight:700;text-decoration:none;display:inline-block;">Review Active Sessions</a>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 16px 32px;">
              <p style="font-size:11.5px;color:#71717a;line-height:1.6;margin:0;">If this wasn't you, change your password immediately to protect your workspace.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

function paymentFailedHtml(company: string, domain: string, color: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Payment Action Required for ${company}</title>
  </head>
  <body style="background-color:#ffffff;font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;margin:0;padding:40px 0;">
    <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;margin:0 auto;background-color:#ffffff;border:1px solid #e4e4e7;border-radius:12px;overflow:hidden;">
      <tbody>
        <tr>
          <td>
            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:28px 32px 0 32px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin:0;"><tbody><tr>
                <td style="vertical-align:middle;">
                  <span style="display:inline-block;vertical-align:middle;width:28px;height:28px;border-radius:8px;background-color:${color};text-align:center;line-height:28px;color:#ffffff;font-weight:700;font-size:12px;margin-right:10px;">${company[0]}</span><span style="display:inline-block;vertical-align:middle;font-size:15px;font-weight:700;color:#0f172a;line-height:28px;">${company}</span>
                </td>
              </tr></tbody></table>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:20px 32px 8px 32px;">
              <h1 style="font-size:18px;font-weight:800;color:#0f172a;margin:0 0 8px 0;">Payment action required</h1>
              <p style="font-size:13px;color:#475569;line-height:1.6;margin:0;">We couldn't process your recent monthly payment of <strong style="color:#0f172a;">$49.00</strong> for your ${company} Pro workspace.</p>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 16px 32px;">
              <div style="border:1px solid #fecaca;background-color:#fef2f2;border-radius:10px;padding:16px;">
                <p style="font-size:13px;font-weight:700;color:#991b1b;margin:0 0 4px 0;">Billing Grace Period Active</p>
                <p style="font-size:12px;color:#b91c1c;line-height:1.5;margin:0;">Your card ending in <strong>8812</strong> was declined. You have <strong>3 days</strong> to update your billing details before event collection pauses.</p>
              </div>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:0 32px 20px 32px;">
              <a href="https://${domain}/billing" style="background-color:${color};color:#ffffff;border-radius:9999px;padding:12px 26px;font-size:12px;font-weight:700;text-decoration:none;display:inline-block;">Update Payment Method</a>
            </td></tr></tbody></table>

            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td style="padding:12px 32px 0 32px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-top:1px solid #e4e4e7;"><tbody><tr><td style="padding:16px 0 24px 0;">
                <p style="font-size:11px;color:#71717a;margin:0 0 4px 0;">Sent by ${company}</p>
                <p style="font-size:11px;color:#71717a;margin:0;">${domain} &nbsp;·&nbsp; <a href="https://${domain}/privacy" style="color:#71717a;text-decoration:underline;">Privacy policy</a></p>
              </td></tr></tbody></table>
            </td></tr></tbody></table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
}

type CompanyDef = { name: string; domain: string; color: string };
const companies: CompanyDef[] = [{ name: "Lumen", domain: "lumen.co", color: "#D97706" }];

type TemplateKind =
  | "welcome"
  | "otp"
  | "magic-link"
  | "reset-password"
  | "invite"
  | "api-key"
  | "invoice"
  | "digest"
  | "new-device"
  | "payment-failed"
  | "usage-80"
  | "usage-100";

function makeTemplate(
  company: CompanyDef,
  kind: TemplateKind
): EmailTemplate {
  const id = `${company.name.toLowerCase()}-${kind}`;
  const titles: Record<TemplateKind, string> = {
    welcome: "Welcome",
    otp: "Verification Code (OTP)",
    "magic-link": "Magic Sign-In Link",
    "reset-password": "Password Reset",
    invite: "Team Workspace Invite",
    "api-key": "API Key Generated",
    invoice: "Payment Receipt",
    digest: "Weekly Analytics Digest",
    "new-device": "New Device Sign-In",
    "payment-failed": "Payment Action Required",
    "usage-80": "Usage — 80% Limit",
    "usage-100": "Usage — 100% Limit",
  };
  const title = titles[kind];
  const descriptions: Record<TemplateKind, string> = {
    welcome: `Lumen setup guide: 3-step onboarding for website analytics. Same layout, rebranded header and CTA.`,
    otp: `6-digit one-time passcode with expiry countdown and security advisory.`,
    "magic-link": `Passwordless authentication email with 10-minute expiry and client device details.`,
    "reset-password": `Secure account recovery with high-contrast action CTA and 30-minute time limit.`,
    invite: `Team workspace invitation to collaborate on Lumen analytics.`,
    "api-key": `Security notice alerting account owners when a new secret API key is generated.`,
    invoice: `Monthly subscription billing receipt with itemized line items and tax breakdown.`,
    digest: `Weekly analytics digest highlighting traffic trends, pageviews, and top referrers.`,
    "new-device": `Security alert warning users of a sign-in from an unrecognized browser or IP.`,
    "payment-failed": `Immediate action notice for failed renewal payment with 3-day grace period.`,
    "usage-80": `80% quota warning for ${company.name}. Minimal layout with usage bar and reset date.`,
    "usage-100": `100% limit reached for ${company.name}. Same layout, limit-rejected notice.`,
  };

  const Preview =
    kind === "welcome"
      ? () => <WelcomePreview company={company.name} domain={company.domain} color={company.color} />
      : kind === "otp"
        ? () => <OtpPreview company={company.name} domain={company.domain} color={company.color} />
        : kind === "magic-link"
          ? () => <MagicLinkPreview company={company.name} domain={company.domain} color={company.color} />
          : kind === "reset-password"
            ? () => <ResetPasswordPreview company={company.name} domain={company.domain} color={company.color} />
            : kind === "invite"
              ? () => <InvitePreview company={company.name} domain={company.domain} color={company.color} />
              : kind === "api-key"
                ? () => <ApiKeyPreview company={company.name} domain={company.domain} color={company.color} />
                : kind === "invoice"
                  ? () => <InvoicePreview company={company.name} domain={company.domain} color={company.color} />
                  : kind === "digest"
                    ? () => <DigestPreview company={company.name} domain={company.domain} color={company.color} />
                    : kind === "new-device"
                      ? () => <NewDevicePreview company={company.name} domain={company.domain} color={company.color} />
                      : kind === "payment-failed"
                        ? () => <PaymentFailedPreview company={company.name} domain={company.domain} color={company.color} />
                        : kind === "usage-80"
                          ? () => <Usage80Preview company={company.name} domain={company.domain} color={company.color} />
                          : () => <Usage100Preview company={company.name} domain={company.domain} color={company.color} />;

  const code =
    kind === "welcome"
      ? welcomeCode(company.name, company.domain, company.color)
      : kind === "otp"
        ? otpCode(company.name, company.domain, company.color)
        : kind === "magic-link"
          ? magicLinkCode(company.name, company.domain, company.color)
          : kind === "reset-password"
            ? resetPasswordCode(company.name, company.domain, company.color)
            : kind === "invite"
              ? inviteCode(company.name, company.domain, company.color)
              : kind === "api-key"
                ? apiKeyCode(company.name, company.domain, company.color)
                : kind === "invoice"
                  ? invoiceCode(company.name, company.domain, company.color)
                  : kind === "digest"
                    ? digestCode(company.name, company.domain, company.color)
                    : kind === "new-device"
                      ? newDeviceCode(company.name, company.domain, company.color)
                      : kind === "payment-failed"
                        ? paymentFailedCode(company.name, company.domain, company.color)
                        : kind === "usage-80"
                          ? usage80Code(company.name, company.domain, company.color)
                          : usage100Code(company.name, company.domain, company.color);

  const html =
    kind === "welcome"
      ? welcomeHtml(company.name, company.domain, company.color)
      : kind === "otp"
        ? otpHtml(company.name, company.domain, company.color)
        : kind === "magic-link"
          ? magicLinkHtml(company.name, company.domain, company.color)
          : kind === "reset-password"
            ? resetPasswordHtml(company.name, company.domain, company.color)
            : kind === "invite"
              ? inviteHtml(company.name, company.domain, company.color)
              : kind === "api-key"
                ? apiKeyHtml(company.name, company.domain, company.color)
                : kind === "invoice"
                  ? invoiceHtml(company.name, company.domain, company.color)
                  : kind === "digest"
                    ? digestHtml(company.name, company.domain, company.color)
                    : kind === "new-device"
                      ? newDeviceHtml(company.name, company.domain, company.color)
                      : kind === "payment-failed"
                        ? paymentFailedHtml(company.name, company.domain, company.color)
                        : kind === "usage-80"
                          ? usage80Html(company.name, company.domain, company.color)
                          : usage100Html(company.name, company.domain, company.color);

  return {
    id,
    title,
    category: "Lumen Suite",
    description: descriptions[kind],
    component: Preview,
    code,
    html,
    plainText: toPlainText(html),
    usageCode: `import Email from "@/templates/${id}";\nawait reloop.emails.send({ from: "hello@${company.domain}", to: "user@example.com", subject: "${title}", react: <Email /> });`,
  };
}

// Generate all 12 Lumen templates
export const tracwellSuiteTemplates: EmailTemplate[] = companies.flatMap((c) => [
  makeTemplate(c, "welcome"),
  makeTemplate(c, "otp"),
  makeTemplate(c, "magic-link"),
  makeTemplate(c, "reset-password"),
  makeTemplate(c, "invite"),
  makeTemplate(c, "api-key"),
  makeTemplate(c, "invoice"),
  makeTemplate(c, "digest"),
  makeTemplate(c, "new-device"),
  makeTemplate(c, "payment-failed"),
  makeTemplate(c, "usage-80"),
  makeTemplate(c, "usage-100"),
]);

// Named exports
export const lumenWelcomeTemplate = tracwellSuiteTemplates[0];
export const lumenOtpTemplate = tracwellSuiteTemplates[1];
export const lumenMagicLinkTemplate = tracwellSuiteTemplates[2];
export const lumenResetPasswordTemplate = tracwellSuiteTemplates[3];
export const lumenInviteTemplate = tracwellSuiteTemplates[4];
export const lumenApiKeyTemplate = tracwellSuiteTemplates[5];
export const lumenInvoiceTemplate = tracwellSuiteTemplates[6];
export const lumenDigestTemplate = tracwellSuiteTemplates[7];
export const lumenNewDeviceTemplate = tracwellSuiteTemplates[8];
export const lumenPaymentFailedTemplate = tracwellSuiteTemplates[9];
export const lumenUsage80Template = tracwellSuiteTemplates[10];
export const lumenUsage100Template = tracwellSuiteTemplates[11];
