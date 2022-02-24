import React from 'react';
import { useState } from 'react';

function FoodBox({name, calories, image, addTodaysFood}) {
    const [foodQuantity, setFoodQuantity] = useState(1);

    const handleQuantity = (e) => {
      setFoodQuantity(e.target.value);
    };

    const handleTodaysFood = () => {
      addTodaysFood({
        name: name,
        calories: calories,
        quantity: foodQuantity,
      });
    };
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt='food-pic'/>
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value={foodQuantity} onChange={handleQuantity} />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleTodaysFood}>+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;
