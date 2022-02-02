# WeatherApp
Um aplicativo de clima que exibe dados climáticos da região do usuário

## 💼 Sobre o projeto

Requisitos:

☀️ APLICATIVO DE CLIMA

- Desenvolva um aplicativo que consuma a localização atual do usuário e exiba na interface o endereço atual os dados climáticos da região e um botão para atualizar os dados.

- Para fazer essa busca, pode-se usar a API do Open Weather Map: http://api.openweathermap.org/

📌 CONDIÇÕES

- Utilizar React Native
- É permitido o uso de qualquer biblioteca

🙌 DIFERENCIAIS
Será muito bem valorizado:

- Arquitetura
- Documentação
- Interface
- Testes

## ⚙️ Frameworks / Bibliotecas

- [React Native](https://reactnative.dev/)
- [Axios](https://github.com/axios/axios)
- [Geolocation Service] (https://github.com/Agontuk/react-native-geolocation-service)
- [Vector Icons] (https://github.com/oblador/react-native-vector-icons)
- [Styled Components] (https://styled-components.com/)

#### De padronização no código

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 💻 Iniciando

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/cellobnu/weather-app.git && cd weather-app
```

# Faça uma cópia de '.env.example' para '.env'
# Coloque sua credencial da API de clima (Weather API)
$ cp .env.example .env

1. Utlizando yarn

```sh
$ yarn
$ yarn android:clean
$ yarn android

ou

$ 
$ yarn ios:clean
$ yarn ios

```

2. Utilizando Npm

```sh
$ npm install
$ npm android

ou

$ cd ios
$ pod install
$ npm ios
```