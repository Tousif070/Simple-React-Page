import React from "react"

import shroudLogo from "../Images/shroud-logo.png"

function Header()
{
    return (
        <header className="header">
            <img src={shroudLogo} alt="shroud-logo" />
            <h1>Shroud</h1>
            <h2>The Legend</h2>
        </header>
    )
}

export default Header