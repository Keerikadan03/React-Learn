import React from "react";
import { useState } from "react";
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

    function handleChange(event){
        const {name, value} = event.target
        setMeme( prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <div className="meme-container">
            <form action="" className="meme-form">
                <input 
                type="text" 
                className="meme-input" 
                placeholder="First Text" 
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                type="text" 
                className="meme-input" 
                placeholder="Second Text"
                name="bottomText"
                value={meme.bottomText} 
                onChange={handleChange}
                />
            </form>
            <button className="meme-button" onClick={getMemeImage}>Get a new meme image🖼️</button>
            <div className="image meme">
                <img src={meme.randomImage} alt="" className="meme-image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div> 
        </div>
    )
}