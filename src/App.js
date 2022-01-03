import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Recipe from "./components/Recipe";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(url);
    const data = await response.data.hits;
    const randomData = data
      .sort(() => Math.random() - Math.random())
      .slice(0, 12);
    setRecipes(randomData);
    setSearch("");
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const APP_ID = "8612ab50";
  const APP_KEY = "26e027ca5b5d7d903c46fbe95a60b31b";
  const url = `https://api.edamam.com/search?q=${
    query || "favour"
  }&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`;

  return (
    <div className="app">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          required
          minLength={2}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            label={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            mealType={recipe.recipe.mealType[0]}
            dietType={recipe.recipe.dietLabels[0]}
            recipeUrl={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
