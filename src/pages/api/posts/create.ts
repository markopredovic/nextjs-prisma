import { PrismaClient } from "@prisma/client";

export default async function (
  req: { body: any },
  res: {
    status: (arg0: number) => void;
    json: (arg0: import(".prisma/client").post) => void;
  }
) {
  const prisma = new PrismaClient({ log: ["query"] });
  console.log("data", req.body);
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
