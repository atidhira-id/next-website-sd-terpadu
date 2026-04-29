"use client";
import { useSchool } from "@/context/schoolContext";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent } from "@/components/shadcn/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/carousel";
import { Section, FullWidthSection } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";
import { getDateString } from "@/utils/dateFormat";

type Props = {
  berita: any[];
  prestasi: any[];
};

export default function HomeClient({ berita, prestasi }: Props) {
  const schoolProfile = useSchool();

  return (
    <>
      {/* BANNER */}
      <div className="relative bg-background overflow-hidden">
        <section className="h-[75vh] max-w-7xl mx-auto px-4">
          <div className="h-full container mx-auto">
            <div className=" h-full grid items-center gap-10">
              <div className="space-y-6 text-center z-10">
                <h1 className="text-background text-3xl md:text-5xl font-bold leading-tight mb-10">
                  <span className="block mb-6">SELAMAT DATANG</span>
                  SD Terpadu <br /> Muhammadiyah 1 Besuki
                </h1>

                <div className="flex justify-center gap-4">
                  <Button
                    size="lg"
                    className="rounded-xl bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent cursor-not-allowed"
                  >
                    Daftar Sekarang
                  </Button>

                  <Button
                    size="lg"
                    className="rounded-xl bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                    asChild
                  >
                    <Link href="/tentang">Tentang Kami</Link>
                  </Button>
                </div>
              </div>

              <div className="absolute top-0 bottom-0 left-0 right-0">
                <Image
                  src="/images/sekolah.jpeg"
                  alt="Gedung Sekolah"
                  fill
                  className="object-cover shadow-lg brightness-[0.3]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* VISI MISI */}
      <Section>
        <div className="grid md:grid-cols-2 text-left gap-10">
          {/* Visi */}
          <div>
            <h3 className="text-sm lg:text-lg font-bold italic tracking-wide mb-2 text-foreground">
              Visi Kami
            </h3>
            <p className="text-3xl lg:text-4xl font-bold lg:font-light leading-none lg:leading-normal text-black">
              {schoolProfile.vision}
            </p>
          </div>
          {/* Visi Misi page button */}
          <div className="flex justify-end-safe items-center">
            <Link
              href="/tentang/visi-misi"
              className="flex items-center gap-1 text-accent-foreground hover:underline"
            >
              <p className="text-2xl italic">Selengkapnya</p>
              <ArrowRight />
            </Link>
          </div>
        </div>
      </Section>

      {/* BERITA DAN KEGIATAN */}
      <Section>
        <div className="mb-10">
          <p className="text-sm lg:text-lg font-bold italic tracking-wide mb-2 text-foreground">
            Update Terbaru
          </p>
          <h3 className="text-3xl font-light leading-none lg:leading-normal text-gray-800">
            BERITA & KEGIATAN
          </h3>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {berita.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="border-none rounded-none p-0 hover:bg-accent">
                    <CardContent className="flex flex-col h-72 p-5">
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">
                        {getDateString(item.tanggalPublikasi)}
                      </p>
                      <h3 className="font-light text-2xl flex-1 pt-12">
                        {item.judul}
                      </h3>
                      <Link
                        href={`/berita/${item.slug}`}
                        className="text-foreground text-sm text-right font-light hover:underline"
                      >
                        Selengkapnya →
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:flex text-foreground" />
          <CarouselNext className="hidden xl:flex text-foreground" />
        </Carousel>
      </Section>

      {/* PENGHARGAAN */}
      <Section>
        <div className="mb-10">
          <h3 className="text-3xl font-light leading-none lg:leading-normal text-gray-800">
            SISWA BERPRESTASI
          </h3>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {prestasi.map((item) => (
              <CarouselItem
                key={item.slug}
                className="basis-full md:basis-1/2 "
              >
                <div className="p-1">
                  <Card className="border-none rounded-none p-0 hover:bg-accent">
                    <CardContent className="grid lg:grid-cols-[40%_60%] items-center h-96 p-5">
                      <div className="hidden lg:flex bg-gray-200 w-3/4 h-3/4 rounded-[5rem] mx-auto justify-center items-center overflow-hidden">
                        <img
                          src={
                            item.imageUrl.url || "images/template-testimony.png"
                          }
                          alt="Template foto"
                          className="object-cover"
                        />
                      </div>

                      <div className="h-full flex flex-col py-8">
                        <p className="italic text-muted-foreground">
                          {item.prestasi}
                        </p>
                        <h3 className="font-bold text-3xl flex-1 pt-3">
                          {item.pemilik}
                        </h3>
                        <p className="mb-2">{item.ringkasan}</p>
                        <Link
                          href="#"
                          className="text-foreground text-sm text-right font-light hover:underline"
                        >
                          Selengkapnya →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden xl:flex text-foreground" />
          <CarouselNext className="hidden xl:flex text-foreground" />
        </Carousel>
      </Section>

      {/* CONTACT */}
      <FullWidthSection>
        <div className="grid md:grid-cols-2 text-left gap-10">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4864.637514457731!2d113.69203097588587!3d-7.738460976708455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd71e5f9ba00cab%3A0x62e2298c5d8d3429!2sSD%20Terpadu%20Muhammadiyah%201%20Besuki!5e1!3m2!1sen!2sid!4v1771832593821!5m2!1sen!2sid"
              className=" w-full h-90"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="space-y-5">
            <h3 className="text-3xl font-light leading-none lg:leading-normal tracking-wide">
              KONTAK KAMI
            </h3>
            <p>{schoolProfile.address}</p>
            <div className="space-y-2">
              <p>📞 {schoolProfile.phone}</p>
              <p>✉️ {schoolProfile.email}</p>
              <p>🕒 Senin – Jumat, 07.00 – 14.00 WIB</p>
            </div>

            <a
              href="https://wa.me/6281336284354"
              target="_blank"
              className="inline-block bg-background text-foreground px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition"
            >
              📞 Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </FullWidthSection>
    </>
  );
}
