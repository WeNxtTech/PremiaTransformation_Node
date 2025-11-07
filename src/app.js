const express = require("express");
const cors = require("cors");
//const rateLimit = require("express-rate-limit");
const routes = require("./routes/index");
const auth = require("./middleware/auth");
const errorHandler = require("./middleware/errorHandler");
const formatDateMiddleware = require("./utils/formatDate");
const login = require("./routes/login");
const db = require("./models");
//const limiter = rateLimit({ windowMs: 24 * 60 * 60 * 1000 });
const sequelize = db.sequelize;
const app = express();
// app.use("/", (req, res, next) => {
//   console.log(`Request URL: ${req.url} - Method: ${req.method}`);
//   next()
// });
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: false, // must be false when origin is "*"
  })
);
app.use(express.json());
app.use(formatDateMiddleware);
// app.use(limiter);
app.use("/api", login); // Public route
// Protected routes
app.use("/api", auth, routes);
app.use("/api", routes);
app.use(errorHandler);

sequelize
  .authenticate()
  .then(() => {
    console.log("Authenticated");
    // return sequelize.sync({ alter: true }); // Only for Dev
  })
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error("DB connection failed:", err));

module.exports = app;
