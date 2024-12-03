const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function connectDb() {
  try {
    await prisma.$connect();
    console.log("Connected to PostgreSQL database successfully.");
  } catch (error) {
    console.error("Failed to connect to PostgreSQL database:", error.message);
  }
}

connectDb();

module.exports = prisma;
