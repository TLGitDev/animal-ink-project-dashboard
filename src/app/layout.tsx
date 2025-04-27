import { Metadata } from "next";
import SideNav from "@/app/ui/sidenav";
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
      <body className={`antialiased`}>
        <div className="flex h-screen m-auto">
          <div className="flex-none w-32">
            <SideNav />
          </div>
          <div className="m-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
