import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button } from "antd";

import "./RandomCard.sass";
const RandomCard = () => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(true);
  };
  return (
    <div className="random-card">
      <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
        <div onClick={() => flipCard()} className="random-card__front">
          <button onClick={() => flipCard()}>
            <p>?</p>
          </button>
        </div>
        <div onClick={() => flipCard()} className="random-card__back">
          <div className="random-card__back-title">
            Вам выпал билет
            <br /> номер:
          </div>
          <div className="random-card__back-number">5</div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default RandomCard;
