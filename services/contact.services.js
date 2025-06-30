const Contact = require("../models/Contact");
const Corbeille = require("../models/Corbeille");

const all = async (query, userId) => {
  let response;
  let code;

  // Les paramettres de la pagination
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 5;
  const skip = (page - 1) * limit;

  try {
    // Recupération des tous les contacts avec pagination
    const contacts = await Contact.find({ user: userId })
      .populate("user")
      .skip(skip)
      .limit(limit);

    // Le nombre de contact
    const totalContact = await Contact.countDocuments({ user: userId });

    //Le nombre de page
    const totalPages = Math.ceil(totalContact / limit);

    // Constitution de la reponse
    response = {
      success: true,
      totalContact,
      totalPages,
      page,
      data: contacts,
    };
    code = 200;

    return { code, response };
  } catch (error) {
    response = {
      success: false,
      message: "Erreur survénue au niveau du serveur",
    };

    code = 500;

    return { code, response };
  }
};

const find = async (id, userId) => {
  let response;
  let code;

  try {
    // Recuperation du contact
    const contact = await Contact.findById(id);

    if (contact) {
      // Verification si le contact trouvé n'appartient pas à l'utilisateur
      if (contact.user?.toString() !== userId) {
        response = {
          success: false,
          message: "Vous n'etes pas authorisé à acceder à ce contact",
        };
        code = 403;
        return { code, response };
      }

      // Constitution de la reponse
      code = 200;
      response = { success: true, data: contact };

      return { code, response };
    } else {
      response = {
        success: false,
        message: "Contact introuvable",
      };
      code = 404;
      return { code, response };
    }
  } catch (error) {
    response = {
      success: false,
      message: "Erreur survénue au niveau du serveur",
    };

    code = 500;

    return { code, response };
  }
};

const create = async (data) => {
  let response;
  let code;

  try {
    // Enregistrement d'un contact
    const contact = await Contact.create(data);

    // Constitution de la reponse
    response = {
      success: true,
      message: "Contact enregistré",
      Contact: contact,
    };
    code = 201;

    return { code, response };
  } catch (error) {
    response = {
      success: false,
      message: "Erreur survenue du coté du serveur",
    };
    code = 500;
    return { code, response };
  }
};

const update = async (id, userId, data) => {
  let response;
  let code;

  try {
    // Modification d'un contact
    const contact = await Contact.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (contact) {
      // Verification si le contact n'appartient pas à l'utilisateur connecté
      if (contact.user?.toString() !== userId) {
        response = {
          message: "Vous n'etes pas authorisé à acceder à ce contact",
        };
        code = 403;
        return { code, response };
      }

      // Constitution de la reponse
      response = { message: "Contact modifié", contact: contact };
      code = 200;
      return { code, response };
    } else {
      response = { message: "Contact introuvable" };
      code = 404;
      return { code, response };
    }
  } catch (error) {
    response = {
      success: false,
      message: "Erreur survénue au niveau du serveur",
    };

    code = 500;

    return { code, response };
  }
};

const remove = async (id, userId) => {
  let response;
  let code;

  try {
    // Récuperation du contact
    const contact = await Contact.findByIdAndDelete(id);

    if (contact) {
      if (contact.user?.toString() !== userId) {
        response = {
          message: "Vous n'etes pas authorisé à acceder à ce contact",
        };
        code = 403;

        return { code, response };
      }

      //Corbeille : Envoie du contact à la corbeille
      //Constitution du data sans _id du contact à supprimer, avant l'envoie à la corbeille
      const contactDeleted = {
        firstname: contact.firstname,
        lastname: contact.lastname,
        email: contact.email,
        phone: contact.phone,
        user: contact.user,
      };

      //Enregistrement du contact dans la corbeille apres suppression
      await Corbeille.create(contactDeleted);

      // Constitution de la reponse
      response = { message: "Contact supprimé", contact: contact };
      code = 200;

      return { code, response };
    } else {
      
      response = { message: "Contact introuvable", contact: contact };
      code = 404;

      return { code, response };
    }
  } catch (error) {
    response = { sucess : false, message: "Erreur survénue au niveau du serveur"};
    code = 500;

    return { code, response };
  }
};

module.exports = {
  all,
  create,
  find,
  update,
  remove,
};
