import React from "react";

export interface RelayVerificationEmailProps {
  name?: string;
  verificationUrl?: string;
  verificationCode?: string;
  reportUrl?: string;
}

const colors = {
  background: "#edf2f7",
  navy: "#142e49",
  blue: "#175cd3",
  paleBlue: "#eef5ff",
  text: "#263e55",
  muted: "#586d80",
  line: "#d8e4f0",
  white: "#ffffff",
};
const fontFamily = 'Arial, Helvetica, sans-serif';
const text: React.CSSProperties = {
  fontFamily,
  fontSize: "15px",
  lineHeight: "1.7",
  color: colors.muted,
  margin: 0,
};

export default function RelayVerificationEmail({
  name = "Alex",
  verificationUrl = "https://example.com/verify-account",
  verificationCode = "482916",
  reportUrl = "https://example.com/report-signup",
}: RelayVerificationEmailProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Verify your Relay account</title>
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily, backgroundColor: colors.background }}>
        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: colors.background }}>
          <tbody><tr><td style={{ padding: "28px 14px" }}>
            <table role="presentation" align="center" width="100%" cellPadding={0} cellSpacing={0} style={{ maxWidth: "560px", margin: "0 auto" }}>
              {/* Keep every section in the first cell for Reloop HTML import. */}
              <tbody><tr><td>
                <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: colors.navy, borderRadius: "12px 12px 0 0", padding: "24px 28px" }}>
                        <p style={{ fontFamily: '"Trebuchet MS", Arial, sans-serif', color: colors.white, fontSize: "29px", fontWeight: 700, letterSpacing: "-1px", lineHeight: "1.2", margin: "0 0 7px" }}>relay<span style={{ color: "#9ac2ff" }}>.</span></p>
                        <p style={{ ...text, fontSize: "10px", letterSpacing: "2px", fontWeight: 700, color: "#bacde0" }}>ACCOUNT SETUP</p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: colors.white, padding: "30px 28px 28px" }}>
                        <p style={{ ...text, color: colors.text, marginBottom: "14px" }}>Hi {name},</p>
                        <h1 style={{ fontFamily, color: colors.navy, fontSize: "32px", fontWeight: 700, lineHeight: "1.15", letterSpacing: "-0.8px", margin: "0 0 18px" }}>One quick check.<br />Then you’re in.</h1>
                        <p style={text}>Verify your email to activate your Relay account. Choose the button below, or enter the code on your verification screen.</p>
                        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody><tr><td style={{ padding: "24px 0 0" }}>
                            <a href={verificationUrl} style={{ display: "block", backgroundColor: colors.blue, color: colors.white, fontFamily, fontSize: "15px", fontWeight: 700, lineHeight: "22px", padding: "14px 18px", borderRadius: "6px", textAlign: "center", textDecoration: "none" }}>Verify my account</a>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: colors.white, padding: "0 28px 28px" }}>
                        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: colors.paleBlue, border: `1px solid ${colors.line}`, borderRadius: "8px" }}>
                          <tbody><tr><td style={{ padding: "20px" }}>
                            <p style={{ ...text, color: colors.blue, fontSize: "10px", fontWeight: 700, letterSpacing: "1.3px", marginBottom: "10px" }}>OR USE YOUR VERIFICATION CODE</p>
                            <p style={{ fontFamily: '"Courier New", Courier, monospace', fontSize: "32px", lineHeight: "1.3", letterSpacing: "5px", fontWeight: 700, color: colors.navy, margin: "0 0 10px" }}>{verificationCode}</p>
                            <p style={{ ...text, fontSize: "12px" }}>Keep this code private. It verifies access to your account.</p>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: colors.white, borderTop: `1px solid ${colors.line}`, borderRadius: "0 0 12px 12px", padding: "20px 28px 24px" }}>
                        <p style={{ ...text, fontSize: "12px" }}>Not your signup? Leave the account unverified and <a href={reportUrl} style={{ color: colors.blue, textDecoration: "underline" }}>let us know</a>.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "20px 6px 0" }}>
                        <p style={{ ...text, fontSize: "12px", color: colors.navy, fontWeight: 700 }}>Relay · A place to connect.</p>
                        <p style={{ ...text, fontSize: "11px", marginTop: "4px" }}>You received this email because an account was created with your address.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td></tr></tbody>
            </table>
          </td></tr></tbody>
        </table>
      </body>
    </html>
  );
}
