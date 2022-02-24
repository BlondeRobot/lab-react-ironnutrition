import React from 'react';

function TodaysFood ({todaysFood}) {


      const totalCalories = todaysFood.reduce((acc, current) => {
        return acc + current.calories * current.quantity;
      }, 0);

      return (
        <>
          <h2>Today's foods</h2>
          <ul>
            {todaysFood.map((item, index) => {
              return (
                <li key={index}>
                  {item.quantity} {item.name} = {item.calories * item.quantity}{' '}
                  cal
                </li>
              );
            })}
          </ul>

          <p>Total: {totalCalories} cal</p>
        </>
      );
}

export default TodaysFood