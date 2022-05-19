// esse interface pertence a camada de aplicaçoes por isso não foi reutilizado

import { feedbackRepository } from "../repositories/feedbacks-repository";
import {mailAdapter} from "../adapters/mail-adapters"

// a interface da camada de repository
interface SubmitFeedbackUseCaseRequest{
  type: string,
  comment: string,
  screenshot:string
}

// pricinpio da invervão de dependencia
export class SubmitFeedbackUseCase{
  constructor(
    // recebe o repositorio
    private feedbackRepository: feedbackRepository,
    private mailAdapter: mailAdapter
  ){}

  async execute(request: SubmitFeedbackUseCaseRequest){
    const {type, comment, screenshot} = request;

    if (!type){
      throw new Error("type is required")
    };

    if (!comment){
      throw new Error("Comment is required")
    };

    // a scrennshot de deve um formato especifico
    if (screenshot && !screenshot.startsWith("data:image/png;base64,")){
      throw new Error("invalid screenshort format.")
    };

    // executa a criação atraves do contrato
    await this.feedbackRepository.create({
      type,
      comment,
      screenshot
    });

    await this.mailAdapter.sendMail({
      subject: "novo feedback",
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111">',
      `<p>tipo do feedback: ${type} </p>`,
      `<p>comentário: ${comment}</p>`,
      screenshot ? `<img src="${screenshot}"/>` : "",
      `</div>`
      ].join('\n')
    })
  }
}