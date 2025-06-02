-- CreateTable
CREATE TABLE "WaitList" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "WaitList_id_key" ON "WaitList"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WaitList_email_key" ON "WaitList"("email");
