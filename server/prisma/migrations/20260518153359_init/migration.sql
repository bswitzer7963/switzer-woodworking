-- CreateEnum
CREATE TYPE "projType" AS ENUM ('Bowl', 'Bat', 'CuttingBoard', 'Sign', 'Emblem', 'Patch');

-- CreateEnum
CREATE TYPE "accType" AS ENUM ('Emmet', 'Customer', 'Admin');

-- CreateEnum
CREATE TYPE "sizeType" AS ENUM ('Small', 'Medium', 'Large', 'Custom');

-- CreateEnum
CREATE TYPE "projStatus" AS ENUM ('Pending', 'Accepted', 'StartedBuilding', 'ReadyToDeliver');

-- CreateTable
CREATE TABLE "User" (
    "userID" TEXT NOT NULL,
    "fName" TEXT NOT NULL,
    "lName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phNumber" TEXT,
    "accType" "accType" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Req" (
    "reqID" TEXT NOT NULL,
    "creatorID" TEXT NOT NULL,
    "projectType" "projType" NOT NULL,
    "description" TEXT NOT NULL,
    "size" "sizeType",
    "status" "projStatus" NOT NULL DEFAULT 'Pending',
    "customImage" TEXT,
    "whenSubmitted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Req_pkey" PRIMARY KEY ("reqID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Req" ADD CONSTRAINT "Req_creatorID_fkey" FOREIGN KEY ("creatorID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
