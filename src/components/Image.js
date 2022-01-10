import React from 'react'

const Image = ({ item, onClick }) => {
  const { img, id } = item
  return <img src={img} id={id} alt='' className='photo' onClick={onClick} />
}

export default Image
