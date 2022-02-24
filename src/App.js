import React from 'react';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

function App() {
  // const foodList = [...foods];
  const [foodList, setFoods] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodList, newFood];
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <div className="column">
        {foodList.map((item, index) => {
          return (
            <FoodBox
              key={index}
              name={item.name}
              calories={item.calories}
              image={item.image}
            />
          );
        })}
      </div>
      <AddFood addNewFood={addNewFood} />
    </div>
  );
}

export default App;
