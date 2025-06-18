# CRUD MongoDB - Funcionários

Este projeto é um CRUD (Create, Read, Update, Delete) de funcionários utilizando Node.js, Express, MongoDB e um frontend HTML/CSS/JS puro.

## Funcionalidades

- Cadastro de funcionários (nome, função, salário)
- Listagem de funcionários
- Edição de funcionários
- Exclusão de funcionários
- Integração total com MongoDB

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd CRUDmongo
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o MongoDB

Crie um arquivo `.env` na raiz do projeto com o conteúdo:

```
MONGO_URI=mongodb://localhost:27017/seubanco
```
Ou use sua string do MongoDB Atlas.

### 4. Inicie o servidor

```bash
node aula/server.js
```

### 5. Acesse o sistema

Abra o navegador e acesse:  
[http://localhost:3001](http://localhost:3001)

## Estrutura

- `aula/server.js` — Backend Express
- `aula/VendaMensal.js` — Model Mongoose (ajustado para funcionários)
- `aula/public/index.html` — Frontend HTML/JS/CSS

## Observações

- Certifique-se de que o MongoDB está rodando localmente ou configure o Atlas.
- O frontend faz requisições diretamente para o backend Express.

---

Feito por João
