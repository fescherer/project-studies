# FS Delivery :truck:
> **FS Delivery consiste em uma aplicação que gerencia o sistema de entregas de pedidos de um restaurante fictício chamado FS**

A aplicação é dividade em três partes: O frontend web; o frontend mobile e o backend. Na parte web é onde que o cliente escolhe seu pedido e em seguida sua localização. A parte do backend é responsável por carregar o cardápio, ou seja, os produtos oferecidos. E por fim, no frontend mobile, é onde o entregador gerencia todos os pedidos que foram feitos pelo usuário. 

## História :blue_book:
A aplicação foi desenvolvida durante a **Semana Dev Superior 2.0**. Nela, [Nélio Alves](https://www.linkedin.com/in/nelio-alves) ensinou os conceitos relacionados ao backend, usando Spring Boot, um framework de Java. 

[Washington Soares Braga](https://www.linkedin.com/in/washington-soares-braga) também foi um dos professores da semana. Ele ficou responsável pelo frontend, ensinando React, um framework de JavaScript. Porém, atualmente temos uma linguagem que nasceu a partir do JavaScript, ela se chama TypeScript, entre as principais diferenças, estão que no TypeScript, as variáveis devem ser tipadas, ou seja, devemos declarar seu tipo (int, float, boolean, etc) desse jeito, o código fica mais fácil de dar manuntenção. Por esse e outros motivos, foi decido usá-lo.

Agradeço muito a todos da [Dev Superior](https://youtube.com/devsuperior) por me proporcionar essa semana incrível com muito conteúdo sobre React e Spring Boot.

## Tecnologias utilizadas :computer:
- [Spring Boot](https://spring.io/projects/spring-boot)
- [React JS](https://reactjs.org) 
- [Reactive Native](https://reactnative.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Expo](https://expo.io)

## Como rodar o projeto localmente :open_file_folder:
```
#Para testar a aplicação localmente você precisa clonar o repositório. Em seu git bash use
    git clone https://github.com/ofelipescherer/fsdelivery-sds2.git

#Frontend Web
# Abra o projeto na pasta frontend-web. Em seguida precisamos instalar o pacote npm. Caso tenha o node instalado utilize.
    npm install  

#Para iniciar o projeto utilize npm start. Em seguida o projeto deve ser aberto em seu navegador.
    npm start

#Frontend Mobile
#Abra o projeto na pasta frontend-mobile. Em seguida precisamos instalar o pacote npm. Caso tenha o node instalado utilize.
    npm install  

# Para iniciar o projeto utilize npm start.
    npm start

#Agora necessitamos instalar o aplicativo **expo** no seu smartphone ou em seu emulador. Após isso, escaneie o código QR e pronto, a aplicação será aberta.
   ```


## Como usar :raising_hand:
A tela inicial, serve apenas para dar boas vindas

![Screenshot_1](https://user-images.githubusercontent.com/62115215/110243621-f37f4600-7f39-11eb-8099-105402b47d5a.png)

Em seguida o cardápio será carregado. Ele pode demorar um pouco, pois estamos usando um host de backend free [Heroku](https://www.heroku.com)

![Screenshot_2](https://user-images.githubusercontent.com/62115215/110243714-4953ee00-7f3a-11eb-99a2-b27830a560ec.png)

Aqui podemos escolher o pedido, além de fornecer a localização da entrega

![Screenshot_3](https://user-images.githubusercontent.com/62115215/110243771-8f10b680-7f3a-11eb-8d89-46cb39a62143.png)
![Screenshot_4](https://user-images.githubusercontent.com/62115215/110243769-8ddf8980-7f3a-11eb-82ce-1544742513dc.png)

Após clicar em "Fazer Pedido", caso tudo tenha dado certo, aparecerá uma notificação no canto direito superior

![Screenshot_5](https://user-images.githubusercontent.com/62115215/110243840-e0b94100-7f3a-11eb-963a-accbe8f18072.png)

Na parte mobile, é bem simples.

A primeira etapa é apenas uma tela de boas vindas

![Boas vindas](https://user-images.githubusercontent.com/62115215/110244092-eebb9180-7f3b-11eb-840a-8ad6ada1c5ef.jpeg)

Em seguida, temos a tela onde os pedidos serão listados

![pedidos](https://user-images.githubusercontent.com/62115215/110244095-ef542800-7f3b-11eb-9598-433d36216a38.jpeg)

Conseguimos também entrar em cada pedido e ver suas especificações

![Especificações](https://user-images.githubusercontent.com/62115215/110244094-eebb9180-7f3b-11eb-9f06-7e1c2a558d92.jpeg)

Por fim, ao concluir um pedido será aparecido um pop up e ele será removido da lista de pendentes

![confirmação](https://user-images.githubusercontent.com/62115215/110244091-ee22fb00-7f3b-11eb-976e-d8d36db50d89.jpeg)
