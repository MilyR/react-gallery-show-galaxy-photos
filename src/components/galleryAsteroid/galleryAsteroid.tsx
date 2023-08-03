import React, {useEffect, useRef, useState} from 'react'


const GalleryAsteroid = ({asteroid, url, getAsteroidStart, explanation, service_version,
  title}) => {
    const [date, setDate] = useState();
    const dateInputRef = useRef(null);

    const handleChange = (e) => {
      
    };
  useEffect(() => {
    getAsteroidStart();

  }, [url])
  return( 
  <>
    <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
      <p>Selected Date: {date}</p>
    <h2>{title}</h2>
    <p> {explanation} </p>
    <h1>service_version: {service_version
} </h1>
    <img src={url} />
  </>
  )
}

export default GalleryAsteroid;
