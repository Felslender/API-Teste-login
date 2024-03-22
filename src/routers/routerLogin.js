const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllerLogin');
const teste = require("../controllers/testeEsp")

router.post('/Login' ,controller.login);
router.post("/Resp", teste.teste);
router.get("/teste", teste.testeGet);



module.exports = router;
