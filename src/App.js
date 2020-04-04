import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = function () {

  const APP_ID = 'c03a7720';
  const APP_KEY = '3a7e83f6fbc62d50c7faf772a4946c6b';
  //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  },
    [query]
  );

  const getRecipes = async function () {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setRecipes(data['hits']);
    console.log(data['hits']);
  }

  const setSearchValue = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="input-form" onSubmit={getSearch}>
        <input text="text" className="input-text" value={search} onChange={setSearchValue} />
        <button type="submit" className="input-button">Search</button>
      </form>
      <div className = "recipes">
        {recipes.map(recipe => (
          <Recipe
          className = "recipe"
            key={recipe.recipe.label} //key for uniqueness for each recipe
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            cal={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
