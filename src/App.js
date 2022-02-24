import React from 'react';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';

function App() {

  const [foodList, setFoods] = useState(foods);
  const allFoods = [...foods]

  const addNewFood = (newFood) => {
    const updatedFoods = [...foodList, newFood];
    setFoods(updatedFoods);
  };

  const handleFilter = (input) => {
    const filteredFoods = foodList.filter((food) =>
    food.name.toLowerCase().includes(input.toString().toLowerCase())
    );
    setFoods(filteredFoods)
    if (input.name === '') {
      setFoods(foods)
    }
  }

  return (
    <div className="App">
      <Search onFilter={handleFilter} />
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
