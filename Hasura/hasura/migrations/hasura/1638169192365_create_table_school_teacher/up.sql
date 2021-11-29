CREATE TABLE "school"."teacher" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "firstName" text NOT NULL, "lastName" text NOT NULL, "classList" text NOT NULL, "admin_id" uuid, PRIMARY KEY ("id") , FOREIGN KEY ("admin_id") REFERENCES "school"."admin"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
