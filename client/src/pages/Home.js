import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import MainTable from '../components/MainTable';

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
        listOfInventory.map((value) => {
          return(
            <div className="container">
              <MainTable />
            </div>
          )
        })
      }
    </div>
  );
}

export default Home;