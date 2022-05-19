
export interface sendMailData{
  subject: string,
  body: string,
}

export interface mailAdapter{
  sendMail: (data: sendMailData) => Promise<void>
}