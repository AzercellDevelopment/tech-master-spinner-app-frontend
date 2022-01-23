import React, { FC, useEffect, useState } from "react";

import PopUp from "./PopUp";
import ProductListComponent from "./ProductList";

import "./index.scss";
import IdentificationCodeModal from "./IdentificationCodeModal";

const DashboardPageComponent: FC = () => {
  const [idCode, setIdCode] = useState('');
  const [show, setShow] = useState(false);

  const hasWon = localStorage.getItem("hasWon");

  useEffect(() => {
    if (hasWon === 'true') {
      const makeid = (length: number) => {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      };

      setIdCode(makeid(10));
      setShow(true);
      localStorage.setItem('hasWon', 'false');
    }
  }, [hasWon]);

  return (
    <>
      <ProductListComponent />
      <PopUp isOpen={false} />
      <IdentificationCodeModal identificationCode={idCode} isOpen={show} />
    </>
  );
};

export default DashboardPageComponent;
