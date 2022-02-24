import React from 'react';
import { useState } from 'react';

function Search ({onFilter}) {

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        console.log('value:', e.target.value);
        e.persist();  
      setInput((previous) => {
        return {
          ...previous,
          [e.target.name]: e.target.value,
        };
      });
      onFilter(e.target.value );
    };

    return (
      <div className="search-bar-container">
        <label for="search-bar">Search foods</label>
        <input
          type="search"
          id="search-bar"
          name="name"
          value={input.name}
          onChange={handleInput}
        />

      </div>
    );
}

export default Search