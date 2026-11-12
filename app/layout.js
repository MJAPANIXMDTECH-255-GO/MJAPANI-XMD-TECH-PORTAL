import "./globals.css";

export const metadata = {
  title: "MJAPANI XMD TECH",
  description: "Technology Without Borders. LEARN • BUILD • SECURE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
    }
