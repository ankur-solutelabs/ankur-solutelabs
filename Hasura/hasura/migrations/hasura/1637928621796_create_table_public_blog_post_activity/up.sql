CREATE TABLE "public"."blog_post_activity" ("id" uuid DEFAULT gen_random_uuid(), "blog_post_id" uuid NOT NULL, "type" text NOT NULL, "date" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("blog_post_id") REFERENCES "public"."blog_post"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
