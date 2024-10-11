import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav id="header">
        <div id='nav-bar'>
          <div className={(!showMenu ? 'remove' : '') + ' hamburger-menu'} onClick={() => {setShowMenu(cur => !cur)}}>
            <div>
              <h3>Notes</h3>
              <input placeholder='Menu Search'></input>
            </div>
            <div>
              <h4>
                Classes
              </h4>
              <ul>
                <li>Algebra</li>
                <li>Discrete Math</li>
                <li>Linear Algebra</li>
              </ul>
            </div>
            <div>
              <h4>
                Extras
              </h4>
              <ul>
                <li>Physics</li>
                <li>Science</li>
                <li>Math</li>
              </ul>

            </div>
            <div>
              <h4>
                Navigation
              </h4>
              <ul>
                <li>Contact Me</li>
                <li>Privacy Statement</li>
                <li>Site Help & FAQ</li>
                <li> Terms of Use</li>
              </ul>
            </div>

          </div>
          <div className={showMenu ? 'remove nav-tab' : 'nav-tab'} onClick={() => {setShowMenu(cur => !cur)}}>
            <span className='tab'>menu</span>
          </div>
          <div className='nav-tab'>Dmitey Online Notes</div>
          <div className='nav-tab'>quick nav</div>
          <div className='nav-tab'>download</div>
          <div className='nav-tab'>print</div>
          <div className='nav-tab'>search</div>
        </div>
      
      </nav>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
