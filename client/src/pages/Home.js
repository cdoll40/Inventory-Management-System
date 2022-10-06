import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

  const [listOfInventory, setListOfInventory] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/inventory").then((response) => {
      setListOfInventory(response.data)
    })
  }, [])

  return (
    <div className="App">
      {
        listOfInventory.map((value, key) => {
          return(
            <div className="container">
              <div className="title">perishable: { value.perishable }</div>
              <div className="body">frozen: { value.frozen }</div>
              <div className="footer">produce: { value.produce }</div>
              <div className="footer">dried: { value.dried }</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Home;