import Badge from "@mui/material/Badge";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../Dashboard/PopUp";

import "./index.scss";

const HeaderComponent: FC = () => {
  const [show, setShow] = useState(false);

  const openPopUp = () => setShow(true);

  return (
    <>
      <div className="container">
        <div className="menu">
          <div className="menu__title">
            <h1>
              <Link to="/">Spin The Chance</Link>
            </h1>
          </div>
          <div className="menu__btns">
            <ul>
              <li>Məhsullar</li>
              <li>Kateqoriyalar</li>
              <li>Əlaqə</li>
              <li>
                <Badge badgeContent={"new"} color="primary">
                  <span onClick={openPopUp}>Test</span>
                </Badge>
              </li>
            </ul>
            <div className="menu__btns__search-btn">
              <i className="fas fa-search"></i>
              Search
            </div>
          </div>
        </div>
      </div>
      <PopUp isOpen={show} />
    </>
  );
};

export default HeaderComponent;
