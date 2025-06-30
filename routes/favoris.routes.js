const express = require('express');
const router = express.Router();
const favorisController = require('../controllers/favoris.controllers');
const authMidlleware = require('../auth/authMidlleware');

router.get('/',authMidlleware, favorisController.getAll);
router.post('/:id',authMidlleware, favorisController.add );
router.delete('/:id', authMidlleware, favorisController.remove);


module.exports = router;