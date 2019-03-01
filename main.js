
// Nodemailer code

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'notes',
    auth: {
        user: 'kah@ndsys.com',
        pass: 'Augdog@0228'
    }
});

var mailOptions = {
    from: 'kah@ndsys.com',
    to: 'kah@ndsys.com',
    subject: 'Test eail from MD',
    text: 'Nice, you did it...'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log('message not sent');
    } else {
        console.log('Email sent' + info.response);
    }
});


