import { useState } from "react";
import { CloseButton } from "../CloseButon";
import bugImageUrl from "../../assets/Bug.svg";
import ideaImageUrl from "../../assets/Idea.svg";
import thoughtImageUrl from "../../assets/Thought.svg";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentSteps";
import { FeedbackSucesseStep } from "./steps/FeedbackSucessStep";

// objeto com as formas de feedback
export const feedbackTypes = {
  BUG: {
    title: "problema",
    image: {
      source: bugImageUrl,
      alt: "imagem de um inseto",
    },
  },

  IDEA: {
    title: "ideia",
    image: {
      source: ideaImageUrl,
      alt: "imagem de uma lampada",
    },
  },

  OTHER: {
    title: "outro",
    image: {
      source: thoughtImageUrl,
      alt: "imagem de balão de pensamento",
    },
  },
};
/**
 *
 * object.entries
 * [
 * [chave, [conteúdo]]
 * [BUG, [...]]
 * [IDEA, [...]]
 * ]
 */

// gera a tipagem do feedbackTypes
export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  // useState controla o estado do componente armazenando em uma varialvel especial, o primero campo
  // é o nome da variavel que sera armazenada o estado e o segundo e a função que alterar o valor da variavel
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);

  // verfica se o feedback foi enviado
  const [feedbackSent, setFeedbackSent] = useState(false)

  // seta o estado da seleção para nulo, o que faz com que volte para tela de seleção  
  function handleRestartFeedback(){
    setFeedbackSent(false);
    setFeedbackType(null)
  }



  return (
    // mostra o elemento e torna responsivo
    // md: é a tamanho da tela
    <div
      className="bg-zinc-900  p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg 
    w-[calc(100vw-2rem)] md:w-auto"
    >
      {feedbackSent ? (
        <FeedbackSucesseStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            // envia a função para o componente filho
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep 
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={()=> setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com S2 pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://www.rocketseat.com"
        >
          rocketseat
        </a>
      </footer>
    </div>
  );
}
