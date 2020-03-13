import React,{useEffect,useState} from 'react';
import './App.css';

const App =  function() {

  const APP_ID = 'c03a7720';
  const APP_KEY = '3a7e83f6fbc62d50c7faf772a4946c6b';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipe,setRecipe] = useState([]);

  useEffect(() => {
    getRecipes();
  },
  []
  );

  const getRecipes = async function(){
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    console.log(data['hits'])
  }

  return (
    <div className="App">
      <h1>{}</h1>
    </div>
  );
}

export default App;
