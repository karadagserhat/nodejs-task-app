const sgMail = require('@sendgrid/mail')

const sendGridAPIKey = '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'

sgMail.setApiKey(sendGridAPIKey)

sgMail.send({
    to : 'serhatkaradagg@outlook.com',
    from : 'serhatkaradagg@outlook.com',
    subject : 'My first mail',
    text: 'I love you'
})