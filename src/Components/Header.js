import React from "react"

import shroudLogo from "../Images/shroud-logo.png"

function Header()
{
    return (
        <header className="header">
            <div className="logo">
                <img src={shroudLogo} alt="shroud-logo" />
                <h4>Shroud</h4>
            </div>
            <h5>The Legend</h5>
        </header>
    )
}

export default Header