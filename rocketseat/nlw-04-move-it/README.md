<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

  <br />
  <a href="https://github.com/ofelipescherer/project-studies">
    <img src="https://user-images.githubusercontent.com/62115215/219968410-6964a109-107f-4ab5-831a-d1e96e7c709a.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Move It</h3>

<p align="center">
A pomodoro reimagination
<br />
<a href="https://github.com/ofelipescherer/project-studies"><strong>Explore the docs »</strong></a>
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

## 🚶 About 🚶

A cada **30 minutos** a aplicação lhe dá um exercício simples para previnir possiveis problemas de _articulações_, _coluna_ ou _olhos_, que são muito comuns de serem desenvolvidos caso a pessoa fique muito tempo na frente do computador parado.

A aplicação foi desenvolvida em estilo _RPG_ , em que a cada desafio(exercício) completado, é concedido ao usuário experiência ou _xp_. Caso a quantidade de xp seja suficiente, o usuário poderá subir de nível. Essa mecânica foi adicionada com o intuito de incentivar a prática desses exercícios simples, mas muito importantes.

A aplicação foi desenvolvida durante a semana **Next Level Week #04** ou **NLW #04**. Nela, [Diego Fernandes](https://twitter.com/dieegosf) ensinou conceitos de React e Next JS. O principal deles para mim foi de como usar **_Contexts_** que são ferramentas que facilitam a conversa entre componentes.

Agradeço muito a todos da [Rockeseat](https://rocketseat.com.br), em especial [Diego Fernandes](https://twitter.com/dieegosf), por me proporcionar essa semana incrível com muito conteúdo sobre React e Next.


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
cd rocketseat/nlw-04-move-it
```

3. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲How to use🐲********************** -->

<a name="usage"></a>

## 🙋 How to use 🙋

Na tela incial, será pedido seu nome no github

![Screenshot_1](https://user-images.githubusercontent.com/62115215/109425876-481a4280-79c9-11eb-96d0-c76415e3e69a.png)

Mas não se preocupe, não é necessário criar uma conta caso não tenha uma. Apenas coloque qualquer nome ou deixe em branco. Porém caso tenha, é interessante coloca-lá pois assim, o programa consegue colocar sua imagem de perfil.

![Screenshot_3](https://user-images.githubusercontent.com/62115215/109426075-5321a280-79ca-11eb-8381-17fe74998252.png)

> Imagem padão quando o programa não encontra seu perfil no Gthub

![Screenshot_2](https://user-images.githubusercontent.com/62115215/109426077-53ba3900-79ca-11eb-90c2-6a4435301556.png)

> Ao colocar um nome válido, podemos extrair a foto de perfil

Na próxima tela, você pode escolher o Light Mode(padão) ou o Dark Mode.

![Screenshot_4](https://user-images.githubusercontent.com/62115215/109426214-3043be00-79cb-11eb-8e37-2229f25c312f.png)

> Light Mode

![Screenshot_5](https://user-images.githubusercontent.com/62115215/109426236-4e112300-79cb-11eb-9dac-4426f0a2e37f.png)

> Dark Mde

Próximo passo é clicar em*"iniciar um ciclo"* . O primeiro ciclo será sem desafios, portanto se pode relaxar.

Quando o _timer_ chegar em 00:00, será disparado um som e uma notificação, caso o usuario tenha aceitado exibi-las. Em seguida, um novo desafio será proposto

![Screenshot_6](https://user-images.githubusercontent.com/62115215/109426369-31291f80-79cc-11eb-813a-628db1c114c5.png)

![Screenshot_7](https://user-images.githubusercontent.com/62115215/109426500-ba405680-79cc-11eb-9b3f-11cc02d3b005.png)

> Legenda:

1. Quantidade de experiência que será recebida após o termino do desafio
2. Título e descrição do desafio
3. Botão Falhei, ao clicá-lo o contador será resetado e nenhuma experiência será recebida
4. Botão Cmpletei, ao clicá-lo a experiência será recebida e o contador de desafios será incrementado

Após ganhar experiência, você pode subir de level. Até que level você consegue chegar?

![Screenshot_8](https://user-images.githubusercontent.com/62115215/109426572-2327ce80-79cd-11eb-9a0f-702970d511ce.png)

> Level 2 alcançado 👏

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲Report Bug / Request Feature🐲********************** -->

<a name="issue"></a>

## 🐞 Report Bug / Request Feature 🐞

If you found a bug or want to request a feature, you can open an [issue](https://github.com/ofelipescherer/project-studies/issues)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲Be part of this project🐲********************** -->

<a name="contributing"></a>

## 👋 Be part of this project 👋

Contributions are extremely welcome. You can see how to make one by following the file [Contributing](/CONTRIBUTING.md)

And don't forget to leave a star on the project if you liked it 🤩

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **********************🐲License🐲********************** -->

<a name="license"></a>

## ⚖️ License ⚖️

Distributed under the MIT License. See [License](/LICENSE.md) for more information.

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
      <a href="https://github.com/diego3g">
        <img src="https://avatars.githubusercontent.com/diego3g" width="100px;" alt="Diego Fernandes"/><br>
        <sub>
          <b>Diego Fernandes</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Badges and Badges Link -->

[contributors-shield]: https://img.shields.io/github/contributors/ofelipescherer/project-studies.svg?style=for-the-badge
[contributors-url]: https://github.com/ofelipescherer/project-studies/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ofelipescherer/project-studies.svg?style=for-the-badge
[forks-url]: https://github.com/ofelipescherer/project-studies/network/members
[stars-shield]: https://img.shields.io/github/stars/ofelipescherer/project-studies.svg?style=for-the-badge
[stars-url]: https://github.com/ofelipescherer/project-studies/stargazers
[issues-shield]: https://img.shields.io/github/issues/ofelipescherer/project-studies.svg?style=for-the-badge
[issues-url]: https://github.com/ofelipescherer/project-studies/issues
[license-shield]: https://img.shields.io/github/license/ofelipescherer/project-studies.svg?style=for-the-badge
[license-url]: https://github.com/ofelipescherer/project-studies/blob/master/LICENSE.md
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
