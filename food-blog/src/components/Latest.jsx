import Card from "./Card"
import data from "../data"
import { useState } from "react"

export default function Latest(){

    // const cards = data.map(item => {
    //     return(
    //       <Card 
    //         key = {item.id}
    //         {...item}
    //       />
    //     )
    //   })

    //   var state = 1;

    //   function leftPage(){
    //     state--;
    //     console.log(state)
    //   }

    //   function rightPage(){
    //     state++;
    //     console.log(state)
    //   }

    const [page,setPage] = useState(1)
    const [blogData,setBlogData] = useState(data)
    const pageData = blogData.slice(3*page-3, 3*page)

    function leftPage(){
      setPage(prevPage => prevPage - 1)
    }

    function rightPage(){
      setPage(prevPage => prevPage + 1)
    }
    
    const cards = pageData.map(item => {
      return(
        <Card 
          key = {item.id}
          {...item}
        />
      )
    })

      

    return(
        <div className="latest-container">
            <h1 className="latest-title">Latest Articles</h1>
            <section className="cards-list">
                {cards}
            </section>
            <div className="buttons">
              <button className="btn-left" onClick={leftPage}>
                <div className="left"></div>
              </button>
              <div className="num">{page}/2</div>
              <button className="btn-right" onClick={rightPage}>
                <div className="right"></div>
              </button>
            </div>

            
        </div>
    )
}