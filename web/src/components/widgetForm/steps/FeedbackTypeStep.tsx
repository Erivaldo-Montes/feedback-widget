import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButon";

// tipagem da função
interface feedbackTypeStepProps {
  onFeedbackTypeChanged: (type: feedbackType) => void;
}

// seleciona o tipo do feedback
export function FeedbackTypeStep({onFeedbackTypeChanged}: feedbackTypeStepProps) {
  return (
    //   o fragment é um conceito do react que permite envolver o conteudo sem exibir no HTML
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {/* desestruturaçao do item do array. rederiza as opções de feedback*/}
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              // O react precisa idetificar cada elemento
              key={key}
              // flex-1 adapta a largura do botão de acordo com o width do elemento pai
              className="bg-zinc-800 p-4 relative rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              type="button"
              // key sempre vai ser os campos do
              onClick={() => onFeedbackTypeChanged(key as feedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt}></img>
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
