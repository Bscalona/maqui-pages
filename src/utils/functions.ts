import { createBrowserHistory } from "history";
import { TextByCode, dailyMessage } from "../helpers/whishes";
export const history = createBrowserHistory();

export const getUserLogin = () => {
  const user = localStorage.getItem("Name_Magic") || undefined;
  return user;
};

export const setUserLogin = (value: string) => {
  const user = localStorage.setItem("Name_Magic", value);
  return user;
};

export const deleteUserLogin = () => {
  const user = localStorage.removeItem("Name_Magic");
  return user;
};

export const getDayLarge = () => {
  const date = new Date();
  return `${date.getDate()} de ${date.toLocaleString("default", {
    month: "long",
  })}`;
};

const getNumberDay = () => {
  const date = new Date();
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
};

export const getMessageDaily = () => {
  return dailyMessage[getNumberDay() - 313];
};

export const CodeIsValid = (code: string) => {
  return TextByCode.find((item: any) => item.code === code.toUpperCase());
};
