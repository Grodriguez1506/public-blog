import User from "../models/users.schema.js";

export const createUser = async (req, res) => {
  const { username, rol, age } = req.body;

  try {
    const newUser = new User({
      username,
      rol,
      age,
    });

    await newUser.save();

    req.session.message = `El usuario ${username} ha sido creado exitosamente`;

    res.redirect("/users");
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).send("Error en el servidor");
  }
};

export const deleteUser = async (req, res) => {
  const id = req.body.id;

  try {
    const userDeleted = await User.findByIdAndDelete(id);

    req.session.message = `El usuario ${userDeleted.username} ha sido eliminado exitosamente`;

    res.redirect("/users");
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).send("Error en el servidor");
  }
};
