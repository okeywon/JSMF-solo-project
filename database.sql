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
	"phone" VARCHAR(15) NOT NULL,
	"address" VARCHAR NOT NULL,
	"address2" VARCHAR NOT NULL,
	"about" VARCHAR,
	"whyYou" VARCHAR,
	"file" VARCHAR,
	"video" VARCHAR
);

INSERT INTO "application"
VALUES
	(1, 'Pending', 'Fred Savage', 'f.savage@yahoo.com', 6543219871, '123 Court Rd', 'Chisholm, MN 55123', 'I can juggle and ride a bike!', 'I was on the honor roll for 3 years and graduated Summa Cum Laude', './myEssay.docx', 'https://youtube.com/example'),
	(2, 'Selected', 'Bill Theodore', 'b.t123@yahoo.com', 7891234567, '456 Street Rd', 'Chisholm, MN 55123', 'I am an accomplished pianist and skilled painter.', 'I have an acceptance letter to Stanford University', './ICopiedFred.docx', 'https://youtube.com/example2');
	

CREATE TABLE "comment" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	"application_id" INT,
	"comment" VARCHAR
);

CREATE TABLE "vote" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	"application_id" INT,
	"vote" int
);