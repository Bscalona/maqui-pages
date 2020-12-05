import React, { useState } from "react";
import "./style.css";
import { CodeIsValid, getUserLogin, history } from "../../utils/functions";
import { TiArrowBackOutline } from "react-icons/ti";
import { PLAYLIST_AVOCADO } from "../../routes";
export interface RedeemProps {}
interface MessageRedeem {
  message: string;
  message1: string;
}

const defaultMessageRedeem = {
  message: "",
  message1: "",
};

const Redeem: React.SFC<RedeemProps> = () => {
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [textMessage, setTextMessage] = useState<MessageRedeem>(
    defaultMessageRedeem
  );

  const getCode = () => {
    if (inputCode.toUpperCase() === "AGUACATES") {
      history.push(PLAYLIST_AVOCADO);
      window.location.reload();
    }

    const resolve = CodeIsValid(inputCode);
    if (resolve) {
      setIsCodeValid(true);
      setInputCode("");
      setTextMessage({
        message: resolve.up || "",
        message1: resolve.down || "",
      });
    } else {
      setIsCodeValid(false);
      setInputCode("");
    }
  };

  const getStarBackground = () =>
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ].map((item, index) => (
      <div key={index + "_" + item} className="shooting_star"></div>
    ));

  return (
    <div className="container-redeem-code">
      {!isCodeValid ? (
        <>
          <span className="title-page-principal white pt-5">
            Redimir Codigo:
          </span>
          <div className="input-group-text-home absolute-index">
            &nbsp; &nbsp;
            <input
              className="input-value-maqui uppercase"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              type="text"
            ></input>
            <button
              className="button-accept-maqui"
              children="confirmar"
              // disabled={openBalloons}
              onClick={getCode}
            />
          </div>

          <div className="night">
            <div className="shooting_star"></div>
            {getStarBackground()}
          </div>
        </>
      ) : (
        <div className="content-new-letters">
          <TiArrowBackOutline
            className="arrow-go-back"
            onClick={() => setIsCodeValid(false)}
          >
            Volver
          </TiArrowBackOutline>

          <div className="envelope">
            <input className="envelope__check" type="checkbox" />
            <div className="envelope__flap envelope__flap--inside"></div>
            <div className="envelope__flap"></div>
            <div className="envelope__letter">
              <div className="letter">
                <div className="letter__content">
                  <p className="name-card-message">
                    Querida {getUserLogin()} ! 👨‍🚀🥑
                  </p>
                  <p
                    className="text-card-message"
                    dangerouslySetInnerHTML={{ __html: textMessage.message }}
                  />
                </div>
                <div className="letter__content"></div>
                <div className="letter__content">
                  <p
                    className="text-card-message"
                    dangerouslySetInnerHTML={{ __html: textMessage.message1 }}
                  />
                  <span className="sign-off">~Tu Geek</span>
                </div>
              </div>
            </div>
            <div className="envelope__back"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Redeem;
