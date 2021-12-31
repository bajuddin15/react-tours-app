import React, { useState } from "react";
import "./Card.css";

function Card({ id, name, info, image, price, removeTour }) {
  const [toggleInfo, setToggleInfo] = useState(true);
  return (
    <>
      <div className="card my-xxl-5">
        <img src={image} className="cardImage card-img-top" alt={name} />

        <div className="card-body">
          <div className="card-name-price">
            <h5 className="card-title">{name}</h5>
            <button className="price-btn">$ {price}</button>
          </div>
          <p className="card-text">
            {toggleInfo ? `${info.substring(0, 200)}.....` : info}
            <button
              onClick={() => setToggleInfo(!toggleInfo)}
              className="read-more">
              {toggleInfo ? `read more` : `show less`}
            </button>
          </p>

          <div className="not-interested-btn">
            <a
              href="#"
              onClick={() => removeTour(id)}
              className="cross-btn  mx-4">
              ❌ Not Interested
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
