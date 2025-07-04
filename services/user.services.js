const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const PrivateKey = require("../auth");

const create = async (data) => {
  let response;

  try {

    const email = data.email;
    const name = data.name;

    // Vérification si l'utilisateur a un compte
    const verifiedEmail = await User.findOne({ email });

    // S'il a déjà un compte
    if (verifiedEmail) {
      response = { message: "Cet utilisateur existe déjà" };
      return response;
    }

    // Cryptage de son mot de passe
    password = bcrypt.hashSync(data.password, 10);

    // Creation de l'utilisateur 
    const user = await User.create({ name, email, password });

    if (user) {
      response = {success : true, message: "Utilisateur crée", data: user };
      return response;
    } else {
      response = {success : false,  message: "Erreur lors de la creation de l'utilisateur" };
      return response;
    }
  } catch (error) {
    response = { message: "Erreur survenue du coté du serveur" };
    return response;
  }
};

const login = async (data) => {
  const email = data.email;
  const user = await User.findOne({ email });

  let response;
  let code;

  if (!user) {
    code = 404;
    response = { message: "Vous n'avez de compte" };
    return { code, response };
  }

  const validated = bcrypt.compareSync(data.password, user.password);

  if (validated) {
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, admin: user.admin },
      PrivateKey,
      { expiresIn: "24h" }
    );

    code = 200;
    response = { message: "Utilisateur connecté", data: user, token };
    return { code, response };
  } else {
    code = 401;
    response = { message: "Mot de passe incorrect" };
    return { code, response };
  }
};

module.exports = {
  create,
  login,
};
