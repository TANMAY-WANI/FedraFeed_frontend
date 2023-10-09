import React, { useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import '../css/NewsContent.css'
// import db from './db'
import axios from 'axios'
import { useState, useMemo, useRef } from 'react'
// ...



//db is the list of news coming from the api
const NewsContent = () => {
  const [newsData,setNewsData]= useState([])
  const [currentIndex, setCurrentIndex] = useState(newsData.length - 1)
  const [fetches,setFetches]= useState(0);
  // const [lastDirection, setLastDirection] = useState()
  const [countSwipes,setSwipeCount] = useState(0);
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)
  const childRefs = useMemo(
    () =>
      Array(newsData.length)
        .fill(0)
        .map(() => React.createRef()),
    [newsData] // Make sure to update the refs array when newsData changes
  );
  useEffect(() => {
    // Fetch data from your API or source
    axios.get('http://localhost:5000/api/randnews/10').then((response) => {
      console.log(response.data.headlines);
      setNewsData(response.data.headlines);
      setCurrentIndex(response.data.headlines.length - 1);
    }).catch((error) => {
      console.log(error);
    });

  }, [fetches]);
  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  // const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, categoryToDelete, index) => {
    // setLastDirection(direction)
    console.log('removing: ' + categoryToDelete)
    setSwipeCount(countSwipes+1);
    updateCurrentIndex(index - 1);
    if (countSwipes >= 9) {
      setFetches(fetches+1);
      console.log('10 swipes done');
      setSwipeCount(0);
    }
  }

  const outOfFrame = (category, idx) => {
    console.log(`${category} (${idx}) left the screen!`, currentIndexRef.current)
    // currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()

  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < newsData.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div style={{ alignContent: 'center', marginLeft: '10%', marginTop: '10%' }}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      <div className='card-container'>
        {newsData.map((news, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={news.headline}
            onSwipe={(dir) => swiped(dir, news.headline, index)}
            onCardLeftScreen={() => outOfFrame(news.headline, index)}
          >
            <div className='news-card'>
              <img src={news.image} alt=""  height={200} width={260}/>
                <h2><a target='_blank' href={news.link}>{news.headline}</a></h2> 
            </div>
          </TinderCard>
        ))}
      </div>
      
      <button className='btn btn-primary' style={{marginTop:'100px',marginLeft:'20px'}} onClick={() => swipe('left')}>Swipe left!</button>
      <button className='btn btn-primary' style={{marginTop:'100px',marginLeft:'20px'}} onClick={() => swipe('right')}>Swipe right!</button>

    </div>

  )
}

export default NewsContent;