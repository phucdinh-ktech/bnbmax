require("dotenv").config();
require("./db/index");
const express = require("express");
const cors = require("cors");
const app = express();
const pointsRoutes = require("./routes/pointsRoutes");
const invitationRoutes = require("./routes/invitationRoutes");

app.use(express.json());
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use("/api/points", pointsRoutes);
app.use("/api/invitations", invitationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
