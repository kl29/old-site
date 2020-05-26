import React from "react"
import NavBar from "./Components/NavBar"
import Bio from "./Components/Bio"
import Projects from "./Components/Projects"

function App(){ 
    return (
        <div>
            <NavBar/>
            <Bio/>
            <Projects/>
        </div>
    )
}

export default App