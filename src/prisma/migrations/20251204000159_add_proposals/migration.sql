-- CreateTable
CREATE TABLE `ProposalBalances` (
    `id` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ProposalBalances_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proposals` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `fiddleId` VARCHAR(191) NOT NULL,
    `greeting` TINYTEXT NULL,
    `withdrawAmount` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'REFOUNDED') NOT NULL DEFAULT 'ACTIVE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProposalBalances` ADD CONSTRAINT `ProposalBalances_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proposals` ADD CONSTRAINT `Proposals_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proposals` ADD CONSTRAINT `Proposals_fiddleId_fkey` FOREIGN KEY (`fiddleId`) REFERENCES `Fiddles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
