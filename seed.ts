import type { Payload } from "payload";

export const seedBerita = async (payload: Payload) => {
  console.log("🌱 Seeding data berita...");

  // ─── Berita 1 ─────────────────────────────────────────────
  await payload.create({
    collection: "berita",
    data: {
      judul:
        "Penerimaan Peserta Didik Baru Tahun Ajaran 2025/2026 Resmi Dibuka",
      slug: "ppdb-tahun-ajaran-2025-2026",
      ringkasan:
        "SD Negeri Harapan Bangsa membuka pendaftaran peserta didik baru untuk tahun ajaran 2025/2026. Pendaftaran dibuka mulai 1 Juni hingga 30 Juni 2025 secara online maupun langsung di sekolah.",
      body: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "SD Negeri Harapan Bangsa dengan bangga mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) untuk tahun ajaran 2025/2026. Kesempatan ini terbuka bagi seluruh calon siswa yang telah memenuhi persyaratan usia dan domisili.",
                },
              ],
              version: 1,
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Pendaftaran dibuka mulai tanggal 1 Juni 2025 hingga 30 Juni 2025. Calon siswa dapat mendaftar secara online melalui website sekolah maupun datang langsung ke kantor tata usaha pada hari dan jam kerja.",
                },
              ],
              version: 1,
            },
            {
              type: "heading",
              tag: "h3",
              children: [{ type: "text", text: "Persyaratan Pendaftaran" }],
              version: 1,
            },
            {
              type: "list",
              listType: "bullet",
              children: [
                {
                  type: "listitem",
                  children: [
                    {
                      type: "text",
                      text: "Berusia minimal 6 tahun per 1 Juli 2025",
                    },
                  ],
                  version: 1,
                },
                {
                  type: "listitem",
                  children: [
                    { type: "text", text: "Fotokopi Kartu Keluarga (KK)" },
                  ],
                  version: 1,
                },
                {
                  type: "listitem",
                  children: [{ type: "text", text: "Fotokopi Akta Kelahiran" }],
                  version: 1,
                },
                {
                  type: "listitem",
                  children: [
                    {
                      type: "text",
                      text: "Pas foto terbaru ukuran 3x4 sebanyak 2 lembar",
                    },
                  ],
                  version: 1,
                },
              ],
              version: 1,
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Untuk informasi lebih lanjut, silakan hubungi bagian Tata Usaha di nomor (0336) 123-456 atau datang langsung ke sekolah. Kami berkomitmen memberikan pendidikan terbaik untuk generasi penerus bangsa.",
                },
              ],
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          version: 1,
        },
      },
      tanggalPublikasi: "2025-05-20",
      status: "published",
      penulis: "Humas Sekolah",
    },
  });

  // ─── Berita 2 ─────────────────────────────────────────────
  await payload.create({
    collection: "berita",
    data: {
      judul:
        "Siswa SD Harapan Bangsa Raih Juara 1 Lomba Cerdas Cermat Tingkat Kabupaten",
      slug: "juara-1-lomba-cerdas-cermat-kabupaten",
      ringkasan:
        "Tim cerdas cermat SD Harapan Bangsa berhasil meraih juara pertama dalam ajang Lomba Cerdas Cermat Tingkat Kabupaten yang diselenggarakan oleh Dinas Pendidikan. Prestasi membanggakan ini menjadi motivasi bagi seluruh warga sekolah.",
      body: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Sebuah prestasi gemilang kembali ditorehkan oleh SD Negeri Harapan Bangsa. Tim cerdas cermat yang terdiri dari tiga siswa pilihan berhasil meraih Juara 1 dalam Lomba Cerdas Cermat Antarpelajar Tingkat Kabupaten yang diselenggarakan pada Sabtu, 10 Mei 2025, di Gedung Serba Guna Kabupaten.",
                },
              ],
              version: 1,
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Tim yang diketuai oleh Rizky Aditya (Kelas 6A), bersama Siti Nurhaliza (Kelas 6B) dan Dafa Pratama (Kelas 5A) ini berhasil mengalahkan 24 tim dari berbagai sekolah se-kabupaten dengan skor akhir 950 poin.",
                },
              ],
              version: 1,
            },
            {
              type: "heading",
              tag: "h3",
              children: [{ type: "text", text: "Komentar Kepala Sekolah" }],
              version: 1,
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: '"Kami sangat bangga dengan pencapaian anak-anak kita. Ini adalah buah dari kerja keras mereka dan bimbingan para guru selama berbulan-bulan. Semoga prestasi ini menginspirasi seluruh siswa untuk terus semangat belajar," ujar Bapak Sutrisno, S.Pd., Kepala SD Harapan Bangsa.',
                },
              ],
              version: 1,
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Dengan kemenangan ini, tim SD Harapan Bangsa berhak mewakili kabupaten dalam Lomba Cerdas Cermat Tingkat Provinsi yang akan diselenggarakan pada bulan Agustus mendatang. Seluruh warga sekolah berharap prestasi ini dapat terus berlanjut hingga ke tingkat nasional.",
                },
              ],
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          version: 1,
        },
      },
      tanggalPublikasi: "2025-05-12",
      status: "published",
      penulis: "Wali Kelas 6A",
    },
  });

  // ─── Berita 3 ─────────────────────────────────────────────
  await payload.create({
    collection: "berita",
    data: {
      judul:
        "Kegiatan Penghijauan dan Jumat Bersih: Wujud Cinta Lingkungan Warga Sekolah",
      slug: "kegiatan-penghijauan-dan-jumat-bersih",
      ringkasan:
        "SD Harapan Bangsa menggelar kegiatan penghijauan dengan menanam 50 pohon di lingkungan sekolah, dilanjutkan dengan Jumat Bersih yang melibatkan seluruh siswa, guru, dan staff. Kegiatan ini merupakan bagian dari program Adiwiyata sekolah.",
      body: {
        root: {
          type: "root",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Dalam rangka memperingati Hari Lingkungan Hidup Sedunia, SD Negeri Harapan Bangsa mengadakan kegiatan Penghijauan dan Jumat Bersih pada Jumat, 7 Juni 2025. Kegiatan ini diikuti oleh seluruh siswa dari kelas 1 hingga kelas 6, bersama para guru dan tenaga kependidikan.",
                },
              ],
              version: 1,
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Sebanyak 50 bibit pohon yang terdiri dari pohon mangga, jambu, dan ketapang kencana ditanam di halaman sekolah dan taman belajar. Setiap kelas mendapat tanggung jawab untuk merawat pohon yang mereka tanam sebagai bentuk pembelajaran karakter peduli lingkungan.",
                },
              ],
              version: 1,
            },
            {
              type: "heading",
              tag: "h3",
              children: [{ type: "text", text: "Program Adiwiyata Sekolah" }],
              version: 1,
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Kegiatan ini merupakan bagian dari program Adiwiyata yang tengah dijalankan sekolah dalam upaya meraih predikat Sekolah Adiwiyata Tingkat Kabupaten. Beberapa program lain yang telah berjalan antara lain bank sampah mini, pengomposan daun kering, serta hemat air dan energi.",
                },
              ],
              version: 1,
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: 'Ibu Dewi Rahayu, S.Pd., selaku koordinator program Adiwiyata, menyampaikan bahwa kegiatan ini bukan sekadar seremonial. "Kami ingin anak-anak benar-benar memahami dan mencintai lingkungan sejak dini. Menjaga kebersihan dan menghijaukan sekolah adalah langkah kecil yang berdampak besar," tuturnya.',
                },
              ],
              version: 1,
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Kegiatan Jumat Bersih akan terus dilaksanakan setiap dua minggu sekali sebagai rutinitas warga sekolah. Seluruh pihak diharapkan dapat ikut berpartisipasi aktif menjaga kebersihan dan keindahan lingkungan sekolah.",
                },
              ],
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          version: 1,
        },
      },
      tanggalPublikasi: "2025-06-08",
      status: "published",
      penulis: "Tim Adiwiyata",
    },
  });

  console.log("✅ Seeding berita selesai! 3 berita berhasil ditambahkan.");
};
