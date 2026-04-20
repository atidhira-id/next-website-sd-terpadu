import { BreadcrumbMenu } from "@/components/ui/Breadcrumb";
import { PageTitleSection, Section } from "@/components/ui/Section";

export default function DaftarSiswaPage() {
  const breadcrumbItems = [
    { label: "Tentang", href: "/tentang" },
    { label: "Daftar Siswa" },
  ];
  return (
    <>
      <PageTitleSection title="Daftar Siswa" />
      <Section containerClassName="pt-4 md:pt-6">
        <BreadcrumbMenu items={breadcrumbItems} />
        <h3 className="text-black font-bold text-center uppercase text-2xl">
          Halaman belum tersedia
        </h3>
      </Section>
    </>
  );
}
