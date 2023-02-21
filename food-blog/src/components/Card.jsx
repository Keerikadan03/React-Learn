export default function Card(props){
    return(
        <div className="card-container">
                <img src={props.image} alt="" className="card-image"/>
                <h3 className="card-title">{props.title}</h3>
                <p className="card-description">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                <button className="card-button">Read More</button>
            </div>
    )
}