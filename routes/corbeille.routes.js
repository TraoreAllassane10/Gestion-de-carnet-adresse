const express = require('express');
const router = express.Router();
const corbeilleController = require('../controllers/corbeille.controllers');
const authMidlleware = require('../auth/authMidlleware');

router.get('/', authMidlleware, corbeilleController.all);
router.delete('/:id', authMidlleware, corbeilleController.remove);

module.exports = router;