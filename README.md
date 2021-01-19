# Trabalho para disciplina de Programacao para Web IV do IFSP - Sao Carlos
## Backend em Node.js feito com Express para a aplicação Lolzinho

### Para instalar as dependencias:
 - npm install

### Criar um json na raiz do projeto (mockSecrets.json) para a Riot API Key (https://developer.riotgames.com/):
 - secrets.json = {
  "riotApiKey": "Insira sua Riot API Key"
 }
 
 ### Para  rodar a aplicação:
 - npm start
 
 
### Rotas:
 - GET/All Champions: http://localhost:3000/champion
 - GET/Champion By Name: http://localhost:3000/champion/championName
 - GET/Summoner Profile By Name: http://localhost:3000/summoner/summonerName
