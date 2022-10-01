-- AlterTable
ALTER TABLE `categories` ADD COLUMN `type` ENUM('main', 'sub') NOT NULL DEFAULT 'main';
