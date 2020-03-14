import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App =  function() {

  const APP_ID = 'c03a7720';
  const APP_KEY = '3a7e83f6fbc62d50c7faf772a4946c6b';
  //const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes,setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  },
  []
  );

  const getRecipes = async function(){
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setRecipes(data['hits']);
    console.log(data['hits']);
  }

  return (
    <div className="App">
      <form className="input-form">
        <input text="text" className="input-text"/>
        <button type="submit" className="input-button">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} image={recipe.recipe.image} cal={recipe.recipe.calories}/>
      ))}
    </div>
  );
}

export default App;
