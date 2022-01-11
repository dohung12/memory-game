import React, { useState, useEffect } from 'react'
import data from './components/data'
import './App.css'
import Image from './components/Image'
import uniqid from 'uniqid'
import shuffleArray from './components/shuffleArray'
import Header from './components/Header'

const App = () => {
  const [clickedImg, setClickedImg] = useState([])
  const [score, setScore] = useState(0)
  const [imgOrder, setImgOrder] = useState(data)
  const [highScore, setHighScore] = useState(0)

  const handleClick = (event) => {
    const id = event.target.alt
    if (!clickedImg.includes(id)) {
      setClickedImg([...clickedImg, id])
      setScore(score + 1)
    } else {
      setClickedImg([])
      setScore(0)
      if (highScore < score) {
        setHighScore(score)
      }
    }
  }

  useEffect(() => {
    const newOrder = shuffleArray(data)
    setImgOrder(newOrder)
    return () => {}
  }, [clickedImg])

  return (
    <main>
      <Header score={score} highScore={highScore} />
      <section>
        <div className='display-images'>
          {imgOrder.map((element) => {
            const id = uniqid()
            return <Image key={id} item={element} onClick={handleClick} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
