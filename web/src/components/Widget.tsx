import { ChatCircleDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./widgetForm";

export function Widget() {
  // // useState é uma funçao que modifica o valor de uma variavel, ela retorna dois valores (que estão sendo desestruturados) o priemeiro é o a varialvel em si e o segundo é a funcçao que modfica essa variavel
  // // useState requer um paremetro que é o valor inicial da variavel.
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  // function togggleWidgetVisibility() {
  //   // seta o valor do estado atual para o inverso
  //   setIsWidgetOpen(!isWidgetOpen);
  // }

  return (
    // popover é uma biblioteca de que auxlia na acessibilidade o site avisando ao navegador quando um elemento é criado
    <Popover className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      {/* group é uma classe que indica que tudo dentro da div é um grupo */}
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatCircleDots className="w-6 h-6 " />

        {/* hover em qualquer elemento do grupo seta o w pra auto */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
