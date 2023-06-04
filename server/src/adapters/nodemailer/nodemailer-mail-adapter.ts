import nodemailer from'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'f86448f98f4d91',
        pass: '5834e7f65c38b8',
    },
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        const feedback = await transport.sendMail({
        from: 'Equipe Feedget <equipe@feedget.com>',
        to: 'Arthur C Lobo <aclskt16@gmail.com',
        subject,
        html: body,
    })

    }
}
