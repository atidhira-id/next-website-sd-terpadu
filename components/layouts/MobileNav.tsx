"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn/sheet";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/shadcn/collapsible";

import { ChevronDown } from "lucide-react";

interface MobileNavProps {
  links: any[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [openMenus, setOpenMenus] = useState<Record<number, boolean>>({});

  const toggleMenu = (index: number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="w-10 h-10 font-bold text-foreground" />
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-72 px-6 pt-6 bg-background"
      >
        <SheetTitle className="mb-4 text-lg font-semibold">
          Menu Navigasi
        </SheetTitle>
        <div className="space-y-6">
          {links.map((item, index) => {
            if (item.child) {
              return (
                <Collapsible
                  key={index}
                  open={openMenus[index]}
                  onOpenChange={() => toggleMenu(index)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-secondary-foreground text-left font-medium py-2 cursor-pointer">
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>

                  <CollapsibleContent className="ml-4 my-4 space-y-6">
                    {item.child.map((childItem: any, childIndex: number) => (
                      <Link
                        key={childIndex}
                        href={item.href + childItem.href}
                        className="block font-semibold text-secondary-foreground hover:text-foreground transition-colors "
                      >
                        {childItem.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            }

            return (
              <Link
                key={index}
                href={item.href}
                className="block py-2 font-medium text-secondary-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
