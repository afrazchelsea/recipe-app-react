import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "./App.css";

function App() {
  const APP_ID = "c7fafa33";
  const APP_KEY = "7e6436470faefb7138b2562819cfc0b8";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    //  console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a href="/" className="navbar-brand">
            Recipe Search App
          </a>
        </div>
      </nav>
      <div className="container searchContainer">
        <div className="search card card-body">
          <h1>Search Recipes</h1>
          <p className="lead">Enter an ingredient available with you...</p>
          <form onSubmit={getSearch} className="search-form">
            <input
              type="text"
              id="searchUser"
              className="form-control"
              placeholder="Ingredient..."
              value={search}
              onChange={updateSearch}
            />
            <button className="btn btn-primary btn-block mt-2" type="submit">
              Search
            </button>
          </form>
        </div>
        <br />
        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
