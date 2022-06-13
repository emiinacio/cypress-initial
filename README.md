
## Resumo dos conteúdos:

- como criar um projeto node
- como adicionar o Cypress ao projeto
- como criar a estrutura de pastas padrão do Cypress
- como executar os testes utilizando o Cypress Runner
- como acessar uma página
- como mapear elementos utilizando Cypress
- como utilizar comandos comuns de digitar, clicar, etc.
- como realizar asserções nos nossos testes
- como criar comandos customizados para auxiliar no desenvolvimento
- como fazer requisições para a api
- como executar testes de forma independente
- como configurar a aplicação testada para executar localmente
- como criar um script para subir o Cypress de forma mais organizada
- como manipular recursos do browser, como o localStorage
- reforçar o padrão de testes independentes
- como criar seletores dedicados para testes
- qual problema o page objects se propõe a resolver
- como criar uma estrutura simples para usar este padrão
- como separar testes, ações e elementos da página

------------

# Passo a passo para configurar o projeto

#### Baixe o projeto no Github, de preferência na branch do Vídeo 1:
- Branch do vídeo 1: `https://github.com/samlucax/youtube-cypress/tree/video1`

#### Instale e suba nossa *cobaia* localmente
1.Acessar o diretório backend, instalar as dependências e iniciar a api:
  - `cd backend` 
  - depois `npm install`
  - depois `npm start`

2.Acessar o diretório frontend, instalar as dependências e iniciar o site:
  - `cd frontend`
  - depois `npm install`
  - depois `npm start`

#### Instale e abra o Cypress
3.Acessar o diretório root do projeto (que tem a pasta Cypress), instalar as dependências e abrir o Cypress Runner:
  - `npm install`
  - `./node_modules/.bin/cypress open`
