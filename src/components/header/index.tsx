import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";
import "./style.css";
import { getUserLogin } from "../../utils/functions";
import { REDEEM_CODE, DASHBOARD, GAMES } from "../../routes";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";

import { BiArrowToTop } from "react-icons/bi";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  const [active, setActive] = useState("1");
  const [reload, setReload] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const user = getUserLogin() || undefined;

  useEffect(() => {
    const location = window.location.pathname;
    location === DASHBOARD ? setActive("1") : setActive("2");
  }, []);

  const clearCache = () => {
    localStorage.removeItem("Name_Magic");
    setReload(!reload);
    window.location.reload();
  };
  const ChangeMenuMobil = (id: string) => {
    setActive(id);
    setOpenMenu(false);
  };

  const getClass = (id: string) =>
    id === active ? "options-menu-bar active-bar" : "options-menu-bar";

  const getClassMobil = (id: string) =>
    id === active ? "options-mobil-bar active-bar" : "options-mobil-bar";

  return (
    <div className="content-header-bar">
      <div className="left-img-header">
        <img src={logo} className="img-logo-header" alt="icono" />
      </div>
      <div className="right-header-bar">
        {user ? (
          <>
            <ul className="li-options-menu">
              <ImMenu
                className="icon-white-mobil"
                onClick={() => setOpenMenu(!openMenu)}
              />

              <Link
                to={DASHBOARD}
                className={getClass("1")}
                onClick={() => setActive("1")}
              >
                Descubrir
              </Link>

              <Link
                to={REDEEM_CODE}
                className={getClass("2")}
                onClick={() => setActive("2")}
              >
                Canjear codigo
              </Link>
              <li className={getClass("3")} onClick={clearCache}>
                Adios Maqui
              </li>
            </ul>

            <div className="li-menu-mobil">
              {openMenu && (
                <ul className="li-options-mobil">
                  <BiArrowToTop
                    className="icon-white-mobil small-center"
                    onClick={() => setOpenMenu(!openMenu)}
                  />

                  <Link
                    to={DASHBOARD}
                    className={getClassMobil("1")}
                    onClick={() => ChangeMenuMobil("1")}
                  >
                    Inicio
                  </Link>
                  <Link
                    to={GAMES}
                    className={getClassMobil("4")}
                    onClick={() => ChangeMenuMobil("4")}
                  >
                    Desbloquear
                  </Link>

                  <Link
                    to={REDEEM_CODE}
                    className={getClassMobil("2")}
                    onClick={() => ChangeMenuMobil("2")}
                  >
                    Canjear codigo
                  </Link>
                  <li className={getClassMobil("3")} onClick={clearCache}>
                    Adios Maqui
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
