export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + description */}
          <div>
            <h2 className="text-lg font-semibold">
              SD Terpadu Muhammadiyah 1 Besuki
            </h2>
            <p className="mt-3 text-sm text-blue-100">
              Sekolah dasar yang berkomitmen membentuk generasi islami, cerdas,
              dan berakhlak mulia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-300">
                  About
                </a>
              </li>
              <li>
                <a href="/news" className="hover:text-yellow-300">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Extra links */}
          <div>
            <h3 className="font-semibold mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
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
