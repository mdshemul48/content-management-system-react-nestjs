-- CreateIndex
CREATE FULLTEXT INDEX `posts_title_name_tags_metaData_idx` ON `posts`(`title`, `name`, `tags`, `metaData`);

-- CreateIndex
CREATE FULLTEXT INDEX `posts_title_idx` ON `posts`(`title`);

-- CreateIndex
CREATE FULLTEXT INDEX `posts_name_idx` ON `posts`(`name`);

-- CreateIndex
CREATE FULLTEXT INDEX `posts_tags_idx` ON `posts`(`tags`);

-- CreateIndex
CREATE FULLTEXT INDEX `posts_metaData_idx` ON `posts`(`metaData`);
