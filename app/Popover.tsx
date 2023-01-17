"use client";

import { Popover } from "@headlessui/react";
import Link from "next/link";

export function MyPopover({
  text,
  items,
}: {
  text: string;
  items: { name: string; link: string }[];
}) {
  return (
    <Popover className="relative">
      <Popover.Button>{text}</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          {items.map((i) => (
            <Link key={i.name} href={i.link}>
              {i.name}
            </Link>
          ))}
        </div>
      </Popover.Panel>
    </Popover>
  );
}
