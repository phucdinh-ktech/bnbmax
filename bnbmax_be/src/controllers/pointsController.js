const prisma = require("../db/index");

const createWallet = async (req, res) => {
  const { wallet_address } = req.body;

  if (!wallet_address) {
    return res.status(400).json({ error: "wallet_address is required" });
  }

  try {
    const user = await prisma.accumulatePoints.findUnique({
      where: { wallet_address: wallet_address },
    });

    if (user) {
      return res.status(400).json({ error: "Wallet already exists" });
    }

    const newUser = await prisma.accumulatePoints.create({
      data: {
        wallet_address: wallet_address,
        points: 0,
      },
    });

    return res.status(201).json({
      message: "Wallet created successfully",
      wallet: newUser,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Error creating wallet: " + err.message });
  }
};

module.exports = { createWallet };
