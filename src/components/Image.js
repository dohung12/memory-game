import React from 'react'

const Image = ({ item, onClick }) => {
  const { img, title, id } = item
  return (
    <figure>
      <img
        src={img}
        data-testid={id}
        alt={title}
        className='photo'
        onClick={onClick}
      />
      <h3>{title}</h3>
    </figure>
  )
}

export default Image
