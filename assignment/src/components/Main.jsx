import React from "react"
import Name from "./Name"
import Links from "./Links"
import Content from "./Content"

export default function Main(){
    return(
        <div className="main">
            <Name />
            <Links />
            <Content />
        </div>
    )
}