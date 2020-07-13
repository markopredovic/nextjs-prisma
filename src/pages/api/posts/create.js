import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  const prisma = new PrismaClient({ log: ["query"] });
  try {
    const newPost = await prisma.post.create({
      data: req.body,
    });
    res.status(201);
    res.json(newPost);
  } catch (e) {
    throw new Error("Unable to create post");
  } finally {
    prisma.disconnect();
  }
}
