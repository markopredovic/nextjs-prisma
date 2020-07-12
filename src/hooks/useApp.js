import api from "../api";

const useApp = () => {
  const addPost = async (data) => {
    try {
      await api.addPost(data);
    } catch (e) {
      throw new Error(e);
    }
  };
  const deletePost = async (id) => {
    try {
      await api.deletePost(id);
    } catch (e) {
      throw new Error(e);
    }
  };
  const updatePost = async (id, data) => {
    try {
      await api.updatePost(id, data);
    } catch (e) {
      throw new Error(e);
    }
  };

  return {
    addPost,
    deletePost,
    updatePost,
  };
};

export { useApp };
