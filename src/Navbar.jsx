import React from 'react'
import '../src/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="left">
            <ul>
                <li><img src="./images/edyoda.png" alt="" /></li>
                <li>Courses ˅ </li>
                <li>Programs ˅</li>
            </ul>

        </div>

        <div className="right">
            <ul>
                <li>🔎︎</li>
                <li>Login</li>
                {/* <li id='join'>Join Now</li> */}
                <li><button id='join'>Join Now</button></li>

            </ul>

        </div>

    </div>
  )
}

export default Navbar