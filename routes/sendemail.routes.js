const { Router } = require('express');

const { sendEmail } = require('../controllers/sendemail.controller');

const router = Router();

router.post('/', sendEmail);

module.exports = router;