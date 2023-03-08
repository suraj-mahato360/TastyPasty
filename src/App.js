import './App.css';
import React, {useState, useEffect} from 'react';
import 'boxicons';
import Nav from './components/nav';
import Toast from './components/toast'
import Card from './components/card';
import Axios from 'axios';
function App() {
  
  const [tags, setTags] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY

  const searchValue = tags.join(",+")
  console.log(searchValue)

  const removeTags = indexToRemove => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
};


const addTags = event => {
  if(event.key=== "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
  }
};


useEffect(()=>{
  const getRecipes = async () => {
    const res = await Axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchValue}&apiKey=${apiKey}`)
  
    console.log(res)
    setRecipes(res.data)
  }
  getRecipes();
}, [searchValue,apiKey]);

  return (
    <div>
      <Nav />
      <Toast tags={tags} removeTags={removeTags} addTags={addTags} setTags={setTags}/>
      <div className="dishes">
        <Card recipes={recipes}/>
      </div>
    </div>
  );
}

export default App;
