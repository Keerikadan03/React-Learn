import React, { useDebugValue } from "react";
import Card from "./components/Card";
import Navbar from  './components/Navbar'
import data from "./data";


export default function App(){
console.log(data)

  const cards = data.map(item => {
    return(
      <Card 
        key = {item.id}
        {...item}
      />
    )
  })
  return(
    <div>
      <Navbar />
      <section>
        {cards}
      </section>
    </div>
  )
}