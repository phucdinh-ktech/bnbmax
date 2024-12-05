const express = require("express");
require("dotenv").config();
const cors = require("cors");
const pointsRoutes = require("./routes/pointsRoutes");
const invitationRoutes = require("./routes/invitationRoutes");

require("./db/index");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["*", "http://localhost:5173"],
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
