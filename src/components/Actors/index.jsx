import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import user from "../../img/user.png";
import { languageContext } from "../../context";
const Actors = () => {
  const [dark] = useState(false);
  const [acter, setActer,] = useState([]);
  let { id } = useParams();
  const { language } = useContext(languageContext);
  function getActers(key) {
    axios(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${language}`
    ).then((res) => {
      setActer(res.data.cast);
    });
    // setDark(!dark);
  }
  useEffect(() => {
    getActers(API_KEY);
  }, [language]);
  // console.log(acter);
  return (
    <div id="actor">
      <div className="container">
        <div className="actor-blocks">
          {acter?.map((el) => (
            <div className="actor" key={el.id}>
              <Link to={`/actordetails/${el.id}`}>
                {el.profile_path ? (
                  <img
                    src={`https://media.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                    alt=""
                  />
                ) : (
                  <img src={user} alt="img" width={350} height={400} />
                )}
              </Link>
              <h3
                style={{
                  color: dark ? "white" : "black",
                }}
              >
                {el.original_name}
              </h3>
              <h4
                style={{
                  color: dark ? "white" : "black",
                }}
              >
                {el.character}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actors;
