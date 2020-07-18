import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IUpdateData {
  id: number;
  title: string;
  content: string;
  featured: boolean;
  archived: boolean;
  imageUrl: string;
}

const getPost = async (id: number) => {
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
const deletePost = async (id: number) => {
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
const updatePost = async (id: number, updatedData: IUpdateData) => {
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
