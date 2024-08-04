import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import Movie from "../MOVIE";
import { languageContext } from "../../context";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const { language, dark } = useContext(languageContext);
  const [pogination, setPogination] = useState(1);
  const getPopular = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${pogination}`
    ).then((res) => {
      setPopular(res.data.results);
    });
  };
  useEffect(() => {
    getPopular(API_KEY);
  }, [pogination, language]);
  // console.log(popular);
  return (
    <div
      id="popular"
      style={{
        background: dark ? "black" : "white",
      }}
    >
      <div className="container">
        <div className="popular">
          {popular.map((el) => (
            <Movie el={el} />
          ))}
        </div>
        <div className="pogination">
          <button
            onClick={() => {
              setPogination(pogination > 1 ? pogination - 1 : pogination);
            }}
          >
            Back
          </button>
          <h1>{pogination}</h1>
          <button
            onClick={() => {
              setPogination(pogination + 1);
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
