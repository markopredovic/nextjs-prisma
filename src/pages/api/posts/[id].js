import { PrismaClient } from "@prisma/client";

import { getPost, deletePost, updatePost } from "../../../controllers/post";

export default async function (req, res) {
  const prisma = new PrismaClient();
  const id = parseInt(req.query.id);
  let post = null;

  try {
    switch (req.method) {
      case "GET":
        post = await getPost(id);
        break;
      case "DELETE":
        post = await deletePost(id);
        break;
      case "PUT":
        post = await updatePost(id, req.body);
        break;
    }
    res.status(200);
    res.json({ post });
  } catch (e) {
    res.status(500);

    res.json({ error: e.message });
  } finally {
    prisma.disconnect();
  }
}
