import { PrismaClient } from "@prisma/client";

declare global {
  // Prevent multiple instances of PrismaClient in dev
  // (hot reload can cause new clients)
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({
  datasources: {
    db: {
      // Use pooled DB in production runtime, direct DB in dev/migrations
      url: process.env.NODE_ENV === "production"
        ? process.env.DATABASE_URL_POOLED
        : process.env.DATABASE_URL,
    },
  },
});

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
