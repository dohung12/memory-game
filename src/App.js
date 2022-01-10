import React, { useState, useEffect } from 'react'
import data from './components/data'
import './App.css'
import Image from './components/Image'
import uniqid from 'uniqid'
import shuffleArray from './components/shuffleArray'

const App = () => {
  const [clickedImg, setClickedImg] = useState([])

  const [imgOrder, setImgOrder] = useState(data)

  const handleClick = (event) => {
    const item = event.target
    setClickedImg([...clickedImg, item.id])
  }

  useEffect(() => {
    const newOrder = shuffleArray(data)
    setImgOrder(newOrder)
    return () => {}
  }, [clickedImg])

  return (
    <main>
      <section>
        <div className='display-images'>
          {imgOrder.map((element) => (
            <Image key={uniqid()} item={element} onClick={handleClick} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
