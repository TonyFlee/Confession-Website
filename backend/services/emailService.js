const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });
    }

    // Send an email
    async sendEmail({ to, subject, text, html }) {
        try {
            const info = await this.transporter.sendMail({
                from: process.env.SMTP_FROM, // Sender address
                to, // List of receivers
                subject, // Subject line
                text, // Plain text body
                html, // HTML body
            });

            console.log(`Email sent: ${info.messageId}`);
            return info;
        } catch (error) {
            console.error(`Error sending email: ${error.message}`);
            throw new Error('Failed to send email');
        }
    }
}

module.exports = new EmailService();
