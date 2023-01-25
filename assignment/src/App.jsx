import React from "react"
import Head from "./components/Head"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App(){
    return(
        <div className="container">
            <Head />
            <Main />
            <Footer />
        </div>
    )
}