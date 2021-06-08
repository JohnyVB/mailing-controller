const { request, response } = require('express');
const { connectionSMTP } = require('../helpers/nodemailerSend.helper');

const sendEmail = async (req = request, res = response) => {
    
    try {

        //const resp = await connectionSMTP();

        res.status(200).send({
            msg: 'Peticion app script'
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            msg: 'Error en sendEmail()',
            error
        });
    }
}

module.exports = {
    sendEmail
}