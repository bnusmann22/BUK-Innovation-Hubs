-- AlterTable
ALTER TABLE "users" ADD COLUMN "hubId" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_hubId_fkey" FOREIGN KEY ("hubId") REFERENCES "hubs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
