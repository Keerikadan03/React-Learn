import '../styles/About.css'

export default function About(){
    return(
        <div className="about-container">
            <img src="/food.png" alt="" className="about-image" />
            <div className="about-content">
                <h3 className="about-title">About Us</h3>
                <p className="about-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                <button className="about-button">Read More</button>
            </div>
        </div>
    )
}