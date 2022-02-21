import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const foodList = [...foods]
  return (
    <div className="App">
      <div className="column">
        {foodList.map((item, index) => {
          return (
            <FoodBox key={index} name={item.name} calories={item.calories} image={item.image} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
