import { Router } from "express";
import { createUser, deleteUser } from "../controllers/users.controllers.js";

const router = Router();

// Ruta para crear usuario

router.post("/create-user", createUser);

// Ruta para eliminar usuario

router.post("/delete_user", deleteUser);

export default router;
