

## Resumo dos conteúdos:

- criar um projeto node
- adicionar o Cypress ao projeto
- criar a estrutura de pastas padrão do Cypress
- executar os testes utilizando o Cypress Runner
- acessar uma página
- mapear elementos utilizando Cypress
- utilizar comandos comuns de digitar, clicar, etc.
- realizar asserções nos nossos testes
- criar comandos customizados para auxiliar no desenvolvimento
- fazer requisições para a api
- executar testes de forma independente
- configurar a aplicação testada para executar localmente
- criar um script para subir o Cypress de forma mais organizada
- manipular recursos do browser, como o localStorage
- reforçar o padrão de testes independentes
- criar seletores dedicados para testes
- qual problema o page objects se propõe a resolver
- criar uma estrutura simples para usar este padrão
- separar testes, ações e elementos da página

------------

# Passo a passo para configurar o projeto

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
