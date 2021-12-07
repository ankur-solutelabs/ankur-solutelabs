CREATE TABLE "public"."blog_post_" ("id" numeric NOT NULL, "title" text NOT NULL, "content" text NOT NULL, "date" timestamptz NOT NULL DEFAULT now(), "is_published" boolean DEFAULT false, "user_id" text, PRIMARY KEY ("id") , UNIQUE ("id"));