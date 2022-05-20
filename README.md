<p align="center">
  <a href="https://feedback-widget-eight-tau.vercel.app/" >
    <img src="./web/src/assets/feedback-screenshot-removebg-preview.png"/>
  </a>
  <h1 style="text-align: center">Feedback Widget</h1>
</p>

<div style="display: flex; gap: 50px; margin-bottom: 100px;">
  <img style="height: 50px; width: auto;" src="./web/src/assets/pngwing.com(1).png" alt="node logo"
  title="node">
  <img style="height: 50px; width: auto;" src="./web/src/assets/pngwing.com.png" alt="react logo" title="react">
  <img  style="height: 50px; width: auto;"  src="./web/src/assets/pngwing.com(2).png" alt="vite logo" title="vite">
  <img  style="height: 50px; width: auto;"  src="./web/src/assets/pngwing.com(3).png" alt="typescript logo" title="typescript">
  <img style="height: 50px; width: auto;"  src="./web/src/assets/prisma-4.svg" alt="prisma logo" title="prisma ORM">
</div>

# Sobre o projeto

Este projeto tem como finalidade possibilitar o envio de feedbacks por meio de 
envio de email ao proprietário do site junto com tipo do feedback e um captura 
da tela no momento do envio. O repositótio contém o front-end e o back-end.
Pode ser um bug , idea ou outro.

front-end foi hospedado na - [vercel](https://vercel.com/).

back-end foi hospedado no - [railway](https://railway.app/).

para acessar o projeto em produção - [feedback-widget](https://feedback-widget-eight-tau.vercel.app/)

## Feito com
- [react](https://github.com/facebook/react) - É uma biblioteca javascript para
criação de interface baseada em componentes e declarativa.
- [Vite](https://github.com/vitejs/vite) - Ferramenta de construção de front-end
de nova geração.
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) - Biblioteca de css
utilitário para construção de interface.
  - [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) - Um plug-in que fornece uma redefinição básica para estilos de formulário que facilitam a substituição de elementos de formulário com utilitários. 
- [typescript](https://github.com/microsoft/TypeScript) - TypeScript é uma linguagem para JavaScript em escala de aplicativo. O TypeScript adiciona tipos opcionais ao JavaScript que suportam ferramentas para aplicativos JavaScript em larga escala para qualquer navegador, para qualquer host, em qualquer sistema operacional. O TypeScript compila para JavaScript legível e baseado em padrões. 
- [axios](https://github.com/axios/axios) - Cliente HTTP baseado em promessa para o navegador e node.js.
- [phosphor-react](https://github.com/phosphor-icons/phosphor-react) - Phosphor é uma família de ícones flexível para interfaces, diagramas, apresentações.
- [html2canvas](https://github.com/niklasvh/html2canvas) - O script permite que você faça "capturas de tela" de páginas da Web ou partes delas, diretamente no navegador do usuário.
- [jest](https://github.com/facebook/jest) - ferramenta test para javascript
- [prisma](https://github.com/prisma/prisma) - ferramenta de insersão de dados na bancos
de dados de forma mais produtiva.
- [express](https://github.com/expressjs/express) - Gereciadoer de requisições HTTP em diferentes verbos em diferentes URL.
  - [cors](https://github.com/expressjs/cors) - CORS é um pacote node.js para fornecer um Connect / Express que pode ser usado para habilitar CORS com várias opções.
- [nodemailer](https://github.com/nodemailer/nodemailer) - O Nodemailer é um módulo para aplicativos Node.js para permitir o envio de e-mail fácil como um bolo.
- [node](https://github.com/nodejs/node) - Node.js é um ambiente de tempo de execução JavaScript de código aberto e multiplataforma.

# Começando

instale as depedências:
```sh
npm install
```
Para conseguir ultilizar o projeto deve-se executar o servidor na pasta ./server com
```sh
npm run dev
```
E executar o front-end 
```sh
npm run dev
```
ao entrar na endereço web gerado pelo vite verá um icone roxo no canto inferior
direito da tela.
Ao clicar aparece três opcões ao escolher uma delas verá um formalário onde deve
informar com detalhes o está acontencendo, e tem um botão com uma camera que serve 
para tirar a captura da tela e enviar junto com o texto
