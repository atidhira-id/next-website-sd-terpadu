"use client";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/shadcn/navigation-menu";
import { MainLinks } from "@/data/Data";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layouts/MobileNav";
import Image from "next/image";

export default function Navbar({ logo }: any) {
  console.log(logo);
  return (
    <header className="bg-background">
      <nav className="px-4 lg:px-6">
        <div className="flex lg:flex-col justify-between lg:justify-baseline mx-auto max-w-7xl">
          {/* Logo */}
          <div className="flex justify-between items-center py-4 text-foreground">
            <Link href="/" className="text-sm md:text-lg font-semibold">
              <div className="flex items-center gap-3">
                <div className="relative w-18 h-18">
                  <Image
                    src={logo}
                    alt="Logo Sekolah"
                    fill
                    className="object-cover w-full"
                  />
                </div>
                <div>
                  <p className="text-[10px] sm:text-lg font-bold">
                    SD TERPADU MUHAMMADIYAH 1 BESUKI
                  </p>
                  <p className="text-[10px] sm:text-sm">
                    Jl. Mawar No. 60 A Kota Timur, BESUKI
                  </p>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex gap-12">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 border rotate-45 flex justify-center items-center">
                  <Mail className="-rotate-45 w-5 text-red-400" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold">EMAIL:</p>
                  <p className="text-sm">sdtmuh.1besuki@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 border rotate-45 flex justify-center items-center">
                  <Phone className="-rotate-45 w-5 text-red-400" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold">PHONE:</p>
                  <p className="text-sm">0338893665</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center">
            <MobileNav links={MainLinks} />
          </div>
        </div>
      </nav>
      {/* Desktop Menu */}
      <div className="px-4 lg:px-6 bg-foreground">
        <div className="flex lg:flex-col mx-auto max-w-7xl">
          <div className="hidden lg:flex items-center space-x-8 font-medium">
            <NavigationMenu>
              <NavigationMenuList>
                {MainLinks.map((listItem, _) => {
                  if (Object.hasOwn(listItem, "child")) {
                    return (
                      <NavigationMenuItem key={_}>
                        <NavigationMenuTrigger className="py-8 px-4 rounded-none bg-foreground text-background">
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
                          className={`${cn(navigationMenuTriggerStyle())} bg-foreground text-background`}
                        >
                          <Link
                            className="py-8 px-4 rounded-none"
                            href={listItem.href}
                          >
                            {listItem.title}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    );
                  }
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
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
