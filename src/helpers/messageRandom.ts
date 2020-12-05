const unamused = [
  "¡Muggle detected! 😒",
  "Buen intento pero maqui solo hay una y eso nunca va a cambiar! 💅✨",
  "JAJAJAJAJA JA JA JA 😑😑😒",
  "Es un nombre muy bonito y lleno de mucha magia 😍❤️ en definitiva no es para ti! 💅",
];
const withoutTime = [
  "Ammm no reconozco tu nombre, debes de ser muy común",
  "Lo lameto, no estoy diseñada para atender muggles! 💅",
  "¿Eso es un nombre? 🤨",
  "Ahorita estoy muy ocupada esperando por alguien con magia. \nVuelve cuando tengas🥱🤭",
  "Al fin llego mi asistente 😛",
];

export const generateResponseMaqui = () => {
  const number = Math.floor(Math.random() * (4 - 0)) + 0;
  return unamused[number];
};

export const busyResponseMaqui = () => {
  const number = Math.floor(Math.random() * (5 - 0)) + 0;
  return withoutTime[number];
};