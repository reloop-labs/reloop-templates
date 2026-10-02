// Static exports of email.tsx for the gallery code tabs.
export const FOLIO_CONFIRMATION_CODE = `import React from "react";

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
                            <td style={{ padding: "18px 20px", borderLeft: \`3px solid \${palette.accent}\` }}>
                              <p style={{ ...paragraph, fontSize: "10px", fontWeight: 700, letterSpacing: "1.2px", marginBottom: "7px" }}>YOUR ACCOUNT</p>
                              <p style={{ ...paragraph, color: palette.ink, fontSize: "16px", fontWeight: 700, overflowWrap: "anywhere", wordBreak: "break-word" }}>{email}</p>
                              <p style={{ ...paragraph, fontSize: "12px", marginTop: "4px" }}>Awaiting email confirmation</p>
                            </td>
                          </tr></tbody>
                        </table>
                        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}>
                          <tbody><tr>
                            <td align="center" style={{ backgroundColor: palette.accent, borderRadius: "8px", textAlign: "center" }}>
                              <a href={confirmationUrl} style={{ display: "block", backgroundColor: palette.accent, border: \`1px solid \${palette.accent}\`, borderRadius: "8px", padding: "15px 12px", color: palette.paper, fontFamily, fontSize: "15px", fontWeight: 700, lineHeight: "22px", textDecoration: "none" }}>Confirm my email</a>
                            </td>
                          </tr></tbody>
                        </table>
                        <p style={{ ...paragraph, fontSize: "12px", marginTop: "18px" }}>Button not opening? <a href={confirmationUrl} style={{ color: palette.accent, textDecoration: "underline" }}>Use this confirmation link.</a></p>
                        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ marginTop: "30px", borderTop: \`1px solid \${palette.lavender}\` }}>
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
`;

export const FOLIO_CONFIRMATION_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charSet="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Confirm your email for Folio</title>
</head>
<body style="margin:0;padding:0;font-family:Arial, Helvetica, sans-serif;background-color:#f1eef5">
<table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="background-color:#f1eef5">
<tbody>
<tr>
<td style="padding:32px 16px">
<table role="presentation" align="center" width="100%" cellPadding="0" cellSpacing="0" style="max-width:560px;margin:0 auto">
<tbody>
<tr>
<td>
<table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
<tbody>
<tr>
<td style="padding-bottom:24px">
<table role="presentation" cellPadding="0" cellSpacing="0">
<tbody>
<tr>
<td style="background-color:#352944;color:#ffffff;width:36px;height:36px;text-align:center;border-radius:9px;font-family:Georgia, serif;font-size:29px;font-style:italic;line-height:36px">f</td>
<td style="padding-left:10px;font-family:&quot;Trebuchet MS&quot;, Arial, sans-serif;font-size:25px;font-weight:700;letter-spacing:-1px;color:#352944">folio</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="background-color:#ffffff;border-radius:16px;padding:36px 28px 30px">
<p style="color:#6841a5;font-family:Arial, Helvetica, sans-serif;font-size:11px;line-height:1.7;margin:0;font-weight:700;letter-spacing:1.8px;margin-bottom:20px">ACCOUNT CONFIRMATION</p>
<h1 style="color:#352944;font-family:Georgia, &#x27;Times New Roman&#x27;, serif;font-size:42px;font-weight:400;line-height:1.1;letter-spacing:-1.5px;margin:0 0 22px">A space for<br/>your next idea.</h1>
<p style="color:#716779;font-family:Arial, Helvetica, sans-serif;font-size:15px;line-height:1.7;margin:0">You’re almost in. Confirm your email address to finish setting up your Folio account.</p>
<table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="margin-top:28px;margin-bottom:28px;background-color:#ece6f6;border-radius:8px">
<tbody>
<tr>
<td style="padding:18px 20px;border-left:3px solid #6841a5">
<p style="color:#716779;font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:1.7;margin:0;font-weight:700;letter-spacing:1.2px;margin-bottom:7px">YOUR ACCOUNT</p>
<p style="color:#352944;font-family:Arial, Helvetica, sans-serif;font-size:16px;line-height:1.7;margin:0;font-weight:700;overflow-wrap:anywhere;word-break:break-word">alex@example.com</p>
<p style="color:#716779;font-family:Arial, Helvetica, sans-serif;font-size:12px;line-height:1.7;margin:0;margin-top:4px">Awaiting email confirmation</p>
</td>
</tr>
</tbody>
</table>
<table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
<tbody>
<tr>
<td align="center" style="background-color:#6841a5;border-radius:8px;text-align:center">
<a href="https://example.com/confirm-email" style="display:block;background-color:#6841a5;border:1px solid #6841a5;border-radius:8px;padding:15px 12px;color:#ffffff;font-family:Arial, Helvetica, sans-serif;font-size:15px;font-weight:700;line-height:22px;text-decoration:none">Confirm my email</a>
</td>
</tr>
</tbody>
</table>
<p style="color:#716779;font-family:Arial, Helvetica, sans-serif;font-size:12px;line-height:1.7;margin:0;margin-top:18px">Button not opening? <a href="https://example.com/confirm-email" style="color:#6841a5;text-decoration:underline">Use this confirmation link.</a>
</p>
<table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style="margin-top:30px;border-top:1px solid #ece6f6">
<tbody>
<tr>
<td style="padding-top:20px">
<p style="color:#716779;font-family:Arial, Helvetica, sans-serif;font-size:12px;line-height:1.7;margin:0">Didn’t create a Folio account? You can ignore this email. Your address won’t be confirmed unless you follow the link.</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td style="padding:22px 4px 0">
<p style="color:#352944;font-family:Arial, Helvetica, sans-serif;font-size:12px;line-height:1.7;margin:0">Folio <span style="color:#716779"> / A little room to create.</span>
</p>
<p style="color:#716779;font-family:Arial, Helvetica, sans-serif;font-size:11px;line-height:1.7;margin:0;margin-top:5px">An account message, sent to alex@example.com.</p>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</body>
</html>`;
