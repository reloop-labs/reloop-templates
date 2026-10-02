import React from "react";
import type { EmailTemplate } from "../types";

type TemplateSpec = {
  id: string;
  brand: string;
  title: string;
  description: string;
  subject: string;
  html: string;
  plainText: string;
};

const esc = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function shell(background: string, width: number, content: string) {
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Account confirmation</title></head>
<body style="margin:0;padding:0;background:${background};font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${background}"><tbody><tr><td style="padding:28px 14px">
<table role="presentation" width="100%" align="center" cellpadding="0" cellspacing="0" style="max-width:${width}px;margin:0 auto"><tbody><tr><td>
${content}
</td></tr></tbody></table></td></tr></tbody></table></body></html>`;
}

const button = (label: string, color: string, radius = "4px") =>
  `<a href="https://example.com/confirm-account" style="display:block;background:${color};color:#fff;padding:14px 20px;border-radius:${radius};font-size:15px;font-weight:700;text-align:center;text-decoration:none">${label}</a>`;

const specs: TemplateSpec[] = [
  {
    id: "pintera-confirmation", brand: "Pintera", title: "Pintera Email Confirmation", subject: "Confirm your email for Pintera",
    description: "A warm, centered confirmation card with a fallback link and a celebratory sign-off.",
    html: shell("#f4f1ed", 620, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tbody>
      <tr><td style="background:#fff;border:1px solid #ddd7d0;padding:34px;text-align:center"><p style="margin:0 0 8px;color:#403b38;font-size:18px;font-weight:700">Hi Matthew,</p><p style="margin:0;color:#554f4b;font-size:16px;line-height:1.5">Thanks for joining Pintera! Confirm that we have your email right to finish signing up.</p></td></tr>
      <tr><td style="background:#ebe8e5;padding:14px 170px">${button("Confirm Your Email", "#b91f2d")}</td></tr>
      <tr><td style="height:26px"></td></tr><tr><td style="background:#fff;border:1px solid #ddd7d0;padding:28px"><p style="margin:0 0 16px;color:#554f4b">Button not working? Paste this link into your browser:</p><p style="margin:0;overflow-wrap:anywhere"><a href="https://example.com/confirm-account" style="color:#777;text-decoration:underline">https://example.com/confirm-account?token=YOUR_TOKEN</a></p></td></tr>
      <tr><td style="padding:32px 10px 10px;text-align:center"><p style="margin:0 0 26px;color:#777;font-size:28px;font-weight:700">Happy collecting!</p><p style="margin:0;color:#8a8580;font-size:12px;line-height:1.7">Pintera · Ideas worth saving<br>Privacy Policy · Terms</p></td></tr>
    </tbody></table>`),
    plainText: "Hi Matthew,\n\nThanks for joining Pintera. Confirm your email to finish signing up.\n\nConfirm: https://example.com/confirm-account\n\nHappy collecting!",
  },
  {
    id: "stakks-verification", brand: "Stakks", title: "Stakks Signup Verification", subject: "You’re nearly there — verify your email",
    description: "A straightforward blue business email with an expiry notice and dark team signature.",
    html: shell("#f5f6f8", 620, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff"><tbody>
      <tr><td style="background:#2563b9;padding:22px 30px;color:#fff;font-size:30px;font-weight:300">Stakks</td></tr>
      <tr><td style="padding:42px 30px"><h1 style="margin:0 0 38px;font-size:21px">You’re nearly there!</h1><p style="margin:0 0 34px;line-height:1.6">We just need to verify your email address to complete your Stakks signup.</p><table role="presentation" width="220"><tbody><tr><td>${button("Verify email address", "#2563b9")}</td></tr></tbody></table><p style="margin:42px 0 0;line-height:1.8">This link expires in 5 days.<br>If you did not sign up to Stakks, ignore this email.<br>Thanks.</p></td></tr>
      <tr><td style="background:#25282b;color:#fff;padding:20px 30px"><strong>The team at Stakks</strong><br><span style="color:#bbc0c5;font-size:13px">Pixel-perfect networking</span></td></tr>
      <tr><td style="padding:28px;text-align:center;color:#777;font-size:12px">Questions? Contact <a href="mailto:hello@stakks.example" style="color:#2563b9">hello@stakks.example</a></td></tr>
    </tbody></table>`), plainText: "You’re nearly there!\n\nVerify your email address to complete your Stakks signup.\nhttps://example.com/confirm-account\n\nThis link expires in 5 days.",
  },
  {
    id: "hubspire-confirmation", brand: "HubSpire", title: "HubSpire Email Confirmation", subject: "Please confirm your email address",
    description: "A friendly coral confirmation email with a simple envelope illustration and concise security footer.",
    html: shell("#f2f7f9", 560, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff"><tbody>
      <tr><td style="background:#e96d4b;padding:22px;text-align:center;color:#fff;font-size:28px;font-weight:700">HubSpire</td></tr>
      <tr><td style="padding:38px 42px;text-align:center"><div style="margin:0 auto 24px;width:92px;height:72px;border:4px solid #315a75;border-radius:12px;color:#18a59a;font-size:42px;line-height:72px">✓</div><h1 style="margin:0 0 30px;color:#2f5069;font-size:24px">Please confirm your email address</h1><div style="border-top:1px solid #e4e9ec;padding-top:28px;text-align:left;color:#38536a;line-height:1.55"><strong>Thanks for signing up to HubSpire. We’re happy to have you.</strong><br>Please take a second to make sure we have your correct email address.</div><table role="presentation" width="250" align="center" style="margin-top:32px"><tbody><tr><td>${button("Confirm your email address", "#315a75")}</td></tr></tbody></table><p style="margin:20px 0 0;color:#5b6d79;font-size:13px">Didn’t sign up? <a href="https://example.com/report" style="color:#149e95">Let us know.</a></p></td></tr>
    </tbody></table>`), plainText: "Please confirm your email address.\n\nThanks for signing up to HubSpire.\nhttps://example.com/confirm-account",
  },
  {
    id: "coinharbor-verification", brand: "CoinHarbor", title: "CoinHarbor Email Verification", subject: "Verify your CoinHarbor email",
    description: "A restrained finance-style verification card with a blue action and account deletion notice.",
    html: shell("#eef5f8", 560, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tbody>
      <tr><td style="padding:0 0 28px;text-align:center;color:#0b62ad;font-size:25px;font-weight:700">coinharbor</td></tr>
      <tr><td style="background:#fff;border:1px solid #e2e8ec;padding:42px 40px;text-align:center"><div style="margin:auto;width:70px;height:70px;border:3px solid #0d78b5;border-radius:50%;font-size:35px;line-height:70px;color:#0d78b5">✉</div><h1 style="margin:34px 0 26px;color:#304b5a;font-size:24px">Verify your email address</h1><div style="border-top:1px solid #dce3e7;padding-top:26px"><p style="margin:0 0 26px;color:#425d6a;line-height:1.6">To start using your CoinHarbor account, confirm your email address.</p>${button("Verify Email Address", "#0878b9")}<p style="margin:32px 0 0;color:#8b969c;font-size:12px;font-style:italic">If you did not sign up, ignore this email and the account will be deleted.</p></div></td></tr>
      <tr><td style="padding:34px;text-align:center;color:#667985;font-size:13px">Get the latest CoinHarbor app for your phone</td></tr>
    </tbody></table>`), plainText: "Verify your CoinHarbor email address to start using your account.\nhttps://example.com/confirm-account",
  },
  {
    id: "confetto-confirmation", brand: "Confetto", title: "Confetto Email Confirmation", subject: "Confirm your Confetto email",
    description: "A rounded confirmation card with a bright blue field and a playful key illustration.",
    html: shell("#eaf3ff", 560, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0666cf"><tbody>
      <tr><td style="padding:28px;text-align:center;color:#fff;font-size:26px;font-weight:700">◉ &nbsp;Confetto</td></tr>
      <tr><td style="padding:0 28px 42px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:20px"><tbody><tr><td style="padding:44px 28px;text-align:center"><div style="font-size:70px;line-height:1;color:#f3bd18">⚿</div><h1 style="margin:28px 0 16px;font-size:28px;font-weight:400">Confirm Your Email</h1><p style="margin:0 0 18px;color:#77828c;line-height:1.5">Validate your email address and confirm that you own this account.</p><table role="presentation" width="260" align="center"><tbody><tr><td>${button("Confirm Email", "#075bbb", "28px")}</td></tr></tbody></table></td></tr></tbody></table></td></tr>
      <tr><td style="background:#eaf3ff;padding:26px;text-align:center;color:#8a98a5;font-size:11px">© 2026 Confetto · Please do not reply</td></tr>
    </tbody></table>`), plainText: "Confirm your Confetto email address.\nhttps://example.com/confirm-account",
  },
  {
    id: "paster-verification", brand: "Paster", title: "Paster Email Verification", subject: "Verify your Paster email",
    description: "A minimalist editorial verification email with a compact coral action and centered support copy.",
    html: shell("#ffffff", 560, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tbody>
      <tr><td style="padding:14px 18px"><span style="font-size:22px;font-weight:900">we</span><span style="float:right;font-family:Georgia,serif;font-size:28px;font-weight:700">Paster</span></td></tr>
      <tr><td style="padding:58px 34px;text-align:center"><h1 style="margin:0 0 18px;color:#123d68;font-size:35px">Verify your email</h1><table role="presentation" width="110" align="center"><tbody><tr><td>${button("Verify", "#e87568", "5px")}</td></tr></tbody></table><p style="margin:44px 0 0;color:#264e73;font-size:16px;line-height:1.6">Verifying your email ensures continued access to your account.<br><br>If this wasn’t you, contact <a href="mailto:support@paster.example" style="color:#e87568">support@paster.example</a></p></td></tr>
      <tr><td style="background:#f1f0ed;padding:42px;text-align:center;color:#888;font-size:12px">we<br><br>Amsterdam, NL · Venice, CA, USA</td></tr>
    </tbody></table>`), plainText: "Verify your Paster email for continued account access.\nhttps://example.com/confirm-account",
  },
  {
    id: "beatrio-confirmation", brand: "Beatrio", title: "Beatrio Account Confirmation", subject: "Confirm your Beatrio account",
    description: "A personable airmail-style confirmation with a friendly avatar, direct link, and handwritten sign-off.",
    html: shell("#f3f4f5", 560, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fff;border-top:6px solid #1687a8"><tbody>
      <tr><td style="background:#0f90ad;padding:20px;text-align:center;color:#fff"><strong style="font-size:22px">Hello there!</strong><div style="margin:16px auto 0;width:64px;height:64px;border-radius:50%;background:#f2c39c;color:#6b3c28;font-size:38px;line-height:64px">☺</div></td></tr>
      <tr><td style="padding:30px 54px;color:#35434a;line-height:1.7"><p>Welcome <a href="mailto:alex@example.com" style="color:#0788b7">alex@example.com</a>!</p><p>Confirm your account through the link below:</p><table role="presentation" width="190"><tbody><tr><td>${button("Confirm My Account", "#238b69")}</td></tr></tbody></table><p><a href="https://example.com/confirm-account" style="color:#0788b7;overflow-wrap:anywhere">https://example.com/confirm-account</a></p><p style="margin-top:46px"><strong>Have a great day,</strong><br><br>The Beatrio Team<br><span style="font-family:cursive;font-size:22px">Jon & the team</span></p></td></tr>
      <tr><td style="background:#e9e9e9;padding:24px;text-align:center;color:#68747a;font-size:12px">Get in touch · Contact Us · Support</td></tr>
    </tbody></table>`), plainText: "Hello there!\n\nWelcome alex@example.com. Confirm your Beatrio account:\nhttps://example.com/confirm-account",
  },
  {
    id: "findtherest-registration", brand: "FindTheRest", title: "FindTheRest Registration", subject: "Complete your FindTheRest registration",
    description: "A compact cyan registration prompt with privacy reassurance and a simple opt-out footer.",
    html: shell("#ececec", 560, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tbody>
      <tr><td style="background:#fff;padding:22px;text-align:center;font-family:Georgia,serif;font-size:28px;font-weight:700">FindThe<span style="color:#05a5c9">Rest</span></td></tr><tr><td style="height:10px"></td></tr>
      <tr><td style="background:#fff;padding:24px 38px;text-align:center"><table role="presentation" width="100%"><tbody><tr><td>${button("Click here to complete your registration", "#0798bd")}</td></tr></tbody></table><p style="margin:18px 0 0;font-size:12px">Earn expert points, rate and review listings, and receive our periodic email digest.</p><p style="margin:16px 0 0;font-size:10px">We won’t give your address to anyone else.</p></td></tr>
      <tr><td style="padding:16px 0;font-size:11px;color:#666"><strong style="font-family:Georgia,serif;font-size:18px">FindThe<span style="color:#05a5c9">Rest</span></strong><span style="float:right">Copyright © 2026 · Opt-out</span></td></tr>
    </tbody></table>`), plainText: "Complete your FindTheRest registration.\nhttps://example.com/confirm-account",
  },
  {
    id: "promixx-account-active", brand: "ProMixx", title: "ProMixx Account Activated", subject: "Welcome to ProMixx Nutrition",
    description: "An activated-account welcome email with founder note, product discovery CTA, and quality guarantee.",
    html: shell("#fbfaf1", 420, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fffef5;border:1px solid #dad9cf"><tbody>
      <tr><td style="padding:13px 20px;font-size:16px;font-weight:700">PROMIXX<span style="float:right">≡</span></td></tr>
      <tr><td style="padding:28px 28px;text-align:center"><h1 style="margin:0 0 22px;font-size:19px;font-weight:400">Welcome to ProMixx Nutrition!</h1><p style="text-align:left;font-size:13px;line-height:1.5">You’ve activated your customer account. Next time you shop with us, log in for faster checkout.</p><table role="presentation" width="180" align="center"><tbody><tr><td>${button("Visit our Store", "#505449")}</td></tr></tbody></table><p style="margin:24px 0 0;text-align:left;font-size:12px">Questions? Reply to this email or contact support@promixx.example.</p><p style="text-align:left;font-family:cursive;font-size:22px">Albert<br><span style="font-family:Arial;font-size:11px">Founder</span></p></td></tr>
      <tr><td style="border-top:1px solid #ddd;padding:24px;text-align:center"><h2 style="font-size:17px;font-weight:400">How much protein do you need?</h2><p style="font-size:12px">Take our ProMix Protein Calculator Quiz</p></td></tr>
      <tr><td style="background:#344335;height:250px;text-align:center;color:#fff;font-size:60px">🌿</td></tr>
      <tr><td style="background:#292929;color:#fff;padding:28px;text-align:center"><h2 style="font-weight:400">Quality Guarantee</h2><p style="font-size:12px;line-height:1.5">We stand by the quality of our products. If you are not satisfied, contact us within 90 days for a full refund.</p></td></tr>
    </tbody></table>`), plainText: "Welcome to ProMixx Nutrition!\n\nYour customer account is active. Visit our store: https://example.com/store",
  },
  {
    id: "rayon-confirmation", brand: "Rayon", title: "Rayon Account Confirmation", subject: "Confirm your Rayon account",
    description: "A playful typewriter-style account confirmation with a multicolor wordmark and oversized indigo action.",
    html: shell("#f0f1f4", 620, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tbody>
      <tr><td style="background:#fff;padding:22px 38px;font-family:Georgia,serif;font-size:43px;font-weight:700"><span style="color:#354fb0">R</span><span style="color:#814287">a</span><span style="color:#da4c35">y</span><span style="color:#e88b19">o</span><span style="color:#21a77c">n</span></td></tr>
      <tr><td style="padding:28px 34px"><table role="presentation" width="100%" style="background:#fff;border:1px solid #ddd"><tbody><tr><td style="padding:38px 46px;font-family:'Courier New',monospace"><h1 style="font-size:24px">Hi new friend,</h1><p style="font-size:22px;line-height:1.6">We’re psyched you joined Rayon! Please <a href="https://example.com/confirm-account" style="color:#315cb0">confirm your account</a>.</p><a href="https://example.com/confirm-account" style="display:block;margin:36px 0;background:#313d91;border-radius:10px;padding:28px;color:#fff;text-align:center;text-decoration:none;font-size:34px;font-weight:700">Confirm your account</a><p style="font-size:20px">-- Rayon Team</p></td></tr></tbody></table></td></tr>
    </tbody></table>`), plainText: "Hi new friend,\n\nWe’re psyched you joined Rayon. Confirm your account:\nhttps://example.com/confirm-account\n\n-- Rayon Team",
  },
  {
    id: "twittr-confirmation", brand: "Twittr", title: "Twittr Account Confirmation", subject: "Confirm your Twittr account",
    description: "A classic notification-style confirmation with blue ribbon, alternate link, and recovery footer.",
    html: shell("#fff", 680, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ddd"><tbody>
      <tr><td style="background:#f1f1f1;padding:20px 34px"><span style="display:inline-block;background:#1676b5;color:#fff;padding:24px 16px;font-size:22px">t</span><span style="margin-left:28px;font-size:18px"><strong>The Fathom & Draft,</strong><br>Please confirm your Twittr account</span></td></tr>
      <tr><td style="padding:34px 94px;color:#343f47;font-size:17px;line-height:1.5"><p>Confirming your account gives you <strong>full access to Twittr</strong>, and future notifications will be sent to this email address.</p><table role="presentation" width="310"><tbody><tr><td>${button("Confirm your account now", "#0786c2", "7px")}</td></tr></tbody></table><p>Or click the link below:<br><a href="https://example.com/confirm-account" style="color:#1683b2">https://example.com/confirm-account</a></p></td></tr>
      <tr><td style="background:#eee;padding:24px 82px;color:#667078;font-size:13px">Forgot your password? <a href="https://example.com/reset" style="color:#1683b2">Get reset instructions.</a><br>If this was not you, click <a href="https://example.com/report" style="color:#1683b2">not my account</a>.</td></tr>
    </tbody></table>`), plainText: "Confirm your Twittr account for full access.\nhttps://example.com/confirm-account",
  },
  {
    id: "spotifi-confirmation", brand: "Spotifi", title: "Spotifi Account Confirmation", subject: "Welcome to Spotifi — confirm your account",
    description: "A vivid music-themed confirmation with coral intro, abstract player art, and neon green action.",
    html: shell("#fff", 440, `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tbody>
      <tr><td style="background:#f7c4cf;padding:22px 24px"><strong style="color:#3515bd;font-size:20px">◉ Spotifi</strong><h1 style="margin:12px 0 18px;color:#f13e35;font-size:25px">WELCOME TO<br>SPOTIFI.</h1><table role="presentation" width="190"><tbody><tr><td>${button("CONFIRM YOUR ACCOUNT", "#3714bd", "22px")}</td></tr></tbody></table></td></tr>
      <tr><td style="height:180px;background:#f23d32;text-align:center;color:#3915be;font-size:78px">▶︎ ◼︎ ♪</td></tr>
      <tr><td style="background:#3c00d8;color:#fff;padding:28px;text-align:center"><p style="font-size:13px">Keep your account secure.</p><p style="font-size:12px">Confirm below and enjoy the music and podcasts you love.</p><div style="margin:28px auto;width:150px;height:150px;background:#b6d8b2;border:10px solid #dfb8da;color:#273627;font-size:25px;line-height:150px">TOP HITS</div><div style="font-size:32px">◀︎ &nbsp;●&nbsp; ▶︎</div><table role="presentation" width="220" align="center" style="margin-top:34px"><tbody><tr><td>${button("CONFIRM NOW", "#00c979", "28px")}</td></tr></tbody></table></td></tr>
      <tr><td style="padding:26px;color:#999;font-size:10px;line-height:1.8">◉ Spotifi<br><hr style="border:0;border-top:1px solid #ddd">Terms of Use · Privacy Policy · Contact us</td></tr>
    </tbody></table>`), plainText: "Welcome to Spotifi. Confirm your account and enjoy the music you love.\nhttps://example.com/confirm-account",
  },
];

function reactSource(spec: TemplateSpec) {
  return `import React from "react";

export default function ${spec.brand.replace(/[^a-z0-9]/gi, "")}Email() {
  return (
    <div>
      <h1>${esc(spec.title)}</h1>
      <p>${esc(spec.description)}</p>
      <a href="https://example.com/confirm-account">Confirm account</a>
    </div>
  );
}`;
}

function Preview({ html, title }: { html: string; title: string }) {
  return <iframe title={title} srcDoc={html} style={{ width: "100%", height: "900px", border: 0 }} />;
}

export const accountConfirmationCollectionTemplates: EmailTemplate[] = specs.map((spec) => ({
  id: spec.id,
  title: spec.title,
  category: "Account Confirmation",
  description: spec.description,
  component: () => <Preview html={spec.html} title={spec.title} />,
  code: reactSource(spec),
  html: spec.html,
  plainText: spec.plainText,
  usageCode: `await reloop.emails.send({\n  from: "accounts@yourdomain.com",\n  to: "user@example.com",\n  subject: "${spec.subject}",\n  html: ${JSON.stringify(spec.html)},\n});`,
}));
