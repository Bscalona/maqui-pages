import React, { useState, useEffect } from "react";
import Maqui from "../../assets/maqui.png";
import MaquiSad from "../../assets/maqui_Sad.png";
import MaquiHappy from "../../assets/happy.png";
import MaquiAngry from "../../assets/serious.png";
import "./style.css";
import { NameIsValid } from "../../helpers/validName";
import Baloons from "../../components/baloons"; 
import { setUserLogin, history, getUserLogin } from "../../utils/functions";
import { DASHBOARD } from '../../routes';

export interface HomeProps {}
export interface maquiStatus {
  message: string;
  status: string;
}

const Home: React.SFC<HomeProps> = () => {
  const [name, setName] = useState("");
  const [reload, setReload] = useState(false);

  const [message, setMessage] = useState<maquiStatus>({
    message: "",
    status: "normal",
  });
  const [openBalloons, setOpenBalloons] = useState(false);

  useEffect(() => {
    const user = getUserLogin();
    if (user) {
      history.push(DASHBOARD);
      window.location.reload();
    }
  }, [reload]);
  const getAppearanceMaqui = (status: string) => {
    switch (status) {
      case "happy":
        return MaquiHappy;
      case "angry":
        return MaquiAngry;
      case "sad":
        return MaquiSad;
      default:
        return Maqui;
    }
  };
  const validName = () => {
    if (name.trim() !== "") {
      const resolve = NameIsValid(name.trim().toLowerCase()) || {
        message: "",
        status: false,
      };
      if (!resolve.status) {
        setMessage({
          message: resolve.message,
          status: resolve.emotion,
        });
        setOpenBalloons(true);
      } else {
        if (name === "11:11") {
          setUserLogin("My 11:11 ❤️");
        } else {
          setUserLogin(name);
        }
        setOpenBalloons(true);
        setMessage({
          message: resolve.message,
          status: resolve.emotion,
        });
        history.push(DASHBOARD);
        window.location.reload();
      }
    }
  };
  
  const resetMessage = () => {
    setMessage({
      message: "",
      status: "normal",
    });
    setName("");
    setOpenBalloons(false);
  };

  return (
    <div className="content-home-page">
      <div className="left-content-home">
        <span className="title-page-principal">¡Bienvenido a Maqui!</span>

        <span className="text-page-principal">
          Hola, mi nombre es Maqui soy un asistente o informante para personas
          magicas. <br />
          Ingresa tu nombre para conocernos
          <div className="input-group-text-home">
            <input
              className="input-value-maqui"
              onFocus={resetMessage}
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            ></input>
            <button
              className="button-accept-maqui"
              children="confirmar"
              disabled={openBalloons}
              onClick={validName}
            />
          </div>
          {/* <span role="img" aria-label="sheep"children="👊"/> */}
        </span>
      </div>
      <div className="right-content-home">
        <div className="content-balloon-top">
          <Baloons children={message.message} visible={openBalloons} />
        </div>

        <img
          src={getAppearanceMaqui(message.status)}
          className="image-maqui-home mtop3"
          alt="Maqui"
        />
      </div>
    </div>
  );
};

export default Home;
