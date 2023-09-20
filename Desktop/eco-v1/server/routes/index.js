const router = require('express').Router();
const apiRouter  = require('./routes.api.js');

router.get('/', apiRouter)

module.exports =router; 