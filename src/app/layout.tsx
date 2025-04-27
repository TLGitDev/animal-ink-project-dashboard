import { Metadata } from "next";
import "./styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Animal Ink Project",
    default: "Animal Ink Project",
  },
  description: "The official Animal Ink Project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
