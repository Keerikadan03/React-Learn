import React from "react";
import memesData from "../memesData";

export default function Meme(props){

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    return(
        <div className="meme-container">
            <form action="" className="meme-form">
                <input type="text" className="meme-input" placeholder="First Text" />
                <input type="text" className="meme-input" placeholder="Second Text" />
            </form>
            <button className="meme-button" onClick={getMemeImage}>Get a new meme image🖼️</button>
            <div className="image">
                <img src={meme.randomImage} alt="" className="meme-image"/>
            </div> 
        </div>
    )
}