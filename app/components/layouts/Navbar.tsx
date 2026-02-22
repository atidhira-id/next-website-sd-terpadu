"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MainLinks } from "@/app/data/Data";
import { cn } from "@/lib/utils";
import { MobileNav } from "../ui/MobileNav";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="bg-background text-foreground px-4 lg:px-6">
        <div className=" h-20 flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold">
            SD Terpadu Muhammadiyah 1 Besuki
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-medium">
            <NavigationMenu>
              <NavigationMenuList>
                {MainLinks.map((listItem, _) => {
                  if (Object.hasOwn(listItem, "child")) {
                    return (
                      <NavigationMenuItem key={_}>
                        <NavigationMenuTrigger>
                          {listItem.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-96">
                            {listItem.child?.map((item, itemKey) => (
                              <ListItem
                                key={itemKey}
                                href={listItem.href + item.href}
                                title={item.title}
                              >
                                {item.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  } else {
                    return (
                      <NavigationMenuItem key={_}>
                        <NavigationMenuLink
                          asChild
                          className={cn(navigationMenuTriggerStyle())}
                        >
                          <Link href={listItem.href}>{listItem.title}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  }
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="lg:hidden">
            <MobileNav links={MainLinks} />
          </div>
        </div>
      </nav>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
