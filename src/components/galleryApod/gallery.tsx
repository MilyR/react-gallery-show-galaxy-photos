import React, {useEffect, useRef, useState} from 'react';
import DayJs from 'dayjs';

const Gallery = ({apod, url, getApodStart, explanation, service_version,
  title}) => {
    const [date, setDate] = useState(DayJs().format('YYYY-MM-DD'));
    const dateInputRef = useRef(null);

    const handleChange = (e) => {
      const formattedDate = DayJs(e.target.value).format('YYYY-MM-DD');
      setDate(formattedDate);
    };
    const handleClick = () => {
      console.log(date)
    }
  useEffect(() => {
    getApodStart();

  }, [url])
  return( 
  <>
    <input
        type="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
      <button onClick={handleClick}>Get Apod By Date</button>
      <p>Selected Date: {date}</p>
    <h2>{title}</h2>
    <p> {explanation} </p>
    <h1>service_version: {service_version
} </h1>
    <img src={url} />
  </>
  )
}

export default Gallery;
