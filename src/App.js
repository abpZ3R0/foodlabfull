import "./App.css";
import { useState, useEffect } from "react";
import Meals from "./components/Meals/Meals";
import DefaultSearch from "./components/DefaultSearch/DefaultSearch";

function App() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.meals);
      }).catch(err => console.log(err));
  }, [searchText]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(response => response.json())
    .then(data =>setCategories(data?.categories))
    .catch(err => console.log(err))
  }, [])

  const handleClick = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => response.json())
    .then(data =>setData(data?.meals))
    .catch(err => console.log(err))
  }


  return (
      <div className="container mt-5">

        <div className="d-flex gap-2 align-items-center">
          {
            categories && categories?.map(category => (
              <button 
                className="btn btn-secondary" 
                key={category?.strCategory}
                onClick={() => handleClick(category?.strCategory)}
              >
                {category?.strCategory}
              </button>
            ))
          }
        </div>



        <DefaultSearch searchText={searchText} setSearchText={setSearchText} />
        <Meals data={data} />
      </div>
  );
}

export default App;
