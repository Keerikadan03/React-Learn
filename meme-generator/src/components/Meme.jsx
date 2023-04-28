import React from "react";
import { useState, useEffect } from "react";

export default function Meme(props){

    const [meme,setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    },[])


    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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