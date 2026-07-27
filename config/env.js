import dotenv from "dotenv";

// Carrega .env por padrão (RDS). Para desenvolvimento local: ENV_FILE=.env.local npm run start
dotenv.config({ path: process.env.ENV_FILE ?? ".env", quiet: true });
