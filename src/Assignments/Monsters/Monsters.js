import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";
import axios from "axios";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setMonsters(res.data);
    });
  }, []);

  // 데이터 로딩

  // SearchBox 에 props로 넘겨줄 handleChange 메소드 정의

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  return (
    <div className="monsters">
      <h1>M o n s t e r s</h1>
      <SearchBox handleChange={handleChange} />
      <CardList monsters={monsters} userInput={userInput} />
    </div>
  );
}

export default Monsters;
