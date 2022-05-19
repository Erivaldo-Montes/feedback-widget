import { mailAdapter, sendMailData } from "../mail-adapters";
import nodemailer from "nodemailer"

// configuração do mailtrap com node nodemailer
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "be61dfc33ed1a6",
    pass: "fd4e21a3ccee80"
  }
});

export class NodemailMailAdapter implements mailAdapter{
  async sendMail({subject, body}:sendMailData){
    // estrutura do email a ser enviado
    await transport.sendMail({
      from: 'Equipe feedGet <oi@feedget.com',
      to: 'Erivaldo Montes <erivaldomontez@gmail.com',
      subject,
      // email a ser enviado.
      // para enviar o o email com a formatçao correta usei um array com cada
      // elemento do array sendo um linha do email depois junta tudo em uma unica string com o join.
      html: body
    })
  }
}