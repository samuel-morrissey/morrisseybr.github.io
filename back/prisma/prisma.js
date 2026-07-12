// @ts-check
import "../config/env.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import { Signer } from "@aws-sdk/rds-signer";

const region = process.env.DATABASE_REGION
const hostname = process.env.DATABASE_HOSTNAME
const databaseName = process.env.DATABASE_NAME
const port = Number(process.env.DATABASE_PORT)
const username = process.env.DATABASE_USERNAME

if (!region || !hostname || !databaseName || !port || !username) {
  throw new Error("Variáveis de ambiente do banco de dados ausentes: verifique DATABASE_REGION, DATABASE_HOSTNAME, DATABASE_NAME, DATABASE_PORT e DATABASE_USERNAME.");
}

const poolConfig = {
  host: hostname,
  port,
  user: username,
  database: databaseName
};

// Em desenvolvimento local usa DATABASE_PASSWORD; sem ela, assume RDS com autenticação IAM.
if (process.env.DATABASE_PASSWORD) {
  poolConfig.password = process.env.DATABASE_PASSWORD;
} else {
  // O token IAM expira em 15 minutos, então precisa ser gerado a cada conexão nova do pool.
  // IAM auth no RDS também exige SSL.
  const signer = new Signer({ region, hostname, port, username });
  poolConfig.password = () => signer.getAuthToken();
  poolConfig.ssl = { rejectUnauthorized: false };
}

const adapter = new PrismaPg(poolConfig);
const prisma = new PrismaClient({ adapter });

export { prisma };