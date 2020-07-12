import { createContext } from "react";

const appContext = createContext({
  addPost: () => {},
  removePost: () => {},
  updatePost: () => {},
});

export default appContext;
