-- AlterTable
ALTER TABLE "hubs" ADD COLUMN     "contactPhone" TEXT,
ADD COLUMN     "logo" TEXT,
ADD COLUMN     "pricing" JSONB,
ADD COLUMN     "socialLinks" JSONB;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "imageUrl" TEXT;
