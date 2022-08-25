import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Card from "./Components/Card/Card";
import "./MonsterDetail.scss";

function MonsterDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [monster, setMonster] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setMonster(data));
  }, []);

  function moveToPrev() {
    navigate(`/monsters/detail/${Number(params.id) - 1}`);
    fetch(`https://jsonplaceholder.typicode.com/users/${Number(params.id) - 1}`)
      .then((res) => res.json())
      .then((data) => setMonster(data));
  }

  function moveToNext() {
    navigate(`/monsters/detail/${Number(params.id) + 1}`);
    fetch(`https://jsonplaceholder.typicode.com/users/${Number(params.id) + 1}`)
      .then((res) => res.json())
      .then((data) => setMonster(data));
  }

  return (
    <div className="urlParameters">
      <div className="btnWrapper">
        <button onClick={() => navigate("/monsters")}>
          Back to Monsters List
        </button>
      </div>
      <Card
        key={monster.id}
        id={monster.id}
        name={monster.name}
        email={monster.email}
      />
      <div className="btnWrapper">
        <button onClick={moveToPrev}>Previous</button>
        <button onClick={moveToNext}>Next</button>
      </div>
    </div>
  );
}

export default MonsterDetail;
