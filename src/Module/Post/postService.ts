import { TPost } from "./postInterface";
import { Post } from "./postModel";

const createBlogPostIntoDB = async (payload: TPost) => {
  const result = await Post.create(payload);
  return result;
};
const getAllPostFromDB = async () => {
  const result = await Post.find();
  return result;
};

export const blogPostService = {
  createBlogPostIntoDB,
  getAllPostFromDB,
};
