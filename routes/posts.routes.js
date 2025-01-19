import { Router } from "express";
import { createPost } from "../controllers/post.controllers.js";

const router = Router();

// Ruta para crear post

router.post("/create-post", createPost);

export default router;
