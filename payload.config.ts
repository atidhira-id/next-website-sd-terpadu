import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import SchoolProfile from "./app/(payload)/globals/SchoolProfile.ts";
import Media from "./app/(payload)/collections/Media.ts";
import Berita from "./app/(payload)/collections/Berita.ts";
import Prestasi from "./app/(payload)/collections/Prestasi.ts";
import Guru from "./app/(payload)/collections/Guru.ts";
import Jabatan from "./app/(payload)/collections/Jabatan.ts";

export default buildConfig({
  editor: lexicalEditor(),
  globals: [SchoolProfile],
  collections: [Media, Berita, Prestasi, Guru, Jabatan],
  secret: process.env.PAYLOAD_SECRET!,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL!,
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
});
