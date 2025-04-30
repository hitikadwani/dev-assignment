-- CreateTable
CREATE TABLE "Puja" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "benefits" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Puja_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Puja_title_idx" ON "Puja"("title");

-- CreateIndex
CREATE INDEX "Puja_tag_idx" ON "Puja"("tag");

-- CreateIndex
CREATE INDEX "Puja_date_idx" ON "Puja"("date");
