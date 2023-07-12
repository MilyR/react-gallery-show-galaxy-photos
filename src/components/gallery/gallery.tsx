import React, {useEffect} from 'react'

const Gallery = ({apod, url, getApodStart, date, title}) => {
  useEffect(() => {
    getApodStart();

  }, [url])
  return( 
  <>
    <h2>{title} - {date}</h2>
    <img src={url} />
  </>
  )
}

export default Gallery;
