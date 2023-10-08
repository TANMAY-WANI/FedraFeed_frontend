import React from 'react'
import TinderCard from 'react-tinder-card'
import '../css/NewsContent.css'
import db from './db'
import { useState, useMemo, useRef } from 'react'
// ...



//db is the list of news coming from the api
const NewsContent = () => {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  // const [lastDirection, setLastDirection] = useState()
  const [countSwipes,setSwipeCount] = useState(0);
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

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
    if (countSwipes === 10) {
      //do something
      console.log('10 swipes done');
      setSwipeCount(0);
    }
  }

  const outOfFrame = (category, idx) => {
    console.log(`${category} (${idx}) left the screen!`, currentIndexRef.current)
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()

  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div style={{ alignContent: 'center', marginLeft: '40%', marginTop: '10%' }}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      <div className='card-container'>
        {db.map((news, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={news.category}
            onSwipe={(dir) => swiped(dir, news.category, index)}
            onCardLeftScreen={() => outOfFrame(news.category, index)}
          >
            <div className='news-card'>
              <img src="/images/myImg.webp" alt=""  height={200} width={260}/>
                <h2>{news.heading}</h2> 
            </div>
          </TinderCard>
        ))}
      </div>

      <button className='btn btn-primary' style={{marginTop:'20px',marginLeft:'20px'}} onClick={() => swipe('left')}>Swipe left!</button>
      <button className='btn btn-primary' style={{marginTop:'20px',marginLeft:'20px'}} onClick={() => swipe('right')}>Swipe right!</button>

    </div>

  )
}

export default NewsContent;