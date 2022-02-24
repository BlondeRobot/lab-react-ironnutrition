import React from 'react';
import { useState } from 'react';

function AddFood({addNewFood}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)

    const handleNameInput = (e) => setName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handleCaloriesInput = (e) => setCalories(e.target.value);

    const handleSubmit = (e) => {

        e.preventDefault();
        const newFood = { name, image, calories };

        console.log('Submitted: ', newFood);
        addNewFood(newFood);

        setName("")
        setImage("")
        setCalories(0)
      };


  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />

        <label>Image:</label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />

        <label>Calories:</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />

        <button type="submit">Add New Food</button>
      </form>
    </div>
  );
}
export default AddFood;
