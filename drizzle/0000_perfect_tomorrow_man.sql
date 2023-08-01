CREATE TABLE `posts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`slug` varchar(256),
	`views` int,
	CONSTRAINT `posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `posts_slug_unique` UNIQUE(`slug`),
	CONSTRAINT `slug_idx` UNIQUE(`slug`)
);
