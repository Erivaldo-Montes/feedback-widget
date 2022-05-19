import { PrismaClient } from "@prisma/client";

// cria uma conecção com o banco de dados
export const prisma = new PrismaClient({
  // mostra o log das operações
  log:['query']
})