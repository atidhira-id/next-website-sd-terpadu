import Link from "next/link";
import { MainLinks } from "@/app/data/Data";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-3">
          {/* Logo */}
          <div className="row-start-1 col-start-1 col-end-3 md:col-start-2 text-center mb-12 md:mb-0">
            <div className="w-20 h-20 mx-auto flex justify-center items-center border mb-3">
              <p>
                LOGO
                <br />
                SD
              </p>
            </div>
            <h2 className="text-lg font-semibold">
              SD Terpadu Muhammadiyah 1 Besuki
            </h2>
            <p className="mt-4 text-sm text-blue-100">
              Sekolah dasar yang berkomitmen membentuk generasi islami, cerdas,
              dan berakhlak mulia.
            </p>
          </div>
          {/* Navigation */}
          <div className="row-start-2 col-start-1 md:row-start-1 border-r md:border-0">
            <h3 className="font-semibold mb-6">Menu</h3>
            <ul className="space-y-3 text-sm">
              {MainLinks.map((link, _) => (
                <li key={_}>
                  <Link href={link.href} className="hover:text-yellow-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra links */}
          <div className="row-start-2 col-start-2 md:row-start-1 md:col-start-3 text-right border-l md:border-0">
            <h3 className="font-semibold mb-6">Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-300">
                  PPDB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Galeri
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-300">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-500 mt-8 pt-6 text-center text-sm text-blue-100">
          © {new Date().getFullYear()} SD Terpadu Muhammadiyah 1 Besuki. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
