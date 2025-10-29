
-- AlterTable
ALTER TABLE `Portfolios` DROP COLUMN `image`;

-- CreateTable
CREATE TABLE `PortfolioImages` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `portfolioId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PortfolioImages` ADD CONSTRAINT `PortfolioImages_portfolioId_fkey` FOREIGN KEY (`portfolioId`) REFERENCES `Portfolios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
