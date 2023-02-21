export default function Landing(){
    return(
        <div className="landing-container">
            
            <img src="/icon.png" alt="" width="107px" className="landing-icon"/>

            <div className="landing-content">
                <h1 className="landing-title">Discover the <span className="landing-red">Best</span> Food and Drinks</h1>
                <p className="landing-subtitle">Naturally made Healthcare Products for the better care & support of your body.</p>
                <button className="landing-button">Explore Now!</button>
            </div>

            <img src="pizza.png" alt="" className="landing-pizza" />
            <img src="vector.png" alt="" className="landing-vector" />
            
        </div>
    )
}