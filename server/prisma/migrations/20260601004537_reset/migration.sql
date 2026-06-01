/*
  Warnings:

  - The `image` column on the `ExistingForSale` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `image` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ExistingForSale" DROP COLUMN "image",
ADD COLUMN     "image" JSONB[];

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "image",
ADD COLUMN     "image" JSONB[];
