import { BreadcrumbMenu } from "@/components/ui/Breadcrumb";
import { PageTitleSection, Section } from "@/components/ui/Section";

export default function Info() {
  return (
    <>
      <PageTitleSection title="Info" />
      <Section containerClassName="pt-4 md:pt-6">
        <BreadcrumbMenu items={[{ label: "Tentang" }]} />
        <h3 className="text-black font-bold text-center uppercase text-2xl">
          Halaman belum tersedia
        </h3>
      </Section>
    </>
  );
}
