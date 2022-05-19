import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButon";
import { ScreenshotButton } from "../ScreenshotButton";
import {api} from "../../../lib/api";
import {Loading} from "../Loading"

// tipagem o tipagem da props
interface FeedbackContentStepProps {
  feedbackType: feedbackType;
  onFeedbackRestartRequested:() => void,
  onFeedbackSent: () => void
}

// conteudo de cada tipo de feedback
// area para digitar o feedback e tirar screenshot da tela
export function FeedbackContentStep({
  feedbackType, 
  onFeedbackRestartRequested,
  onFeedbackSent
}: FeedbackContentStepProps) {

  // armazena a screenshot
  const [screenshot, setScreenshot] = useState<string |null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  // tipo do feedback de dentro do objeto
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  // printa no console 
  async function handleSubmitFeedback(event: FormEvent){
    event.preventDefault();
    // console.log({comment, screenshot});

    setIsSendingFeedback(true);
    // envia para o back-end
    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          ></img>
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
        // ring cria um anel em torno do conteudo 
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte com detalhes o que está acontencento..."
        
        // quando digitar algo muda estado do comment para o conteudo do textarea
        onChange={event => setComment(event.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button

            // quando não tiver nada desabilita do botão 
            disabled={comment.length === 0 || isSendingFeedback}
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sn hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          > 
           {isSendingFeedback ? <Loading/> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
