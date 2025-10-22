-- CreateTable
CREATE TABLE `FiddleImages` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `fiddleId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FiddleImages` ADD CONSTRAINT `FiddleImages_fiddleId_fkey` FOREIGN KEY (`fiddleId`) REFERENCES `Fiddles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
