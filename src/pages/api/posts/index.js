import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  const prisma = new PrismaClient();

  const argsObj = {
    orderBy: {
      createdAt: "desc",
    },
  };

  try {
    const posts = await prisma.post.findMany(argsObj);
    res.status(200);
    res.json({ posts });
  } catch (e) {
    throw new Error("Unable to fetch data");
  } finally {
    prisma.disconnect();
  }
}
