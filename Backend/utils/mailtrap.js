import nodemailer from 'nodemailer';

//Email-Verifizierung
export const transporter = nodemailer.createTransport({
	host: 'sandbox.smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: '25e19e1d543728',
		pass: 'fd880255cc9e1c',
	},
});