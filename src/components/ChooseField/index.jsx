import React from "react";
import { RandomCard } from "../";
import "./ChooseField.sass";
const ChooseField = () => {
  let randomArray = [];
  let generateNumber = () => {
    while (randomArray.length < 16) {
      let randomNuber = Math.floor(Math.random() * 16) + 1;
      if (randomArray.indexOf(randomNuber) === -1) {
        randomArray.push(randomNuber);
      }
    }
  };
  generateNumber();
  return (
    <div className="choose-field">
      {randomArray &&
        randomArray.map(
          (number) =>
            console.log(number) || (
              <RandomCard key={number} displayingNumber={number} />
            )
        )}
    </div>
  );
};

export default ChooseField;
