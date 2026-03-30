import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Media } from "./app/(payload)/collections/Media";
import { SchoolProfile } from "./app/(payload)/globals/SchoolProfile";

export default buildConfig({
  editor: lexicalEditor(),
  globals: [SchoolProfile],
  collections: [Media],
  secret: process.env.PAYLOAD_SECRET!,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL!,
    },
  }),
  sharp,
});
