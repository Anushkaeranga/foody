import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState } from "react"; 
import Recipe from './Recipe';
import GoogleLogin from 'react-google-login';
import Login from './Login';
function App() {

const APP_KEY = "5ffb1510c088a989e10961fd33600a48";
const APP_ID = "007ad4fe";
//const exRequest = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free";
//const exRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
 
const [recipies, setRecipies] =useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');

useEffect(async () =>{
  GetRecipies();
},[ query]);

const GetRecipies = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  console.log(data.hits);
  setRecipies(data.hits)
}

//event 
const updateSearch = e =>{
setSearch(e.target.value);

}

//
const getSearch = e =>{
  e.preventDefault();
  setQuery(search)
 // setSearch('');
}
//google responce 
const responseGoogle = (response) =>{
  console.log(response);
}

  return (
    <div className="App">  
      <form onSubmit = {getSearch} className="search-form">
        <input className="search-bar" type ="text" value = {search} onChange = {updateSearch}/> 
        <button className="search-button" type = "submit">search</button>
        <Login/>
      </form>
      <div className = "recepy">
        {recipies.map(recipe =>(
          <Recipe 
          key ={recipe.recipe.label}
          title={recipe.recipe.label} 
          calaries ={recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
