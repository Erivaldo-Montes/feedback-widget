import html2canvas from "html2canvas";

import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";

interface screenshotButtonPros{
  screenshot:string | null,
  onScreenshotTook: (screenshot:string | null) => void
}

export function ScreenshotButton({onScreenshotTook, screenshot}:screenshotButtonPros){
  // mostra a imagem de loading enquanto estivar processando a captura
  const [isTakingScreenshot, setTakingScreenshot] = useState(false);

  async function handleTakeScreenshot(){
    setTakingScreenshot(true);

    // captura todos os elementos do html não permitindo que seja nulo
    const canvas = await html2canvas(document.querySelector('html')!);

    // converte captura do html em base64 no formato png
    // base64 é um foramto de texto que representa um imagem
    const base64Image= canvas.toDataURL("image/png");
    
    // seta o estado do componemte pai com a imagem, permintido o acesso fora do botão
    onScreenshotTook(base64Image)

    // termina o processamento
    setTakingScreenshot(false);
  }

  // se a foto for tirado retorna o foto tirada em vez do botão
  if(screenshot){
    return(
      <button
        type="button"
        className="p-1 h-10 w-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"

        // seta o estado do screenshot como nulo
        onClick={() => onScreenshotTook(null)}

        // a primera é para inserir um codigo JS e a segunda é para indicar o um objesto JS
        style={{
          backgroundImage: `url(${screenshot})`,

          // como a tela esta preta altera-se a position do background para mostrar o widget
          backgroundPosition: "right bottom",
          backgroundSize: 100
        }}
      >
        {/* icone da lixeira */}
        <Trash weight="fill"/>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6"/>}
    </button>
  )
}