import Post from "../models/posts.schema.js";

export const createPost = async (req, res) => {
  const { username, post } = req.body;

  try {
    const newPost = new Post({
      username,
      post,
    });

    await newPost.save();

    req.session.message = `El post ha sido creado exitosamente`;

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
