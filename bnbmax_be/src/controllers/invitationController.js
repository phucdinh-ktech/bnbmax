const prisma = require("../db/index");

const sharePoints = async (req, res) => {
  const { senderWallet, receiverWallet } = req.query;

  if (senderWallet === receiverWallet) {
    return res
      .status(400)
      .json({ error: "senderWallet and receiverWallet must be different" });
  }

  if (!senderWallet || !receiverWallet) {
    return res
      .status(400)
      .json({ error: "senderWallet and receiverWallet are required" });
  }

  try {
    const sender = await prisma.accumulatePoints.findUnique({
      where: { wallet_address: senderWallet },
    });
    const receiver = await prisma.accumulatePoints.findUnique({
      where: { wallet_address: receiverWallet },
    });

    if (!sender || !receiver) {
      return res.status(404).json({ error: "Sender or Receiver not found" });
    }

    const existingDetail = await prisma.accumulatePointsDetail.findFirst({
      where: {
        sender_user_id: sender.id,
        receive_user_id: receiver.id,
      },
    });
    if (existingDetail) {
      return res
        .status(400)
        .json({ error: "This user has already invited this receiver" });
    }

    const reverseDetail = await prisma.accumulatePointsDetail.findFirst({
      where: {
        sender_user_id: receiver.id,
        receive_user_id: sender.id,
      },
    });
    if (reverseDetail) {
      return res
        .status(400)
        .json({ error: "Receiver has already invited this sender" });
    }

    await prisma.accumulatePointsDetail.create({
      data: {
        sender_user_id: sender.id,
        receive_user_id: receiver.id,
      },
    });

    await prisma.accumulatePoints.update({
      where: { id: sender.id },
      data: { points: sender.points + 1 },
    });

    return res.status(200).json({ message: "Points shared successfully!" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Error sharing points: " + err.message });
  }
};

module.exports = { sharePoints };
