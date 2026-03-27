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
import { newsEvents, testimonials } from "@/data/Data";

export default function Home() {
  return (
    <>
      {/* BANNER */}
      <div className="relative bg-background overflow-hidden">
        <section className="h-[75vh] max-w-7xl mx-auto px-4">
          <div className="h-full container mx-auto">
            <div className=" h-full grid items-center gap-10">
              {/* LEFT COLUMN - TEXT */}
              <div className="space-y-6 text-center z-10">
                <h1 className="text-foreground text-3xl md:text-5xl font-bold leading-tight mb-10">
                  <span className="block mb-6">SELAMAT DATANG</span>
                  SD Terpadu <br /> Muhammadiyah 1 Besuki
                </h1>
                <p className="font-serif text-gray-100 text-lg leading-normal max-w-3xl mx-auto mb-10">
                  Sekolah yang membentuk generasi cerdas, berakhlak mulia, dan
                  siap menghadapi masa depan dengan percaya diri.
                </p>

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

              {/* RIGHT COLUMN - IMAGE */}
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
            <h3 className="text-sm lg:text-lg font-bold italic tracking-wide mb-2">
              Visi Kami
            </h3>
            <p className="text-3xl lg:text-4xl font-bold lg:font-light leading-none lg:leading-normal text-black">
              Membina Siswa untuk Agama, Bangsa, dan Masyarakat.
            </p>
          </div>
          {/* Misi */}
          <div>
            <h3 className="text-sm lg:text-lg font-bold italic tracking-wide mb-2">
              Misi Kami
            </h3>
            <p className="font-serif leading-normal text-gray-700 text-lg">
              Menyelenggarakan pendidikan yang berkualitas, baik dalam aspek
              akademik maupun non-akademik dengan menanamkan nilai-nilai
              Al-Islam dan Kemuhammadiyahan. Sekolah membimbing peserta didik
              agar tumbuh menjadi generasi yang berintegritas, berjiwa
              kepemimpinan, serta siap mengabdi kepada agama, bangsa, dan
              masyarakat.
            </p>
          </div>
        </div>
      </Section>

      {/* BERITA DAN KEGIATAN */}
      <Section>
        <div className="mb-10">
          <p className="text-sm lg:text-lg font-bold italic tracking-wide mb-2">
            Update Terbaru
          </p>
          <h3 className="text-3xl font-light leading-none lg:leading-normal text-gray-800">
            BERITA & KEGIATAN
          </h3>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {newsEvents.map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="border-none rounded-none p-0 hover:bg-accent">
                    <CardContent className="flex flex-col h-72 p-5">
                      <p className="text-sm text-muted-foreground font-serif italic tracking-wider">
                        {_.type}
                      </p>
                      <h3 className="font-light text-3xl flex-1 pt-12">
                        {_.title}
                      </h3>
                      <Link
                        href="#"
                        className="text-primary text-sm text-right font-light hover:underline"
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

      {/* TESTIMONI */}
      <Section>
        <div className="mb-10">
          <h3 className="text-xl md:text-3xl text-center leading-none lg:leading-normal font-bold italic text-gray-800">
            APA KATA ORANG TUA SISWA?
          </h3>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((_, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 ">
                <div className="p-1">
                  <Card className="border-none rounded-none p-0 hover:bg-accent">
                    <CardContent className="grid lg:grid-cols-[40%_60%] items-center h-96 p-5">
                      <div className="hidden lg:flex bg-gray-200 w-3/4 h-3/4 rounded-[5rem] mx-auto justify-center items-center overflow-hidden">
                        <img
                          src="/images/template-testimony.png"
                          alt="Template foto"
                          className="object-cover"
                        />
                      </div>

                      <div className="h-full flex flex-col py-8">
                        <p className="italic text-muted-foreground">
                          Orang tua dari
                        </p>
                        <h3 className="font-bold text-3xl flex-1 pt-3">
                          {_.name}
                        </h3>
                        <p className="">{_.testimony}</p>
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
          {/* Visi */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4864.637514457731!2d113.69203097588587!3d-7.738460976708455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd71e5f9ba00cab%3A0x62e2298c5d8d3429!2sSD%20Terpadu%20Muhammadiyah%201%20Besuki!5e1!3m2!1sen!2sid!4v1771832593821!5m2!1sen!2sid"
              className=" w-full h-90"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Misi */}
          <div className="space-y-5">
            <h3 className="text-3xl font-light leading-none lg:leading-normal tracking-wide text-foreground">
              KONTAK KAMI
            </h3>
            <p className="text-foreground">
              Besuki, Kec. Besuki, Kabupaten Situbondo, Jawa Timur 68356
            </p>
            <div className="space-y-2">
              <p>📞 0338893665</p>
              <p>✉️ sdtmuh.1besuki@gmail.com</p>
              <p>🕒 Senin – Jumat, 07.00 – 14.00 WIB</p>
            </div>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="inline-block bg-foreground text-background px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </FullWidthSection>
    </>
  );
}
