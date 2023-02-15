import React from 'react'
import axios from 'axios'
import "./Hash.css"

function Hash() {
  const [hash, setHash] = React.useState([])

  React.useEffect(() => {
    axios
      .get('https://www.boredapi.com/api/activity/')
      .then(res => {
        setHash(res.data)
      })
      .catch(err => {
        console.log("err")
      })
  }, [])

  return (
    <div className='hashContainer'>
      <span className='hash__location'>Entertainment · Trending</span>
      <span className='hash__name' key={hash.key}>{hash.type}</span>
      <span className='hash__tweets'>{Math.floor(Math.random() * (50) + 50)}K Tweets</span>
    </div>
  )
}

export default Hash