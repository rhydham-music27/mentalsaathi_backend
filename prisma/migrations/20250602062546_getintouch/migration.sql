-- CreateTable
CREATE TABLE "GetInTouch" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "institution" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "GetInTouch_id_key" ON "GetInTouch"("id");

-- CreateIndex
CREATE UNIQUE INDEX "GetInTouch_phone_key" ON "GetInTouch"("phone");
