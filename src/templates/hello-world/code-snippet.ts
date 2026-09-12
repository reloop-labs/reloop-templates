export const HELLO_WORLD_CODE = `import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Hr,
  Link,
} from "@react-email/components";

export default function HelloWorldEmail({
  name = "Developer",
  confirmationUrl = "https://reloop.sh/verify",
}: {
  name?: string;
  confirmationUrl?: string;
}) {
  return (
    <Html lang="en">
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.header}>
            <Text style={styles.logo}>reloop</Text>
            <Text style={styles.badge}>v0.1.0</Text>
          </Section>

          {/* Hero */}
          <Section style={styles.hero}>
            <Heading style={styles.title}>HELLO WORLD</Heading>
            <Text style={styles.subheading}>
              Hi {name}, welcome to the new era of transactional emails.
            </Text>
          </Section>

          {/* Body */}
          <Section style={styles.content}>
            <Text style={styles.paragraph}>
              This is the official Hello World template for Reloop.
              Designed for high deliverability, dynamic variables, and developer bliss.
            </Text>

            <Button href={confirmationUrl} style={styles.button}>
              Confirm &amp; Launch Email
            </Button>
          </Section>

          <Hr style={styles.hr} />

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © 2026 Reloop Labs, Inc. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: { backgroundColor: "#090a0f", fontFamily: "sans-serif" },
  container: { maxWidth: "600px", margin: "40px auto", backgroundColor: "#0d0f15", borderRadius: "16px", border: "1px solid #1e2232", overflow: "hidden" },
  header: { padding: "24px 32px", borderBottom: "1px solid #181c28" },
  logo: { fontSize: "18px", fontWeight: "700", color: "#ffffff", margin: 0 },
  badge: { fontSize: "11px", color: "#818cf8" },
  hero: { padding: "32px", textAlign: "center" as const },
  title: { fontSize: "32px", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.5px" },
  subheading: { fontSize: "14px", color: "#94a3b8" },
  content: { padding: "0 32px 32px" },
  paragraph: { fontSize: "14px", color: "#94a3b8", lineHeight: "1.6" },
  button: { display: "inline-block", backgroundColor: "#ffffff", color: "#000000", padding: "12px 24px", borderRadius: "10px", fontWeight: "600", textDecoration: "none" },
  hr: { borderColor: "#181c28", margin: "24px 0" },
  footer: { padding: "24px 32px", textAlign: "center" as const },
  footerText: { fontSize: "12px", color: "#64748b" },
};
`;
