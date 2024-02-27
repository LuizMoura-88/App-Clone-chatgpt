
## 🖥️ WebSite Clone ChatGpt

Está aplicação foi idealizada pela escola de tecnologia [codante.io](https://codante.io/), com prosposta de consumir api de terceiros utilizando Next.js-14, para ter acessos aos serviços de chat é necessario realizar um cadastro no site da OpenAi, acessar documentação e Gerar uma chave secreta, exemplo: 
<details>
  <summary>Acessar video</summary>
https://github.com/LuizMoura-88/App-Clone-chatgpt/assets/122941117/11be9107-fd78-4172-b4d3-74d7c5f5aefd
</details>
Esta aplicação está utilizando a biblioteca AXIOS para consumir a API da OpenAi e persistindo essas informações no LocalStorage do navegador que esta sendo renderizado. O processo se tivide em três etapas: 1° realizar uma pergunta, 2° após submeter a pergunta é chamado a API da OpenAi, 3° os dados retornados são tratados e armazenados no LocalStorage.

##

### 📌 Layout do Projeto 
<img width="1694" alt="Untitled" src="https://github.com/LuizMoura-88/App-Clone-chatgpt/assets/122941117/9b795801-6397-40bd-80ae-b672a28353d7">
##

### 📌 Tecnologias Utilizadas      
```
  "dependencies": {
    "axios": "^1.6.0",
    "clsx": "^2.1.0",
    "js-cookie": "^3.0.5",
    "next": "14.0.1",
    "openai": "^4.14.2",
    "react": "^18",
    "react-dom": "^18",
    "react-markdown": "^9.0.1",
    "react-responsive": "^9.0.2",
    "tailwind-merge": "^2.2.1",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "@types/axios": "^0.14.0",
    "@types/debug": "^4.1.12",
    "@types/dotenv": "^8.2.0",
    "@types/js-cookie": "^3.0.6",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/react-responsive": "^8.0.7",
    "@types/uuid": "^9.0.6",
    "@typescript-eslint/eslint-plugin": "^6.9.1",
    "@typescript-eslint/parser": "^6.9.1",
    "autoprefixer": "^10.0.1",
    "dotenv": "^16.4.5",
    "eslint": "^8",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-airbnb-typescript": "^17.1.0",
    "eslint-config-next": "14.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
  }
```
##

### Como rodar o projeto ✅
* ##### Faça o download do repositório, copie para uma pasta local, abra esta pasta por uma IDE (Ambiente de Desenvolvimento Integrado) foi utilizado o VSCODE
```
1° Copiar link: git@github.com:LuizMoura-88/App-Clone-chatgpt.git
2° Abrir a linha de comando de seu computador local, escolher um diretório e efetuar o git clone:  git clone git@github.com:LuizMoura-88/App-Clone-chatgpt.git
3° Após efetuar o download do repositório remoto abrir o arquivo em sua IDE (ambiente de desenvolvimento integrado).
4° Em sua linha de comando  digite npm i + enter, isso irá baixar todas as dependencias registradas no arquivo package.json
5° apos baixar todas as dependencias registradas no arquivo package.json aplique o comando npm run dev em seguida aperte `ctrl+click` no link que será gerado automaticamente pelo sistema exemplo: url: http://localhost:3000
```
##

### Como utilizar o serviço ✅
<details>
  <summary>Acessar video</summary>
  https://github.com/LuizMoura-88/App-Clone-chatgpt/assets/122941117/359d0494-983f-48d2-86c9-dc26876a7042
</details>

##

🌐 [Visitar - WebSite](https://www.sdddsdghjfkglgfdsafghkjlgfdsa.shop/)

##

## 📌 Informações Adicionais
* A prentensão foi implementar uma aplicação utilizando next.js 14 e typescript para desenvolver minnhas habilidades tecnicas.
* iniciativa do projeto tem como origem o seguinte endereço: [🌐](https://codante.io/mini-projetos/clone-do-chatgpt-com-nextjs).
* Foi utilizado o useReducer do React para que é responsavel por gerenciar o trafego de dados na aplicação.
##

## ⚠️ Problemas enfrentados

* Encontrei dificuldade em comunicar ao vercel que os dados estão sendo permitidos em um localstorage, problema fou solucinado implementado uma biblioteca que define o localstorage no qual a aplicação esta sendo renderizado.
  
##
  
## ⏭️ Próximos passos

* Implementar testes unitários.
* refatoração de código, baseando-se nos princípios de clean code.
* implementar novas funcionalidades.
* implementar banco de dados.

##

### ✅  Autor
Luiz Guilherme da Silva Moura <br/>
[LinkedIn](https://www.linkedin.com/in/luiz-moura-b60099252/)
