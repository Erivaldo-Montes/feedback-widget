import { prisma } from "../../prisma";
import { feedback, feedbackRepository } from "../feedbacks-repository";


export class PrismaFeedbackRepository implements feedbackRepository{
  async create({type, comment, screenshot}: feedback){
    await prisma.feedback.create({
      data:{
        // quando o nome do campo for igual ao da variavel pode-se use shorSinaxe
        type,
        comment,
        screenshot
      }   
    })
  }
}