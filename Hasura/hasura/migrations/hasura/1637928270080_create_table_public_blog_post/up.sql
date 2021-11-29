CREATE TABLE "public"."blog_post" ("id" uuid DEFAULT gen_random_uuid(), "title" text NOT NULL, "content" text NOT NULL, "date" timestamptz NOT NULL DEFAULT now(), "is_published" boolean DEFAULT false, "user_id" text, PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
