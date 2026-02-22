"use client";

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

export default function Navbar() {
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
