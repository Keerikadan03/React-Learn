import Card from "./Card"
import data from "../data"

export default function Latest(){

    const cards = data.map(item => {
        return(
          <Card 
            key = {item.id}
            {...item}
          />
        )
      })

      var state = 1;

      function leftPage(){
        state--;
        console.log(state)
      }

      function rightPage(){
        state++;
        console.log(state)
      }

      

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
              <div className="num">{state}/2</div>
              <button className="btn-right" onClick={rightPage}>
                <div className="right"></div>
              </button>
            </div>

            
        </div>
    )
}