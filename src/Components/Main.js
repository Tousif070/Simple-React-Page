import React from "react"
import shroudLogo from "../Images/shroud-logo.png"

function Main()
{
    return (
        <main className="main">
            <h2>Some interesting facts about Shroud:</h2>
            <ul>
                <li>Started his E-Sports career with CS:GO</li>
                <li>Became a popular streamer on Twitch by playing PUBG</li>
                <li>Will dominate Valorant pretty soon</li>
            </ul>
            
            <img className="bg" src={shroudLogo} alt="shroud-logo" />
        </main>
    )
}

export default Main