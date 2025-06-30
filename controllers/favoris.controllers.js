const Favoris = require("../models/Favoris");

const getAll = async (req, res) => {
  try {
    //Recuperation de l'utilisateur concté
    const userId = req.user.id;

    // Recupération de tous les conctats favoris de l'utililisateur connecté
    const favoris = await Favoris.find({ user: userId }).populate([
      "user",
      "contact",
    ]);

    res.status(200).json({
      success : true,
      message : "Tous les contacts favoris",
      data: favoris
     });

  } catch (error) {
    res.status(500).json(
      {
        success : false,
        error
      }
    );
  }
};

const add = async (req, res) => {
  try {
    // Recuperation les Id de l'utilsateur connecté et le conctact à ajouter au favoris 
    const userId = req.user.id;
    const contactId = req.params.id;

    // Constitution du data à enregistrer
    const data = { user: userId, contact: contactId };

    // Verification : Si le contact est déjà favoris
    const favorisCheck = await Favoris.find({ contact: contactId }).find({
      user: userId,
    });

    // Si oui 
    if (favorisCheck.length > 0) {
      return res.status(401).json({
        message: "Contact déjà ajouté au favoris",
      });
    }

    // Enregistrement du contact favoris s'il ne l'ai pas encore
    const favoris = await Favoris.create(data);

    res.status(201).json({
      success : true,
      message: "Favoris ajouté",
      data: favoris,
    });
  } catch (error) {
    res.status(500).json(
      {
        success : false,
        error
      }
    );
  }
};

const remove = async (req, res) => {
  try {
    // Recuperation les Id de l'utilsateur connecté et le conctact à ajouter au favoris 
    const userId = req.user.id;
    const contactId = req.params.id;

    // Suppression du contact du favoris
    await Favoris.find({ user: userId }).deleteOne({
      contact: contactId,
    });

    res.status(200).json({
      success : true,
      message: "Favoris supprimé",
      data: {},
    });

  } catch (error) {
    res.status(500).json({
      success : false,
      error
    });
  }
};

module.exports = { getAll, add, remove };
