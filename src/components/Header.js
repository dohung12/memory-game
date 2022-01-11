import React from 'react'

const Header = ({ score, highScore }) => {
  return (
    <header>
      <div>
        <h1>Memory Game</h1>
        <p>
          You CAN NOT click on any image more than once or else your score
          resets to zero.
        </p>
      </div>
      <div className='score-container'>
        <h4 className='score'>Score: {score}</h4>
        <h4 className='high-score'>High score: {highScore}</h4>
      </div>
    </header>
  )
}

export default Header
