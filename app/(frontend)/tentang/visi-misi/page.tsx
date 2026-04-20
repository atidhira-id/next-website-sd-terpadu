"use client";
import { BreadcrumbMenu } from "@/components/ui/Breadcrumb";
import {
  Section,
  SectionTitle,
  PageTitleSection,
} from "@/components/ui/Section";
import { useSchool } from "@/context/schoolContext";

export default function VisiMisi() {
  const schoolProfile = useSchool();
  return (
    <>
      <PageTitleSection title="Visi dan Misi Sekolah" />
      <Section className="text-black" containerClassName="pt-4 md:pt-6">
        <BreadcrumbMenu items={[{ label: "Visi Misi Sekolah" }]} />
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <SectionTitle>Visi</SectionTitle>
            <div className="font-serif text-3xl lg:text-4xl font-bold lg:font-light leading-normal ">
              {schoolProfile.vision}
            </div>
          </div>
          <div>
            <SectionTitle>Penjelasan Visi</SectionTitle>
            <div
              className="font-serif text-justify leading-normal text-gray-700 text-sm lg:text-lg space-y-2"
              dangerouslySetInnerHTML={{
                __html: schoolProfile.visionDescription,
              }}
            />
          </div>
        </div>
        <div>
          <SectionTitle>Misi</SectionTitle>
          <ul className="grid lg:grid-cols-2 gap-y-4 gap-x-8 font-serif text-sm lg:text-lg">
            {schoolProfile.mission.map((item: any, pos: any) => {
              return (
                <li key={item.text} className="flex justify-around gap-2">
                  <div className="font-bold w-4 shrink-0">
                    <p>{pos + 1}.</p>
                  </div>
                  <p>
                    <span className="font-bold">{item.text}</span>
                    <span>{item.description}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
    </>
  );
}
