const SMTPConnection = require('nodemailer/lib/smtp-connection');

/* const sendEmailNodemailer = async () => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            host: process.env.IP_EMAIL,
            port: process.env.PORT_EMAIL,
            secure: false
        });

        const mailOptions = {
            from: 'Nodemailer',
            to: 'johnyvgoog@gmail.com',
            subject: 'NOTIFICACIÓN: Prueba envio de correo',
            text: 'Prueba envio de correo'
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            }else if (info) {
                resolve(info);
            }
        });


    });
} */

const connectionSMTP = async () => {

    return new Promise((resolve, reject) => {
        const connection = new SMTPConnection({
            port: process.env.PORT_EMAIL,
            host: process.env.IP_EMAIL,
            secure: false
        });

        connection.connect((err, info) => {
            if (err) {
                console.log(err);
            }

            if (info) {
                console.log(info);
            }
        });

        //connection.login();

        const data = {
            from: 'johny.villegas@davincitech.co',
            to: 'johnyvgoog@gmail.com'
        }

        const message = 'Hola mundo'

        connection.send(data, message, (err, info) => {
            if (err) {
                reject(err);
            }

            if (info) {
                resolve(info);
                connection.quit();
            }
        });
    });
}

module.exports = {
    connectionSMTP
}