import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import "./style.css";
import MaquiHappy from "../../assets/maqui.png";
import MaquiSad from "../../assets/maqui_Sad.png";

import Modal from "../../components/modal/index";
import { dataRoulette, rouletteRandomCode } from "../../helpers/whishes";

export interface GameProps {}

const Game: React.SFC<GameProps> = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [maqui, setMaqui] = useState(MaquiSad);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [lives, setLives] = useState(0);
  const [valueSelect, setValueSelect] = useState<any>(undefined);

  useEffect(() => {
    const today = new Date().toDateString();
    const isDayGame = localStorage.getItem("day_Game") || undefined;
    if (!isDayGame) {
      localStorage.setItem("day_Game", today);
      localStorage.setItem("lives_Game", "3");
    } else {
      if (isDayGame && today === isDayGame) {
        const life = localStorage.getItem("lives_Game") || 0;
        if (life) setLives(parseInt(life));
      } else if (isDayGame && today !== isDayGame) {
        localStorage.setItem("day_Game", today);
        localStorage.setItem("lives_Game", "3");
      }
    }
  }, []);

  const handleSpinClick = () => {
    if (lives === 0) {
      setMaqui(MaquiSad);
      setError(true);
      setMessageError("Ups, no te quedan vidas el dia de hoy");
      return;
    }
    const newPrizeNumber = Math.floor(Math.random() * dataRoulette.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    if (newPrizeNumber.toString() !== valueSelect) {
      setTimeout(() => {
        setMaqui(MaquiSad);
        setError(true);
        setMessageError(`Ups, te quedan ${lives - 1} intentos`);
        localStorage.setItem("lives_Game", String(lives - 1));
        setLives(lives - 1);
      }, 12000);
    } else {
      setTimeout(() => {
        setMaqui(MaquiHappy);
        setError(true);
        setMessageError(
          `Felicidades, Código ${rouletteRandomCode()} desbloqueado`
        );
        localStorage.setItem("lives_Game", String(lives - 1));
        setLives(lives - 1);
      }, 12000);
    }
  };

  return (
    <div className="content-game-screen">
      <div className="content-circle-game">
        <span className="title-page-principal capitalize">
          Desbloquear Codigo
        </span>
        <Wheel
          mustStartSpinning={mustSpin}
          radiusLineColor="#e6e6e6"
          outerBorderColor="#e6e6e6"
          prizeNumber={prizeNumber}
          data={dataRoulette}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <div className="select">
          <select
            name="slct"
            id="slct"
            value={valueSelect}
            onChange={(e) => setValueSelect(e.target.value)}
          >
            <option selected disabled>
              Elegir una opcion
            </option>
            <option value={0}>🥑</option>
            <option value={1}>☀️</option>
            <option value={2}>🍍</option>
            <option value={3}>⛵️</option>
            <option value={4}>👨‍🚀</option>
            <option value={5}>🧞</option>
            <option value={6}>🧟‍♂️</option>
            <option value={7}>🦸🏻‍♂️</option>
            <option value={8}>🧁</option>
            <option value={9}>👨🏽‍💻</option>
          </select>
        </div>
        {valueSelect && (
          <button className="button-accept-maqui" onClick={handleSpinClick}>
            ¡Girar!
          </button>
        )}
        <Modal
          isShow={error}
          onClose={() => setError(false)}
          title="Maqui Dice..."
        >
          <img
            src={maqui}
            className="image-maqui-home mtop3 small-img"
            alt="Maqui"
          />
          <span className="text-page-principal add-space">{messageError}</span>
        </Modal>
      </div>
    </div>
  );
};

export default Game;
