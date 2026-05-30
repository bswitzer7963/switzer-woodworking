-- CreateEnum
CREATE TYPE "projType" AS ENUM ('Bowl', 'Bat', 'CuttingBoardRect', 'CuttingBoardSquare', 'Sign', 'Emblem', 'Custom');

-- CreateEnum
CREATE TYPE "accType" AS ENUM ('Emmet', 'Customer', 'Admin');

-- CreateEnum
CREATE TYPE "sizeType" AS ENUM ('Small', 'Medium', 'Large', 'Custom');

-- CreateEnum
CREATE TYPE "projStatus" AS ENUM ('userSaved', 'Pending', 'Accepted', 'StartedBuilding', 'ReadyToDeliver');

-- CreateTable
CREATE TABLE "User" (
    "userID" TEXT NOT NULL,
    "fName" TEXT NOT NULL,
    "lName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pwHash" TEXT NOT NULL,
    "phNumber" TEXT,
    "accType" "accType" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "ExistingForSale" (
    "existingID" TEXT NOT NULL,
    "projTitle" TEXT NOT NULL,
    "projectType" "projType" NOT NULL,
    "description" TEXT NOT NULL,
    "size" "sizeType",
    "price" TEXT NOT NULL,
    "image" TEXT[],
    "whenMade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExistingForSale_pkey" PRIMARY KEY ("existingID")
);

-- CreateTable
CREATE TABLE "Project" (
    "projID" TEXT NOT NULL,
    "creatorID" TEXT NOT NULL,
    "projTitle" TEXT NOT NULL,
    "projType" "projType" NOT NULL,
    "description" TEXT NOT NULL,
    "size" "sizeType",
    "status" "projStatus" NOT NULL DEFAULT 'userSaved',
    "image" TEXT[],
    "imagePos" JSONB,
    "snapshot" TEXT NOT NULL,
    "whenStarted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_creatorID_fkey" FOREIGN KEY ("creatorID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
