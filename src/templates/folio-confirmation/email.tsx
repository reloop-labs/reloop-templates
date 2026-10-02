import React from "react";

export interface FolioConfirmationEmailProps {
  confirmationUrl?: string;
  email?: string;
}

const palette = {
  background: "#f1eef5",
  paper: "#ffffff",
  ink: "#352944",
  muted: "#716779",
  accent: "#6841a5",
  lavender: "#ece6f6",
};
const fontFamily = 'Arial, Helvetica, sans-serif';
const paragraph: React.CSSProperties = {
  color: palette.muted,
  fontFamily,
  fontSize: "15px",
  lineHeight: "1.7",
  margin: 0,
};

export default function FolioConfirmationEmail({
  confirmationUrl = "https://example.com/confirm-email",
  email = "alex@example.com",
}: FolioConfirmationEmailProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Confirm your email for Folio</title>
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily, backgroundColor: palette.background }}>
        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: palette.background }}>
          <tbody>
            <tr>
              <td style={{ padding: "32px 16px" }}>
                <table role="presentation" align="center" width="100%" cellPadding={0} cellSpacing={0} style={{ maxWidth: "560px", margin: "0 auto" }}>
                  {/* Reloop imports the first cell of the constrained-width table.
                      Keep every section inside that cell to preserve all content. */}
                  <tbody><tr><td>
                  <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td style={{ paddingBottom: "24px" }}>
                        <table role="presentation" cellPadding={0} cellSpacing={0}>
                          <tbody><tr>
                            <td style={{ backgroundColor: palette.ink, color: palette.paper, width: "36px", height: "36px", textAlign: "center", borderRadius: "9px", fontFamily: "Georgia, serif", fontSize: "29px", fontStyle: "italic", lineHeight: "36px" }}>f</td>
                            <td style={{ paddingLeft: "10px", fontFamily: '"Trebuchet MS", Arial, sans-serif', fontSize: "25px", fontWeight: 700, letterSpacing: "-1px", color: palette.ink }}>folio</td>
                          </tr></tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: palette.paper, borderRadius: "16px", padding: "36px 28px 30px" }}>
                        <p style={{ ...paragraph, color: palette.accent, fontSize: "11px", fontWeight: 700, letterSpacing: "1.8px", marginBottom: "20px" }}>ACCOUNT CONFIRMATION</p>
                        <h1 style={{ color: palette.ink, fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "42px", fontWeight: 400, lineHeight: "1.1", letterSpacing: "-1.5px", margin: "0 0 22px" }}>A space for<br />your next idea.</h1>
                        <p style={paragraph}>You’re almost in. Confirm your email address to finish setting up your Folio account.</p>
                        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ marginTop: "28px", marginBottom: "28px", backgroundColor: palette.lavender, borderRadius: "8px" }}>
                          <tbody><tr>
                            <td style={{ padding: "18px 20px", borderLeft: `3px solid ${palette.accent}` }}>
                              <p style={{ ...paragraph, fontSize: "10px", fontWeight: 700, letterSpacing: "1.2px", marginBottom: "7px" }}>YOUR ACCOUNT</p>
                              <p style={{ ...paragraph, color: palette.ink, fontSize: "16px", fontWeight: 700, overflowWrap: "anywhere", wordBreak: "break-word" }}>{email}</p>
                              <p style={{ ...paragraph, fontSize: "12px", marginTop: "4px" }}>Awaiting email confirmation</p>
                            </td>
                          </tr></tbody>
                        </table>
                        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody><tr>
                            <td align="center" style={{ backgroundColor: palette.accent, borderRadius: "8px", textAlign: "center" }}>
                              <a href={confirmationUrl} style={{ display: "block", backgroundColor: palette.accent, border: `1px solid ${palette.accent}`, borderRadius: "8px", padding: "15px 12px", color: palette.paper, fontFamily, fontSize: "15px", fontWeight: 700, lineHeight: "22px", textDecoration: "none" }}>Confirm my email</a>
                            </td>
                          </tr></tbody>
                        </table>
                        <p style={{ ...paragraph, fontSize: "12px", marginTop: "18px" }}>Button not opening? <a href={confirmationUrl} style={{ color: palette.accent, textDecoration: "underline" }}>Use this confirmation link.</a></p>
                        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ marginTop: "30px", borderTop: `1px solid ${palette.lavender}` }}>
                          <tbody><tr><td style={{ paddingTop: "20px" }}>
                            <p style={{ ...paragraph, fontSize: "12px" }}>Didn’t create a Folio account? You can ignore this email. Your address won’t be confirmed unless you follow the link.</p>
                          </td></tr></tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "22px 4px 0" }}>
                        <p style={{ ...paragraph, fontSize: "12px", color: palette.ink }}>Folio <span style={{ color: palette.muted }}> / A little room to create.</span></p>
                        <p style={{ ...paragraph, fontSize: "11px", marginTop: "5px" }}>An account message, sent to {email}.</p>
                      </td>
                    </tr>
                  </tbody>
                  </table>
                  </td></tr></tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
