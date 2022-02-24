import React from 'react';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import TodaysFood from './components/TodaysFood';

function App() {

  const [foodList, setFoods] = useState(foods);
  const [todaysFood,setTodaysFood] = useState([])


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

  const addTodaysFood = (todaysItems) => {
    const todaysMenu = [...todaysFood, todaysItems]
    setTodaysFood(todaysMenu)
  }

  return (
    <div className="App">
      <div className="column">
        <TodaysFood todaysFood={todaysFood} />
        <Search onFilter={handleFilter} />
        {foodList.map((item, index) => {
          return (
            <FoodBox
              key={index}
              name={item.name}
              calories={item.calories}
              image={item.image}
              addTodaysFood={addTodaysFood}
            />
          );
        })}
        <AddFood addNewFood={addNewFood} />
      </div>
    </div>
  );
}

export default App;
