import { generateResponseMaqui, busyResponseMaqui } from "./messageRandom";
const nickName = [
  "11:11",
  "aguacate",
  "solcito",
  "farito",
  "potter",
  "faro",
  "twittera",
  "srta. potter",
  "sexy twittera",
  "jamon",
];
const lastName = [
  "dane nieto",
  "daneisi nieto",
  "dane nieto peñate",
  "daneisi yineth",
  "dane yineth",
  "daneisi yineth nieto",
  "daneisi yineth nieto peñate",
  "daneisi nieto peñate",
  "srta. nieto",
  "srta. nieto peñate",
];
const created = ["geek acosador", "bratman", "haider escalona"];
const pineApple = ["pina", "pinas", "piña", "piñas", "pineapple"];

export const NameIsValid = (name: string) => {
  if (pineApple.indexOf(name) !== -1) {
    return {
      message: "Las piñas no son legales 😒 \n¿Que clase de persona eres? ",
      status: false,
      emotion: "angry",
    };
  }
  if (name === "spyke") {
    return {
      message:
        "Oh, encuentro magia en ti, pero aún mas un nivel muy alto de toxicidad 😨 \n Me da temor atenderte 😕",
      status: false,
      emotion: "sad",
    };
  }
  if (name === "alberto") {
    return { message: "TE ODIOOO!!! 😤😠😒", status: false, emotion: "angry" };
  }
  if (created.indexOf(name) !== -1) {
    return {
      message:
        "Su alteza 😍😍😍 es bueno saber que se acuerda aún de mi 🙈 \npero no estoy calificada para asistir a tan grande deidad 😭💔",
      status: false,
      emotion: "happy",
    };
  }
  if (name === "maqui") {
    return {
      message: generateResponseMaqui(),
      status: false,
      emotion: "angry",
    };
  }
  if (name === "yineth") {
    return {
      message:
        "Muy bonito srta. Nieto, pero su segundo nombre es valido igualmente.\n Bienvenida niña magica.❤️",
      status: true,
      emotion: "happy",
    };
  }
  if (lastName.indexOf(name) !== -1) {
    return {
      message: `Bienvenida Srta. Potter \n llevo tiempo esperando exclusivamente por ud... Debo admitir que tiene un gran nivel de magia, espero nos llevemos muy bien`,
      status: true,
      emotion: "happy",
    };
  }
  if (nickName.indexOf(name) !== -1) {
    return {
      message:
        "Awww, encontré magia en ti,✨ \n del mismo modo mucho amor en tu sobrenombre! 💖",
      status: true,
      emotion: "happy",
    };
  }
  if (name === "dane" || name === "daneisi") {
    return {
      message: `Bienvenida ${name.toUpperCase()} \n llevo tiempo esperando exclusivamente por ud... Debo admitir que tiene un gran nivel de magia, espero nos llevemos muy bien`,
      status: true,
      emotion: "happy",
    };
  } else {
    return { message: busyResponseMaqui(), status: false, emotion: "sad" };
  }
};
