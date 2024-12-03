-- CreateTable
CREATE TABLE "AccumulatePoints" (
    "id" SERIAL NOT NULL,
    "wallet_address" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "AccumulatePoints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccumulatePointsDetail" (
    "id" SERIAL NOT NULL,
    "sender_user_id" INTEGER NOT NULL,
    "receive_user_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AccumulatePointsDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AccumulatePoints_wallet_address_key" ON "AccumulatePoints"("wallet_address");

-- CreateIndex
CREATE UNIQUE INDEX "AccumulatePointsDetail_sender_user_id_receive_user_id_key" ON "AccumulatePointsDetail"("sender_user_id", "receive_user_id");

-- AddForeignKey
ALTER TABLE "AccumulatePointsDetail" ADD CONSTRAINT "AccumulatePointsDetail_sender_user_id_fkey" FOREIGN KEY ("sender_user_id") REFERENCES "AccumulatePoints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccumulatePointsDetail" ADD CONSTRAINT "AccumulatePointsDetail_receive_user_id_fkey" FOREIGN KEY ("receive_user_id") REFERENCES "AccumulatePoints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
