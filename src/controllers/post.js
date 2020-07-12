import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getPost = async (id) => {
  try {
    return prisma.post.findOne({
      where: {
        id,
      },
    });
  } catch (e) {
    throw new Error("Unable to fetch post");
  }
};
const deletePost = async (id) => {
  try {
    return prisma.post.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    throw new Error("Unable to delete post");
  }
};
const updatePost = async (id, updatedData) => {
  console.log("updatedData", updatedData);
  try {
    return prisma.post.update({
      where: { id },
      data: updatedData,
    });
  } catch (e) {
    throw new Error("Unable to update post");
  }
};

export { getPost, deletePost, updatePost };
