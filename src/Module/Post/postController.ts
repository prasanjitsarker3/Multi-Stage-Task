import catchAsync from "../../UtlitisFunc/catchAsync";
import sendResponse from "../../UtlitisFunc/sendResponse";
import { blogPostService } from "./postService";

const createUserBlogPost = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await blogPostService.createBlogPostIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Information Send successfully !",
    data: result,
  });
});
const getAllPost = catchAsync(async (req, res) => {
  const result = await blogPostService.getAllPostFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Fetch post successfully !",
    data: result,
  });
});

export const blogPostController = {
  createUserBlogPost,
  getAllPost,
};
