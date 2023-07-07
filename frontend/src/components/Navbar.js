import { useState } from "react"
import "../styles/navbar.css"
import icon from "../styles/panda.png"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      <a href="/" className="group-name">
        Pandas Xprezz
        <img className="pandaxprezzicon" alt="Panda Xprezz" src={icon} />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="sections">
          <li>
            <a href="/leaderboard">Leaderboard</a>
          </li>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/play">Play</a>
          </li>
          <li>
            <a href="https://github.com/AllKeng/LoginTest">Code</a>
          </li>
          <li>
            <a href="/creators">Creators</a>
          </li>
          <li>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}