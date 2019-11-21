# test-NodeJSJunior

Projeto proposto pela empresa Contele para vaga de NodeJS Junior, que simula uma tela de cadastro de pedido


## Tecnologias

Projeto desenvolvido utilizando as seguintes tecnologias:
- NodeJS com express
- ReactJS
- Reactotron
- Docker com container de PostgreSQL


### Iniciar projeto

Primeiro precisa instalar as dependências dos projetos, só executar ```yarn``` ou ```npm install``` dentro da pasta dos projetos

##### nodejs

Para rodar a parte do backend, primeiro precisa criar um banco de dados com as configurações do [.env.configuration](https://github.com/LucasMSnts/test-NodeJSJunior/blob/master/nodejs/.env.configuration), depois de criado, execute o comando abaixo para criar as tabelas:
```
  yarn sequelize db:migrate
```
Depois de criado o banco de dados e as tabelas, executar:
```
  yarn dev
``` 
  ou 
```
  npm run dev
```

##### reactjs

Para rodar a parte do frontend basta executar:
``` 
  yarn start
``` 
  ou 
```
  npm start
```
