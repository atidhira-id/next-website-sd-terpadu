import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { SchoolProfile } from "./app/(payload)/globals/SchoolProfile";
import Media from "./app/(payload)/collections/Media";
import Berita from "./app/(payload)/collections/Berita";

export default buildConfig({
  editor: lexicalEditor(),
  globals: [SchoolProfile],
  collections: [Media, Berita],
  secret: process.env.PAYLOAD_SECRET!,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL!,
    },
  }),
  sharp,
});
