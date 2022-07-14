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
	"about" VARCHAR DEFAULT NULL,
	"whyYou" VARCHAR DEFAULT NULL,
	"file" VARCHAR DEFAULT NULL,
	"video" VARCHAR DEFAULT NULL
);	

CREATE TABLE "comment" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user"
		ON DELETE CASCADE,
	"application_id" INT REFERENCES application
		ON DELETE CASCADE,
	"comment" VARCHAR DEFAULT 'Comment...',
	"timeStamp" timeStamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "vote" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user"
		ON DELETE CASCADE,
	"application_id" INT REFERENCES application
		ON DELETE CASCADE,
	UNIQUE ("user_id", "application_id"),
	"vote" INT DEFAULT 0
);

SELECT
	application.id,
	application.status,
	application.name,
	application.email,
	application.phone,
	application.address,
	application.address2,
	application.about,
	application."whyYou",
	application.file,
	application.video,
	SUM(vote.vote) as vote
FROM application
LEFT JOIN vote
	on application.id = vote.application_id
GROUP BY application.id
ORDER BY application.id;

UPDATE application.status
WHERE id = req.body.id;

DELETE FROM application
WHERE application.id = 3;

SELECT
        application.id,
        application.status,
        application.name,
        application.email,
        application.phone,
        application.address,
        application.address2,
        application.about,
        application."whyYou",
        application.file,
        application.video,
        json_agg(comment.comment) as comments,
        SUM(vote.vote) as "sumOfVotes"
    FROM application
    LEFT JOIN comment
        on application.id = comment.application_id
    LEFT JOIN vote
        on application.id = vote.application_id
    WHERE application.id = 2
    GROUP BY application.id;
    
SELECT
        application.id as "appId",
        array_agg(comment.comment),
        vote.user_id as "voteUsrId",
        --vote.id as "voteId",
        sum(vote.vote)
    FROM application
    LEFT JOIN comment
        on application.id = comment.application_id
    LEFT JOIN vote
        on application.id = vote.application_id
    WHERE application.id = 2
    GROUP BY application.id, vote.user_id;

-- List view
SELECT
	application.*,
	coalesce(sum(vote.vote), 0) as "voteCount"
FROM application
	LEFT JOIN vote ON vote.application_id = application.id
GROUP BY application.id;


--- Detail view (combines both steps, for a single application)
SELECT
	application.id,
	application.name,
	-- application.*,   (to get everything about the app)
	coalesce(sum(vote.vote), 0) as "voteCount",
	(
		SELECT vote.vote
		FROM vote
		WHERE vote.user_id = 2
		AND vote.application_id = 2
	) "usersVote",
	(
	SELECT array_agg(to_json(comment.*))
			FROM comment
			WHERE comment.application_id = 2
	) as "comments"
FROM application
	LEFT JOIN vote ON vote.application_id = application.id
WHERE application.id = 2
GROUP BY application.id;
    
INSERT INTO vote (user_id, application_id, vote)
    VALUES (2, 1, 1);