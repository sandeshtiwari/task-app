const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tiwari@latech.edu',
        subject: 'Thank you for signing up!',
        text: `Welcome to the app ${name}. Let me know how you get along with the app`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tiwari@latech.edu',
        subject: 'Sorry to leave you leave',
        text: `${name}, sorry to see you leave. Please let us know if we could improve something`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}