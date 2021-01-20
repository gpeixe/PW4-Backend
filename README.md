# Trabalho para disciplina de Programacao para Web IV do IFSP - Sao Carlos
## Backend em Node.js feito com Express para a aplicação Lolzinho

### Para instalar as dependencias:
 - npm install

### Inserir sua chave da Riot APIs no arquivo secrets.json (https://developer.riotgames.com/ - Gere uma chave de desenvolvimento caso não tenha):
 - secrets.json = {
  "riotApiKey": "Insira sua Riot API Key"
 }
 
 ### Para  rodar a aplicação:
 - npm start


### Rotas:
 - GET/All Champions: http://localhost:3000/champion
 - GET/Champion By Name: http://localhost:3000/champion/${championName}
 - GET/Summoner Profile By Name: http://localhost:3000/summoner/${summonerName}
