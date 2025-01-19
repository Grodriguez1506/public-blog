import { Router } from "express";
import Post from "../models/posts.schema.js";
import User from "../models/users.schema.js";

const router = Router();

// Inicio

router.get("/", async (req, res) => {
  const posts = await Post.find();
  const users = await User.find();

  let message;
  if (req.session.message) {
    message = req.session.message;
    delete req.session.message;
  } else {
    message = "";
  }

  res.render("index", {
    title: "Home",
    posts,
    users,
    message,
  });
});

// Listar usuarios

router.get("/users", async (req, res) => {
  const users = await User.find();

  let message;
  if (req.session.message) {
    message = req.session.message;
    delete req.session.message;
  } else {
    message = "";
  }
  res.render("users", {
    title: "Usuarios",
    message,
    users,
  });
});

// Crear usuario

router.get("/create_user", async (req, res) => {
  res.render("create_user", { title: "Crear usuario" });
});

// Eliminar usuario

router.get("/delete_user", async (req, res) => {
  const users = await User.find();

  res.render("delete_user", {
    title: "Eliminar usuario",
    users,
  });
});

export default router;
