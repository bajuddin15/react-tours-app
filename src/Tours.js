import React from "react";
import Card from "./Card";

function Tours({ allTours, removeTour }) {
  return (
    <div className="tours">
      {allTours.map((tour) => {
        const { id, name, info, image, price } = tour;
        return (
          <Card
            id={id}
            name={name}
            info={info}
            image={image}
            price={price}
            removeTour={removeTour}
          />
        );
      })}
    </div>
  );
}

export default Tours;
