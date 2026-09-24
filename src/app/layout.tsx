import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FzCoach } from "@/components/fz-coach";
import { getSessionUser } from "@/lib/auth";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — O futebol virtual`,
    template: `%s · ${site.name}`,
  },
  applicationName: site.name,
  description: site.description,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const account = await getSessionUser();

  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col">
        <div className="relative z-20 flex min-h-full flex-1 flex-col">
          <SiteHeader accountName={account?.name ?? null} />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <FzCoach />
      </body>
    </html>
  );
}
