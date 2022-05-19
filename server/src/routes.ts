import express from "express"
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedback-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import {NodemailMailAdapter} from "./adapters/nodemailer/nodemailer-mail-adapter"

export const routes = express.Router()




routes.post("/feedbacks", async(req, res) => {
  const {type, comment, screenshot} = req.body;

  // instancia o repositorio
  const feedbackRepository =  new PrismaFeedbackRepository();
  const nodeMailer = new NodemailMailAdapter()

  // inseri o repositorio no use case
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    feedbackRepository,
    nodeMailer
  );
  
  await submitFeedbackUseCase.execute({ type, comment, screenshot});

  

  return res.status(201).send()
})