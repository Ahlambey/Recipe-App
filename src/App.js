import React, { useState } from "react";
import "./App.css";
import Recipe from "./components/recipe";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Alert from "./components/Alert";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert(`sorry there is no recipe for ${result.data.q}.`);
      }
      setAlert("");

      setRecipes(result.data.hits);
    } else {
      setAlert("Please enter a recipe name or ingredient!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getData();
    setQuery("");
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="App">
        <h1>Be chef</h1>
        <form className="search-form " onSubmit={handleSubmit}>
          {alert !== "" && <Alert alert={alert} />}
          <input
            type="text"
            placeholder="search recipes..."
            onChange={handleChange}
            value={query}
          />
          <input type="submit" value="search" />
        </form>

        <div className="recipes">
          {recipes !== [] &&
            recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
