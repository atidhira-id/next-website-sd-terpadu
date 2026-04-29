import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_berita_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_prestasi_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_guru_jenis" AS ENUM('guru', 'pegawai');
  CREATE TYPE "public"."enum_guru_pendidikan_terakhir" AS ENUM('sma', 'd3', 's1', 's2', 's3');
  CREATE TYPE "public"."enum_jabatan_divisi" AS ENUM('pimpinan', 'guru', 'tata_usaha', 'operator', 'lainnya');
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "berita" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"judul" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"image_url_id" integer NOT NULL,
  	"ringkasan" varchar,
  	"body" jsonb NOT NULL,
  	"tanggal_publikasi" timestamp(3) with time zone NOT NULL,
  	"status" "enum_berita_status" DEFAULT 'draft' NOT NULL,
  	"penulis" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "prestasi" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"prestasi" varchar NOT NULL,
  	"pemilik" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"image_url_id" integer NOT NULL,
  	"ringkasan" varchar,
  	"body" jsonb NOT NULL,
  	"tanggal_publikasi" timestamp(3) with time zone NOT NULL,
  	"status" "enum_prestasi_status" DEFAULT 'draft' NOT NULL,
  	"penulis" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "guru" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"foto_id" integer NOT NULL,
  	"nama" varchar NOT NULL,
  	"nip" varchar,
  	"jenis" "enum_guru_jenis" DEFAULT 'guru' NOT NULL,
  	"mengajar" varchar,
  	"posisi" varchar,
  	"pendidikan_terakhir" "enum_guru_pendidikan_terakhir" NOT NULL,
  	"nomor_hp" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "jabatan" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"nama" varchar NOT NULL,
  	"divisi" "enum_jabatan_divisi" NOT NULL,
  	"urutan" numeric DEFAULT 99,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "jabatan_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"guru_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer,
  	"berita_id" integer,
  	"prestasi_id" integer,
  	"guru_id" integer,
  	"jabatan_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "school_profile_mission" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "school_profile" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"address" varchar,
  	"email" varchar,
  	"phone" varchar,
  	"mobile_phone" varchar,
  	"vision" varchar,
  	"vision_description" varchar,
  	"logo_id" integer,
  	"foto_kepala_sekolah_id" integer,
  	"sambutan_kepala_sekolah" jsonb,
  	"struktur_organisasi_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "berita" ADD CONSTRAINT "berita_image_url_id_media_id_fk" FOREIGN KEY ("image_url_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prestasi" ADD CONSTRAINT "prestasi_image_url_id_media_id_fk" FOREIGN KEY ("image_url_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "guru" ADD CONSTRAINT "guru_foto_id_media_id_fk" FOREIGN KEY ("foto_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "jabatan_rels" ADD CONSTRAINT "jabatan_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."jabatan"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jabatan_rels" ADD CONSTRAINT "jabatan_rels_guru_fk" FOREIGN KEY ("guru_id") REFERENCES "public"."guru"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_berita_fk" FOREIGN KEY ("berita_id") REFERENCES "public"."berita"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_prestasi_fk" FOREIGN KEY ("prestasi_id") REFERENCES "public"."prestasi"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_guru_fk" FOREIGN KEY ("guru_id") REFERENCES "public"."guru"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_jabatan_fk" FOREIGN KEY ("jabatan_id") REFERENCES "public"."jabatan"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "school_profile_mission" ADD CONSTRAINT "school_profile_mission_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."school_profile"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "school_profile" ADD CONSTRAINT "school_profile_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "school_profile" ADD CONSTRAINT "school_profile_foto_kepala_sekolah_id_media_id_fk" FOREIGN KEY ("foto_kepala_sekolah_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "school_profile" ADD CONSTRAINT "school_profile_struktur_organisasi_id_media_id_fk" FOREIGN KEY ("struktur_organisasi_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "berita_slug_idx" ON "berita" USING btree ("slug");
  CREATE INDEX "berita_image_url_idx" ON "berita" USING btree ("image_url_id");
  CREATE INDEX "berita_updated_at_idx" ON "berita" USING btree ("updated_at");
  CREATE INDEX "berita_created_at_idx" ON "berita" USING btree ("created_at");
  CREATE UNIQUE INDEX "prestasi_slug_idx" ON "prestasi" USING btree ("slug");
  CREATE INDEX "prestasi_image_url_idx" ON "prestasi" USING btree ("image_url_id");
  CREATE INDEX "prestasi_updated_at_idx" ON "prestasi" USING btree ("updated_at");
  CREATE INDEX "prestasi_created_at_idx" ON "prestasi" USING btree ("created_at");
  CREATE INDEX "guru_foto_idx" ON "guru" USING btree ("foto_id");
  CREATE INDEX "guru_updated_at_idx" ON "guru" USING btree ("updated_at");
  CREATE INDEX "guru_created_at_idx" ON "guru" USING btree ("created_at");
  CREATE INDEX "jabatan_updated_at_idx" ON "jabatan" USING btree ("updated_at");
  CREATE INDEX "jabatan_created_at_idx" ON "jabatan" USING btree ("created_at");
  CREATE INDEX "jabatan_rels_order_idx" ON "jabatan_rels" USING btree ("order");
  CREATE INDEX "jabatan_rels_parent_idx" ON "jabatan_rels" USING btree ("parent_id");
  CREATE INDEX "jabatan_rels_path_idx" ON "jabatan_rels" USING btree ("path");
  CREATE INDEX "jabatan_rels_guru_id_idx" ON "jabatan_rels" USING btree ("guru_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_berita_id_idx" ON "payload_locked_documents_rels" USING btree ("berita_id");
  CREATE INDEX "payload_locked_documents_rels_prestasi_id_idx" ON "payload_locked_documents_rels" USING btree ("prestasi_id");
  CREATE INDEX "payload_locked_documents_rels_guru_id_idx" ON "payload_locked_documents_rels" USING btree ("guru_id");
  CREATE INDEX "payload_locked_documents_rels_jabatan_id_idx" ON "payload_locked_documents_rels" USING btree ("jabatan_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "school_profile_mission_order_idx" ON "school_profile_mission" USING btree ("_order");
  CREATE INDEX "school_profile_mission_parent_id_idx" ON "school_profile_mission" USING btree ("_parent_id");
  CREATE INDEX "school_profile_logo_idx" ON "school_profile" USING btree ("logo_id");
  CREATE INDEX "school_profile_foto_kepala_sekolah_idx" ON "school_profile" USING btree ("foto_kepala_sekolah_id");
  CREATE INDEX "school_profile_struktur_organisasi_idx" ON "school_profile" USING btree ("struktur_organisasi_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "media" CASCADE;
  DROP TABLE "berita" CASCADE;
  DROP TABLE "prestasi" CASCADE;
  DROP TABLE "guru" CASCADE;
  DROP TABLE "jabatan" CASCADE;
  DROP TABLE "jabatan_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "school_profile_mission" CASCADE;
  DROP TABLE "school_profile" CASCADE;
  DROP TYPE "public"."enum_berita_status";
  DROP TYPE "public"."enum_prestasi_status";
  DROP TYPE "public"."enum_guru_jenis";
  DROP TYPE "public"."enum_guru_pendidikan_terakhir";
  DROP TYPE "public"."enum_jabatan_divisi";`)
}
