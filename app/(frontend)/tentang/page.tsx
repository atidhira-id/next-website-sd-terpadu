"use client";
import { useSchool } from "@/context/schoolContext";
import {
  RichText,
  defaultJSXConverters,
  type JSXConverters,
} from "@payloadcms/richtext-lexical/react";
import { BreadcrumbMenu } from "@/components/ui/Breadcrumb";
import {
  PageTitleSection,
  Section,
  SectionTitle,
} from "@/components/ui/Section";
import Image from "next/image";

export default function Tentang() {
  const schoolProfile = useSchool();

  return (
    <>
      <PageTitleSection title="Tentang Sekolah" />
      <Section containerClassName="pt-4 md:pt-6">
        <BreadcrumbMenu items={[{ label: "Tentang" }]} />
        <SectionTitle className="mt-16 mb-8">
          Sambutan Kepala Sekolah
        </SectionTitle>
        <div className="w-full grid md:grid-cols-2 text-foreground gap-y-8">
          <div className="relative min-h-96">
            <Image
              src={schoolProfile.fotoKepalaSekolah.url}
              alt="Foto Kepala Sekolah"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <RichText
              data={schoolProfile.sambutanKepalaSekolah}
              converters={converters}
            />
          </div>
        </div>
      </Section>
      <Section>
        <SectionTitle>Struktur Organisasi</SectionTitle>
        <div className="w-full overflow-x-auto scrollbar-thin">
          <div className="relative min-w-300 h-[900px]">
            <Image
              src={schoolProfile.strukturOrganisasi.url}
              alt="Gambar Struktur Organisasi"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

const converters: JSXConverters = {
  ...defaultJSXConverters,
  paragraph: ({ node, nodesToJSX }) => {
    const children = nodesToJSX({ nodes: node.children });

    return <p className="mb-4 leading-relaxed">{children}</p>;
  },
};
