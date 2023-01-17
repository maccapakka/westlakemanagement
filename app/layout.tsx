import Header from "../components/Header";
import { navigationItems as footerNav } from "./navigationItems";

import "./globals.css";
import Link from "next/link";

const navigationItems = [
  {
    name: "Conflict Management",
    link: "conflict-management",
  },
  {
    name: "Training",
    link: "training",
  },
  {
    name: "Advice & Support",
    link: "advice-and-support",
  },
  {
    name: "About Us",
    link: "about",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased text-slate-600">
      <head />
      <body>
        <div className="px-4">
          <Header />
        </div>
        <main>{children}</main>
        <footer className="bg-slate-900">
          <div className="container mx-auto grid grid-flow-row lg:grid-flow-col gap-10 px-4 py-12 max-w-[1124px]">
            {footerNav.map((c) => (
              <div key={c.title} className="space-y-4 text-sm">
                <h3 className="text-slate-100 font-bold uppercase">
                  {c.title}
                </h3>
                {c.items.map((k, i) => (
                  <Link
                    className="block text-slate-400 hover:text-slate-300"
                    key={k.name}
                    href={k.link}
                  >
                    {k.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="container max-w-[1124px] mx-auto px-4 py-12 text-slate-400 border-t border-slate-800 text-sm">
            Copyright &copy; {new Date().getFullYear()} Westlake Management. All
            Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
