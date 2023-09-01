import React from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disable }) => {
  const handleClick = () => {
    if (!disable) {
      handleChoice(card);
    }
  };

  return (
    <>
      <div className="card" key={card.id}>
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card fornt" />
          <img
            className="back"
            src="/image/cover.png"
            alt="card back"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default SingleCard;
