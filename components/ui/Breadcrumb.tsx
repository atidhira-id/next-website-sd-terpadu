import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shadcn/breadcrumb";

type BreadcrumbItemType = {
  label: string;
  href?: string;
};

type BreadcrumbMenuProps = {
  items: BreadcrumbItemType[];
};

export function BreadcrumbMenu({ items }: BreadcrumbMenuProps) {
  return (
    <Breadcrumb className="mb-12">
      <BreadcrumbList className="text-xs md:text-md">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">SD Terpadu Muhammadiyah 1 Besuki</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={index} className="flex items-center">
              <BreadcrumbItem>
                {isLast || !item.href ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
