import Image from "next/image";
import { MyPopover } from "./Popover";

import "./globals.css";

const footerNav = [
  {
    title: "Conflict Management",
    items: [
      {
        name: "Transactional Analysis",
        link: "transactional-analysis",
      },
      {
        name: "Verbal Aggression",
        link: "verbal-aggression",
      },
    ],
  },
  {
    title: "Training",
    items: [
      {
        name: "Armed Self Defence",
        link: "armed-self-defence",
      },
      {
        name: "Breakaway Personal Protection",
        link: "breakaway-personal-protection",
      },
      {
        name: "Armed Robbery Safety",
        link: "armed-robbery-safety",
      },
      {
        name: "Physical Intervention",
        link: "physical-intervention",
      },
      {
        name: "Health & Safety",
        link: "health-and-safety",
      },
      {
        name: "Stress Awareness",
        link: "stress-awareness",
      },
    ],
  },
  {
    title: "Advice & Support",
    items: [
      {
        name: "Report Writing",
        link: "report-writing",
      },
      {
        name: "Safety Measures in the Workplace",
        link: "safety-measures-in-the-workplace",
      },
    ],
  },
  {
    title: "About Us",
    items: [
      {
        name: "Profile",
        link: "profile",
      },
      {
        name: "Our Promises",
        link: "our-promises",
      },
      {
        name: "Biography",
        link: "biography",
      },
      {
        name: "FAQs",
        link: "faqs",
      },
    ],
  },
];

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
          <header className="container mx-auto max-w-[1124px] py-8 flex">
            <a href="/" className="grow">
              <Image
                className="grow"
                src="/logo.gif"
                width="220"
                height="77"
                alt="Westlake Brand Logo"
                priority
              />
            </a>
            <nav className="grow space-x-6 self-center text-right text-md font-semibold">
              <div className="hidden lg:block">
                {footerNav.map((item) => (
                  <div key={item.title} className="group inline-block relative">
                    <button className="hover:text-slate-900 font-semibold py-2 px-4 gap-2 inline-flex items-center">
                      <span>{item.title}</span>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    <ul className="absolute bg-white shadow-lg rounded-md hidden text-blue-500 pt-1 group-hover:block w-[250px] divide-y overflow-hidden">
                      {item.items.map((k, i) => (
                        <li key={k.name} className="hover:bg-slate-100">
                          <a
                            className="p-3 block whitespace-no-wrap font-normal text-slate-600 text-left text-sm"
                            href={k.link}
                          >
                            {k.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </header>
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
                  <a
                    className="block text-slate-400 hover:text-slate-300"
                    key={k.name}
                    href={k.link}
                  >
                    {k.name}
                  </a>
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
