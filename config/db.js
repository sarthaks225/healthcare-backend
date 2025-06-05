const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("\n\n----------------------------------------------");
    console.log("Database connection has been established successfully.");
    console.log("----------------------------------------------\n\n");
  } catch (error) {
    console.log("\n\n----------------------------------------------");
    console.error("Unable to connect to the database:", error);
    console.log("----------------------------------------------\n\n");
  }
};

module.exports = { sequelize, connectDB };
