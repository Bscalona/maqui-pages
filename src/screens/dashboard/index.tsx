import React, { useState, useMemo, useEffect } from "react";
import "./style.css";
import {
  getUserLogin,
  getDayLarge,
  getMessageDaily,
} from "../../utils/functions";
import CardText from "../../components/cardText/index";
import { generateWishWithU } from "../../helpers/whishes";
import SPOTIFY from "../../assets/Spotify/spotify_kurt.jpeg";
import SPOTIFY_ONE from "../../assets/Spotify/DreamsWithU2.jpeg";
import SPOTIFY_TWO from "../../assets/Spotify/spotify_bacilos.jpeg";
import MaquiHappy from "../../assets/maqui_Sad.png";
import Modal from "../../components/modal/index";

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
  const [wish, setWish] = useState("Obtener 11:11");
  const [message, setMessage] = useState(getMessageDaily());
  const [activeWish, setActiveWish] = useState(false);
  const [coverAvocado, setcoverAvocado] = useState(false);
  const [messageError, setMessageError] = useState(
    "Ups, aún no son las 11:11 🤭"
  );
  const [error, setError] = useState(false);

  const Name = getUserLogin() || "Muggle infiltrado!";
  const dateWish = localStorage.getItem("Today_Maqui") || undefined;

  useEffect(() => {
    if (new Date().toDateString() != localStorage.getItem("Today_Maqui")) {
      localStorage.removeItem("Today_Maqui");
    }
  }, []);

  const changeMessage = () => {
    const today = new Date();
    if (wish !== "Obtener 11:11" || dateWish === today.toDateString()) {
      setError(true);
      setMessageError("11:11 ya obtenido el dia de hoy");
      return;
    }
    if (today.getHours() === 23 && today.getMinutes() === 11) {
      setWish(generateWishWithU);
      localStorage.setItem("Today_Maqui", today.toDateString());
      setActiveWish(!activeWish);
      return;
    } else {
      setMessageError("Ups, aún no son las 11:11 🤭");
      setError(true);
      return;
    }
  };

  const getStyleCard = useMemo(
    () =>
      activeWish
        ? "title-wish-principal"
        : "title-page-principal white capitalize",
    [activeWish]
  );
  const getBackgroundCard = useMemo(
    () =>
      !activeWish
        ? "card-content-dashboard"
        : "card-content-dashboard background-cosmos",
    [activeWish]
  );

  const getBackgroundAvocado = useMemo(
    () =>
      coverAvocado
        ? " content-playlist-card-avocado plain-bg"
        : "content-playlist-card-avocado",
    [coverAvocado]
  );

  const getTimeHours = () => {
    const today = new Date();
    const hours = today.getHours();
    if (hours >= 4 && hours < 12) {
      return `Buenos dias, ${Name} ☀️`;
    } else if (hours >= 12 && hours < 18) {
      return `Buenas Tardes, ${Name} 🌞`;
    } else if (hours >= 18 && hours <= 24) {
      return `Buenas Noches, ${Name} 🌘`;
    } else {
      return `Buenas Madrugadas, ${Name} 🌕`;
    }
  };

  return (
    <div className="content-dashboard-screen">
      <div className="content-time-horary">
        <span className="title-page-principal capitalize">
          {getTimeHours()}
        </span>
      </div>
      <div className="second-content-dashboard">
        <div className="left-content-dashboard">
          <CardText className="content-playlist-avocado">
            <span
              className="message-daily-dashboard"
              dangerouslySetInnerHTML={{ __html: message }}
            />
            <span className="date-text-small">
              <i>{getDayLarge()}</i>
            </span>
          </CardText>
        </div>
        <div className="right-content-dashboard">
          <div
            className={getBackgroundAvocado}
            onClick={() => setcoverAvocado(!coverAvocado)}
          >
            {coverAvocado && (
              <>
                <img src={SPOTIFY} className="img-spotify-code" alt="code" />
                <img
                  src={SPOTIFY_ONE}
                  className="img-spotify-code"
                  alt="code"
                />
                <img
                  src={SPOTIFY_TWO}
                  className="img-spotify-code"
                  alt="code"
                />
              </>
            )}
          </div>
          <CardText className={getBackgroundCard}>
            <span className={getStyleCard} onClick={changeMessage}>
              {wish}
            </span>
          </CardText>
        </div>
      </div>
      <Modal isShow={error} onClose={() => setError(false)}>
        <img
          src={MaquiHappy}
          className="image-maqui-home mtop3 small-img"
          alt="Maqui"
        />
        <span className="text-page-principal">{messageError}</span>
      </Modal>
    </div>
  );
};

export default Dashboard;
