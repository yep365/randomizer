import React from "react";
import "./Header.sass";
import { Button } from "antd";
const Header = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <header>
      <div className="header">
        <h1 className="header__title">Экзамен</h1>
        <h2 className="header__title-lesson">
          Проектирование интегральных микросхем и микропроцессоров
        </h2>
        <div className="header__generate-btn">
          <Button onClick={refreshPage} type="default">
            Сгенерировать заново!
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
