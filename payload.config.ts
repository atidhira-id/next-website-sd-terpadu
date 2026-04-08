import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { SchoolProfile } from "./app/(payload)/globals/SchoolProfile";
import Media from "./app/(payload)/collections/Media";
import Berita from "./app/(payload)/collections/Berita";
import Guru from "./app/(payload)/collections/Guru";
import Jabatan from "./app/(payload)/collections/Jabatan";

export default buildConfig({
  editor: lexicalEditor(),
  globals: [SchoolProfile],
  collections: [Media, Berita, Jabatan, Guru],
  secret: process.env.PAYLOAD_SECRET!,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL!,
    },
  }),
  sharp,
});
