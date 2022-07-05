
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "isAdmin" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "application" (
	"id" SERIAL PRIMARY KEY,
	"status" VARCHAR DEFAULT 'pending',
	"name" VARCHAR NOT NULL,
	"email" VARCHAR NOT NULL UNIQUE,
	"phone" INT NOT NULL,
	"address" VARCHAR NOT NULL,
	"address2" VARCHAR NOT NULL,
	"about" VARCHAR,
	"why-you" VARCHAR,
	"file" VARCHAR,
	"video" VARCHAR,
	"admin" VARCHAR
);