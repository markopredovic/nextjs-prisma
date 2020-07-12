import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  const prisma = new PrismaClient();

  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200);
    res.json({ posts });
  } catch (e) {
    throw new Error("Unable to fetch data");
  } finally {
    prisma.disconnect();
  }
}
