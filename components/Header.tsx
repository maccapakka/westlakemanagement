"use client";

import Link from "next/link";
import Image from "next/image";
import { navigationItems as footerNav } from "../app/navigationItems";
import React, { useState } from "react";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div role="dialog" aria-modal="true">
        <div
          className={`${
            isNavOpen ? "fixed" : "hidden"
          } inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden`}
        >
          <div className="flex h-9 items-center justify-between">
            <div className="flex">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Westlake</span>
              </a>
            </div>
            <div className="flex">
              <button
                type="button"
                onClick={() => setIsNavOpen(false)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-8 py-6">
                {footerNav.map((i) => (
                  <div key={i.title} className="-my-3">
                    <h3 className="font-semibold leading-7 text-slate-900 mb-4">
                      {i.title}
                    </h3>
                    {i.items.map((k) => (
                      <Link
                        key={k.name}
                        href={k.link}
                        onClick={() => setIsNavOpen(false)}
                        className="block rounded-lg py-2 px-3 hover:bg-slate-100"
                      >
                        {k.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="container mx-auto max-w-[1124px] py-8 flex">
        <Link href="/" className="grow">
          <Image
            className="grow"
            src="/logo.gif"
            width="170"
            height="59"
            alt="Westlake Brand Logo"
            priority
            quality={100}
          />
        </Link>
        <nav className="grow space-x-6 self-center text-right text-md font-semibold">
          <div className="lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsNavOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
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
                      <Link
                        className="p-3 block whitespace-no-wrap font-normal text-slate-600 text-left text-sm"
                        href={k.link}
                      >
                        {k.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
