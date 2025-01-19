import express from "express";
const app = express();
import session from "express-session";
import { connectDb } from "./db.js";
import appRoutes from "./routes/app.routes.js";
import userRoutes from "./routes/users.routes.js";
import postRoutes from "./routes/posts.routes.js";

// Conectar a la base de datos

connectDb();

// Variable para configurar el puerto

app.set("port", 3000);

// Configurar EJS como motor de plantillas

app.set("view engine", "ejs");
app.set("views", "./views");

// Configuración para procesar datos de formularios

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de archivos estáticos

app.use(express.static("./public"));

// Configurar la lectura de datos JSON

app.use(express.json());

// Configuración de express-session

app.use(
  session({
    secret: "express_app",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// Rutas a cada plantilla de la app

app.use(appRoutes);

// Rutas a las interacciones con la BD de la app

app.use("/api", userRoutes);
app.use("/api", postRoutes);

// Middleware para error 404

app.use((req, res) => {
  res.status(404).send("Página no econtrada");
});

app.listen(app.get("port"));
console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
