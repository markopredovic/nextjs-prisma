import { createContext } from "react";
import { IPost } from "../models";

interface IPostData {
  imageUrl: string | null;
  title: string;
  content: string;
  featured: boolean;
}

const appContext = createContext({
  addPost: (postData: IPostData) => {},
  removePost: () => {},
  updatePost: (id: number, data: IPost) => {},
});

export default appContext;
