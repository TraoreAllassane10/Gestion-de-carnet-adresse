const Corbeille = require("../models/Corbeille");

const all = async (req, res) => {
  try {
    //Id de l'utilsateur connecté
    const userId = req.user.id;

    //Recuperation de tous les contacts de la corbeille
    const contacts = await Corbeille.find({ user: userId });

    res.status(200).json({
      success : true,
      total: contacts.length,
      message: "Liste des contacts de la corbeille",
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success : false,
      error
    });
  }
};

const remove = async (req, res) => {
  try {
    // Id de l'utilisateur connecté
    const userId = req.user.id;

    // Id du contact à supprimer de la corbeille
    const contactId = req.params.id;

    // Suppression definitive d'un contact
    await Corbeille.findByIdAndDelete(contactId);

    // Retourne la reponse
    res.status(200).json({
      success: true,
      message: "Conctact supprimer definitivement",
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success : false,
      error
    });
  }
};

module.exports = { all, remove };
