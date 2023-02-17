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

<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

  <br />
  <a href="https://github.com/ofelipescherer/boilerplate">
    <img src="https://user-images.githubusercontent.com/62115215/218337222-54c45669-88a9-47a4-a238-2806ac25a739.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">BoilerPlate NextJS StyledComponents</h3>

<p align="center">
This project is a boilerplate for my NextJS projects
<br />
<a href="https://github.com/ofelipescherer/boilerplate"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="#about">About</a>
•
<a href="#stack">Build With</a>
•
<a href="#install">Getting Started</a>
•
<a href="#usage">How to use</a>
•
<a href="#issue">Report Bug / Request Feature</a>
•
<a href="#contributing">Contributing</a>
•
<a href="#contributors">Contributors</a>
•
<a href="#license">License</a>
•
<a href="#contact">Contact me</a>
</p>
</div>

<!-- **********************🐲About🐲********************** -->

<a name="about"></a>

## 🎲 About 🎲

This project is a boilerplate for NextJS projects, here are included Styled Components, theme config, phosphor icons and Typescript. Feel free to use and modify as you want.

[Vercel's Deploy](https://alura-quiz.ofelipescherer.vercel.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲Built With🐲********************** -->

<a name="stack"></a>

## 💻 Built With 💻

<div align="center">

[![Next][next.js]][next-url]
[![React][react.js]][react-url]
[![HTML 5][html 5]][html-url]
[![CSS 3][css 3]][css-url]
[![Typescript][typescript]][typescript-url]
[![Styled Components][styled components]][styled-components-url]

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲Getting Started🐲********************** -->

<a name="install"></a>

## 🚂 Getting Started 🚂

To get this project up and running locally on your pc, follow the steps:

### Pre requisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ofelipescherer/project-studies.git
   ```
2. Go to project's folder

```sh
cd alura/alura-quiz
```

3. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲How to use🐲********************** -->

<a name="usage"></a>

## 🙋 How to use 🙋

T

```json
{
  "bg": "",
  "title": "",
  "description": "",
  "questions": [
    {
      "image": "",
      "title": "",
      "description": "",
      "answer": 0,
      "alternatives": ["", "", "", ""]
    }
  ],
  "external": [""],
  "theme": {
    "colors": {
      "primary": "",
      "secondary": "#",
      "mainBg": "",
      "contrastText": "",
      "wrong": "",
      "success": ""
    },
    "borderRadius": "4px"
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲Report Bug / Request Feature🐲********************** -->

<a name="issue"></a>

## 🐞 Report Bug / Request Feature 🐞

If you found a bug or want to request a feature, you can open an [issue](https://github.com/ofelipescherer/boilerplate/issues)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲Be part of this project🐲********************** -->

<a name="contributing"></a>

## 👋 Be part of this project 👋

Contributions are extremely welcome. You can see how to make one by following the file [Contributing](CONTRIBUTING.md)

And don't forget to leave a star on the project if you liked it 🤩

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲License🐲********************** -->

<a name="license"></a>

## ⚖️ License ⚖️

Distributed under the MIT License. See [License](LICENSE.md) for more information.

Images:
[Background image](https://wallup.net/wp-content/uploads/2015/07/Cat-head-on-the-desk.jpg)  
[GIF Question 1](https://media.giphy.com/media/dKNou2IQj7vm2kB9fX/giphy.gif)  
[GIF Question 2](https://media.giphy.com/media/JhpDQpQhBOlTW/giphy.gif)  
[GIF Question 3](https://media.giphy.com/media/KCetsAmkqjvNYIZMaL/giphy.gif)  
[GIF Question 4](https://media.giphy.com/media/l0HlFOlbKxx1BjzO0/giphy.gif)  
[GIF Question 5](https://media.giphy.com/media/qvuIkBneOp8kM/giphy.gif)  
[Loading animation](https://lottiefiles.com/46997-color-preloader)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲Contact Me🐲********************** -->

<a name="contact"></a>

## 💬 Contact me 💬

My name is Felipe Scherer and you can find me at:

<div align="center">

[![Youtube][youtube-shield]][youtube-url]
[![Linkedin][linkedin-shield]][linkedin-url]
[![Github][github-shield]][github-url]

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲Contributors🐲********************** -->

<a name="contributors"></a>

## 🤗 Contributors 🤗

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ofelipescherer">
        <img src="https://avatars.githubusercontent.com/u/62115215" width="100px;" alt="Felipe Scherer Picture"/><br>
        <sub>
          <b>Felipe Scherer</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲Contributors🐲********************** -->

<a name="special-thanks"></a>

## 🤗 Special Thanks 🤗

My thanks to the incredible instructors of this immersion. <3

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/omariosouto">
        <img src="https://avatars.githubusercontent.com/omariosouto" width="100px;" alt="Mario Souto Picture"/><br>
        <sub>
          <b>Mario Souto</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/JulianaAmoasei">
        <img src="https://avatars.githubusercontent.com/JulianaAmoasei" width="100px;" alt="Juliana Amoasei Picture"/><br>
        <sub>
          <b>Juliana Amoasei</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/peas">
        <img src="https://avatars.githubusercontent.com/peas" width="100px;" alt="Paulo Silveira Picture"/><br>
        <sub>
          <b>Paulo Silveira</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Badges and Badges Link -->

[contributors-shield]: https://img.shields.io/github/contributors/ofelipescherer/boilerplate.svg?style=for-the-badge
[contributors-url]: https://github.com/ofelipescherer/boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ofelipescherer/boilerplate.svg?style=for-the-badge
[forks-url]: https://github.com/ofelipescherer/boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/ofelipescherer/boilerplate.svg?style=for-the-badge
[stars-url]: https://github.com/ofelipescherer/boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/ofelipescherer/boilerplate.svg?style=for-the-badge
[issues-url]: https://github.com/ofelipescherer/boilerplate/issues
[license-shield]: https://img.shields.io/github/license/ofelipescherer/boilerplate.svg?style=for-the-badge
[license-url]: https://github.com/ofelipescherer/boilerplate/blob/master/LICENSE.md
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0E76A8
[linkedin-url]: https://www.linkedin.com/in/ofelipescherer
[youtube-shield]: https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white
[youtube-url]: https://www.youtube.com/channel/UCySqmz_Rohnl53VLoNQsnKg
[github-shield]: https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/ofelipescherer
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[html 5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[css 3]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org
[styled components]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[styled-components-url]: https://styled-components.com
