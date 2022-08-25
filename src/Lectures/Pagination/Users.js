import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Buttons from "./Components/Buttons";
import CardList from "./Components/CardList/CardList";
import "./Users.scss";

export default function Users() {
  const location = useLocation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/users${location.search}`)
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  }, [location.search]);

  return (
    <div className="photos">
      <h1>Mini Project - Pagination</h1>
      <Buttons setUsers={setUsers} />
      <CardList users={users} />
    </div>
  );
}
